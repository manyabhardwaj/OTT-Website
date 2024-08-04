import React from "react";
import "../index.css";

export default function Cta() {

    return (
        <>
            <div className="cta">
                <div className="cta-content">
                    <h3>Start your free trial today!</h3>
                    <h6 className="text-gray">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</h6>
                </div>
                <button className="primary-btn">Start Free Trial</button>
            </div>
        </>
    );
}
