import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/ExplorePage.css';
import Header from '../Header';
import BottomBar from '../BottomBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { data } from 'jquery';

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState('consultingServices');
  const [services, setServices] = useState([]);

//   const fetchAllServices = async () => {
//     try {
//         const { data } = await axios.get('https://free.shapier.in/api/v1/service');
//         const arrayOfService = data.data;
//         setServices(arrayOfService.map((Services) => ({
//             id: Services.id,
//             service_name: Services.service_name,
//             type_of: Services.type_of,
//             image_of_service: Services.image_of_service,
//         })));
//     } catch (error) {
//         console.log(error);
//     }
// };

// useEffect(() => {
//     fetchAllServices();
//     console.log(data);
    
// }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'consultingServices':
        return (
          <div className="Explore-services-grid">
            {/* <div className="Explore-service-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591955506264-3f5a6834570a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9va2luZyUyMGZvciUyMGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D)' }}>
              <div>What you looking?</div>
              <button>Post Your Requirements</button>
            </div> */}
            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://www.engeny.com.au/wp-content/uploads/Structural-home-page-image_Canva-1.png)',backgroundSize:'cover' }}>
              <div>Structural Engineering</div>
            </div>
            </Link>
            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://acdn.architizer.com/thumbnails-PRODUCTION/f9/61/f961e0edb81914959aaa5a8cbd228525.jpg)',backgroundSize:'cover' }}>
              <div>Architectural Services</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://skvindia.com/wp-content/uploads/2019/11/MEP-800x533.jpg)' ,backgroundSize:'cover' }}>
              <div>MEP Consultants</div>
            </div>
            </Link>
            
            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://www.hvacschool.org/wp-content/uploads/2017/05/hvac-installation.jpg?x76633)',backgroundSize:'cover' }}>
              <div>HVAC Services</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cityfurnish.com/blog/wp-content/uploads/2023/07/modern-apartment-with-bold-bright-walls-perfect-showcasing-your-art-collection-min.jpg)',backgroundSize:'cover' }}>
              <div>Interior Designing</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://media.architecturaldigest.com/photos/5ce6c1bb04c41e9d089a8a75/16:9/w_2560%2Cc_limit/AD060119_ADELMAN_01.jpg)',backgroundSize:'cover' }}>
              <div>Lighting Consultants</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/landscaping-horticulture.jpg)',backgroundSize:'cover' }}>
              <div>Landscaping & Horticulture</div>
            </div>
            </Link>
          </div>
        );
      case 'buildersMartServices':
        return (
          <div className="Explore-services-grid">
            {/* Add BuildersMart Services content here */}
            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://www.tssconstructions.com/wp-content/uploads/2021/11/Plot-166-view-01-1-scaled.jpg)',backgroundSize:'cover' }}>
              <div>Independent House</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://3.imimg.com/data3/DR/MW/MY-10384250/group-housing-500x500.jpg)',backgroundSize:'cover' }}>
              <div>Group Housing</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/20181025100128/house-frontyard-remodel_PL18148_The-Best-Home-Improvements-to-Increase-Your-Homes-Value_872846178_is.jpg)',backgroundSize:'cover' }}>
              <div>Home Improvement and Upgrade</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://5.imimg.com/data5/WF/PS/MY-8064807/commercial-complex.jpg)',backgroundSize:'cover' }}>
              <div>Commercial Complexes</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hospital-de-Bellvitge.jpg/800px-Hospital-de-Bellvitge.jpg)',backgroundSize:'cover' }}>
              <div>Hospitals</div>
            </div>
            </Link>
            {/* Continue with other services */}
          </div>
        );
      case 'contractingServices':
        return (
          <div className="Explore-services-grid">
            {/* Add Contracting Services content here */}
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://d2bnvhcdayi5wl.cloudfront.net/uploads/editor/2022/10/25/adobestock_409422339.jpeg)',backgroundSize:'cover' }}>
                <div>Tile Contractors</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGW_a-tF44yoq3vUyyBZ055wgCgWzyG7F8KV-zN_-vlAN2Muiy_T8anKJS4rgs_iS9gI&usqp=CAU)',backgroundSize:'cover' }}>
                <div>Civil Contractors</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdjEVgUVJaTochW268kItgDVEPSr-fv93DA&s)',backgroundSize:'cover' }}>
                <div>Electrical works</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://www.facilitiesnet.com/resources/editorial/2018/FMD0518-Painting.jpg)',backgroundSize:'cover' }}>
                <div>Painting Works</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://wentworthplumbing.ca/wp-content/uploads/2019/02/industrialplumbingpipes.jpg)',backgroundSize:'cover' }}>
                <div>Plumbing Works</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiEvfQga7ijy0qVmS4CxIjLpAvAyfP8V4xQ&s)',backgroundSize:'cover' }}>
                <div>Carpenters</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://i0.wp.com/civilblog.org/wp-content/uploads/2016/02/Quality-control-checks-for-brickwork.jpg?fit=640%2C426&ssl=1)',backgroundSize:'cover' }}>
                <div>Masonry</div>
              </div>
            </Link>
            {/* Continue with other services */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="blank-container"></div>
      <div className="Explore-container">
        <h2 className="Explore-container-heading">Services Shapier Provides you</h2>
        <div className="Explore-tabs">
          <button className={`Explore-tab ${activeTab === 'consultingServices' ? 'Explore-active' : ''}`} onClick={() => setActiveTab('consultingServices')}>
            Consulting Services
          </button>
          <button className={`Explore-tab ${activeTab === 'buildersMartServices' ? 'Explore-active' : ''}`} onClick={() => setActiveTab('buildersMartServices')}>
            Shapier Services
          </button>
          <button className={`Explore-tab ${activeTab === 'contractingServices' ? 'Explore-active' : ''}`} onClick={() => setActiveTab('contractingServices')}>
            Contracting Services
          </button>
        </div>
        <div className="Explore-content">
          {renderContent()}
        </div>
      </div>
      <div className="blank-container"></div>
      <BottomBar />
      <Footer/>
    </>
  );
};

export default ExplorePage;
