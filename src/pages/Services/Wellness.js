import { Fragment } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Wellness = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/wellness-hero.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-56">
              <h1 className="text-white heading text-6xl font-semibold text-center">
                Wellness Visits
              </h1>
              <h3 className="text-white text-2xl font-medium text-center mt-8">
                Visit Qcare for comfortable, fast and easy preventative care
                medical visits
              </h3>
              <div className="mt-12 text-center w-full">
                <a
                  href="https://www.yourhealthfile.com/providers/1534226/book-an-appointment-.html"
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
        <div className="grid lg:grid-cols-2 gap-8">
          <h2 className="text-blue-primary heading text-4xl font-semibold text-center lg:col-span-2 order-1">
            What is a wellness visit?
          </h2>
          <div className="flex items-center justify-center order-2">
            <img
              src="/img/doctor-nurse-working-with-tablet-healthcare-system-cabinet-medical-team-medic-assistant-using-technology-examination-treatment-specialists-doctors-office.jpg"
              className="w-4/5 mx-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start justify-evenly order-3">
            <p className="text-blue-secondary">
              You don’t have to be sick to go to the doctor. If you’re generally
              healthy but want to review your health with a professional,
              consider scheduling a wellness visit with Qcare, located at mobile
              care units and with urgent care clinics throughout New York City.
              <br />
              <br />A yearly wellness visit is a chance to stay ahead of
              illnesses. You and your doctor will work together to evaluate your
              current health status and risk factors for getting sick.
            </p>
            <div className="flex flex-col my-8">
              <p className="text-blue-logo-primary font-medium mb-4">
                Our doctors, physician assistants and nurse practitioners are
                trained to screen for common diseases. At Qcare, your provider
                may catch your risk for developing illnesses like:
              </p>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Health history
                </p>
              </div>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Medications
                </p>
              </div>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Immunizations
                </p>
              </div>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Blood pressure
                </p>
              </div>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">Weight</p>
              </div>
            </div>
            <p className="text-blue-secondary">
              An annual well visit is ideal for people of every age, from
              infants to seniors. Your provider may recommend more frequent
              checkups, depending on your health factors.
            </p>
          </div>
          <h2 className="text-blue-primary heading text-4xl font-semibold text-center lg:col-span-2 order-4 mt-16">
            Why should you schedule a wellness visit?
          </h2>
          <div className="flex flex-col items-start justify-evenly order-6 lg:order-5">
            <p className="text-blue-secondary">
              By scheduling a wellness visit at Qcare, we help you practice
              preventative care. It’s an actionable way to stay on top of your
              health so you are less likely to get sick.
              <br />
              <br />
              Your provider will identify whether you’re at risk for developing
              health problems based on your health status, lifestyle and family
              history.
            </p>
            <div className="flex flex-col my-8">
              <p className="text-blue-logo-primary font-medium mb-4">
                Our doctors, physician assistants and nurse practitioners are
                trained to screen for common diseases. At Qcare, your provider
                may catch your risk for developing illnesses like:
              </p>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">Diabetes</p>
              </div>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Heart disease
                </p>
              </div>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">Stroke</p>
              </div>
              <div className="flex item-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">Cancer</p>
              </div>
            </div>
            <p className="text-blue-secondary">
              An annual well visit is ideal for people of every age, from
              infants to seniors. Your provider may recommend more frequent
              checkups, depending on your health factors.
            </p>
          </div>
          <div className="flex items-center justify-center order-5 lg:order-6">
            <img
              src="/img/patient-telling-doctor-about-symptoms-disease-portrait.jpg"
              className="w-4/5 mx-auto rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="py-16 bg-blue-secondary/10">
        <div className="py-24 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-repeat-space bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-4xl heading font-semibold text-center">
              What to expect at a wellness visit
            </h2>
            <div className="md:w-2/3 w-11/12 mx-auto mt-12 p-6 bg-white border-2 border-blue-logo-primary rounded-xl">
              <p className="text-blue-logo-primary text-center text-lg font-medium">
                At your wellness visit, a provider will review your diet and
                lifestyle. Together you’ll identify changes you can make to stay
                healthy in a way that works for you.
                <br />
                <br />
                Providers may also suggest blood tests or immunizations based on
                your age. You can access fast and accurate lab testing for any
                blood work right at Qcare.
                <br />
                <br />
                Most insurance companies cover one wellness visit per year. Be
                sure to take advantage of yours by scheduling a visit today.
              </p>
            </div>
            <div className="w-full text-center mt-12">
              <a
                href="https://www.yourhealthfile.com/providers/1534226/book-an-appointment-.html"
                className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:border-blue-logo-secondary hover:bg-blue-logo-secondary font-medium uppercase border-2"
              >
                Schedule your next visit
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <InsuranceSlider />
      </div>
    </Fragment>
  );
};

export default Wellness;
