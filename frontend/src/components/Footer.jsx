import React from "react";

function Footer(){
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">CinemaniaHub</h3>
            <p className="text-sm">Your go-to movie recommendation platform</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">About Us</a>
            <a href="https://github.com/Vikram0817" className="text-gray-300 hover:text-white">Contact</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm">
          <p>&copy; 2024 CinemaniaHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
