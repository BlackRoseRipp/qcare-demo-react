import { Fragment } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosMedical } from "react-icons/io";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Vaccines = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/pexels-frank-merino-8488619.jpg)] bg-center bg-no-repeat bg-cover">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-56">
              <h1 className="text-white heading text-6xl font-semibold text-center">
                Vaccines and immunization at QCare
              </h1>
              <h3 className="text-white text-2xl font-medium text-center mt-8">
                Visit QCare mobile care stations throughout New York City to
                stay up to date on all your vaccines and immunization
                <br />
                <br />
                Schedule an appointment with QCare if you need a vaccine or
                immunization in the New York City area. We treat patients of all
                ages, from infants to seniors
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
      <div className="bg-blue-secondary/10">
        <div className="container py-24 mx-auto">
          <h2 className="text-blue-primary text-center text-5xl font-semibold">
            What to expect at a vaccine and immunization visit
          </h2>
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <p className="text-blue-primary text-lg font-medium text-center">
              At a vaccine and immunization visit, you’ll share your health
              history and your vaccine record. Be sure to bring an immunization
              card if you have one.
              <br />
              <br />
              A medical professional will make sure your shots are as quick and
              painless as possible. Let someone know if you’ve ever had a severe
              allergic reaction to any vaccinations in the past.
              <br />
              <br />
              If you’re feeling sick or have a fever, stay home and reschedule
              your appointment for another time.
            </p>
          </div>
        </div>
      </div>
      <div className="py-48 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <h2 className="text-blue-primary text-center text-4xl font-semibold lg:col-span-2 order-1">
            What is a vaccine and immunization appointment?
          </h2>
          <div className="flex items-center justify-center order-2">
            <img
              src="/img/pexels-vlada-karpovich-portrait.jpg"
              className="w-4/5 mx-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start justify-evenly order-3">
            <p className="text-blue-secondary text-center lg:text-start">
              Getting a vaccine is an important way to prevent getting sick from
              infectious diseases.
              <br />
              <br />A <span className="font-bold">vaccine</span> introduces
              information about an illness to your body. This causes your immune
              system to develop a defense against it.
              <br />
              <br />
              <span className="font-bold">Immunization</span> is the process of
              getting a vaccine and developing an immune response to it. When
              you’re immunized, your body will protect you when you’re exposed
              to the disease.
            </p>
            <p className="text-blue-secondary text-center lg:text-start">
              People need vaccines and immunizations for different phases of
              life.
              <br />
              <br />
              Babies need vaccines to be protected from illnesses while their
              immune system is developing. Older adults may need vaccines to
              remind the immune system to keep fighting.
              <br />
              <br />
              At Qcare, located at mobile care units throughout the New York
              City area, we offer vaccines and immunizations for every age and
              stage of life.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-repeat-space bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary heading text-4xl font-semibold text-center">
              Why you need to be seen for a vaccine and immunization visit
            </h2>
            <p className="text-center text-blue-primary mt-12 text-xl md:w-2/3 w-11/12 mx-auto">
              The{" "}
              <a
                href="https://www.cdc.gov/vaccines/adults/rec-vac/index.html"
                className="text-blue-logo-primary hover:text-blue-secondary underline-animation after:bg-blue-secondary"
              >
                CDC recommends
              </a>{" "}
              different vaccines based on your age and lifestyle. Check your
              vaccination and immunization card or record to make sure you’re on
              track.
              <br />
              <br />
              You may need certain vaccines before starting a new job or
              traveling. Our professionals at Qcare will help you get immunized
              for your needs.
            </p>
            <div className="border-2 rounded-xl border-blue-primary bg-white p-4 md:w-1/2 w-5/6 mx-auto mt-12 grid lg:grid-cols-2 gap-4">
              <p className="text-center text-blue-logo-primary text-lg lg:col-span-2">
                At Qcare, we offer vaccines to protect against:
              </p>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Chickenpox</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  MMR (measles, mumps, rubella)
                </h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  Tdap (tetanus, diptheria, pertussis)
                </h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Meningitis</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Flu</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">COVID-19</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Hepatitis A & B</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">HPV</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Shingles</h5>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a
                href="/locations"
                className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary border-2 font-medium uppercase sm:inline hidden"
              >
                Schedule your next vaccine with QCare
              </a>
              <a
                href="/locations"
                className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary border-2 font-medium uppercase sm:hidden inline"
              >
                Schedule an appointment
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

export default Vaccines;
