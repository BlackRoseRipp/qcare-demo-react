import { Fragment } from "react";
import { BiClinic } from "react-icons/bi";
import { BsCheck2Circle, BsHouseDoor, BsTruck } from "react-icons/bs";
import { GiWalk } from "react-icons/gi";
import InsuranceSlider from "../components/InsuranceSlider/InsuranceSlider";

const About = () => {
  return (
    <Fragment>
      <div className="banner bg-blue-primary pb-24">
        <div className="pb-16 bg-[url(../public/img/patterns/Q-logo-pattern-home-banner.svg)] bg-center bg-repeat-space bg-contain">
          <div className="pt-48 pb-16 container mx-auto text-center">
            <h1 className="heading text-white text-5xl font-semibold lg:w-2/3 w-full mx-auto">
              Urgent and preventative healthcare when and where you need it
            </h1>
            <h6 className="text-xl text-white mt-8 lg:w-2/3 w-full mx-auto">
              A sudden sickness or injury can leave you feeling lousy while also
              disrupting your carefully planned schedule. Our QCare mobile care
              units provides New Yorkers access to quick, convenient, expert
              medical care anywhere you are.
            </h6>
            <div className="mt-8">
              <a
                href="/nyc-urgent-care-services"
                className="btn-primary uppercase text-white border-2 border-white hover:border-yellow-logo hover:bg-yellow-logo font-medium md:mx-0"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 container mx-auto">
        <h2 className="heading text-blue-primary text-5xl font-semibold text-center">
          Access Our Care Throughout New York City
        </h2>
        <h4 className="text-3xl font-medium text-center text-blue-logo-primary mt-4">
          At QCare, we’re designing healthcare to meet the needs of our
          fast-paced city. In a world where you order coffee or a rideshare in a
          minute, scheduling an exam or lab test should be just as easy.
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-32 w-3/4 mx-auto">
          <div className="flex flex-col items-center">
            <div className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 transition-all mb-4 cursor-pointer">
              <BiClinic className="text-6xl" />
            </div>
            <p className="text-blue-logo-primary text-xl text-center mt-2">
              Full clinic care
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 transition-all mb-4 cursor-pointer">
              <BsTruck className="text-6xl" />
            </div>
            <p className="text-blue-logo-primary text-xl text-center mt-2">
              Mobile care units
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 transition-all mb-4 cursor-pointer">
              <BsHouseDoor className="text-6xl" />
            </div>
            <p className="text-blue-logo-primary text-xl text-center mt-2">
              Full clinic care
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 transition-all mb-4 cursor-pointer">
              <GiWalk className="text-6xl" />
            </div>
            <p className="text-blue-logo-primary text-xl text-center mt-2">
              Walk-in visits
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="btn-primary text-blue-primary border-blue-primary border-2 uppercase hover:bg-blue-logo-primary hover:border-blue-logo-primary hover:text-white"
          >
            Book an Appointment
          </a>
        </div>
      </div>
      <div className="py-24 container mx-auto">
        <div className="rounded-xl overflow-hidden w-full py-80 bg-[url('../public/img/slide-two-hero.jpg')] bg-center bg-cover bg-no-repeat"></div>
        <div className="md:mt-[-4rem] rounded-xl w-5/6 mx-auto p-12 bg-white"></div>
        <div className="grid lg:grid-cols-3 gap-8 mt-1 w-5/6 mx-auto">
          <div className="flex items-center justify-center lg:border-r border-blue-logo-secondary">
            <div className="w-4/5 mx-auto flex flex-col items-center justify-center">
              <a
                href="#"
                className="border-2 border-blue-logo-primary text-blue-logo-primary rounded-full overflow-hidden hover:scale-110 hover:border-red-secondary mb-4 w-1/2 lg:w-3/4"
              >
                <img src="/img/lab-services-img.jpg" alt="meet_the_team" />
              </a>
              <a
                href="#"
                className="text-blue-logo-primary hover:text-red-secondary text-xl text-center font-medium"
              >
                Meet Our Team
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col items-start justify-around w-4/5 mx-auto">
            <h2 className="text-blue-primary heading text-3xl md:text-5xl font-medium text-center md:text-start">
              Get to know your NYC neighborhood medical provider
            </h2>
            <p className="text-blue-secondary text-lg mt-8 text-center md:text-start">
              We staff each mobile care unit with the same nurses, nurse
              practitioners, physicians assistants and medical doctors each day.
              Our goal is for you to get to know your neighborhood medical
              provider for preventative care so that you can depend on us every
              time, even for urgent care.
              <br />
              <br />
              Get to know your local provider as you walk by every day. Stop by
              when you need us.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-24">
        <div className="container mx-auto">
          <h2 className="heading text-blue-primary text-5xl text-center font-semibold">
            Rely on us for convenient access to…
          </h2>
          <div className="mt-12 border-2 bg-white border-blue-logo-primary rounded-xl p-6 w-2/3 mx-auto">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="flex items-center my-1">
                <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                <p className="text-blue-primary ml-2 w-fit">
                  Urgent care, from illness to injury
                </p>
              </div>
              <div className="flex items-center my-1">
                <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                <p className="text-blue-primary ml-2 w-fit">
                  Routine and specialty wellness physicals for school, work or
                  immigration
                </p>
              </div>
              <div className="flex items-center my-1">
                <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                <p className="text-blue-primary ml-2 w-fit">
                  Vaccinations and medical care for traveling abroad
                </p>
              </div>
              <div className="flex items-center my-1">
                <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                <p className="text-blue-primary ml-2 w-fit">
                  State-of-the-art medical diagnostic technology
                </p>
              </div>
              <div className="flex items-center my-1">
                <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                <p className="text-blue-primary ml-2 w-fit">Digital X-rays</p>
              </div>
              <div className="flex items-center my-1">
                <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                <p className="text-blue-primary ml-2 w-fit">Bloodwork</p>
              </div>
              <div className="flex items-center my-1">
                <BsCheck2Circle className="text-lg text-blue-logo-secondary" />
                <p className="text-blue-primary ml-2 w-fit">Urinalysis</p>
              </div>
            </div>
          </div>
          <p className="mt-16 w-2/3 mx-auto text-blue-logo-primary text-lg font-medium text-center">
            We’re new to urgent care but well known in New York City. Our mobile
            COVID test stations have served New Yorkers in every neighborhood
            since spring 2020. We’re now outfitting our mobile vans as urgent
            care stations.
            <br />
            <br />
            We’ve added full walk-in clinics and telehealth, as well as house
            calls for seniors and those who are disabled, to serve New York CIty
            residents with every convenient care model possible.
          </p>
        </div>
      </div>
      <div className="py-24 container mx-auto">
        <InsuranceSlider />
      </div>
    </Fragment>
  );
};

export default About;
