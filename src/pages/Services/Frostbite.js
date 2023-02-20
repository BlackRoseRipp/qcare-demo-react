import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Frostbite = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/pexels-victoria-akvarel-1620653.jpg)] bg-top bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Frostbite, Hypothermia & Urgent care
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8 px-2 lg:px-0">
                By scheduling a visit at Qcare, we can diagnose if you or your
                loved one have frostbite or hypothermia and provide the
                appropriate treatments to help you improve.
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
            experience in frostbite and hypothermia care. They’ll help you
            determine the right course of treatment to help you feel your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          What is frostbite care?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Frostbite begins with mild symptoms but quickly becomes a serious
          health risk the longer your skin freezes from exposure. It most
          commonly affects the fingers, toes, nose, and ears, but it can also
          affect the face, chin, and cheeks. If you think you or someone you
          know may have frostbite, it is important to seek medical attention as
          soon as possible.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex justify-center items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl mx-auto overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/pexels-kristin-vogt-54206.jpg"
                  alt="kid-in-bed"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              The symptoms of frostbite can range from mild to severe. They may
              develop slowly or quickly, depending on the temperature and the
              length of time that the body part is exposed to the cold.
            </p>
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                Early symptoms of frostbite may include:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Aching, burning, or stinging in the affected area
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Numbness or a loss of feeling in the affected area
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Red, white, pale, or grayish-yellow skin
                  </h5>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              As frostbite progresses, the skin may become hard and waxy, and
              the affected area may feel cold to the touch. Blisters may also
              form, and the skin may turn black in severe cases
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          What is hypothermia care?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Hypothermia is a condition that occurs when the body's core
          temperature drops below 95°F (35°C). Symptoms of hypothermia can range
          from mild to severe, and they may develop slowly or quickly, depending
          on the temperature and the length of time that the body is exposed to
          the cold.
          <br />
          <br />
          It is important to seek medical attention as soon as possible if you
          think you or someone you know may have frostbite or hypothermia. A
          healthcare provider at Qcare can determine the extent of the condition
          and recommend the best course of treatment.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                Early symptoms of hypothermia may include:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Shivering
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Numbness or a loss of feeling in the fingers, toes, and face
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Fatigue
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center mt-4">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                As hypothermia progresses, symptoms may include:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Slurred speech
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Confusion
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Clumsiness
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Drowsiness or difficulty staying awake
                  </h5>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              In severe cases, hypothermia can cause the heart to stop beating
              and lead to coma or death.
              <br />
              <br />
              If you think you or someone you know may have hypothermia, it is
              important to seek medical attention as soon as possible. A
              healthcare provider at Qcare can determine the extent of the
              hypothermia and recommend the best course of treatment.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl mx-auto overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/pexels-darius-krause-2182190.jpg"
                  alt="kid-in-bed"
                />
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              Why you need frostbite and hypothermia care
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              Frostbite and hypothermia are both serious conditions that can
              cause permanent damage to your health if it is not treated
              promptly. When your skin and other tissues freeze, it can cause
              the cells to die. This can lead to the loss of fingers, toes, or
              other body parts, as well as permanent numbness and pain. In
              severe cases, frostbite can also cause infection and death.
              <br />
              <br />
              With hypothermia, when your body temperature drops to dangerous
              levels, this can even lead to a coma or death.
              <br />
              <br />
              That is why it is so important to seek medical care if you think
              you or someone you know may have frostbite or hypothermia. A
              healthcare provider at Qcare can determine the extent of the
              frostbite or hypothermia and recommend the best course of
              treatment, which may include medications to prevent infection and
              improve circulation, as well as procedures to remove dead tissue
              and repair damaged skin and blood vessels. Without proper
              treatment, the risks of complications and long-term consequences
              are much higher.
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to expect at a visit for frostbite or hypothermia
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8">
              Mild frostbite can be treated at home with first-aid care. If you
              think you or your loved one has symptoms that are more severe,
              stop by one of our Qcare urgent care stations. Based on the
              severity of your symptoms, our medical professionals may order
              X-rays, a bone scan or an MRI.
              <br />
              <br />
              Based on the examination and test results, the doctor will
              determine the best course of treatment for the frostbite.
              Treatment may include medications to prevent infection and improve
              circulation, as well as procedures to remove dead tissue and
              repair damaged skin and blood vessels. In severe cases,
              hospitalization may be necessary.
              <br />
              <br />
              If you visit Qcare for hypothermia, our providers will ask about
              your symptoms and medical history, as well as your exposure to
              cold temperatures. They will check your vital signs, such as your
              pulse, blood pressure and temperature, to determine the severity
              of the hypothermia. They may also take blood tests to check for
              signs of infection and to assess your overall health.
              <br />
              <br />
              Based on the examination and test results, the doctor will
              determine the best course of treatment for hypothermia. In severe
              cases, hospitalization may be necessary.
              <br />
              <br />
              It’s important to follow the doctor's instructions and attend all
              follow-up appointments as recommended. This will help ensure the
              best possible outcome and minimize the risk of complications from
              frostbite.
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

export default Frostbite;
