import {React,useEffect,useState} from 'react'
import axios from 'axios';
import SideNav from './SideNav'

export default function AdminUserInfo() {
  const [users, setUsers] = useState([]);

  const fetchAllUser = async () => {
    try {
      const { data } = await axios.get('https://free.shapier.in/api/v1/request_service');
      const arrayOfCategories = data.data;
      setUsers(arrayOfCategories.map((Info) => ({
        id: 4,
        username: Info.id,
        email: Info.email,
        mobile: Info.mobile,
        password: Info.password,
        created_at: Info.created_at,
        updated_at: Info.updated_at,
      })));
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchAllUser();
    // fetchSubcategories();
  }, []);
  return (
    <>
      <div className="admin-panel-container">
        <SideNav />
        <div className="content-container">
        <h1 className="page-title">Service Enquiries</h1>
                    <div className="table-container">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>SR. No</th>
                                    <th>USERNAME</th>
                                    
                                    <th>Phone Number</th>
                                    <th>EMAIL</th>
                                    {/* <th>PASSWORD</th> */}
                                    <th>CREATED </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user,index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{user.username}</td>
                                        <td>{user.mobile}</td>
                                        
                                        <td>{user.email}</td>
                                        {/* <td>{user.password}</td> */}
                                        {/* <td>{user.zip_code}</td> */}
                                        <td>{user.created_at}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
        </div>
      </div>
    </>
  )
}
