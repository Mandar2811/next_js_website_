import React from 'react'
import Image from "next/image";
// import {Card,CardHeader,CardBody,CardFooter,Typography,Button,} from "@material-tailwind/react";


const Sliderforweb = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
        <div className="container-fluid mt-5 mt-150">
            <div className="container">
            {/* <div className="partner d-flex">
                <div className="sli-1">
                <Image src="/sli-1.png" width="250" height="20"></Image>
                 </div>
                 <div className="sli-1">
                <Image src="/sli-2.png" width="250" height="20"></Image>
                 </div>
                 <div className="sli-1">
                <Image src="/sli-3.png" width="250" height="20"></Image>
                 </div>
                 <div className="sli-1">
                <Image src="/sli-4.png" width="250" height="20"></Image>
                 </div>
                 <div className="sli-1">
                <Image src="/sli-5.png" width="250" height="20"></Image>
                 </div>

            </div> */}
            <div className="slider">
                <Image src="/slider.png" width="1400" height="45">
                </Image>

                <div className="slider-abs slider-obj-m">
            <Image src="/sli-obj.png" width="55" height="55">
                </Image>
            </div>
            </div>

            <div className="slidrer-below mt-5">
                <div className="row">
                    <div className="col-md-5 col-12 services">
                        <p className="ser-txt">Services</p>
                        <p className="ser-txt-2">Our Top Value <br/> Categories For You</p>

                    </div>
                    <div className="col-md-7 col-12">
                        
                    </div>
                </div>
            </div>
            </div>


         </div>
    </div>
  )
}

export default Sliderforweb
