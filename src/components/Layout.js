import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import {FaJenkins} from 'react-icons/fa'; 
import './layout.css';


const Layout = ({children}) => {
  return (
    <>
  <Navbar />
  <FaJenkins />
  {children}
  <Footer />
  </>
  )
}


export default Layout;