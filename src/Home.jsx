import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/banner.png"


const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1 className='mt-n1'>
                    Grow your business with <strong className="navbar-brand">Gamein.games</strong>
                  </h1>
                  <h9 className="my-3">
                    We are the team of talented developers making websites
                  </h9>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn btn-outline-primary">Get Started</NavLink>

                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={web} className="img-fluid animated" alt="home img" />

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;