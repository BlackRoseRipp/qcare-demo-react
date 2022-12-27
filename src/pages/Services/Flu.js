import { Fragment } from "react";
import { IoIosMedical } from "react-icons/io";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Flu = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/pexels-cottonbro-studio-4113974.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Cold and Flu Testing & Urgent Care
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8">
                Visit QCare mobile care units throughout New York City for all
                your cold and flu care needs
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
            By scheduling a cold or flu visit at Qcare, we can determine if your
            symptoms are due to a common cold, flu, or something else and
            provide the appropriate treatments to help you improve.
            <br />
            <br />
            Our doctors, physician assistants, and nurse practitioners have
            extensive education and experience in cold and flu care. They’ll
            help you determine the right course of treatment to help you feel
            your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          What is Cold and Flu Care?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Because colds and flu share many symptoms, it can be difficult (or
          even impossible) to tell the difference between them based on symptoms
          alone. Special tests can tell you if you’re sick with the flu.
          <br />
          <br />
          Many times, having a cold or the flu doesn’t require a trip to the
          doctor. However, sometimes the illness is more serious.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex justify-center items-center">
            <img
              src="/img/compressed-files/pexels-gustavo-fring-3985219.jpg"
              className="w-4/5 rounded-xl mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                If you have any of the following symptoms, you’ll want to
                schedule an appointment for cold and flu care:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    You’re short of breath or have chest pain
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    You have a fever (100.4 or higher) that doesn’t get better
                    in a couple of days
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    You can’t keep water or fluids down
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Swallowing causes significant pain
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Your cough won’t get better after 2-3 weeks
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Your congestion or headache isn’t getting better
                  </h5>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              Of course, if you have concerns about your health, you can make an
              appointment with QCare anytime. We’re here to help.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              Why You Need Cold and Flu Care
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              While a cold or flu often clears up on its own, sometimes the
              symptoms are a sign of something more significant. For example,
              you could have COVID complications, whooping cough or an
              infection. When left untreated, these can cause significant
              problems and even death.
              <br />
              <br />
              Don’t feel like you need to tough out a cold or flu alone. The
              medical professionals at Qcare are here to help you understand why
              you’re ill and get you on the path to healing.
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to Expect at a Visit For Cold or Flu
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8">
              When you see a doctor about cold or flu symptoms, they will start
              by getting a medical history and doing a physical exam. The doctor
              will check your lymph nodes, sinuses, throat, ears and listen to
              your lungs and heart.
              <br />
              <br />
              You will likely be given a swab test that will check for COVID,
              RSV, and the two common types of flu. These results may come back
              in just a few minutes, or you may be notified the next day.
              <br />
              <br />
              Depending on the exam results, the doctor may refer you to a
              specialist like an ear-nose-and-throat (ENT) doctor, or they may
              prescribe antibiotics or antiviral treatment.
              <br />
              <br />
              If you have cold or flu symptoms that aren’t getting better, don’t
              wait. Make an appointment to see a doctor to rule out something
              more serious — or get treatment if necessary.
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

export default Flu;
