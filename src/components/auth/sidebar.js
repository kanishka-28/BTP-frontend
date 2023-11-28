import React from 'react';
import logo from "../auth/img1.jpg";
import img1 from "../auth/CC - GAC - LOGO_V0.webp";
import "./styles.css";


const Sidebar = () => {
  return (
    <>
      <div className="w-1/2 flex flex-col items-center justify-center gap-4" id="sidebar" >
          <img class="" src={logo} alt="logo" />
          <h1> Cloud Counselage Pvt. Ltd </h1>
          <p class=""> Welcome to IAC Cloud Counselage Pvt. Ltd. </p>
          <img class="w-32 h-20 " src={img1} alt="gift career" />
      </div>
    </>
  )
}



export default Sidebar