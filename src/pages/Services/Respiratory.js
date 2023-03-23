import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Respiratory = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/pexels-evg-kowalievska-3869390.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Respiratory Illness Care at QCare
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8 px-2 mx-auto w-fit">
                Visit QCare mobile care units throughout New York City for
                respiratory illness care
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
            By scheduling a respiratory illness care visit at Qcare, we can
            assess your symptoms and provide the appropriate treatments to help
            you improve. Our healthcare providers will review your medical
            history and symptoms and may perform a physical exam to determine if
            you have a respiratory illness and provide treatment.
            <br />
            <br />
            Our team of experienced healthcare professionals is here to provide
            you with the care you need to get back to feeling your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          What is a respiratory illness?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Respiratory illnesses are a group of conditions that affect the lungs
          and airways, causing symptoms such as coughing, shortness of breath,
          wheezing, and chest tightness. These illnesses can be caused by
          viruses, bacteria, or other irritants, and can range from mild to
          severe.
          <br />
          <br />
          There are many different types of respiratory illnesses that can
          affect the upper respiratory system (including the nose, sinuses, and
          throat) or the lower respiratory system (including the trachea,
          bronchi, and lungs).
        </p>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Following are some examples of common respiratory illnesses we treat
          at Qcare mobile clinics in New York City:
        </p>
        <div className="flex flex-col justify-center items-start lg:w-1/2 w-fit lg:mx-auto mx-8 mt-4">
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              <a
                href="/cold-&-flu"
                className="text-blue-primary hover:text-blue-logo-primary underline-animation after:bg-blue-logo-primary"
              >
                Cold
              </a>
              : A cold is a viral infection that affects the upper respiratory
              system, causing symptoms such as runny nose, congestion, cough,
              and sore throat.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              <a
                href="/cold-&-flu"
                className="text-blue-primary hover:text-blue-logo-primary underline-animation after:bg-blue-logo-primary"
              >
                Flu
              </a>
              : The flu is a viral infection that affects the respiratory system
              and can cause fever, body aches, cough, and fatigue.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              <a
                href="/covid-19"
                className="text-blue-primary hover:text-blue-logo-primary underline-animation after:bg-blue-logo-primary"
              >
                COVID-19
              </a>
              : an illness caused by a newly discovered coronavirus. The virus
              is highly contagious and is spread between people through close
              contact.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Bronchitis: Bronchitis is an inflammation of the bronchial tubes,
              which can cause cough, chest discomfort, and difficulty breathing.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Pneumonia: Pneumonia is an infection of the lungs that can be
              caused by viruses, bacteria, or fungi. It can cause symptoms such
              as fever, cough, chest pain, and shortness of breath.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              <a
                href="/allergies-asthma"
                className="text-blue-primary hover:text-blue-logo-primary underline-animation after:bg-blue-logo-primary"
              >
                Asthma
              </a>
              : Asthma is a chronic respiratory condition that causes
              inflammation and narrowing of the airways, making it difficult to
              breathe. Symptoms can include wheezing, coughing, and shortness of
              breath.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              COPD: Chronic obstructive pulmonary disease (COPD) is a chronic
              respiratory condition that causes progressive lung damage, making
              it difficult to breathe. Symptoms can include cough, wheezing, and
              shortness of breath.
            </h5>
          </div>
        </div>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          These are just a few examples of the many different types of
          respiratory illnesses that can affect your health. If you are
          experiencing symptoms of a respiratory illness, it’s important to seek
          medical care to receive an accurate diagnosis and appropriate
          treatment.
        </p>
        <h2 className="text-2xl lg:text-4xl mt-24 font-medium text-center text-blue-primary">
          What are symptoms of respiratory illnesses?
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex justify-center items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl mx-auto overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/pexels-towfiqu-barbhuiya-1150147.jpg"
                  alt="guy-coughing"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                The symptoms of a respiratory illness can vary depending on the
                type of illness and the severity of the condition. However,
                there are some common symptoms that can indicate a respiratory
                illness.
              </p>
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                These include:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Cough: A persistent cough that lasts for several days or
                    weeks can be a symptom of a respiratory illness.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Shortness of breath: Difficulty breathing, feeling like you
                    can't catch your breath or that you're not getting enough
                    air, may also indicate a respiratory illness.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Chest pain or tightness: Chest discomfort, pressure, or
                    tightness can be a symptom of a respiratory illness,
                    particularly one that affects the lower respiratory system.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Runny or stuffy nose: A runny or stuffy nose, along with
                    other symptoms such as cough or sore throat, can be a sign
                    of a respiratory illness affecting the upper respiratory
                    system.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Sore throat: A sore throat that is accompanied by other
                    symptoms such as cough or fever can indicate a respiratory
                    illness.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Fever: A fever can be a sign of a respiratory illness,
                    particularly if it is accompanied by other symptoms such as
                    cough or shortness of breath.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Fatigue: Feeling tired or fatigued can be a symptom of a
                    respiratory illness, particularly if it is accompanied by
                    other symptoms such as cough or fever.
                  </h5>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              If you are experiencing any of these symptoms, it is important to
              seek medical care to receive an accurate diagnosis and appropriate
              treatment.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              What is respiratory illness care?
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              Because respiratory illnesses share many symptoms, it can be
              difficult (or even impossible) to tell the difference between them
              based on symptoms alone. Special tests can tell you if you’re sick
              with the flu, RSV or COVID-19.
              <br />
              <br />
              At Qcare, we understand that respiratory illnesses can be
              uncomfortable and inconvenient. That's why we offer convenient and
              efficient care that fits into your busy schedule. Our clinic is
              open seven days a week, and no appointment is necessary. We accept
              most insurance plans, and our self-pay options are affordable and
              transparent.
              <br />
              <br />
              If you are experiencing symptoms of a respiratory illness, don't
              wait to seek treatment. Visit Qcare today and get the care you
              need to feel better.
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to expect at a visit for respiratory care visit:
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8 mb-4">
              When you see a doctor about respiratory illness symptoms, they
              will start by getting a medical history and doing a physical exam.
              The doctor will check your lymph nodes, sinuses, throat, ears and
              listen to your lungs and heart.
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
              If you have respiratory symptoms that aren’t getting better, don’t
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

export default Respiratory;
