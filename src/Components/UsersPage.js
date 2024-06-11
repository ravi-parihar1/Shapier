import React from 'react';
import '../css/UsersPage.css';
import SideNav from './SideNav';
import { FaCopy } from 'react-icons/fa';

const users = [
    { srNo: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com',enquiry:'HAVC Technician',msg:'find me this efmerlg ndflgndsf  fdngdfsgn fdklrn dsfklvms ltn dfovnfds  kfng fdkn sfdgk gfds v' },
    { srNo: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com',enquiry:'HAVC Technician',msg:'find me this' },
    { srNo: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com',enquiry:'HAVC Technician',msg:'find me this' },
    { srNo: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com',enquiry:'HAVC Technician',msg:'find me this' },
    { srNo: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com',enquiry:'HAVC Technician',msg:'find me this' },
    { srNo: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com',enquiry:'HAVC Technician',msg:'find me this' },
    { srNo: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com',enquiry:'HAVC Technician',msg:'find me this' },
    { srNo: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com',enquiry:'HAVC Technician',msg:'find me this' },
    { srNo: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com',enquiry:'HAVC Technician',msg:'find me this' },
    { srNo: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com',enquiry:'HAVC Technician',msg:'find me this' },
    // Add more user objects as needed
];

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert('Phone number copied to clipboard: ' + text);
}

export default function UsersPage() {
    return (
        <div className="admin-panel-container">
            <SideNav />
            <div className="content-container">
                <h1 className="page-title">Users List</h1>
                <div className="table-container">
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>SR. No</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Enquiry</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.srNo}</td>
                                    <td>{user.name}</td>
                                    <td className="phone-number-cell">
                                        {user.phone}

                                        {/* <FaCopy  onClick={() => copyToClipboard(user.phone)}/> */}
                                        
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.enquiry}</td>
                                    <td>{user.msg}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
