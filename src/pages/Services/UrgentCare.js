import { Fragment } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosMedical } from "react-icons/io";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const UrgentCare = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/pexels-mikhail-nilov-7468920.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-56">
              <h1 className="text-white heading font-semibold text-6xl text-center">
                Urgent Care
              </h1>
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
      <div className="bg-blue-secondary/10 py-24">
        <div className="container mx-auto">
          <h2 className="text-blue-primary font-semibold heading text-4xl text-center">
            What is urgent care?
          </h2>
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary px-4 py-8 md:w-2/3 w-11/12 mx-auto">
            <p className="text-blue-primary text-xl font-medium text-center">
              Urgent care is a non-emergency service that helps you get seen by
              a doctor quickly. You can walk into our clinic without an
              appointment for minor illnesses or injuries that need to be
              treated right away.
              <br />
              <br />
              Urgent Care is your best option when you can’t get in to visit
              your family doctor but are not sick enough to visit the Emergency
              Room.
            </p>
          </div>
          <div className="text-center mt-12">
            <a
              href="/locations"
              className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary border-2 font-medium uppercase"
            >
              Schedule an appointment
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-center text-blue-primary font-semibold text-4xl">
          What to expect at during an urgent care visit at Qcare
        </h2>
        <p className="text-center text-blue-secondary font-medium text-lg mt-8 md:w-2/3 w-11/12 mx-auto">
          At Qcare, your health concerns are our concerns too. We use
          state-of-the-art technology to ensure you will be seen, heard and
          treated in a timely manner.
          <br />
          <br />
          On our website, you can submit your health information, history and
          any medications you’re taking. This reduces your wait time and on site
          paperwork. We also have kiosks at our locations around New York City
          where you can register.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <div className="flex items-center justify-center order-1">
            <img
              src="/img/pexels-evg-kowalievska-1170979.jpg"
              className="w-5/6 mx-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start justify-center order-2">
            <p className="text-blue-logo-primary font-medium text-center lg:text-start mb-12">
              After speaking to a provider, we may need to run a few tests.
              Having on-site testing allows you to get care faster. At Qcare, we
              can do:
            </p>
            <div className="flex items-center lg:justify-start justify-center my-2 w-full">
              <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
              <p className="text-blue-logo-primary font-medium">X-Rays</p>
            </div>
            <div className="flex items-center lg:justify-start justify-center my-2 w-full">
              <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
              <p className="text-blue-logo-primary font-medium">Rapid strep</p>
            </div>
            <div className="flex items-center lg:justify-start justify-center my-2 w-full">
              <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
              <p className="text-blue-logo-primary font-medium">
                COVID-19 swabbing
              </p>
            </div>
            <div className="flex items-center lg:justify-start justify-center my-2 w-full">
              <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
              <p className="text-blue-logo-primary font-medium">
                Pregnancy tests
              </p>
            </div>
            <div className="flex items-center lg:justify-start justify-center my-2 w-full">
              <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
              <p className="text-blue-logo-primary font-medium">
                Sexually transmitted illness testing
              </p>
            </div>
            <div className="flex items-center lg:justify-start justify-center my-2 w-full">
              <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
              <p className="text-blue-logo-primary font-medium">And more</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center order-4 lg:order-3">
            <p className="text-blue-logo-primary font-medium text-center lg:text-start mb-12">
              Your treatment plan depends on your illness or injury. Our
              providers will create a customized plan so you can go home feeling
              better. Our Qcare providers are qualified to:
            </p>
            <div className="flex items-center lg:justify-start justify-center my-2 w-full">
              <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
              <p className="text-blue-logo-primary font-medium">Do stitches</p>
            </div>
            <div className="flex items-center lg:justify-start justify-center my-2 w-full">
              <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
              <p className="text-blue-logo-primary font-medium">
                Treat minor burns
              </p>
            </div>
            <div className="flex items-center lg:justify-start justify-center my-2 w-full">
              <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
              <p className="text-blue-logo-primary font-medium">
                Prescribe medications
              </p>
            </div>
            <div className="flex items-center lg:justify-start justify-center my-2 w-full">
              <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
              <p className="text-blue-logo-primary font-medium">
                Order bloodwork
              </p>
            </div>
            <div className="flex items-center lg:justify-start justify-center my-2 w-full">
              <BsCheck2Circle className="text-blue-logo-secondary text-xl mr-2" />
              <p className="text-blue-logo-primary font-medium">
                Recommend follow-up visits
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center order-3 lg:order-4">
            <img
              src="/img/pexels-yan-krukov-5794058.jpg"
              className="w-5/6 mx-auto rounded-xl"
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="/locations"
            className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary border-2 font-medium uppercase"
          >
            Schedule an appointment
          </a>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-repeat-space bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary heading text-4xl font-semibold text-center">
              Why you should be seen at urgent care
            </h2>
            <p className="text-center text-blue-primary mt-12 text-xl md:w-2/3 w-11/12 mx-auto">
              At Qcare, we see people who need immediate medical attention. Our
              team of healthcare providers will treat minor illnesses and
              injuries like:
            </p>
            <div className="border-2 rounded-xl border-blue-primary bg-white p-4 md:w-1/2 w-5/6 mx-auto mt-12 grid lg:grid-cols-2 gap-4">
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-secondary">Cuts, wounds or rashes</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-secondary">Flu and cold symptoms</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-secondary">Sinus infections</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-secondary">Allergies & Asthma</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-secondary">Headaches</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-secondary">
                  Nausea, vomiting, & diarrhea
                </h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-secondary">
                  Urinary tract infections
                </h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-secondary">Broken bones or sprains</h5>
              </div>
            </div>
            <p className="text-center text-xl md:w-2/3 w-11/12 mx-auto mt-12 text-blue-primary">
              The team at Qcare makes every effort to get you healthy faster so
              you can avoid going to the hospital.{" "}
              <span className="font-bold">
                If your child is experiencing a life-threatening emergency, call
                911.
              </span>
              <br />
              <br />
              You should be seen in the Emergency Room if you’re experiencing
              any of these symptoms:
            </p>
            <div className="flex flex-col items-start justify-center w-fit mx-auto mt-8">
              <div className="flex items-center my-2">
                <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-logo-primary font-medium text-lg">
                  Chest pain
                </h5>
              </div>
              <div className="flex items-center my-2">
                <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-logo-primary font-medium text-lg">
                  Difficulty breathing
                </h5>
              </div>
              <div className="flex items-center my-2">
                <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-logo-primary font-medium text-lg">
                  Uncontrolled bleeding
                </h5>
              </div>
              <div className="flex items-center my-2">
                <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-logo-primary font-medium text-lg">
                  Medication overdose
                </h5>
              </div>
              <div className="flex items-center my-2">
                <IoIosMedical className="text-3xl text-blue-logo-secondary mr-2" />
                <h5 className="text-blue-logo-primary font-medium text-lg">
                  A serious head injury
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 container mx-auto">
        <InsuranceSlider />
      </div>
    </Fragment>
  );
};

export default UrgentCare;
