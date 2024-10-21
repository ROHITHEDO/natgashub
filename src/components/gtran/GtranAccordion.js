import React from 'react';
import { Accordion } from 'react-bootstrap';
import "../gtran/GtranAccordion.css"
import { Link } from 'react-router-dom';



const GtranAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Transaction Reporting(gTRAN)</Accordion.Header>
        <Accordion.Body>
        <ul className="submenu">
          <li><Link to="/firm">Firm</Link></li>
          <li><Link to="/interruptible">Interruptible</Link></li>
          <li><Link to="/gtran-watchlists">gTran Watchlists</Link></li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default GtranAccordion;