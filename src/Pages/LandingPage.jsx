import React from "react";
import Hero from "../assets/Hero.png";
import Discount from "../Components/Discount";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="Hero-Image">
        <img src={Hero} alt="Hero" className="hero-image" />
      </div>
      <div className="brands">
        <img
          className="image-brand"
          src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/9/Q2ka84YG_e5ef4214a34b4163930fe64583c42738.jpg"
        />
        <img
          className="image-brand"
          src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/9/siIKspe6_70d8fd6e6203478b8e5f777303fec782.jpg"
        />
        <img
          className="image-brand"
          src="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/9/ay9MZNPN_ae8bcbff805b4782af5a13b5f3a61018.jpg"
        />
      </div>
      <div className="discount-section">
        <Discount />
      </div>
    </div>
  );
};

export default LandingPage;
