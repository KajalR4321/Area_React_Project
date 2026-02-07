import CtaData from "../../Data/Cta";
import React from 'react';
import './Cta.css'; // See the CSS below

function Cta() {
    return (
        <div className="cta-container">
            <ul className="cta-grid">
                {CtaData?.map((item) => (
                    <li key={item.id} className="cta-card">
                        <img src={item.logo} alt={item.title} className="cta-icon" />
                        <h3 className="cta-title">{item.title}</h3>
                        <p className="cta-description">{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cta;

