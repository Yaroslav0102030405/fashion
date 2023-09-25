import React from "react";
import "./download.css";
import Vouch from "./../../image/images/vouchers-img.png";

const Download = () => {
  return (
    <section className="download">
      <div className="container">
        <div className="wrapper">
          <div>
            <h2 className="download__title">DOWNLOAD APP & <br />GET THE VOUCHER!</h2>
            <p className="download__text">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </p>
            <span></span>
            <span></span>
          </div>
          <div>
            <img src={Vouch} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
