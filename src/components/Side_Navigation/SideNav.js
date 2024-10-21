import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css'; 
import GtranAccordion from "../gtran/GtranAccordion"

const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="logo">
                <h2>NatGasHub</h2>
            </div>
            <nav>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/noms">Noms</Link></li>
                    <li><Link to="/sched-qty">Sched Qty</Link></li>
                    <li><Link to="/capacity">Unsubscribed Capacity</Link></li>
                    <li><Link to="/notices">Notices</Link></li>
                    <li><Link to="/tariffs">Tariffs</Link></li>
                    <li><Link to="/index-of-customers">Index of Customers</Link></li>
                    <li><Link to="/capacity-exchange">Capacity Release Exchange</Link></li>
                    {/* <li><Link to="/gtran">Transaction Reporting(gTRAN)</Link></li> */}
                    <li>
                        <GtranAccordion />
                    </li>
                    <li><Link to="/invoices">Pipeline Invoice</Link></li>
                    <li><Link to="/allocations">Allocations</Link></li>
                    <li><Link to="/measurement-info">Measurement Info</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
