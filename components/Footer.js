import React, { Fragment } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <Fragment>
      <footer className="mt-auto mx-auto flex justify-center items-center bg-white w-full">
        <div className="mx-8 py-8">
          <div className="grid grid-cols-3">
            <div className="flex items-center justify-around">
              <a
                href="#"
                className="text-blue-primary hover:text-red-secondary transition-all my-2 mx-4"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-blue-primary hover:text-red-secondary transition-all my-2 mx-4"
              >
                Services & Care
              </a>
              <a
                href="#"
                className="text-blue-primary hover:text-red-secondary transition-all my-2 mx-4"
              >
                Plan Your Visit
              </a>
              <a
                href="#"
                className="text-blue-primary hover:text-red-secondary transition-all my-2 mx-4"
              >
                Locations
              </a>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto w-fit justify-self-center">
              <a href="/">
                <img
                  src="/img/QCARE_Logo.svg"
                  alt="Qcare-logo"
                  className="w-60 mx-auto"
                />
              </a>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex flex-col md:items-end items-center">
                <a
                  href="tel:+18886825221"
                  className="text-blue-primary my-1 text-lg hover:text-red-secondary transition-all font-medium text-end"
                >
                  (888) 682-5221
                </a>
                <a
                  href="mailto:help@ovalab.com"
                  className="text-blue-primary my-1 text-lg hover:text-red-secondary transition-all font-medium text-end"
                >
                  help@ovalab.com
                </a>
                <a
                  href="https://www.google.com/maps/dir//527+W+125th+St,+New+York,+NY+10027/@40.8146442,-73.9918835,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c2f66a3419fa35:0x53fc7d1a368c718f!2m2!1d-73.9568642!2d40.8145845!3e0"
                  className="text-blue-primary my-1 text-lg hover:text-red-secondary transition-all font-medium text-end"
                >
                  527 W 125th St, New York, NY, 10027
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
