import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { BsCheck2Circle } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Services = () => {
  const services = [
    "Allergies",
    "Cold and Flu",
    "COVID-19",
    "ENT",
    "Hand, foot and mouth disease",
    "Lyme disease",
    "Pink eye",
    "Respiratory illnesses",
    "Sexually Transmitted Infections (STIs)",
    "Sinus infections",
    "Skin ailments",
    "Stomach ailments",
    "Strep throat",
    "Urinary tract infection",
    "Bites and stings",
    "Broken bones",
    "Burns",
    "Cuts and Scrapes",
    "Frostbite",
    "Heat exhaustion",
    "Lice",
    "Strains and sprains",
    "Sutures",
    "Camp, school, and sports physicals",
    "Flu shots",
    "Vaccinations",
    "DOT physicals",
    "Drug and alcohol screenings",
    "Work-related physicals",
  ];

  const tests = [
    "COVID-19 ANTIGEN",
    "Alanine Aminotransferase (ALT)",
    "Albumin",
    "Alkaline Phosphatase (ALP)",
    "Amylase",
    "Aspartate Aminotransferase (AST)",
    "Blood Urea Nitrogen (BUN)",
    "B-Type Natriuretic Peptide (BNP)",
    "Carbon Dioxide",
    "Calcium",
    "Chloride",
    "Cholesterol",
    "Community Screening",
    "Creatinine",
    "Creatine Kinase (CK)",
    "Gamma Glutamyl Transferace (GGT)",
    "Glucose",
    "Glycosylated Hemoglobin",
    "HDL Cholesterol",
    "Hemoglobin",
    "Hematocrit",
    "Influenza",
    "Occult Blood",
    "Potassium",
    "Pregnancy Test (Urine)",
    "COVID-19 MOLECULAR",
    "RSV (Respiratory Syncytial Virus)",
    "COVID-19 ANTIBODY",
    "Sodium",
    "Strep A Test",
    "Total Bilirubin",
    "Total Protein",
    "Triglycerides",
    "Urinalysis",
  ];
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/young-male-psysician-with-patient.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="py-56 container mx-auto">
              <h1 className="text-white heading text-6xl font-semibold text-center">
                Urgent care and preventative healthcare for all ages in New York
                City
              </h1>
              <h3 className="text-white text-xl font-medium text-center mt-4">
                When you or your loved one have an urgent illness or an
                accident, you need access to medical care that’s immediate and
                convenient. At QCare, we provide a full array of services for
                New York City residents of every age – from infants to seniors.
              </h3>
              <div className="text-center mt-12">
                <a
                  href="/locations"
                  className="btn-primary uppercase text-white font-medium border-2 border-yellow-logo hover:bg-yellow-logo"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-32">
        <h2 className="text-blue-primary heading text-5xl font-semibold text-center">
          Our Available Services
        </h2>
        <div className="mt-16 md:w-1/2 w-5/6 mx-auto border-2 border-blue-primary rounded-xl p-6 bg-blue-secondary/10">
          <div className="grid md:grid-cols-2 gap-x-8 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
            <div className="flex justify-center">
              <div className="flex flex-col items-start">
                <a
                  href="/urgent-care"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Trauma Care
                  </p>
                </a>
                <a
                  href="/covid-19"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;COVID-19 Testing
                  </p>
                </a>
                <a
                  href="/allergies-asthma"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Allergies & Asthma
                  </p>
                </a>
                <a
                  href="/strep-throat"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Strep Throat
                  </p>
                </a>
                <a
                  href="/cold-&-flu"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Cold & Flu
                  </p>
                </a>
                <a
                  href="/frostbite"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Frostbite
                  </p>
                </a>
                <a
                  href="/sti"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Sexually Transmittedly Infections
                  </p>
                </a>
                <a
                  href="/stomach-pains"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Stomach Pains
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col items-start">
                <a
                  href="/prevention"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Wellness Care
                  </p>
                </a>
                <a
                  href="/pediatrics"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Pediatric Care
                  </p>
                </a>
                <a
                  href="/vaccines"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Vaccinations
                  </p>
                </a>
                <a
                  href="/injuries"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Broken Bones, Strains & Sprains
                  </p>
                </a>
                <a
                  href="/scrapes-&-cuts"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Cuts, Scrapes, & Sutures
                  </p>
                </a>
                <a
                  href="/burn-care"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Burn Care
                  </p>
                </a>
                <a
                  href="/skin-ailments"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Skin Ailments
                  </p>
                </a>
                <a
                  href="/ear-nose-&-throat"
                  className="flex items-center justify-start w-full group my-2"
                >
                  <IoIosMedical className="text-blue-logo-secondary text-xl group-hover:text-red-secondary transition-all duration-300" />
                  <p className="text-blue-primary font-medium group-hover:text-red-secondary transition-all duration-300">
                    &nbsp;Ear, Nose & Throat
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/locations"
            className="btn-primary border-2 border-blue-primary text-blue-primary uppercase font-medium hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary"
          >
            Schedule Now
          </a>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-blue-primary text-5xl font-semibold heading text-center">
          Access care you need,
          <br />
          When you need it
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <div className="flex items-center justify-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-3/4 mx-auto rounded-xl overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/asian-young-caregiver-caring-her.jpg"
                  alt="caregiver"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-col items-center lg:items-start justify-evenly">
            <div className="flex flex-col items-start justify-center">
              <div className="flex items-center my-4 w-full">
                <GiHealthNormal className="text-4xl text-blue-logo-primary" />
                <p className="text-blue-logo-primary font-medium text-xl ml-4 w-fit">
                  Visit one of our urgent care clinic locations
                </p>
              </div>
              <div className="flex items-center my-4 w-full">
                <GiHealthNormal className="text-4xl text-blue-logo-primary" />
                <p className="text-blue-logo-primary font-medium text-xl ml-4 w-fit">
                  Stop by a Qcare mobile care unit near you for a walk-in visit
                </p>
              </div>
              <div className="flex items-center my-4 w-full">
                <GiHealthNormal className="text-4xl text-blue-logo-primary" />
                <p className="text-blue-logo-primary font-medium text-xl ml-4 w-fit">
                  Schedule a house call
                </p>
              </div>
              <div className="flex items-center my-4 w-full">
                <GiHealthNormal className="text-4xl text-blue-logo-primary" />
                <p className="text-blue-logo-primary font-medium text-xl ml-4 w-fit">
                  Call to schedule a visit at your convenience
                </p>
              </div>
            </div>
            <div className="w-full lg:text-start text-center lg:mt-0 mt-4">
              <a
                href="/plan-your-visit"
                className="btn-primary border-2 border-blue-logo-primary text-blue-logo-primary uppercase font-medium hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary"
              >
                Plan your visit
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-24">
        <div className="bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-4xl font-semibold text-center">
              We offer a full range of preventive and urgent care
            </h2>
            <div className="text-center w-full mt-16">
              <a
                href="/locations"
                className="btn-primary font-medium uppercase text-blue-primary border-2 border-blue-primary hover:bg-red-logo hover:border-red-logo hover:text-white"
              >
                Find a location near you
              </a>
            </div>
            <div className="my-12 border-2 border-blue-primary rounded-xl p-4 bg-white grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-3/4 mx-auto">
              {services.map((service) => (
                <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                  <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2" />
                  <h5 className="text text-blue-secondary">{service}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 container mx-auto">
        <h3 className="text-blue-primary text-3xl font-semibold text-center">
          Just some of the tests available at our mobile stations and full
          clinic
        </h3>
        <div
          className="accordion accordion-flush md:w-3/4 w-5/6 mx-auto mt-16"
          id="testAccordion"
        >
          <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="test-headingOne">
              <button
                class="accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base !text-blue-primary text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#test-collapseOne"
                aria-expanded="false"
                aria-controls="test-collapseOne"
              >
                View All Tests
              </button>
            </h2>
            <div
              id="test-collapseOne"
              class="accordion-collapse border-0 collapse"
              aria-labelledby="test-headingOne"
              data-bs-parent="#testAccordion"
            >
              <div class="accordion-body py-4 px-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tests.map((test) => (
                    <div className="flex items-center justify-start hover:-translate-y-1 transition-all cursor-pointer">
                      <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2" />
                      <h5 className="text-blue-secondary">{test}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-16 mx-auto">
        <InsuranceSlider />
      </div>
    </Fragment>
  );
};

export default Services;
