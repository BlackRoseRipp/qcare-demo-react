import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Scrapes = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/pexels-rodnae-productions-652011.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Sutures & Urgent Care
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8">
                Visit QCare mobile care units throughout New York City for all
                your sutures, cuts, and scrapes needs.
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
            By scheduling a visit at Qcare, we can determine if your cut or
            scrape will require sutures and provide the appropriate treatments
            to help you improve.
            <br />
            <br />
            Our doctors, physician assistants and nurse practitioners have
            extensive education and experience in wound care. They’ll help you
            determine the right course of treatment to help you feel your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          How Do You Care for Cuts and Scrapes?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          There are different kinds of wounds, including: cuts, scrapes,
          scratches and punctured skin. The primary health risks of wounds are
          bleeding, infection and potential internal damage for deep wounds. Our
          urgent care providers can determine the best care for your wound.
          <br />
          <br />
          Many small cuts and scrapes will heal on their own. You’ll need to
          apply a clean soft cloth to the wound to stop bleeding, then clean the
          wound with water and antibiotic ointment. Cover the injury with a
          bandage. Each day, wash the injury and reapply antibiotic ointment and
          a new bandage.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex justify-center items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl mx-auto overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/active-young-man-holding-by-his.jpg"
                  alt="fell-off-bike"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                There are times you need to see a doctor for a cut or scrape.
                Make an appointment at Qcare if:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    The cut bleeds a lot and won’t stop easily
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    The wound is long, deep or wide
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Your cut or scrape is from a concerning bite
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    You were cut or scraped by something rusty
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    You thought a cut or scrape would heal on its own, but
                    that’s not happening
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    The cut is on your face, and you’re concerned about scarring
                  </h5>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              In these cases, you’ll need professional care to ensure the wound
              heals appropriately and doesn’t develop an infection.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              Why You Need Cut and Scrape Care
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              If you don’t treat a cut or scrape appropriately, you could
              develop an infection. Infections are bacterial and can result in
              serious illness and even death.
              <br />
              <br />
              Another side effect of not treating cuts and scrapes correctly is
              that you could develop a scar in the area of the injury, or it
              could take significantly longer to heal than it should.
              <br />
              <br />
              You don’t want to risk an infection, scar, or other consequences
              of an untreated cut or scrape. If you need medical care, don’t be
              shy about making an appointment!
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to Expect at a Visit For Cuts and Scrapes
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8">
              When you visit Qcare with a cut or scrape, our urgent care
              providers will start by ensuring the bleeding stops and then
              examine the wound. They’ll document what caused the wound, what
              size it is and where it’s located.
              <br />
              <br />
              Our team can put in stitches if necessary and help you clean and
              bandage the injury appropriately. If the cut or scrape was caused
              by an animal or a bite, the doctor might also administer vaccines
              or injection treatments to prevent illness.
              <br />
              <br />
              We’re available at mobile stations throughout New York City to
              help your cut or scrape heal quickly and effectively, with as few
              complications as possible. If you have a serious cut or scrape,
              make an appointment with Qcare today.
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

export default Scrapes;
