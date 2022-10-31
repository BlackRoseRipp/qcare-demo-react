import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";
import Logo from "../public/img/QCARE_Logo.svg";
import LogoWhite from "../public/img/QCARE_Logo_White.svg";
import NavButton from "./NavButton";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const scrollPosition = useScrollPosition();
  const size = useWindowSize();
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <nav
      className={classNames(
        scrollPosition > 0 ? "bg-white" : "md:bg-transparent bg-white",
        "fixed w-full top-0 flex justify-between items-center transition-all z-50"
      )}
    >
      <div className="lg:container flex flex-wrap justify-between items-center md:mx-auto w-full">
        <div className="p-4 rounded-b-xl bg-transparent">
          <Link href="/" className="flex items-center">
            <Image
              src={scrollPosition > 0 ? Logo : LogoWhite}
              class="mr-3 w-52"
              alt="qcare-logo"
            />
          </Link>
        </div>
        <button
          data-toggle="navbar"
          onClick={() => setExpanded(!expanded)}
          type="button"
          className={classNames(
            scrollPosition > 0
              ? "text-blue-primary"
              : "text-white md:text-blue-primary",
            "lg:hidden text-3xl mr-8"
          )}
          aria-controls="navbar"
          aria-expanded="false"
        >
          <GiHamburgerMenu />
        </button>
        <div
          className={classNames(
            expanded ? "max-h-[470px]" : "max-h-0",
            "block lg:max-h-full w-full lg:w-auto transition-all duration-700 rounded-none md:rounded-2xl overflow-hidden lg:overflow-visible grow xl:mx-32"
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
                      to: "/services",
                      primary: "Testing Services",
                    },
                    {
                      to: "/about/team",
                      primary: "Team",
                    },
                    {
                      to: "/career",
                      primary: "Careers",
                    },
                  ]}
                />
              </div>
              <NavButton to="/locations" primary="Testing Locations" />
              <NavButton to="/blog" primary="Blog" />
              <NavButton to="/contact" primary="Contact" />
            </div>
          ) : (
            <ul className="flex flex-row justify-around rounded-lg">
              <li>
                <NavButton to="/" primary="Home" />
              </li>
              <li>
                <NavButton
                  to="#"
                  primary="About Us"
                  dropdownLinks={[
                    {
                      to: "#",
                      primary: "Meet the Team",
                    },
                    {
                      to: "#",
                      primary: "Contact Us",
                    },
                  ]}
                />
              </li>
              <li>
                <NavButton
                  to="#"
                  primary="Services & Care"
                  dropdownLinks={[
                    {
                      to: "#",
                      primary: "Wellness Visits",
                    },
                    {
                      to: "#",
                      primary: "Pediatric Care",
                    },
                    {
                      to: "#",
                      primary: "Urgent Care",
                    },
                    {
                      to: "#",
                      primary: "Allergies & Asthma",
                    },
                    {
                      to: "#",
                      primary: "COVID-19",
                    },
                    {
                      to: "#",
                      primary: "Vaccinations",
                    },
                  ]}
                />
              </li>
              <li>
                <NavButton
                  to="#"
                  primary="Plan Your Visit"
                  dropdownLinks={[
                    {
                      to: "#",
                      primary: "Locations",
                    },
                    {
                      to: "#",
                      primary: "House Calls",
                    },
                    {
                      to: "#",
                      primary: "Insurance",
                    },
                    {
                      to: "#",
                      primary: "Billing Info",
                    },
                  ]}
                />
              </li>
            </ul>
          )}
        </div>
        <Link
          className={classNames(
            scrollPosition > 0
              ? "bg-transparent text-blue-primary border-blue-primary hover:text-red-logo hover:border-red-logo"
              : "bg-transparent text-yellow-logo border-yellow-logo hover:bg-yellow-logo hover:text-blue-primary",
            "rounded-full text-lg font-semibold border-2 py-1 px-4 transition-all hidden lg:block"
          )}
          href="#"
        >
          Patient Portal
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
