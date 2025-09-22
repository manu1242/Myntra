import "./Nav.css";
import image from "./Myntra.png";
import profile from "./profile.svg";
import wishlist from "./wishlist.svg";
import bag from "./bag.svg";
import Men from "./Men.jsx";
import { useState } from "react";
import Women from "./Women.jsx";
import Kids from "./Kids.jsx";
import Home from "./Home.jsx";
import Beauty from "./Beauty.jsx";
import Genz from "./Genz.jsx";
import Studio from "./Studio.jsx";
import Profile from "./Profile.jsx";

function Nav() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="Navigation">
        <div className="container">
          <img src={image} className="image" alt="logo" />

          <li onClick={() => handleMenuClick("MEN")} className="list1">
            MEN
          </li>
          <li onClick={() => handleMenuClick("WOMEN")} className="list">
            WOMEN
          </li>
          <li onClick={() => handleMenuClick("KIDS")} className="list">
            KIDS
          </li>
          <li onClick={() => handleMenuClick("HOME")} className="list">
            HOME
          </li>
          <li onClick={() => handleMenuClick("BEAUTY")} className="list">
            BEAUTY
          </li>
          <li onClick={() => handleMenuClick("GENZ")} className="list">
            GENZ
          </li>
          <li onClick={() => handleMenuClick("STUDIO")} className="list">
            STUDIO
          </li>

          <input
            type="text"
            placeholder=" Search for products, brands and more"
            className="searchinput"
          />

          <div className="itemscontainer">
            <div className="prf">
              <img src={profile} className="img1" alt="profile" onClick={() => {
                  handleMenuClick("PROFILE");
                }} />
              <li
                className="profile"
                onClick={() => {
                  handleMenuClick("PROFILE");
                }}
              >
                Profile
              </li>
            </div>

            <div className="wish">
              <img src={wishlist} className="img2" alt="wishlist" />
              <li className="wishlist">Wishlist</li>
            </div>

            <div className="Bag">
              <img src={bag} className="img3" alt="bag" />
              <li className="bag">Bag</li>
            </div>
          </div>
        </div>

        {openMenu === "MEN" && <Men />}
        {openMenu === "WOMEN" && <Women />}
        {openMenu === "KIDS" && <Kids />}
        {openMenu === "HOME" && <Home />}
        {openMenu === "BEAUTY" && <Beauty />}
        {openMenu === "GENZ" && <Genz />}
        {openMenu === "STUDIO" && <Studio />}
        {openMenu === "PROFILE" && <Profile />}
      </div>
    </>
  );
}

export default Nav;
