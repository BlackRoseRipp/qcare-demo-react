import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Sinus = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/photo-displeased-young-girl-rubs.jpg)] bg-top bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Pink Eye & Urgent Care
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8 px-2 mx-auto w-fit">
                Visit QCare mobile care units throughout New York City for all
                your pink eye needs
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
            By scheduling a pink eye visit at Qcare, we can determine if your
            symptoms are due to a pink eye or something else, like seasonal{" "}
            <a
              href="/allergies-asthma"
              className="underline-animation text-blue-logo-primary hover:text-blue-logo-secondary after:bg-blue-logo-secondary"
            >
              allergies
            </a>
            , and provide the appropriate treatments to help you or your loved
            one improve.
            <br />
            <br />
            Our doctors, physician assistants, and nurse practitioners have
            extensive education and experience in pink eye. They’ll help you
            determine the right course of treatment to help you feel your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          What is Pink Eye?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Pink eye, also known as conjunctivitis, is an inflammation of the
          conjunctiva, which is the thin, clear tissue that lines the inside of
          the eyelid and covers the white part of the eye. It is called pink eye
          because the inflammation can cause the eye to appear pink or reddish.
        </p>
        <div className="flex flex-col items-center justify-center mt-8 w-fit mx-auto">
          <p className="lg:text-lg text-blue-logo-primary text-center mb-4">
            Common symptoms of pink eye include:
          </p>
          <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
            <div className="flex items-start justify-start w-fit my-1">
              <IoIosMedical className="text-2xl text-blue-logo-secondary" />
              <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                Redness in the white of the eye or inner eyelid
              </h5>
            </div>
            <div className="flex items-start justify-start w-fit my-1">
              <IoIosMedical className="text-2xl text-blue-logo-secondary" />
              <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                Eye Itching or burning sensation
              </h5>
            </div>
            <div className="flex items-start justify-start w-fit my-1">
              <IoIosMedical className="text-2xl text-blue-logo-secondary" />
              <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                Excessive tearing
              </h5>
            </div>
            <div className="flex items-start justify-start w-fit my-1">
              <IoIosMedical className="text-2xl text-blue-logo-secondary" />
              <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                Swollen eyelids
              </h5>
            </div>
            <div className="flex items-start justify-start w-fit my-1">
              <IoIosMedical className="text-2xl text-blue-logo-secondary" />
              <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                Light sensitivity
              </h5>
            </div>
            <div className="flex items-start justify-start w-fit my-1">
              <IoIosMedical className="text-2xl text-blue-logo-secondary" />
              <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                Thick, yellow or greenish discharge from the eye, especially in
                bacterial cases
              </h5>
            </div>
          </div>
        </div>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Pink eye can be caused by a viral or bacterial infection, or by an
          allergic reaction. It’s highly contagious, spreading easily from
          person to person through direct contact with the infected person's eye
          secretions or objects that have come into contact with those
          secretions.
          <br />
          <br />
          Treatment for pink eye depends on the cause. Viral pink eye usually
          resolves on its own within a week or two. Bacterial pink eye is
          treated with antibiotic eye drops or ointments.
          <br />
          <br />
          Allergic conjunctivitis can be treated with allergy medications or eye
          drops.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex justify-center items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl mx-auto overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/young-businesswoman-with-cold-fl.jpg"
                  alt="guy-coughing"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-col justify-center lg:items-start items-center lg:mx-0 mx-2">
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              To prevent the spread of pink eye, it's important to practice good
              hygiene, such as washing your hands frequently and avoiding
              touching your eyes. Additionally, avoid sharing personal items
              like towels or eye makeup with others, and wash your hands and any
              shared items frequently.
              <br />
              <br />
              If you have pink eye, avoid close contact with others and consider
              staying home from work or school until your symptoms improve.
              <br />
              <br />
              It's important to see a doctor for pink eye if you are
              experiencing severe symptoms or if your symptoms do not improve
              after a few days of self-care. Schedule an appointment for sinus
              care at a QCare mobile station located throughout New York City
              anytime. We’re here to help.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              Why Pink Eye Care Is Important
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              Pink eye care is important because conjunctivitis is highly
              contagious and easily spread from person to person, especially in
              settings such as schools or daycares. Take steps to prevent the
              spread of the infection and seek treatment if you have symptoms.
              <br />
              <br />
              If left untreated, pink eye can cause complications such as
              corneal ulcers or scarring, which can lead to vision problems.
              Additionally, certain types of conjunctivitis, such as those
              caused by a herpes virus, can cause serious eye problems and
              require prompt treatment.
              <br />
              <br />
              Treatment for pink eye can help alleviate symptoms and prevent the
              spread. This may include using antibiotics to treat bacterial
              infections or antihistamines or decongestants to treat allergic
              conjunctivitis. In some cases, your doctor may recommend eye drops
              or ointments to help soothe the eye and reduce inflammation.
              <br />
              <br />
              The medical professionals at Qcare are here to help you understand
              why you’re ill and get you on the path to healing.
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to Expect at a Visit for Pink Eye
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8 mb-4">
              When you see a doctor about symptoms of pink eye, they will
              perform a physical examination, including an eye exam, to look for
              signs of conjunctivitis. They may also take a sample of the
              discharge from your eye to test for the presence of bacteria or
              viruses.
              <br />
              <br />
              Depending on the exam results, the doctor may refer you to an eye
              specialist if your they suspect a more serious underlying
              condition.
              <br />
              <br />
              If you have symptoms of a sinus infection that aren’t getting
              better, don’t wait. Make an appointment to see a doctor to rule
              out something more serious — or get treatment if necessary.
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

export default Sinus;
