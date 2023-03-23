import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const UTI = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/pexels-polina-zimmerman-3958601.jpg)] bg-top bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                UTI Care at QCare
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8 px-2 mx-auto w-fit">
                Visit QCare mobile care units throughout New York City for
                urinary tract infection (UTI) care
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
            By scheduling a UTI care visit at Qcare, we can assess your symptoms
            and provide the appropriate treatments to help you improve. Our
            healthcare providers will review your medical history and symptoms
            and may perform a physical exam to determine if you have a UTI.
            <br />
            <br />
            Our team of experienced healthcare professionals is here to provide
            you with the care you need to get back to feeling your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          What is a UTI?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          A urinary tract infection occurs when germs enter the urinary system,
          which includes the kidneys, bladder, ureters and urethra. The urinary
          tract is sterile, so germs that collect in the area can cause
          infection.
        </p>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Anyone can get a UTI, but women are more likely to get UTIs than men.
          This is because the urethra in females is shorter and closer to the
          anus. Common causes of UTIs include:
        </p>
        <div className="grid lg:grid-cols-2 lg:w-1/2 w-fit lg:mx-auto mx-8 mt-4">
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Intercourse
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Constipation
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Underwear that traps moisture
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Feminine products that aren’t changed frequently enough
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Uncontrolled diabetes
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Menopause
            </h5>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex justify-center items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl mx-auto overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/pexels-andrea-piacquadio-846080.jpg"
                  alt="girl-enjoying-morning"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                UTIs typically result from E.coli in stool that enters the
                urethra.
              </p>
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                The symptoms of a UTI include:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Pain during urination
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Having to urinate frequently
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Lower belly pain
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Cloudy urine
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Red or pink-colored urine
                  </h5>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              Unlike other types of infections, UTIs in women don’t cause
              changes to vaginal discharge. The standard way of diagnosing a UTI
              is through a laboratory test called a urine culture.
              <br />
              <br />
              Your provider may also do a full body exam, including a pelvic
              exam, and ask you about your history. Urinary tract infections are
              treated with antibiotics.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              What causes chronic UTI?
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              Many women get one-off UTIs that go away with antibiotics. They’re
              considered isolated infections if another infection doesn’t occur
              for at least six months.
              <br />
              <br />
              If you have three or more UTIs in a year, you may be diagnosed
              with chronic UTI.
              <br />
              <br />
              Chronic UTI is a difficult condition to manage and can lead to
              other health problems. Untreated UTIs can cause bladder infections
              or bloodstream infections. This can cause serious illness or
              death.
            </p>
            <div className="flex flex-col justify-center items-start lg:w-1/2 w-fit lg:mx-auto mx-8 mt-12">
              <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mb-4">
                Certain health conditions put you at risk for chronic UTI,
                including:
              </p>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Diseases that cause muscle weakness
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Weakened immune system, or trouble fighting off infection
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Diabetes
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Kidney disease or history of kidney transplants
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Bladder disease
                </h5>
              </div>
            </div>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              Elderly and post-menopausal women are at higher risk for chronic
              UTIs. As women age, their estrogen levels drop. Estrogen plays a
              role in creating an infection-free environment in the urinary and
              reproductive systems.
              <br />
              <br />
              Living in poverty is a risk factor for chronic UTI. A study found
              a direct link between Medicaid use and multi-drug resistant (MDR)
              UTIs. MDR infections are difficult to manage because the germ does
              not respond to different types of antibiotics.
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to expect at a visit for UTI visit:
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8 mb-4">
              If you’re experiencing symptoms of a urinary tract infection
              (UTI), an urgent care appointment at Qcare may be the fastest and
              most convenient way to get the care you need. Here's what you can
              expect during your appointment:
            </p>
            <div className="flex flex-col justify-center items-start lg:w-3/4 w-fit mx-auto">
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  1. Walk into one of our mobile stations or schedule an
                  appointment.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  2. Medical history and symptoms: A healthcare provider will
                  review your medical history and ask about your symptoms,
                  including when they started and how severe they are. They may
                  also ask about any medications you are currently taking.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  3. Physical exam: The healthcare provider will perform a
                  physical exam, which may include checking your temperature,
                  blood pressure and heart rate. They may also examine your
                  abdomen and lower back to check for tenderness or swelling.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  4. Urinalysis: To confirm a UTI diagnosis, the healthcare
                  provider will likely ask you to provide a urine sample. They
                  will test the sample for the presence of bacteria, blood, and
                  other substances that may indicate an infection.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  5. Treatment plan: If the healthcare provider confirms that
                  you have a UTI, they will work with you to develop a
                  personalized treatment plan. This may include antibiotics to
                  kill the bacteria causing the infection, as well as
                  over-the-counter pain relievers to help manage your symptoms.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  6. Follow-up: Before you leave, the healthcare provider will
                  give you instructions on how to take your medication and
                  manage your symptoms at home. They may also recommend
                  follow-up testing to ensure that the infection has cleared up
                  completely.
                </h5>
              </div>
            </div>
            <p className="text-blue-primary text-lg text-center mt-8">
              Overall, you can expect a quick and efficient appointment at Qcare
              for UTI diagnosis and treatment. Our healthcare providers are
              committed to providing you with the highest quality care in a
              friendly and welcoming environment.
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

export default UTI;
