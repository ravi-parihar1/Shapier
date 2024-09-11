import React, { useEffect, useState } from 'react';
import SideNav from './SideNav';
import axios from 'axios';
import '../css/AdminAllProduct.css'; // Assuming you have CSS for styling

export default function AdminAllProduct() {
  const [products, setProducts] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [editProduct, setEditProduct] = useState(null);
  const [filter, setFilter] = useState({ sort: '', category: '', search: '' });

  const fetchAllProducts = async () => {
    try {
      const { data } = await axios.get('https://free.shapier.in/api/v1/product');
      const arrayOfProduct = data.data;
      setProducts(arrayOfProduct.map((pro) => ({
        id: pro.id,
        discount: pro.discount,
        minimum_quantity: pro.minimum_quantity,
        per_base: pro.per_base,
        product: pro.product,
        product_description: pro.product_description,
        product_image: pro.product_image,
        product_price: pro.product_price,
        sale_price: pro.sale_price,
        stock: pro.stock,
        vendor_name: pro.vendor_name,
        subcategory_id: pro.subcategory_id
      })));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const toggleDescription = (id) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://free.shapier.in/api/v1/product/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://free.shapier.in/api/v1/product/${editProduct.id}`, editProduct);
      setProducts(products.map((product) => (product.id === editProduct.id ? editProduct : product)));
      setEditProduct(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const getFilteredProducts = () => {
    let filteredProducts = [...products];

    // Filter by search
    if (filter.search) {
      filteredProducts = filteredProducts.filter(product =>
        product.product.toLowerCase().includes(filter.search.toLowerCase())
      );
    }

    // Filter by category
    if (filter.category) {
      filteredProducts = filteredProducts.filter(product =>
        product.subcategory_id === filter.category
      );
    }

    // Sort products
    if (filter.sort === 'alphabetical') {
      filteredProducts.sort((a, b) => a.product.localeCompare(b.product));
    } else if (filter.sort === 'newest') {
      filteredProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    return filteredProducts;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <>
      <div className="admin-panel-container">
        <SideNav />
        <div className="content-container">
          <h1 className="page-title">All Shapier's Product</h1>

          {/* Filter Options */}
          <div className="filter-container">
            <input
              type="text"
              name="search"
              placeholder="Search by name"
              value={filter.search}
              onChange={handleFilterChange}
            />
            <select name="category" value={filter.category} onChange={handleFilterChange}>
              <option value="">All Categories</option>
              <option value="Cement">Cement</option>
              <option value="2">Category 2</option>
              {/* Add more categories as needed */}
            </select>
            <select name="sort" value={filter.sort} onChange={handleFilterChange}>
              <option value="">Sort By</option>
              <option value="alphabetical">Alphabetical</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>SR. No</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Stock</th>
                  <th>Vendor Name</th>
                  <th>Product Description</th>
                  <th>Product Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.product}</td>
                    <td>{product.product_price}</td>
                    <td>{product.discount}</td>
                    <td>{product.stock}</td>
                    <td>{product.vendor_name}</td>
                    <td onClick={() => toggleDescription(product.id)} style={{ cursor: 'pointer' }}>
                      {expandedDescriptions[product.id] ? product.product_description : `${product.product_description.substring(0, 30)}...`}
                    </td>
                    <td>
                      <img src={`https://free.shapier.in/images/${product.product_image}`} alt={product.product} width="50" height="50" />
                    </td>
                    <td>
                      <button className='e-bt' onClick={() => handleEdit(product)}>Edit</button>
                      <button className='d-bt' onClick={() => handleDelete(product.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {editProduct && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <h2>Edit Product</h2>
            <form onSubmit={handleUpdate}>
              <label>
                Product Name:
                <input
                  type="text"
                  value={editProduct.product}
                  onChange={(e) => setEditProduct({ ...editProduct, product: e.target.value })}
                />
              </label>
              <label>
                Price:
                <input
                  type="number"
                  value={editProduct.product_price}
                  onChange={(e) => setEditProduct({ ...editProduct, product_price: e.target.value })}
                />
              </label>
              <label>
                Discount:
                <input
                  type="number"
                  value={editProduct.discount}
                  onChange={(e) => setEditProduct({ ...editProduct, discount: e.target.value })}
                />
              </label>
              <label>
                Stock:
                <input
                  type="number"
                  value={editProduct.stock}
                  onChange={(e) => setEditProduct({ ...editProduct, stock: e.target.value })}
                />
              </label>
              <label>
                Vendor Name:
                <input
                  type="text"
                  value={editProduct.vendor_name}
                  onChange={(e) => setEditProduct({ ...editProduct, vendor_name: e.target.value })}
                />
              </label>
              <label>
                Product Description:
                <textarea
                  value={editProduct.product_description}
                  onChange={(e) => setEditProduct({ ...editProduct, product_description: e.target.value })}
                />
              </label>
              <label>
                Product Image:
                <input
                  type="text"
                  value={editProduct.product_image}
                  onChange={(e) => setEditProduct({ ...editProduct, product_image: e.target.value })}
                />
              </label>
              <div className="edit-modal-buttons">
                <button type="submit">Update</button>
                <button type="button" onClick={() => setEditProduct(null)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
