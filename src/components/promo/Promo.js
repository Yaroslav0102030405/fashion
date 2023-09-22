import React from "react";
import "./promo.css";
import PromoImg from "./../../image/images/header-img.png";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <h1 className="promo__title">LET’S EXPLORE UNIQUE CLOTHES.</h1>
            <p className="promo__desc">
              Live for Influential and Innovative fashion!
            </p>
            <button className="promo__btn" type="button">Shop Now</button>
          </div>
          <div className="promp__img">
            <img src={PromoImg} alt="Promo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
