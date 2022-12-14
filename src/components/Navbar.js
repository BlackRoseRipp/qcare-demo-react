import { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";
//import Logo from "../public/img/QCARE_Logo.svg";
//import LogoWhite from "../public/img/QCARE_Logo_White.svg";
import NavButton from "./NavButton";
import { routes } from "./routes";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const scrollPosition = useScrollPosition();
  const size = useWindowSize();
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Fragment>
      <nav
        className={classNames(
          scrollPosition > 0 ? "bg-white" : "md:bg-transparent bg-white",
          "fixed w-full top-0 flex justify-between items-center transition-all z-50"
        )}
      >
        <div className="lg:container flex flex-wrap justify-between items-center md:mx-auto w-full">
          <div className="p-4 rounded-b-xl bg-transparent">
            <a href="/" className="flex items-center">
              <img
                src={
                  size.width > 767
                    ? scrollPosition > 0
                      ? "/img/QCARE_Logo.svg"
                      : "/img/QCARE_Logo_White.svg"
                    : "/img/QCARE_Logo.svg"
                }
                class="mr-3 w-52"
                alt="qcare-logo"
              />
            </a>
          </div>
          <button
            data-toggle="navbar"
            onClick={() => setExpanded(!expanded)}
            type="button"
            className={classNames(
              scrollPosition > 0
                ? "text-blue-primary"
                : "md:text-white text-blue-primary",
              "lg:hidden text-3xl mr-8"
            )}
            aria-controls="navbar"
            aria-expanded="false"
          >
            <GiHamburgerMenu />
          </button>
          <div
            className={classNames(
              expanded ? "max-h-[740px] border-b" : "max-h-0",
              size.height < 740
                ? "overflow-y-scroll overflow-x-hidden"
                : "overflow-hidden",
              "block lg:max-h-full w-full lg:w-auto transition-all duration-700 lg:overflow-visible grow xl:mx-32 lg:border-0"
            )}
            id="navbar"
          >
            {size.width < 1024 ? (
              <div className="flex flex-col py-4 bg-white">
                <NavButton to="/" primary="Home" />
                <div className="accordion accordion-flush" id="mobileMenu">
                  <NavButton
                    to="#"
                    primary="About"
                    id="One"
                    dropdownLinks={[
                      {
                        to: "/about",
                        primary: "Our Mission",
                      },
                      {
                        to: "/team",
                        primary: "Team",
                      },
                      {
                        to: "/contact",
                        primary: "Contact Us",
                      },
                    ]}
                  />
                  <NavButton
                    to="#"
                    primary="Services & Care"
                    id="Two"
                    dropdownLinks={[
                      {
                        to: "/prevention",
                        primary: "Wellness Visits",
                      },
                      {
                        to: "/pediatrics",
                        primary: "Pediatric Care",
                      },
                      {
                        to: "/urgent-care",
                        primary: "Urgent Care",
                      },
                      {
                        to: "/allergies-asthma",
                        primary: "Allergies & Asthma",
                      },
                      {
                        to: "/covid-19",
                        primary: "COVID-19",
                      },
                      {
                        to: "/vaccines",
                        primary: "Vaccinations",
                      },
                      {
                        to: "/injuries",
                        primary: "Injuries",
                      },
                      {
                        to: "/scrapes-&-cuts",
                        primary: "Scrapes",
                      },
                      {
                        to: "/strep-throat",
                        primary: "Strep Throat",
                      },
                      {
                        to: "/cold-&-flu",
                        primary: "Cold & Flu",
                      },
                      {
                        to: "/nyc-urgent-care-services",
                        primary: "All Testing Services",
                      },
                    ]}
                  />
                  <NavButton
                    to="#"
                    primary="Plan Your Visit"
                    id="Three"
                    dropdownLinks={[
                      {
                        to: "/plan-your-visit",
                        primary: "Plan Your Visit",
                      },
                      {
                        to: "/locations",
                        primary: "Locations",
                      },
                      {
                        to: "/house-calls",
                        primary: "House Calls",
                      },
                      {
                        to: "/insurance",
                        primary: "Insurance",
                      },
                    ]}
                  />
                  <NavButton
                    to="https://www.yourhealthfile.com/providers/1534226/book-an-appointment-.html"
                    primary="Patient Portal"
                  />
                </div>
              </div>
            ) : (
              <ul className="flex flex-row justify-around rounded-lg">
                <li>
                  <NavButton to="/" primary="Home" />
                </li>
                <li>
                  <NavButton
                    to="/about"
                    primary="About Us"
                    dropdownLinks={[
                      {
                        to: "/team",
                        primary: "Meet the Team",
                      },
                      {
                        to: "/contact",
                        primary: "Contact Us",
                      },
                    ]}
                  />
                </li>
                <li>
                  <NavButton
                    to="/nyc-urgent-care-services"
                    primary="Services & Care"
                    dropdownLinks={[
                      {
                        to: "/prevention",
                        primary: "Wellness Visits",
                      },
                      {
                        to: "/pediatrics",
                        primary: "Pediatric Care",
                      },
                      {
                        to: "/urgent-care",
                        primary: "Urgent Care",
                      },
                      {
                        to: "/allergies-asthma",
                        primary: "Allergies & Asthma",
                      },
                      {
                        to: "/covid-19",
                        primary: "COVID-19",
                      },
                      {
                        to: "/vaccines",
                        primary: "Vaccinations",
                      },
                      {
                        to: "/injuries",
                        primary: "Injuries",
                      },
                      {
                        to: "/scrapes-&-cuts",
                        primary: "Scrapes",
                      },
                      {
                        to: "/strep-throat",
                        primary: "Strep Throat",
                      },
                      {
                        to: "/cold-&-flu",
                        primary: "Cold & Flu",
                      },
                    ]}
                  />
                </li>
                <li>
                  <NavButton
                    to="/plan-your-visit"
                    primary="Plan Your Visit"
                    dropdownLinks={[
                      {
                        to: "/locations",
                        primary: "Locations",
                      },
                      {
                        to: "/house-calls",
                        primary: "House Calls",
                      },
                      {
                        to: "/insurance",
                        primary: "Insurance",
                      },
                    ]}
                  />
                </li>
              </ul>
            )}
          </div>
          <a
            className={classNames(
              scrollPosition > 0
                ? "bg-transparent text-blue-primary border-blue-primary hover:text-red-logo hover:border-red-logo"
                : "bg-transparent text-yellow-logo border-yellow-logo hover:bg-yellow-logo hover:text-blue-primary",
              "rounded-full text-lg font-semibold border-2 py-1 px-4 transition-all hidden lg:block"
            )}
            href="http://yourhealthfile.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Patient Portal
          </a>
        </div>
      </nav>
      {routes()}
    </Fragment>
  );
};

export default Navbar;
