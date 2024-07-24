import React from 'react';
import LogoSmile from "../logo/LogoSmile";

const Footer = () => {
  return (
    <footer className="  bottom-0 left-0  py-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex m-auto mb-2 md:mb-0">
          <LogoSmile />
        </div>
      </div>
      <div className="text-center mt-2">
        <p className="text-sm">&copy; 2023 Junior-XUI. Proyecto Personal</p>
      </div>
    </footer>
  );
};

export default Footer;
