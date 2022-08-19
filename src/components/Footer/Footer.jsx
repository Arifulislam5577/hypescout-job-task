import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primaryDark">
      <div className="container">
        <div className="footer-top grid grid-cols-4 gap-5">
          <div className="col-span-1">
            <img src="images/logo.png" alt="hypescout logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              sed ultricies volutpat rhoncus faucibus sit.
            </p>
            <ul>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Instragram</a>
              </li>
              <li>
                <a href="/">LinkedIn</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Case Study</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2>Influencer</h2>
            <ul>
              <li>
                <a href="/">Join as Influencer</a>
              </li>
              <li>
                <a href="/">HypeSocial</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2>Advertiser</h2>
            <ul>
              <li>
                <a href="/">Join as Advertiser</a>
              </li>
              <li>
                <a href="/">HypeLink</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
