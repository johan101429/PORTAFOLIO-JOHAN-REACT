import React from 'react';
import "./Card.css";

export const Card = ({ title, image, description }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

