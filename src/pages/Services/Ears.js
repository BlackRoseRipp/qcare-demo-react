import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Ears = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/hand-touching-throat-patient.jpg)] bg-top bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Ears, Nose and Throat Care at QCare
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8 lg:mx-auto mx-2 w-fit">
                Visit QCare mobile care units throughout New York City for all
                your ears, nose and throat (ENT) care needs.
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
            By scheduling an ENT care visit at Qcare, we can assess your ear and
            respiratory symptoms to provide the appropriate treatments to help
            you improve.
            <br />
            <br />
            Our doctors, physician assistants, and nurse practitioners have
            extensive education and experience in ENT care. They’ll help you
            determine the right course of treatment to help you feel your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          What is ears, nose and throat care?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Ears, nose and throat care, also known as ENT or otolaryngology, is a
          medical specialty that focuses on the diagnosis and treatment of
          conditions and disorders affecting the ears, nose, throat and related
          structures of the head and neck.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex justify-center items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl mx-auto overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/sad-ill-asian-girl-staying-self-.jpg"
                  alt="couple-in-bed"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start">
                Many conditions related to the ear, nose and throat will require
                care from an ENT specialist. However, some issues can be treated
                at Qcare.
              </p>
              <div className="flex flex-col justify-center items-start w-fit my-4 lg:mx-0 mx-auto">
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Ear infections
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Sinus infections
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Strep throat
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Allergies
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Minor injuries
                  </h5>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
              While staff at Qcare mobile stations can provide evaluation and
              treatment for many ENT problems, there are some conditions that
              may require more specialized care or follow-up with an ENT
              specialist. If the condition is severe or potentially
              life-threatening, the urgent care provider may refer the patient
              to the emergency room for further treatment.
              <br />
              <br />
              The team at Qcare can help you get a referral.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              Why you need ears, nose and throat care:
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              It's important to seek care from a healthcare provider when you
              experience symptoms that indicate a possible ear, nose, or throat
              (ENT) problem. Some of the signs and symptoms that may warrant
              medical attention include:
            </p>
            <div className="flex flex-col justify-center items-start lg:w-1/2 w-fit lg:mx-auto mx-8 mt-12">
              <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 w-5/6 mx-auto mb-4">
                Ear pain or drainage: Ear pain, drainage or a decrease in
                hearing
              </p>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Sinus pain or pressure: Facial pain or pressure, congestion or
                  other symptoms of a sinus infection
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Sore throat: A sore throat that is severe, accompanied by a
                  fever, or lasts for more than a few days
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Nasal congestion: Persistent nasal congestion or other allergy
                  symptoms
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Difficulty swallowing: Difficulty swallowing or a sensation of
                  something being stuck in your throat
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Hoarseness: Voice changes that last for more than a few days
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Head or neck pain: Severe head or neck pain
                </h5>
              </div>
            </div>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              If you have any concerns about your ear, nose, or throat symptoms,
              it's important to seek care from a healthcare provider who can
              evaluate your condition and recommend appropriate treatment.
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to expect at a visit for an ears, nose and throat visit:
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8 mb-4">
              If you are experiencing ear, nose or throat pain and decide to
              visit Qcare, here's what you can generally expect:
            </p>
            <div className="flex flex-col justify-center items-start lg:w-3/4 w-fit mx-auto">
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  One of our healthcare providers will ask about your symptoms
                  and medical history.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  A clinician will then conduct a physical exam to check for
                  signs of any underlying medical conditions that may be causing
                  your discomfort. This may include using a special instrument
                  to look inside your ears, nose, and throat.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  Diagnostic tests: Depending on your symptoms, the medical
                  professional may order diagnostic tests such as hearing tests,
                  allergy tests, or imaging tests.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  Diagnosis and treatment: Based on your symptoms and test
                  results, the medical professional will provide you with a
                  diagnosis and recommend a course of treatment. This may
                  include medication, lifestyle modifications, or surgery when
                  necessary.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  Follow-up: Before you leave, the medical professional will
                  provide you with instructions on how to manage your symptoms
                  at home and may recommend a follow-up visit with an ENT
                </h5>
              </div>
            </div>
            <p className="text-blue-primary text-lg text-center mt-8">
              It's important to note that the specific course of treatment for
              ear, nose and throat pain at an urgent care facility will vary
              depending on the cause and severity of your symptoms. Qcare staff
              will work to provide you with efficient and effective care to help
              alleviate your discomfort.
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

export default Ears;
