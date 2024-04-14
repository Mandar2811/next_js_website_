import React from 'react'
import Image from "next/image";


const Footer = () => {
  return (
    <div>
        <div className="container-fluid">
      <div className="container text-center margintp ps-r">
        <div className="row">
        <div className="col-md-1 foo-left">
        <Image src="/foot-left.png" width="1000" height="600" className="left-foo-m">
                </Image>
                
            </div>
            <div className="col-md-10 ">
                <div className="card card-f" style={{ padding: "80px 15px", background: "#FACD4914", borderRadius: "15px"}}>
                    <p className="ser-txt">subscribe to our newsletter</p>
                    <p className="ser-txt-2">Prepare yourself & let’s explore the <br/> beauty of the world</p>

                <div className="d-flex mt-2">
                <input className="subinput"  placeholder="Enter Email"></input>
                <button type="button" class="btn btn-get ms-5">Subscribe</button>
                </div>
                    
                

                </div>
            </div>
            <div className="col-md-1 foot-right ">
            <Image src="/foot-right.png" className="img-right-m" width="600" height="100">
                </Image>
            </div>
        </div>
      </div>
      
      </div>

      <footer >
      <div className="container margintp">
        <div className="row">
            <div className="col-md-3">
            <div class="nav-logo">
      <Image src="/logo.png" width="150" height="20"></Image>
      <p className="foot-1 mt-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
            in a piece of classical Latin literature from 45 BC.</p>
      </div>
            </div>
            <div className="col-md-3">
                <p className="f-head">Company</p>
                <ul>
                    <li className="footer-li">About</li>
                    <li className="footer-li">Career</li>
                    <li className="footer-li">Mobile</li>

                </ul>
            </div>
            <div className="col-md-3">
                <p className="f-head">Contact</p>
                <ul>
                    <li className="footer-li">Why Travlog?</li>
                    <li className="footer-li">Partner with us</li>
                    <li className="footer-li">FAQ’s</li>
                    <li className="footer-li">Blog</li>


                </ul>
            </div>
            <div className="col-md-3">
                <p className="f-head">Meet Us</p>
                <ul>
                    <li className="footer-li">+00 92 1234 56789</li>
                    <li className="footer-li">info@travlog.com</li>
                    <li className="footer-li">205. R Street, New York</li>
                    <li className="footer-li">BD23200</li>


                </ul>
            </div>

        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
