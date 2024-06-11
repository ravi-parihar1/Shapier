import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/ExplorePage.css';
import Header from '../Header';
import BottomBar from '../BottomBar';
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
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/structural-engineering.jpg)',backgroundSize:'cover' }}>
              <div>Structural Engineering</div>
            </div>
            </Link>
            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/architectural.jpg)',backgroundSize:'cover' }}>
              <div>Architectural Services</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/mep-services.jpg)' ,backgroundSize:'cover' }}>
              <div>MEP Consultants</div>
            </div>
            </Link>
            
            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/hvac-services.jpg)',backgroundSize:'cover' }}>
              <div>HVAC Services</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/interior-designs.jpg)',backgroundSize:'cover' }}>
              <div>Interior Designing</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/lighting-consultants.jpg)',backgroundSize:'cover' }}>
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
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-skin.buildersmart.in/skin/frontend/pt_allurestore/default/images/independent-house.jpg)',backgroundSize:'cover' }}>
              <div>Independent House</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-skin.buildersmart.in/skin/frontend/pt_allurestore/default/images/group-housing.jpg)',backgroundSize:'cover' }}>
              <div>Group Housing</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-skin.buildersmart.in/skin/frontend/pt_allurestore/default/images/home-improvements-upgrades.jpg)',backgroundSize:'cover' }}>
              <div>Home Improvement and Upgrade</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-skin.buildersmart.in/skin/frontend/pt_allurestore/default/images/comercial-complexes.jpg)',backgroundSize:'cover' }}>
              <div>Commercial Complexes</div>
            </div>
            </Link>

            <Link to={'/services'}>
            <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-skin.buildersmart.in/skin/frontend/pt_allurestore/default/images/hospitals.jpg)',backgroundSize:'cover' }}>
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
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/tiles-contractor.jpg)',backgroundSize:'cover' }}>
                <div>Tile Contractors</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/CivilContractorsN.jpg)',backgroundSize:'cover' }}>
                <div>Civil Contractors</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/ElectricalWorks1.jpg)',backgroundSize:'cover' }}>
                <div>Electrical works</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/PaintingWorks1.png)',backgroundSize:'cover' }}>
                <div>Painting Works</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/PlumbingWorks1.jpg)',backgroundSize:'cover' }}>
                <div>Plumbing Works</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/Carpenters.jpg)',backgroundSize:'cover' }}>
                <div>Carpenters</div>
              </div>
            </Link>
            <Link to={'/services'}>
              <div className="Explore-service-card" style={{ backgroundImage: 'url(https://cdn-media.buildersmart.in/media/serviceproviders/Masonry.jpg)',backgroundSize:'cover' }}>
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
    </>
  );
};

export default ExplorePage;
