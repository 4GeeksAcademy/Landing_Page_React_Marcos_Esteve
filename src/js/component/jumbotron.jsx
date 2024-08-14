import React from "react";


const styleJumBotron = {
    background: "grey",
    border: "10px"
};

const JumBotron = () => {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3" style = {styleJumBotron}>
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repudiandae eaque tempore vero obcaecati doloremque! Suscipit, temporibus ipsam ut earum nihil illum. Cumque provident soluta iure dolore maiores, vel quis.</p>
                <a className="btn btn-primary" href="https://4geeksacademy.com/es/inicio" role="button" target = "_blank">Go To Action!</a>
            </div>
        </div>
    )
};

export default JumBotron;

