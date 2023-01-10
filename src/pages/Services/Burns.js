import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Burns = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/pexels-bob-clark-21490.jpg)] bg-bottom bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Burn Care at Urgent Care
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8 px-2 lg:px-0">
                Visit QCare mobile care units throughout New York City for all
                your burn care needs.
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
            By scheduling a burn care visit at Qcare, we can assess the severity
            of your burn by examining your skin and provide the appropriate
            treatments to help you improve.
            <br />
            <br />
            Our doctors, physician assistants and nurse practitioners have
            extensive education and experience in burn care. They’ll help you
            determine the right course of treatment to help you feel your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          How do you care for burns?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Burns are classified into three categories: first-degree,
          second-degree and third-degree.
        </p>
        <div className="flex flex-col justify-center items-start lg:w-1/2 w-5/6 mx-auto mt-8">
          <div className="flex items-start justify-start w-fit my-1">
            <IoIosMedical className="text-3xl text-blue-logo-secondary mt-px" />
            <h5 className="text-blue-secondary lg:text-xl text-lg font-medium ml-2 w-fit">
              First-degree burns are the least serious and affect only the outer
              layer of skin.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <IoIosMedical className="text-3xl text-blue-logo-secondary mt-px" />
            <h5 className="text-blue-secondary lg:text-xl text-lg font-medium ml-2 w-fit">
              Second-degree burns affect the outer layer of skin and the layer
              underneath.
            </h5>
          </div>
          <div className="flex items-start justify-start w-fit my-1">
            <IoIosMedical className="text-3xl text-blue-logo-secondary mt-px" />
            <h5 className="text-blue-secondary lg:text-xl text-lg font-medium ml-2 w-fit">
              Third-degree burns affect all layers of the skin and may also
              damage underlying tissues.
            </h5>
          </div>
        </div>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Minor burns can be treated with proper care at home. It’s important to
          take proper care of the wound to prevent infection and promote
          healing. Cool the burn with running water for 10 to 15 minutes. Do not
          use ice, as this can cause frostbite.
          <br />
          <br />
          After cooling the burn, cover the burn with a sterile bandage or wrap.
          Avoid using cotton wool or other materials that may stick to the
          wound.
          <br />
          <br />
          If the burn is painful, you can take over-the-counter pain medication,
          such as acetaminophen or ibuprofen.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex justify-center items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl mx-auto overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/pexels-ron-lach-8626333.jpg"
                  alt="kid-in-bed"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              Third-degree burns are the most serious and require immediate
              medical attention.
            </p>
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                For more severe burns, you should make an appointment at Qcare
                if:
              </p>
              <div className="flex flex-col justify-evenly items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    The burn that is larger than 3-in. in diameter
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    The burn is on the face, hands, feet or a major joint
                  </h5>
                </div>
                <div className="flex items-center justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    The burn is deep or has blisters.
                  </h5>
                </div>
              </div>
            </div>
            <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mt-4">
              These types of burns may require more specialized treatment.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              Why do you need burn care?
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              A healthcare provider at Qcare can determine the severity of the
              burn and recommend the best course of treatment. This may include
              medications to prevent infection and reduce pain, as well as
              procedures to remove dead tissue and repair damaged skin and blood
              vessels. Without proper treatment, burns can lead to infection and
              scarring, and they can cause permanent damage to the body.
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to expect at a visit for burn care visit:
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8">
              Here’s what you can expect during a visit to an urgent care center
              for burn care:
            </p>
            <ol className="list-decimal w-5/6 lg:w-3/4 mx-auto mt-8 text-blue-primary text-lg">
              <li className="w-fit my-1">
                <h5 className="text-blue-logo-primary lg:text-lg text-base ml-2 w-fit">
                  One of our healthcare providers will ask about your symptoms,
                  medical history and the cause of the burn.
                </h5>
              </li>
              <li className="w-fit my-1">
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  The healthcare provider will examine the burn and determine
                  its severity. They will clean the burn and remove any dead
                  skin or debris.
                </h5>
              </li>
              <li className="w-fit my-1">
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  The provider may prescribe medications to prevent infection
                  and reduce pain. They may cover the burn with a sterile
                  bandage or wrap.
                </h5>
              </li>
              <li className="w-fit my-1">
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  The healthcare provider may recommend follow-up care with a
                  burn specialist or primary care provider.
                </h5>
              </li>
            </ol>
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

export default Burns;
