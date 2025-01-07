import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-black text-white rounded p-10 border">
        <img src={logo} className='w-20 h-20 rounded-full' alt="" />
        <h2 className='text-2xl font-bold'>Sports Equipment Online Store.</h2>
        {/* <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Location</a>
          <a className="link link-hover">Features</a>
        </nav> */}
        <nav>
          <div className="grid grid-flow-col gap-4 text-3xl">
            <a href='https://github.com/Nazim1247'>
            <FaGithub />
            </a>
            <a href='https://www.facebook.com/share/1BPK8VijLn/'>
            <FaFacebook className='text-blue-500' />
            </a>
            <a href='https://youtube.com/@najimuddin-cv5eb?si=muFnCh-RxYEQ2ub5'>
            <IoLogoYoutube className='text-red-500' />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;