import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Skin = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/pexels-pixabay-248148.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Skin Ailments & Urgent Care
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8">
                Visit QCare mobile care units throughout New York City for all
                your skin care needs. Are you having discomfort or a rash on
                your skin? By scheduling a skin care visit at Qcare, we can help
                you diagnose and treat any skin ailments and avoid flare ups.
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
            Our doctors, physician assistants, and nurse practitioners have
            extensive education and experience in skin ailment care. They’ll
            help you determine the right course of treatment to help you feel
            your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          What is skin ailment care?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Your skin is the largest organ in your body, so keeping it healthy
          should be a top priority. Skin diseases are conditions that affect
          your skin. These diseases may cause rashes, inflammation, itchiness or
          other skin changes. Some skin conditions may be genetic, while
          lifestyle factors may cause others. Our team is expertly trained to
          find common skin problems.
        </p>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Common skin ailments include the following:
        </p>
        <div className="flex flex-col justify-center items-start lg:w-1/2 w-fit mx-auto">
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">Acne</h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Eczema: a chronic skin condition characterized by dry, itchy, and
              scaly skin.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Psoriasis: a chronic autoimmune skin condition characterized by
              red, scaly patches on the skin.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Athlete's foot: a fungal infection that affects the skin on the
              feet.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Hives: raised, red, itchy welts that can appear anywhere on the
              body.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Warts: small, rough growths on the skin caused by the human
              papillomavirus (HPV).
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Impetigo: a contagious bacterial skin infection that causes
              blisters and scabs.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Ringworm: a fungal skin infection that causes a red, scaly,
              circular rash.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
            <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
              Sunburn
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
                  src="/img/compressed-files/pexels-pixabay-414032.jpg"
                  alt="couple-in-bed"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                Skin diseases are common, and although they typically aren’t an
                emergency, they can be irritating and even painful. It can be
                challenging to get an appointment at a busy dermatology
                specialists, but Qcare mobile stations can see you right away.
                If your provider thinks you need follow up care at a specialist,
                Qcare can help you access one.
              </p>
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                Common symptoms of skin ailments include the following:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Redness
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Itching
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Rashes or scales
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Dryness or flakiness
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Pain and irritation
                  </h5>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              If you or your loved one are experiencing a fever with a rash,
              it’s important to get emergency care right away.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              How do you treat an STI:
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              If your sexual history and current symptoms indicate that you may
              have an STI, your provider will perform a pelvic exam to look for
              signs of infection – such as a rash, irritation or warts.
              <br />
              <br />
              Laboratory tests – such as a blood, saliva urine or fluid sample
              or swab – can confirm any diagnosis. Qcare delivers quick
              laboratory results, usually in under 24 hours.
              <br />
              <br />
              Based on the test results, your healthcare provider will determine
              the best course of treatment, which may involve the use of
              antibiotics, antivirals or other medications.
              <br />
              <br />
              It's important to note that prompt and effective treatment of STIs
              can prevent serious health complications, including infertility,
              pelvic inflammatory disease and even cancer. Additionally,
              treating STIs can also help prevent the spread of the infection to
              others.
              <br />
              <br />
              If you suspect that they may have an STI should seek medical
              attention promptly, and urgent care clinics provide a convenient
              and effective option for STI care. Regular STI testing and early
              treatment can help prevent serious health problems and protect
              against the spread of infections.
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to expect at a visit for a STI visit:
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8">
              Here’s what you can expect during a visit to an urgent care center
              for STI diagnosis and care:
            </p>
            <div className="flex flex-col justify-center items-start lg:w-3/4 w-fit mx-auto">
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  1. One of our healthcare providers will ask about your
                  symptoms, medical history and sexual history.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  2. The healthcare provider will perform a pelvic exam and take
                  a sample of urine, blood, saliva or fluid to test for STI.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  3. The provider may prescribe medications to treat STI and
                  reduce discomfort.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  4. The healthcare provider may recommend follow-up care with
                  your primary care provider.
                </h5>
              </div>
            </div>
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

export default Skin;
