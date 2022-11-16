import { Fragment } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosMedical } from "react-icons/io";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Pediatric = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/pediatric-new-hero.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-56">
              <h1 className="text-white heading text-6xl font-semibold text-center">
                Pediatric Care
              </h1>
              <h3 className="text-white text-2xl font-medium text-center mt-8">
                At Qcare, we treat your children like our own
              </h3>
              <div className="mt-12 text-center w-full">
                <a
                  href="#"
                  className="btn-primary border-2 border-yellow-logo text-white font-medium uppercase hover:bg-yellow-logo hidden md:inline"
                >
                  Schedule an Appointment for Your Child
                </a>
                <a
                  href="#"
                  className="btn-primary border-2 border-yellow-logo text-white font-medium uppercase hover:bg-yellow-logo inline md:hidden"
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
            What is pediatric care?
          </h2>
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <p className="text-blue-primary text-lg font-medium text-center">
              Children can become sick or injured during all hours of the day,
              any day of the week. This makes urgent care at locations like
              Qcare an essential provider for children’s pediatric care. When
              your child is feeling sick, and the pediatrician’s office is busy
              or closed, Qcare is there to provide excellent and warm medical
              care for children.
              <br />
              <br />
              At Qcare, our team of specialized pediatric care providers is
              available after hours to see your little one. We care for kids of
              all ages — from infants to adolescents.
              <br />
              <br />
              Depending on your child’s needs, they can be seen for a well-child
              checkup or at one of our walk-in clinic locations. Click below to
              find out the pediatric location that is right for your child.
            </p>
          </div>
          <div className="text-center mt-12">
            <a
              href="/locations"
              className="btn-primary text-blue-primary border-blue-primary hover:text-white hover:bg-blue-logo-secondary hover:border-blue-logo-secondary border-2 uppercase font-medium"
            >
              Our Locations
            </a>
          </div>
        </div>
      </div>
      <div className="py-24 container mx-auto">
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <h2 className="text-blue-primary text-center text-4xl font-semibold lg:col-span-2 order-1">
            Well-child healthcare visits
          </h2>
          <div className="flex items-center justify-center order-2">
            <img
              src="/img/pexels-vlada-karpovich-portrait.jpg"
              className="w-4/5 mx-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start justify-evenly order-3">
            <p className="text-blue-secondary text-center lg:text-start">
              The purpose of a well-child pediatric visit is to check your
              child’s growth and development. They’re required for back to
              school forms and to participate in athletics. However, their
              necessary to a child’s well-being.
            </p>
            <div className="flex flex-col items-start justify-center my-8">
              <p className="text-blue-logo-primary text-center lg:text-start">
                Parents are encouraged to ask questions and bring up any
                concerns you may have. During a well-child exam, a doctor will
                look at your child’s:
              </p>
              <div className="flex items-center lg:justify-start justify-center my-2 w-full">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Growth & Development
                </p>
              </div>
              <div className="flex items-center lg:justify-start justify-center my-2 w-full">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Vision & Hearing
                </p>
              </div>
              <div className="flex items-center lg:justify-start justify-center my-2 w-full">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">Behavior</p>
              </div>
              <div className="flex items-center lg:justify-start justify-center my-2 w-full">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Immunization Status
                </p>
              </div>
            </div>
            <p className="text-blue-secondary text-center lg:text-start">
              Our providers are trained to screen for common childhood
              illnesses. If any part of the exam raises a concern, the doctor
              will recommend the appropriate testing. Many lab and diagnostic
              tests are available right at Qcare.
              <br />
              <br />
              Your child’s provider will make sure your child is up-to-date with
              the recommended immunizations for his or her age. You can see a
              list of the immunizations we offer here.
            </p>
          </div>
          <h2 className="text-blue-primary text-center text-4xl font-semibold lg:col-span-2 order-4 mt-24">
            What to expect in pediatric care
          </h2>
          <div className="flex flex-col items-start justify-evenly order-6 lg:order-5">
            <p className="text-blue-secondary text-center lg:text-start">
              At Qcare, a doctor or nurse practitioner will evaluate your child
              to determine what kind of treatment he or she needs.
              <br />
              <br />
              Sometimes we need to do tests or minor procedures to get your
              child the right treatment. Our providers use child-friendly
              techniques throughout the process to keep pain and stress to a
              minimum.
            </p>
            <div className="flex flex-col items-center lg:items-start justify-center my-8 w-full">
              <p className="text-blue-logo-primary text-center lg:text-start">
                At Qcare, we can help children with the following:
              </p>
              <div className="flex items-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">X-Rays</p>
              </div>
              <div className="flex items-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">Stitches</p>
              </div>
              <div className="flex items-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Rapid Strep
                </p>
              </div>
              <div className="flex items-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">Flu Tests</p>
              </div>
              <div className="flex items-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  COVID-19 Testing
                </p>
              </div>
              <div className="flex items-center my-2">
                <BsCheck2Circle className="text-blue-logo-secondary text-xl min-w-fit mr-2" />
                <p className="text-blue-logo-primary font-medium">
                  Mononucleosis testing
                </p>
              </div>
            </div>
            <p className="text-blue-secondary text-center lg:text-start">
              Our medical providers may write prescriptions for medications like
              antibiotics, depending on your child’s needs. With our
              comprehensive services, you’ll avoid going to the hospital for
              minor issues — and get your child feeling better sooner.
            </p>
          </div>
          <div className="flex items-center justify-center order-5 lg:order-6">
            <img
              src="/img/pexels-adhitya-rizky-portrait.jpg"
              className="w-4/5 mx-auto rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-repeat-space bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary heading text-4xl font-semibold text-center">
              Pediatric walk-in clinic
            </h2>
            <p className="text-center text-blue-primary mt-12 text-xl md:w-2/3 w-11/12 mx-auto">
              The pediatric walk-in clinic is an urgent care service just for
              kids. Our specialized pediatric care providers treat your child’s{" "}
              <span className="font-bold">non-emergency</span> illnesses or
              injuries.
              <br />
              <br />
              You can bring your child to the Urgent Care walk-in clinic for
              issues that need immediate attention. This may include:
            </p>
            <div className="border-2 rounded-xl border-blue-primary bg-white p-4 md:w-1/2 w-5/6 mx-auto mt-12 grid lg:grid-cols-2 gap-4">
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Fever</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Cough</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Sore Throat</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Ear Infection</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  Nausea, vomiting, & diarrhea
                </h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Allergies & Asthma</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Pink eye</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">
                  Minor cuts, scrapes, or burns
                </h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Broken bones or sprains</h5>
              </div>
              <div className="flex items-center justify-start hover:-translate-y-1 transition-all w-fit cursor-pointer">
                <IoIosMedical className="text-2xl text-blue-logo-secondary mr-2 min-w-fit" />
                <h5 className="text-blue-secondary">Foreign body removal</h5>
              </div>
            </div>
            <p className="text-center text-xl md:w-2/3 w-11/12 mx-auto mt-12 text-blue-primary">
              <span className="font-bold">
                If your child is experiencing a life-threatening emergency, call
                911.
              </span>{" "}
              Children should not be brought to urgent care if they’re having
              difficulty breathing, loss of consciousness or excessive bleeding.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <InsuranceSlider />
      </div>
    </Fragment>
  );
};

export default Pediatric;
