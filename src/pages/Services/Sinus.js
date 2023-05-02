import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Sinus = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/pexels-karolina-grabowska-597973.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Sinus Infections & Urgent Care
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8 px-2 mx-auto w-fit">
                Visit QCare mobile care units throughout New York City for all
                your sinus care needs
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
            By scheduling a sinus infection visit at Qcare, we can determine if
            your symptoms are due to a common cold, flu, or something else and
            provide the appropriate treatments to help you improve.
            <br />
            <br />
            Our doctors, physician assistants, and nurse practitioners have
            extensive education and experience in sinus care – as well as any
            <a
              href="/ear-nose-&-throat"
              className="underline-animation text-blue-logo-primary hover:text-blue-logo-secondary after:bg-blue-logo-secondary"
            >
              ear, nose and throat care
            </a>
            . They’ll help you determine the right course of treatment to help
            you feel your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          What is Sinus Care?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          A sinus infection, also known as sinusitis, occurs when the tissue
          lining the sinuses becomes inflamed and swollen, often due to a viral
          or bacterial infection. Because sinus infections share many symptoms
          with{" "}
          <a
            href="/cold-&-flu"
            className="underline-animation text-blue-logo-primary hover:text-blue-logo-secondary after:bg-blue-logo-secondary"
          >
            colds
          </a>{" "}
          and{" "}
          <a
            href="/allergies-asthma"
            className="underline-animation text-blue-logo-primary hover:text-blue-logo-secondary after:bg-blue-logo-secondary"
          >
            allergies
          </a>
          , it can be difficult (or even impossible) to tell the difference
          between them based on symptoms alone.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex justify-center items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl mx-auto overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/pexels-mikael-blomkvist-4153229.jpg"
                  alt="guy-coughing"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                Following are common symptoms of a sinus infection:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Facial pain or pressure
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Congestion
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Thick, colored mucus
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Cough
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Fatigue
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Headache
                  </h5>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              It's important to see a doctor if your sinus infection lasts
              longer than 10 days or if you have a fever or severe pain. If your
              symptoms aren’t getting better, you’ll want to schedule an
              appointment for sinus care at a QCare mobile station located
              throughout New York City anytime. We’re here to help.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              Why Sinus Infection Care Is Important
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              It can be difficult to determine whether a sinus infection is
              caused by bacteria or a virus because the symptoms of both types
              of infections are very similar. A clinician at Qcare can assess
              your symptoms and use a sinus culture to determine if a sinus
              infection is bacterial.
              <br />
              <br />
              Your provider may recommend over-the-counter medications, such as
              ibuprofen or acetaminophen to reduce sinus pain and headache.
              Decongestant medications such as pseudoephedrine can help to
              reduce congestion.
              <br />
              <br />
              If the sinus infection is caused by bacteria, your doctor may
              prescribe antibiotics to help clear up the infection.
              <br />
              <br />
              Don’t feel like you need to tough out a sinus infection alone. The
              medical professionals at Qcare are here to help you understand why
              you’re ill and get you on the path to healing.
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to Expect at a Visit for a Sinus Infection
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8 mb-4">
              When you see a doctor about sinus infection symptoms, they will
              start by getting a medical history and doing a physical exam. The
              doctor will check your lymph nodes, sinuses, throat, ears and
              listen to your lungs and heart.
              <br />
              <br />
              You will likely be given a swab test that will check for COVID,
              RSV, and the two common types of flu. These results may come back
              in just a few minutes, or you may be notified the next day.
              <br />
              <br />
              Your provider may also do a sinus culture to test your mucus.
              <br />
              <br />
              Depending on the exam results, the doctor may refer you to a
              specialist like an ear-nose-and-throat (ENT) doctor, or they may
              prescribe antibiotics or antiviral treatment.
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
