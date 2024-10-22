import React from 'react';
import '../Footer/Footer.css'; // Add a separate CSS for footer if needed

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Helpdesk: <a href="mailto:GasPro@NatGasHub.com">GasPro@NatGasHub.com</a> 713.999.1188
      </p>
      
      <p>
        NAESB™ Certified. SOC2 Certified. Penetration Tested. Nom One & Done™. Sharing data is a violation of confidentiality agreement. Copyright ©2024.
      </p>
    </footer>
  );
};

export default Footer;
