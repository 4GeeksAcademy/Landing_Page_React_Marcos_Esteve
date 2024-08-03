import React from "react";
import PropTypes from "prop-types";


const CardHtml = (props) => {
    const cardStyle = {
        width: "18rem",
        
    }
    return (
        <div className="card" style={cardStyle}>
            <img src={props.imageurl} className="card-img-top" alt="Range Rover Sport SVR"/>
            <div className="card-body d-flex flex-column " >
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary mt-auto w-auto align-self-start" target = "_blank">{props.buttonlabel}</a>
            </div>
        </div>
    )
};

CardHtml.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonlabel: PropTypes.string,
    imageurl: PropTypes.string,
    link: PropTypes.string,
}

export default CardHtml;