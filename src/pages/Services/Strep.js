import { Fragment } from "react";
import { IoIosMedical } from "react-icons/io";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Strep = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/pexels-pavel-danilyuk-6753158.jpg)] bg-top bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Strep Throat Testing & Urgent Care
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8">
                Visit QCare mobile care units throughout New York City for all
                your sore and strep throat care needs.
              </h3>
              <div className="mt-16 text-center w-full">
                <a
                  href="/locations"
                  className="btn-primary text-white border-yellow-logo hover:bg-yellow-logo font-medium border-2 uppercase"
                >
                  Find a location near you
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10">
        <div className="container mx-auto py-24">
          <h4 className="text-blue-primary text-center font-medium text-xl lg:text-2xl lg:w-2/3 w-5/6 mx-auto">
            By scheduling a visit at urgent care, we can determine if your
            symptoms are due to strep throat or something else and provide the
            appropriate treatments to help you improve.
            <br />
            <br />
            Our doctors, physician assistants and nurse practitioners have
            extensive education and experience in strep throat care. They’ll
            help you determine the right course of treatment to help you feel
            your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          What is Strep Throat Care?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Because viruses and strep throat share many symptoms, it can be
          difficult to tell the difference between them based on symptoms alone.
          Special tests can tell if a person has strep throat.
          <br />
          <br />
          The first signs that you might have strep throat include a sore
          throat, swollen lymph nodes, and a fever. When you come to Qcare,
          you’ll be seen by a medical professional who will look for other
          symptoms.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex justify-center items-center">
            <img
              src="/img/compressed-files/pexels-mart-production-7641242.jpg"
              className="w-4/5 rounded-xl mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                Symptoms of strep throat include:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Swollen tonsils
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Tiny red spots on the back of the roof of your mouth
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    White spots on your throat
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Aches
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Nausea or vomiting
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Headache or stomach ache
                  </h5>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              If you’re diagnosed with strep throat, your doctor will give you
              medication for treatment.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              Why You Need Strep Throat Care
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              Strep throat is a bacterial infection that needs treatment, or it
              could cause complications. Untreated strep can lead to kidney
              problems or rheumatic fever. Rheumatic fever can lead to inflamed,
              painful joints, heart valve damage, or a rash.
              <br />
              <br />
              Untreated strep throat can also result in infections that spread
              to the tonsils, ears, sinuses, or blood, which can be extremely
              dangerous.
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to Expect at a Strep Throat Visit
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8">
              If you think you or your child has strep throat, stop by one of
              our Qcare urgent care stations. Our medical professionals can do a
              quick throat culture to see if you do have strep or if we need to
              treat a different illness instead.
              <br />
              <br />
              Your doctor will start by doing a physical exam of the throat,
              mouth, and ears, as well as listening to your lungs. This helps us
              look for signs of strep throat and rule out other illnesses with
              similar symptoms.
              <br />
              <br />
              From there, your doctor may do a rapid antigen test, which
              includes a swab of your throat and can let us know if there are
              step bacteria in just a few minutes. Other tests also include
              swabbing your throat but take a day or more because they are done
              in a lab.
              <br />
              <br />
              If you or your child tests positive for strep throat, we’ll start
              with an antibiotic medication, which should help you feel better
              in a day or two. If there’s no improvement within 48 hours, let us
              know so we can follow up with additional testing.
            </p>
          </div>
          <div className="text-center mt-16">
            <a
              className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary border-2 font-medium uppercase"
              href="/locations"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <InsuranceSlider />
      </div>
    </Fragment>
  );
};

export default Strep;
