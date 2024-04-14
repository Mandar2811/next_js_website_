import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image";



const Home = () => {
  return (
    <div>
      <div className="container-fluid bg-color">
        <div className="container">
            <div className="home">
                <div className="row">
                    <div className="col-md-5 col-12">
                    <div class="nav-button-3 d-flex mt-5">
                      <p className="me-3">Explore the world!  </p>
                      <Image className="bag-m" src="/bag.png" width="25" height="3"></Image>
                    </div>
                    <div className="text-para mt-3">
                        <p className="first-txt">Travel<span className="second-txt"> top <br/>destination <br/></span>of the world</p>
                    </div>

                    <div className="lower-txt">
                        <p className="lo-txt">We always make our customer happy by providing <br/>
                            as many choices as possible</p>
                    </div>

                    <div className="mt-5">
                    <button type="button" class="btn btn-get me-2">Get Started</button>
                    <button type="button" class="btn btn-watch-now">Watch Now</button>

                    </div>
                    </div>
                    <div className="col-md-7 col-12 mt-5">
                        <div className="second-sec">
                        <Image src="/sec-2.png" width="700" height="200"></Image>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
