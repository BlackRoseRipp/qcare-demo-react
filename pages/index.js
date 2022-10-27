import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { BiClinic } from "react-icons/bi";
import {
  BsArrowRight,
  BsCheck2Circle,
  BsClipboardCheck,
  BsHouseDoor,
  BsTruck,
  BsXCircle,
} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosMedical } from "react-icons/io";

export default function Home() {
  return (
    <Fragment>
      <main>
        <div className="banner bg-blue-primary pb-24">
          <div className="container mx-auto py-32 flex flex-col">
            <h1 className="heading text-white text-6xl font-semibold w-2/3">
              Healthcare when and where you need it.
            </h1>
            <div className="mt-8">
              <a
                className="btn-primary uppercase text-white border-2 border-white hover:border-yellow-logo hover:text-yellow-logo font-medium"
                href="#"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-48">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <img
                src="/img/walk-by-nyc.jpg"
                className="w-3/4 mx-auto rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-evenly items-start">
              <h4 className="text-sm uppercase text-blue-logo-secondary">
                Qcare
              </h4>
              <h2 className="text-5xl font-medium text-blue-primary heading">
                Say hello when you walk by,
                <br />
                Stop by when you need us
              </h2>
              <p className="w-5/6 text-blue-secondary">
                At Qcare, we provide New York City residents with convenient,
                quality healthcare that doesn’t interrupt your day. We’re
                posting our mobile care units at strategic locations around the
                NYC area. Our plan over the next several months is to become the
                convenient walk-in urgent care and wellness clinic just outside
                your door.
                <br />
                <br />
                Visit Qcare mobile care units for any urgent medical matter or
                routine care for patients of all ages, from babies to seniors.
                Our clinic physicians are board-certified emergency room doctors
                with years of experience handling medical emergencies throughout
                the Metro New York area.
              </p>
              <div className="xl:mt-0 mt-8">
                <a
                  href="#"
                  className="btn-primary text-blue-primary border-blue-primary border-2 uppercase hover:bg-blue-logo-secondary hover:border-blue-logo-secondary hover:text-white"
                >
                  Find a location near you
                </a>
              </div>
            </div>
          </div>
          <h2 className="mt-56 text-5xl text-blue-logo-primary font-medium heading text-center">
            The doctor is in
          </h2>
          <div className="grid grid-cols-3 gap-12 lg:w-3/4 mx-auto mt-16">
            <div className="flex flex-col items-center justify-start">
              <a
                href="#"
                className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
              >
                <BiClinic className="text-6xl" />
              </a>
              <a
                href="#"
                className="text-blue-primary hover:text-red-secondary text-lg text-center font-medium"
              >
                Urgent Care Clinics
              </a>
              <p className="text-sm text-blue-secondary text-center mt-8 w-3/4 mx-auto">
                We manage most urgent care visits in our mobile care units. For
                more complicated or vulnerable care visits, we may recommend
                patients visit one of our full service urgent care centers
                around the NYC area.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <a
                href="#"
                className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
              >
                <BsTruck className="text-6xl" />
              </a>
              <a
                href="#"
                className="text-blue-primary hover:text-red-secondary text-lg text-center font-medium"
              >
                Mobile Care Units
              </a>
              <p className="text-sm text-blue-secondary text-center mt-8 w-3/4 mx-auto">
                We’re building a fleet of fully-equipped mobile urgent care vans
                that we’re strategically parking throughout the NYC area and
                five boroughs.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <a
                href="#"
                className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4"
              >
                <BsHouseDoor className="text-6xl" />
              </a>
              <a
                href="#"
                className="text-blue-primary hover:text-red-secondary text-lg text-center font-medium"
              >
                House Calls
              </a>
              <p className="text-sm text-blue-secondary text-center mt-8 w-3/4 mx-auto">
                We provide home visits for eligible seniors and those who are
                disabled.
              </p>
            </div>
          </div>
          <p className="mt-16 text-lg text-blue-logo-secondary text-center w-3/4 mx-auto">
            We offer care where you need it and when you need it most, with
            convenient location-based hours, throughout New York City. Schedule
            an appointment or walk in.
          </p>
          <div className="text-center mt-24">
            <a
              href="#"
              className="btn-primary uppercase text-red-primary border-2 border-red-primary hover:text-white hover:bg-red-logo hover:border-red-logo"
            >
              Plan your next visit
            </a>
          </div>
        </div>
        <div className="bg-blue-secondary/10 py-16">
          <div className="relative py-24 overflow-hidden bg-[url(/img/patterns/polygon-scatter-haikei.svg)] bg-center bg-no-repeat bg-cover">
            <h2 className="text-blue-primary heading text-5xl text-center font-semibold">
              Customizable healthcare
              <br /> when and where you need it most
            </h2>
            <div className="flex items-center justify-center mt-32 w-5/6 mx-auto">
              <div className="flex flex-col items-center justify-start mx-4 w-2/5">
                <BsClipboardCheck className="text-blue-logo-primary text-7xl" />
                <h5 className="text-blue-primary text-2xl text-center font-medium mt-6">
                  Register Once with Qcare
                </h5>
              </div>
              <div className="flex items-center justify-center mx-4">
                <BsArrowRight className="text-blue-primary text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-start mx-4 w-2/5">
                <CiLocationOn className="text-blue-logo-primary text-7xl" />
                <h5 className="text-blue-primary text-2xl text-center font-medium mt-6">
                  Select your convenient point of service
                </h5>
              </div>
              <div className="flex items-center justify-center mx-4">
                <BsArrowRight className="text-blue-primary text-7xl" />
              </div>
              <div className="flex flex-col items-center justify-start mx-4 w-2/5">
                <FaHandHoldingHeart className="text-blue-logo-primary text-7xl" />
                <h5 className="text-blue-primary text-2xl text-center font-medium mt-6">
                  Register Once with Qcare
                </h5>
              </div>
            </div>
            <div className="rounded-xl bg-white border-2 border-blue-logo-primary px-8 py-6 mb-12 mt-32 w-fit mx-auto">
              <h5 className="text-blue-logo-secondary heading uppercase text-sm text-center font-medium">
                Our Services
              </h5>
              <div className="grid grid-cols-2 gap-8 mt-4">
                <div className="flex flex-col items-start mr-4">
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Trauma Care
                    </p>
                  </a>
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;COVID-19 Testing
                    </p>
                  </a>
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Allergies & Asthma
                    </p>
                  </a>
                </div>
                <div className="flex flex-col items-start ml-4">
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Wellness Care
                    </p>
                  </a>
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Pediatric Care
                    </p>
                  </a>
                  <a href="#" className="flex items-center group my-2">
                    <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                    <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                      &nbsp;Vaccinations
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="btn-primary text-blue-primary border-blue-primary border-2 uppercase hover:bg-blue-logo-secondary hover:border-blue-logo-secondary hover:text-white"
              >
                See all services
              </a>
            </div>
          </div>
        </div>
        <div className="container lg:w-3/4 mx-auto py-32">
          <div className="grid grid-cols-2 gap-x-12 gap-y-24">
            <div className="flex items-center justify-center">
              <img
                src="/img/pexels-edward-jenner-4031321.jpg"
                className="w-full rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-evenly items-start">
              <h2 className="text-4xl text-blue-primary font-medium">
                Quick registration, Quick testing,
                <br />
                Quick results
              </h2>
              <div className="flex flex-col justify-center items-start ml-8">
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Walk-in or schedule an appointment
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Quick, contactless sign in through our app or location
                    kiosks
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Location-based hours from the early morning to the late
                    evening and weekends too
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Board-certified physicians, nurse practitioners, physician
                    assistants and nurses
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Personalized, comprehensive care from a friendly provider
                    you know, thanks to our low staff turnover
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                  <p className="text-blue-primary ml-2 w-fit">
                    Fast and reliable lab test results, usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-start">
              <h2 className="text-4xl text-red-primary font-medium">
                Say goodbye to…
              </h2>
              <div className="flex flex-col justify-center items-start ml-8">
                <div className="flex items-center my-3">
                  <BsXCircle className="text-lg text-red-secondary" />
                  <p className="text-red-primary ml-2 w-fit">
                    Filling out multiple forms at every visit
                  </p>
                </div>
                <div className="flex items-center my-3">
                  <BsXCircle className="text-lg text-red-secondary" />
                  <p className="text-red-primary ml-2 w-fit">
                    Days of waiting for strep test results
                  </p>
                </div>
                <div className="flex items-center my-3">
                  <BsXCircle className="text-lg text-red-secondary" />
                  <p className="text-red-primary ml-2 w-fit">
                    Missing work to visit the doctor
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/img/pexels-karolina-grabowska-5387256.jpg"
                className="w-full rounded-xl"
              />
            </div>
          </div>
          <div>Locations section?</div>
          <div>Blog section?</div>
          <div>Contact section?</div>
        </div>
      </main>
    </Fragment>
  );
}
