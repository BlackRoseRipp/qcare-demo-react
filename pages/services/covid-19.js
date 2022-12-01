import { Fragment } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { GiVial } from "react-icons/gi";
import { IoIosMedical } from "react-icons/io";
import { MdCoronavirus } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Covid = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/pexels-cdc-3993212.jpg)] bg-center bg-no-repeat bg-cover">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-56">
              <h1 className="text-white heading font-semibold text-6xl text-center">
                COVID-19 Testing & Care at QCare
              </h1>
              <h3 className="text-white font-medium text-2xl text-center mt-12">
                Visit Qcare mobile care stations throughout New York City for
                all your COVID-19 testing and care needs
              </h3>
              <div className="mt-16 text-center w-full">
                <a
                  href="/locations"
                  className="btn-primary text-white border-yellow-logo hover:bg-yellow-logo font-medium border-2 uppercase"
                >
                  Schedule an appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-24">
        <div className="container mx-auto">
          <h2 className="text-blue-primary font-semibold heading text-4xl text-center">
            Schedule an appointment with Qcare if you need COVID-19 testing or
            treatment in the New York City area.
          </h2>
          <p className="text-blue-primary text-center text-2xl mt-8">
            We offer the following services:
          </p>
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary sm:px-16 px-8 py-8 w-fit mx-auto">
            <div className="flex flex-col items-start justify-center w-fit mx-auto">
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  COVID-19 Rapid Antigen Test
                </h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  COVID-19 Antibody Testing (IgG/IgM)
                </h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">COVID-19 PCR Testing</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Immune Booster shot</h5>
              </div>
              <div className="flex items-center my-2 hover:-translate-y-1 transition-all cursor-pointer">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  Monoclonal Antibody Treatment
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-center text-blue-primary font-semibold text-4xl heading">
          When to be seen for COVID-19
        </h2>
        <p className="text-center text-blue-secondary font-medium text-lg mt-8 md:w-2/3 w-11/12 mx-auto">
          If you’re experiencing any of the common symptoms of COVID-19 or have
          been in close contact with someone who tested positive, you should get
          tested.
          <br />
          <br />
          You can get a COVID-19 test by making an appointment online or
          visiting our walk-in mobile stations. At Qcare, we offer three
          different types of testing:
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:w-3/4 mx-auto mt-16">
          <div className="flex flex-col items-center justify-start">
            <div className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4 transition-all duration-300 cursor-pointer">
              <SiSpeedtest className="text-6xl" />
            </div>
            <div className="text-blue-primary hover:text-red-secondary text-lg text-center font-medium transition-all duration-300 cursor-pointer">
              Rapid testing
            </div>
            <p className="text-sm text-blue-secondary text-center mt-8 w-3/4 mx-auto">
              This is a nasopharyngeal swab test for COVID-19. The test results
              are available in as little as 24 hours.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4 transition-all duration-300 cursor-pointer">
              <GiVial className="text-6xl" />
            </div>
            <div className="text-blue-primary hover:text-red-secondary text-lg text-center font-medium transition-all duration-300 cursor-pointer">
              PCR testing
            </div>
            <p className="text-sm text-blue-secondary text-center mt-8 w-3/4 mx-auto">
              The nasopharyngeal swab is sent to a local lab to check for
              COVID-19. The PCR test takes a closer look at the organisms on the
              swab. It takes longer to get your results back but may be more
              accurate than a rapid test.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="p-10 border-2 border-blue-logo-primary text-blue-logo-primary rounded-full hover:scale-110 mb-4 transition-all duration-300 cursor-pointer">
              <MdCoronavirus className="text-6xl" />
            </div>
            <div className="text-blue-primary hover:text-red-secondary text-lg text-center font-medium transition-all duration-300 cursor-pointer">
              Antibody test
            </div>
            <p className="text-sm text-blue-secondary text-center mt-8 w-3/4 mx-auto">
              We will draw a sample of your blood to check for COVID-19
              antibodies. Having antibodies means your body has been exposed to
              COVID-19 and has fought it off. An antibody test is appropriate
              for someone who has not been vaccinated and suspects they’ve had
              COVID-19 before.
            </p>
          </div>
        </div>
        <h3 className="text-blue-primary font-medium text-2xl text-center mt-16">
          Should you schedule a doctor’s visit if you have COVID-19?
        </h3>
        <p className="text-blue-logo-primary text-center text-lg mt-8 md:w-2/3 w-11/12 mx-auto">
          COVID-19 is a highly contagious virus. To prevent the spread of
          illness, call Qcare before coming to the walk-in clinic. A medical
          professional will talk to you about your symptoms and whether you need
          to be seen in person.
        </p>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-repeat-space bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary heading text-4xl font-semibold text-center">
              What to expect at a COVID-19 visit
            </h2>
            <p className="text-center text-blue-primary font-medium mt-12 text-xl md:w-2/3 w-11/12 mx-auto">
              If you need to come in for a COVID-19 visit, the QCare medical
              professionals will gather information to determine the best
              treatment for you.
              <br />
              <br />
              We’ll evaluate your vital signs, including your oxygen levels. A
              clinician will do a physical exam and listen to your lungs and
              evaluate your breathing.
              <br />
              <br />
              Based on their findings, your provider will recommend the best
              course of treatment.
              <br />
              <br />
              The best way to prevent getting sick with COVID-19 is to get
              vaccinated. The{" "}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/stay-up-to-date.html"
                className="text-blue-logo-primary hover:text-blue-secondary underline-animation after:bg-blue-secondary"
              >
                CDC recommends
              </a>{" "}
              all people above 5 years old get the primary series and a booster
              shot. Children between 6 months and 4 years old should get the
              primary series.
              <br />
              <br />
              Visit our{" "}
              <a
                href="https://staging.ovalab.com/vaccines"
                className="text-blue-logo-primary hover:text-blue-secondary underline-animation after:bg-blue-secondary"
              >
                Vaccines and Immunization
              </a>{" "}
              page for more information about your COVID-19 shot or booster.
            </p>
            <div className="mt-12 text-center">
              <a
                href="/locations"
                className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary border-2 font-medium uppercase sm:inline hidden"
              >
                Schedule your covid-19 shot here
              </a>
              <a
                href="/locations"
                className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary border-2 font-medium uppercase sm:hidden inline"
              >
                Schedule an appointment
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-center text-blue-primary font-semibold text-4xl">
          What are symptoms of COVID-19?
        </h2>
        <p className="text-blue-logo-primary font-medium text-xl text-center mt-8 md:w-2/3 w-11/12 mx-auto">
          COVID-19 is an illness caused by a newly discovered coronavirus. The
          virus is highly contagious and is spread between people through close
          contact.
          <br />
          <br />
          People who get sick with COVID-19 may feel a range of symptoms that
          can vary from mild cold symptoms to breathing problems that require
          hospitalization.
          <br />
          <br />
          If you have diabetes, heart problems, or lung disease, you may be at
          higher risk of getting sick from COVID-19.
        </p>
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-12 mt-24">
          <div className="flex items-center justify-center order-1">
            <img
              src="/img/pexels-andrea-piacquadio-portrait.jpg"
              className="w-5/6 mx-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start justify-center order-2">
            <p className="text-blue-logo-primary font-medium text-center lg:text-start mb-12 w-full">
              The CDC says{" "}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/stay-up-to-date.html"
                className="text-blue-logo-secondary hover:text-blue-secondary underline-animation after:bg-blue-secondary"
              >
                symptoms
              </a>{" "}
              of COVID-19 include:
            </p>
            <div className="flex flex-col items-start justify-center w-fit md:mx-0 mx-auto">
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Fever or chills
                </p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">Cough</p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">Headache</p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Sore throat
                </p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Shortness of breath
                </p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Difficulty breathing
                </p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">Fatigue</p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Muscle or body aches
                </p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  New loss of taste or smell
                </p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  New loss of taste or smell
                </p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Nausea, vomiting, or diarrhea
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center order-4 lg:order-3">
            <p className="text-blue-logo-primary font-medium text-center lg:text-start mb-12">
              If you’re experiencing{" "}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
                className="text-blue-logo-secondary hover:text-blue-secondary underline-animation after:bg-blue-secondary"
              >
                warning signs
              </a>{" "}
              of COVID-19, call 911 or go to the Emergency Room. You need
              immediate medical help in you’re experiencing:
            </p>
            <div className="flex flex-col items-start justify-center w-fit md:mx-0 mx-auto">
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Difficulty breathing
                </p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Persistent pain or pressure in the chest
                </p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  New confusion
                </p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Loss of consciousness
                </p>
              </div>
              <div className="flex items-center md:justify-start justify-center my-2 w-full">
                <IoIosMedical className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Pale, gray, or blue-colored skin, lips, or nail beds
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center order-3 lg:order-4">
            <img
              src="/img/pexels-shvets-production-portrait.jpg"
              className="w-5/6 mx-auto rounded-xl"
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="/locations"
            className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary border-2 font-medium uppercase"
          >
            Schedule an appointment
          </a>
        </div>
      </div>

      <div className="py-24 container mx-auto">
        <InsuranceSlider />
      </div>
    </Fragment>
  );
};

export default Covid;
