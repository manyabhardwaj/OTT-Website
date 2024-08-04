import React, { useState } from "react";
import "../index.css";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    const togglePricing = () => {
        setIsYearly(!isYearly);
    };

    const pricingDetails = {
        basic: isYearly ? { price: "₹1999", duration: "/year" } : { price: "₹199", duration: "/month" },
        standard: isYearly ? { price: "₹2999", duration: "/year" } : { price: "₹299", duration: "/month" },
        premium: isYearly ? { price: "₹3999", duration: "/year" } : { price: "₹399", duration: "/month" }
    };

    return (
        <>
            <div className="pricing">
                <div className="pricing-header">
                    <div className="cta-content">
                        <h3>Choose the plan that's right for you</h3>
                        <h6 className="text-gray">
                            Join Netflix and select from our flexible subscription options tailored to suit your viewing preferences.
                        </h6>
                    </div>
                    <div className="toggle">
                        <label className="toggle-switch">
                            <input type="checkbox" checked={isYearly} onChange={togglePricing} />
                            <span className="switch-slider"></span>
                            <span className="p-large switch-label monthly">Monthly</span>
                            <span className="p-large switch-label yearly">Yearly</span>
                        </label>
                    </div>
                </div>
                <div className="pts">
                    <div className="pt">
                        <div className="pt-header">
                            <h5 className="text-gray">Basic</h5>
                            <div className="pt-header-content">
                                <h3>{pricingDetails.basic.price}</h3>
                                <h6 className="text-gray">{pricingDetails.basic.duration}</h6>
                            </div>
                        </div>

                        <div className="pt-content">
                            <h6>What you'll get</h6>
                            <div className="pt-features">
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">720p (HD) Resolution</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">TV, computer, mobile phone, tablet</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">Devices can watch at the same time 1</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">Download devices 1</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">Reporting and analytics</div>
                                </div>
                            </div>
                        </div>

                        <div className="secondary-btn">Start Watching Now</div>
                    </div>

                    <div className="pt2">
                        <div className="pt-header">
                            <h5 className="text-gray">Standard</h5>
                            <div className="pt-header-content">
                                <h3>{pricingDetails.standard.price}</h3>
                                <h6 className="text-gray">{pricingDetails.standard.duration}</h6>
                            </div>
                        </div>

                        <div className="pt-content">
                            <h6>What you'll get</h6>
                            <div className="pt-features">
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">720p (HD) Resolution</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">TV, computer, mobile phone, tablet</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">Devices can watch at the same time 1</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">Download devices 1</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">Reporting and analytics</div>
                                </div>
                            </div>
                        </div>

                        <div className="primary-btn">Start Watching Now</div>
                    </div>

                    <div className="pt">
                        <div className="pt-header">
                            <h5 className="text-gray">Premium</h5>
                            <div className="pt-header-content">
                                <h3>{pricingDetails.premium.price}</h3>
                                <h6 className="text-gray">{pricingDetails.premium.duration}</h6>
                            </div>
                        </div>

                        <div className="pt-content">
                            <h6>What you'll get</h6>
                            <div className="pt-features">
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">720p (HD) Resolution</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">TV, computer, mobile phone, tablet</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">Devices can watch at the same time 1</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">Download devices 1</div>
                                </div>
                                <div className="pt-feature text-gray">
                                    <FaRegCircleCheck />
                                    <div className="p-large text-gray">Reporting and analytics</div>
                                </div>
                            </div>
                        </div>

                        <div className="secondary-btn">Start Watching Now</div>
                    </div>


                </div>
            </div>
        </>
    );
}
