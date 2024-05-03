import React from 'react';
import'./Experiencias.css'


export const Experiencias = ({ title, image, description }) => {
    return (
        <div className="Experiencias">
            <img src={image} alt={title} className="Experiencias-image" />
            <div className="Expe-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};
