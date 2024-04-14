import React from 'react'
import Image from "next/image";


const Travel = () => {
  return (
    <div>
      <div className="container-fluid mt-5 ps-r mb-5 ">
       <div className="row">
        <div className="col-md-6">
        <Image src="/travel.png" width="600" height="100">
                </Image>
        </div>
        <div className="col-md-4 mt-150">
            <p className="ser-txt">TRAVEL POINT</p>
            <p className="ser-txt-2">We helping you find <br/> your dream location</p>
            <p className="lower-txt">Contrary to popular belief, Lorem Ipsum is not <br/> simply random text. It has roots in a piece of <br/> classical Latin literature from 45 BC.</p>

            <div className="row">
                <div className="col-md-6">
                    <div className="card card-1">
                    <p className="head-tr">500+</p>
                    <p>Holiday Package</p>
                    </div>
                </div>
                <div className="col-md-6 mt-20">
                <div className="card card-1">
                <p className="head-tr">100</p>
                <p>Luxury Hotel</p>    
                </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card card-1">
                    <p className="head-tr">7</p>
                    <p>Premium Airlines</p>
                    </div>
                </div>
                <div className="col-md-6 mt-20">
                <div className="card card-1">
                <p className="head-tr">2k+</p>
                <p>Happy Customer</p>    
                </div>
                </div>
            </div>
        </div>
        <div className="col-md-2 ps-abs">
        <Image src="/star.png" width="220" height="50">
                </Image>
        </div>

       </div> 
      </div>
    </div>
  )
}

export default Travel
