import React from "react";
import "../index.css";
import Smartphoneicon from "./Icons/smartphone";
import Tableticon from "./Icons/tablet"
import Laptopicon from "./Icons/laptop"
import Gamingicon from "./Icons/gaming"

export default function Features() {

    return (
        <>
            <div className="features">
                <div className="cta-content">
                    <h3>We Provide you streaming experience across various devices.</h3>
                    <h6 className="text-gray">With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere.</h6>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-title">
                            <div className="feature-icon">
                                <Smartphoneicon/>
                            </div>
                            <h4>Smartphones</h4>
                        </div>
                        <h6 className="text-gray">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</h6>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-title">
                            <div className="feature-icon">
                                <Tableticon/>
                            </div>
                            <h4>Tablet</h4>
                        </div>
                        <h6 className="text-gray">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</h6>
                    </div>

                    <div className="feature-card">
                        <div className="feature-title">
                            <div className="feature-icon">
                                <Laptopicon/>
                            </div>
                            <h4>Laptops</h4>
                        </div>
                        <h6 className="text-gray">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</h6>
                    </div>

                    <div className="feature-card">
                        <div className="feature-title">
                            <div className="feature-icon">
                                <Gamingicon/>
                            </div>
                            <h4>Gaming Consoles</h4>
                        </div>
                        <h6 className="text-gray">StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</h6>
                    </div>
                </div>
            </div>
        </>
    );
}
