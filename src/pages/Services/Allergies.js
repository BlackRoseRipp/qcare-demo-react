import { Fragment } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosMedical } from "react-icons/io";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Allergies = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/pexels-cottonbro-6865169.jpg)] bg-center bg-no-repeat bg-cover">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-56">
              <h1 className="text-white heading text-6xl font-semibold text-center">
                Allergies and Asthma Preventative & Urgent Care
              </h1>
              <h3 className="text-white text-2xl font-medium text-center mt-8">
                Visit QCare mobile care units throughout New York City for all
                your asthma and allergy care needs.
              </h3>
              <div className="mt-12 text-center w-full">
                <a
                  href="/locations"
                  className="btn-primary border-2 border-yellow-logo text-white font-medium uppercase hover:bg-yellow-logo"
                >
                  Schedule an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h3 className="text-blue-logo-primary text-3xl font-medium text-center">
          By scheduling an allergies or asthma visit at Qcare, we help you stay
          on top of your asthma or allergies care and avoid flare ups.
          <br />
          <br />
          Our doctors, physician assistants and nurse practitioners have
          extensive education and experience in asthma and allergies care.
          They’ll help you determine the right course of treatment to help you
          feel your best.
        </h3>
      </div>
      <div className="py-16 bg-blue-secondary/10">
        <div className="py-24 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-repeat-space bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-4xl heading font-semibold text-center">
              What is allergy and asthma care?
            </h2>
            <p className="text-blue-logo-primary text-lg font-medium text-center mt-12 md:w-2/3 w-11/12 mx-auto">
              When you suffer from allergies and asthma, it may feel like your
              body is constantly in defense mode. Your body sees particles from
              the environment, known as allergens, as a threat.
            </p>
            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              <div className="p-6 bg-white border-2 border-blue-logo-primary rounded-xl flex flex-col items-center">
                <h3 className="text-blue-logo-primary text-2xl font-medium text-center">
                  Allergies
                </h3>
                <p className="text-blue-logo-primary text-center text-lg mt-8">
                  Having allergies causes your immune system to react with
                  uncomfortable symptoms like:
                </p>
                <div className="flex flex-col items-start justify- mt-4 w-fit mx-auto">
                  <div className="flex items-center my-2">
                    <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                    <h5 className="text-blue-secondary text-lg">Sneezing</h5>
                  </div>
                  <div className="flex items-center my-2">
                    <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                    <h5 className="text-blue-secondary text-lg">Coughing</h5>
                  </div>
                  <div className="flex items-center my-2">
                    <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                    <h5 className="text-blue-secondary text-lg">
                      Itchy throat
                    </h5>
                  </div>
                  <div className="flex items-center my-2">
                    <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                    <h5 className="text-blue-secondary text-lg">
                      Puffy, red, or watery eyes
                    </h5>
                  </div>
                </div>
                <p className="text-blue-logo-primary text-center text-lg mt-8">
                  You can be allergic to food, pets or particles in the
                  environment. You may be able to manage seasonal allergies with
                  over-the-counter or prescription medications. Those with
                  severe allergies may need to carry an Epi-Pen in case of an
                  emergency.
                </p>
              </div>
              <div className="p-6 bg-white border-2 border-blue-logo-primary rounded-xl">
                <h3 className="text-blue-logo-primary text-2xl font-medium text-center">
                  Asthma
                </h3>
                <p className="text-blue-logo-primary text-center text-lg mt-8">
                  Asthma is a disease characterized by hypersensitivity that
                  causes breathing problems. During an asthma attack, you may
                  have difficulty moving air in and out of your lungs. An asthma
                  attack can cause symptoms like:
                </p>
                <div className="flex flex-col items-start justify- mt-4 w-fit mx-auto">
                  <div className="flex items-center my-2">
                    <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                    <h5 className="text-blue-secondary text-lg">Wheezing</h5>
                  </div>
                  <div className="flex items-center my-2">
                    <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                    <h5 className="text-blue-secondary text-lg">
                      Difficulty breathing
                    </h5>
                  </div>
                  <div className="flex items-center my-2">
                    <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                    <h5 className="text-blue-secondary text-lg">
                      Chest tightness
                    </h5>
                  </div>
                  <div className="flex items-center my-2">
                    <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                    <h5 className="text-blue-secondary text-lg">
                      Excessive coughing
                    </h5>
                  </div>
                </div>
                <p className="text-blue-logo-primary text-center text-lg mt-8">
                  Among children, asthma is the most common childhood chronic
                  illness, affecting nearly five million children in the United
                  States.
                  <br />
                  <br />
                  If you have asthma, you may need to take medication or use an
                  inhaler every day to prevent an asthma attack. If you have an
                  asthma attack, you may need a rescue treatment that relaxes
                  your airway so air can move through your lungs.
                </p>
              </div>
            </div>
            <p className="text-blue-logo-primary text-lg font-medium text-center mt-12 md:w-2/3 w-11/12 mx-auto">
              Many of the same threats that cause an allergic reaction may also
              cause an asthma attack. However, not all asthma flare-ups are
              allergic attacks.
              <br />
              <br />
              Because allergies and asthma go hand-in-hand, we treat patients at
              Urgent Care for both at the same appointment. Keep reading to find
              out how an Allergies and Asthma appointment will benefit you.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <div className="grid lg:grid-cols-2 gap-8">
          <h2 className="text-blue-primary heading text-4xl font-semibold text-center lg:col-span-2 order-1">
            Why you need allergy and asthma care
          </h2>
          <div className="flex items-center justify-center order-2">
            <img
              src="/img/pexels-karolina-grabowska-7195083.jpg"
              className="w-4/5 mx-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start justify-evenly order-3">
            <p className="text-blue-secondary">
              You can develop asthma as a child or adult. As you age, your
              allergy and asthma needs may change. At Qcare, your provider can
              help you create a treatment regimen that works for your needs.
              <br />
              <br />
              You should make an allergy and asthma appointment if your symptoms
              are interfering with your daily life or if it’s time for a change
              to your treatment plan.
              <br />
              <br />
              If you’re experiencing shortness of breath or difficulty
              breathing, call 911.
              <br />
              <br />
              You can visit Qcare for an allergy and asthma appointment at our
              walk-in mobile care units. You can also schedule an appointment on
              our website at a time that’s convenient for you.
            </p>
          </div>
          <h2 className="text-blue-primary heading text-4xl font-semibold text-center lg:col-span-2 order-4 mt-16">
            What to expect at a visit for allergies or asthma
          </h2>
          <div className="flex flex-col items-start justify-evenly order-6 lg:order-5">
            <p className="text-blue-secondary">
              At your visit, tell us what you’re experiencing and how long
              you’ve had problems with allergies or asthma.
              <br />
              <br />
              Be sure to share details like your medications, symptoms and
              whether you carry an Epi-pen.
              <br />
              <br />
              Your provider will help you identify your triggers so you can
              prevent an allergy or asthma attack in the future.
              <br />
              <br />
              There are many asthma triggers you can’t change, like pollen or
              cold weather. Your provider will make sure you have the right
              medication on hand in the event of an asthma attack.
            </p>
            <div className="flex flex-col my-8">
              <p className="text-blue-logo-primary font-medium mb-4">
                Our providers may prescribe:
              </p>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Daily allergy pills
                </p>
              </div>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Asthma inhalers
                </p>
              </div>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Nebulizer treatments
                </p>
              </div>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
                <p className="text-blue-logo-primary font-medium">Epi-pens</p>
              </div>
            </div>
            <p className="text-blue-secondary">
              You’ll leave Qcare feeling confident about how to manage your
              allergies and asthma.
            </p>
          </div>
          <div className="flex items-center justify-center order-5 lg:order-6">
            <img
              src="/img/pexels-gustavo-fring-portrait.jpg"
              className="w-4/5 mx-auto rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-24">
        <InsuranceSlider />
      </div>
    </Fragment>
  );
};

export default Allergies;
