import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import LogoImg from "../public/img/QCARE_Logo.svg";

const Footer = () => {
  return (
    <Fragment>
      <footer className="mt-auto w-full">
        <div className=" mx-auto flex justify-center items-center bg-white">
          <div className="mx-8 py-8 w-full">
            <div className="grid grid-cols-3">
              <div className="flex items-center justify-start">
                <Link
                  href="#"
                  className="text-blue-primary hover:text-red-secondary my-2 mx-4 text-sm"
                >
                  Locations
                </Link>
                <Link
                  href="#"
                  className="text-blue-primary hover:text-red-secondary my-2 mx-4 text-sm"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="text-blue-primary hover:text-red-secondary my-2 mx-4 text-sm"
                >
                  Book an Appointment
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center mx-auto w-fit justify-self-center">
                <Link href="/">
                  <Image
                    src={LogoImg}
                    alt="Qcare-logo"
                    className="w-60 mx-auto"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-end">
                <div className="flex flex-col md:items-end items-center">
                  <Link
                    href="tel:+18886825221"
                    className="text-blue-primary my-1 text hover:text-red-secondary font-medium text-end"
                  >
                    (888) 682-5221
                  </Link>
                  <Link
                    href="mailto:help@ovalab.com"
                    className="text-blue-primary my-1 text hover:text-red-secondary font-medium text-end"
                  >
                    help@ovalab.com
                  </Link>
                  <Link
                    href="https://www.google.com/maps/dir//527+W+125th+St,+New+York,+NY+10027/@40.8146442,-73.9918835,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c2f66a3419fa35:0x53fc7d1a368c718f!2m2!1d-73.9568642!2d40.8145845!3e0"
                    className="text-blue-primary my-1 text hover:text-red-secondary font-medium text-end"
                  >
                    527 W 125th St, New York, NY, 10027
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-primary py-3 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-8">
            <Link
              href="#"
              className="text-white text-sm hover:text-yellow-logo"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white text-sm hover:text-yellow-logo"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-white text-sm hover:text-yellow-logo"
            >
              Accessibility Statement
            </Link>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
