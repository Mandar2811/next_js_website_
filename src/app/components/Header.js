import React from 'react'
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'



const Header = () => {
  return (
<div className="bg-color">
    <div classNameNameName="container-fluid ">
        <div class="navbar ">
      <div class="nav-logo">
      <Image src="/logo.png" width="150" height="20"></Image>
      </div>
      <div class="nav-items">
        <ul>
          <li><a href="#"> Home </a></li>
          <li><a href="#"> Discover </a></li>
          <li><a href="#"> Special Deals </a></li>
          <li><a href="#"> Contact </a></li>
        </ul>
      </div>
      <div class="nav-button-1">
        <div class="anim-layer"></div>
        <p>Log In</p>
      </div>
      <div class="nav-button">
        <div class="anim-layer"></div>
        <a href="#">Sign Up</a>
      </div>
      <div id="hamburger-menu">&#9776;</div>
        </div>

         <div id="mobile-menu">
      <div class="mobile-nav-items">
        <ul>
          <li><a href="#"> Home </a></li>
          <li><a href="#"> Services </a></li>
          <li><a href="#"> About </a></li>
          <li><a href="#"> Contact </a></li>
          <li><a href="#"> Home </a></li>
        </ul>
      </div>
      <div class="mobile-nav-button">
        <div class="anim-layer"></div>
        <a href="#">Sign Up</a>
      </div>
      <div id="hamburger-cross">&#10006;</div>
        </div>
    </div>

    <div className="row">
            <div className="col-md-5 col-12">
                <div className="first-sec">

                </div>
            </div>
            <div className="col-md-7 col-12">
                <div className="second-sec">
                    
                </div>
            </div>
    </div>


</div>
  )
}

export default Header
