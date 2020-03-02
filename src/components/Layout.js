import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import {FaJenkins} from 'react-icons/fa'; 
import './layout.css';


export default function Layout ({children}) {
  return (
  <>
  <NavBar />
  <FaJenkins />
  {children}
  <Footer />
  </>
  )
}
