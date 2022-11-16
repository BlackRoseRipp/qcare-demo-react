import React, { Fragment } from "react";
//import LogoImg from "../../public/img/QCARE_Logo.svg";

const Footer = () => {
  return (
    <Fragment>
      <footer className="mt-auto w-full">
        <div className=" mx-auto flex justify-center items-center bg-blue-secondary/10">
          <div className="mx-8 py-4 w-full">
            <div className="grid lg:grid-cols-3">
              <div className="flex sm:flex-row flex-col items-center lg:justify-start justify-center lg:order-1 order-2">
                <a
                  href="/locations"
                  className="text-blue-primary hover:text-red-secondary my-2 mx-4 text-sm"
                >
                  Locations
                </a>
                <a
                  href="/contact"
                  className="text-blue-primary hover:text-red-secondary my-2 mx-4 text-sm"
                >
                  Contact Us
                </a>
                <a
                  href="https://www.yourhealthfile.com/providers/1534226/book-an-appointment-.html"
                  className="text-blue-primary hover:text-red-secondary my-2 mx-4 text-sm"
                >
                  Book an Appointment
                </a>
              </div>
              <div className="flex flex-col justify-center items-center mx-auto w-fit justify-self-center lg:order-2 order-1">
                <a href="/">
                  <img
                    src="img/QCARE_Logo.svg"
                    alt="Qcare-logo"
                    className="w-60 mx-auto"
                  />
                </a>
              </div>
              <div className="flex items-center lg:justify-end justify-center order-3">
                <div className="flex flex-col lg:items-end items-center">
                  <a
                    href="tel:+18777227318"
                    className="text-blue-primary my-1 text hover:text-red-secondary font-medium text-end"
                  >
                    (877) 722-7318
                  </a>
                  <a
                    href="mailto:helpdesk@qcare.com"
                    className="text-blue-primary my-1 text hover:text-red-secondary font-medium text-end"
                  >
                    helpdesk@qcare.com
                  </a>
                  <a
                    href="https://www.google.com/maps/place/143+W+72nd+St,+New+York,+NY+10023/@40.7782211,-73.9824139,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2588a351f00ed:0xa7f97add245c9e79!8m2!3d40.7782211!4d-73.9802252!16s%2Fg%2F11bw3_tfp3?hl=en"
                    className="text-blue-primary my-1 text hover:text-red-secondary font-medium text-end"
                  >
                    143 W 72nd St Manhattan, NY 10023
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-primary py-3 flex items-center justify-center">
          <div className="grid sm:grid-cols-3 sm:gap-8 gap-2 text-center">
            <a
              href="/privacy"
              className="text-white text-sm hover:text-yellow-logo"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="text-white text-sm hover:text-yellow-logo"
            >
              Terms & Conditions
            </a>
            <a
              href="/accessibility"
              className="text-white text-sm hover:text-yellow-logo"
            >
              Accessibility Statement
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
