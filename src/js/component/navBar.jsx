import React from "react";

//include images into your bundle

//create your first component
const styleNavBar = {
    background: "black",
};
const styleItems = {
	color: "white"
};

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style = {styleNavBar}>
        <div className="container">
          <a className="navbar-brand" href="#" style = {styleItems} >Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style = {styleItems}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style = {styleItems}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style = {styleItems}>Pricing</a>
              </li>
			        <li className="nav-item">
                <a className="nav-link" href="#" style = {styleItems}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>)
};

export default NavBar;