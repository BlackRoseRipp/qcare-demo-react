import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Injuries = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/female-doctor-blue-medical-gown.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto lg:py-56 py-24">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Broken Bones, Strains & Sprains
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8">
                Visit QCare mobile care units throughout New York City for all
                your broken bone, strain or sprain care needs.
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
            By scheduling a visit at Qcare, we can determine if your symptoms
            are due to a broken bone, strain or sprain and provide the
            appropriate treatments to help you improve.
            <br />
            <br />
            Our doctors, physician assistants and nurse practitioners have
            extensive education and experience in evaluating broken bones,
            fractures, sprains and strains. They’ll help you determine the right
            course of treatment to help you feel your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          How Do You Care for Broken Bones, Fractures, Sprains and Strains?
        </h2>
        <p className="text-blue-logo-primary text-center text-lg lg:w-2/3 w-5/6 mx-auto mt-16">
          Because broken bones, fractures, sprains and strains share many
          symptoms, it can be difficult to tell the difference between them
          based on symptoms alone. With a digital x-ray and an evaluation, our
          urgent care providers can find the correct care for your injury.
          <br />
          <br />A sprain, strain and broken bone can all be very painful, making
          it challenging to tell which one you have. Here are the symptoms of
          each type of injury that our doctors will look for when you visit
          Qcare.
        </p>
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-32 mt-32 w-11/12 mx-auto">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl overflow-hidden">
                <img
                  src="/img/compressed-files/pexels-ivan-samkov-4989186.jpg"
                  alt="broken-bones"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-evenly lg:items-start items-center">
            <h3 className="text-blue-primary text-2xl lg:text-4xl text-center font-medium">
              Broken Bones
            </h3>
            <p className="text-blue-secondary lg:text-lg text-center lg:text-start lg:w-3/4 w-5/6 lg:mx-0 mx-auto mt-4">
              Broken bones are serious injuries that always need professional
              attention — they won’t heal at home.
            </p>
            <div className="flex flex-col justify-center lg:items-start items-center mt-4">
              <p className="text-blue-secondary lg:text-lg text-center lg:text-start mb-4">
                If you have a fracture you might experience:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    A misshapen limb or joint
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Intense pain
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Bruising, bleeding, or swelling
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Limited mobility or the inability to move the limb
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Numbness and tingling
                  </h5>
                </div>
              </div>
            </div>
            <p className="text-blue-secondary lg:text-lg text-center lg:text-start lg:w-3/4 w-5/6 lg:mx-0 mx-auto mt-4">
              If the skin is broken or the bone is protruding from the injury,
              call 911 right away for emergency care.
            </p>
          </div>
          <div className="order-3 flex flex-col justify-evenly lg:items-start items-center">
            <h3 className="text-blue-primary text-2xl lg:text-4xl text-center font-medium">
              Strains
            </h3>
            <p className="text-blue-secondary lg:text-lg text-center lg:text-start lg:w-3/4 w-5/6 lg:mx-0 mx-auto mt-4">
              Strains happen when muscles or tendons (which attach muscles to
              bones) are pulled, twisted or overstretched.
            </p>
            <div className="flex flex-col justify-center lg:items-start items-center mt-4">
              <p className="text-blue-secondary lg:text-lg text-center lg:text-start mb-4">
                If you have a strain, you might experience:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Limited flexibility or movement in the area of the injury
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Pain and/or cramping around the injury
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Swelling
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Muscle weakness or spasms
                  </h5>
                </div>
              </div>
            </div>
            <p className="text-blue-secondary lg:text-lg text-center lg:text-start lg:w-3/4 w-5/6 lg:mx-0 mx-auto mt-4">
              If the skin is broken or the bone is protruding from the injury,
              call 911 right away for emergency care.
            </p>
          </div>
          <div className="order-4 flex justify-center lg:justify-end items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/pexels-andrea-piacquadio-3760275.jpg"
                  alt="strained-muscle"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="order-5 lg:order-6 flex flex-col justify-evenly lg:items-start items-center">
            <h3 className="text-blue-primary text-2xl lg:text-4xl text-center font-medium">
              Sprains
            </h3>
            <p className="text-blue-secondary lg:text-lg text-center lg:text-start lg:w-3/4 w-5/6 lg:mx-0 mx-auto mt-4">
              Sprains affect ligaments, which are connective tissues that
              stabilize joints. When ligaments are overstretched, torn or
              ruptured, you’ll have a sprain that can affect your ability to use
              that joint for a few days to a few weeks or months.
            </p>
            <div className="flex flex-col justify-center lg:items-start items-center mt-4">
              <p className="text-blue-secondary lg:text-lg text-center lg:text-start mb-4">
                Symptoms of a sprain include:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Bruising around the joint
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Swelling and pain
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Difficulty using your joint normally
                  </h5>
                </div>
              </div>
              <p className="text-blue-secondary lg:text-lg text-center lg:text-start lg:w-3/4 w-5/6 lg:mx-0 mx-auto mt-4">
                Severe sprains may require professional intervention, so it’s
                important to see a doctor right away when your symptoms are
                severe.
              </p>
            </div>
          </div>
          <div className="order-6 lg:order-5 flex justify-center lg:justify-start items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl overflow-hidden">
                <img
                  src="/img/compressed-files/pexels-towfiqu-barbhuiya-1246018.jpg"
                  alt="sprain"
                />
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="text-center mt-16">
          <a
            className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary border-2 font-medium text-lg"
            href="/locations"
          >
            Find a location near you
          </a>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              Why You Need Care for Broken Bones, Fractures, Sprains or Strains
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              Not getting the medical care you need for a sprain, strain, or
              broken bone can have serious consequences.
              <br />
              <br />
              When left untreated, sprains and strains can cause more
              significant injuries in your muscles, tendons and ligaments. You
              can develop arthritis in the area of the injury and suffer
              significant pain for months or years.
              <br />
              <br />
              If you don’t treat a broken bone, it may never grow back together
              correctly. This can lead to permanent damage and disability. You
              will have swelling and pain that gets worse over time and won’t be
              able to move normally.
              <br />
              <br />
              It’s better to be safe than sorry when it comes to getting
              treatment for sprains, strains and broken bones. Our providers in
              mobile urgent care stations are here to help!
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to Expect at a Visit for a Broken Bone, Fracture, Sprain or
              Strain
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8">
              When you come to Qcare to have an injury checked out, our
              professionals will start with a physical exam. The doctor will
              look for signs of swelling, bruising, or bleeding and find out
              where the pain is most significant.
              <br />
              <br />
              If a bone might be broken, you’ll need to visit our main{" "}
              <a
                className="text-blue-logo-primary hover:text-blue-secondary underline-animation after:bg-blue-secondary"
                href="https://www.google.com/maps/place/143+W+72nd+St,+New+York,+NY+10023/@40.7782211,-73.9824139,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2588a351f00ed:0xa7f97add245c9e79!8m2!3d40.7782211!4d-73.9802252!16s%2Fg%2F11bw3_tfp3?hl=en"
              >
                Qcare clinic
              </a>
              . From there they will decide if it’s best to brace the injury,
              use a splint or cast, or refer you for other medical treatment.
              <br />
              <br />
              Injuries like these can take weeks or months to heal, and it’s
              important to follow the doctor’s recommendations so you don’t
              reinjure yourself and prolong the process. You’ll need to rest the
              injured area, apply ice and elevate it while you heal.
              <br />
              <br />
              If you think you have a sprain, strain, or broken bone, don’t
              delay. Make an appointment at Qcare right away!
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

export default Injuries;
