import { Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosMedical } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InsuranceSlider from "../../components/InsuranceSlider/InsuranceSlider";

const Stomach = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/compressed-files/pexels-polina-zimmerman-3958561.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-24 lg:py-56">
              <h1 className="text-white heading font-semibold text-4xl lg:text-6xl text-center">
                Stomach Ailments & Urgent Care
              </h1>
              <h3 className="text-white text-xl lg:text-2xl font-medium text-center mt-8 mx-2 w-fit">
                Visit QCare mobile care units throughout New York City for all
                stomach ailments needs. Are you having stomach pain, discomfort,
                indigestion, vomiting or diarrhea? By scheduling a skin care
                visit at Qcare, we can help you diagnose and treat stomach aches
                and avoid dehydration.
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
            extensive education and experience in stomach care. They’ll help you
            determine the right course of treatment to help you feel your best.
          </h4>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center text-blue-primary">
          What causes stomach pain?
        </h2>
        <p className="text-blue-logo-primary text-lg lg:text-xl text-center lg:w-2/3 w-5/6 mx-auto font-medium mt-8">
          Because viruses and digestive conditions share many symptoms, it can
          be difficult to tell the difference between them based on symptoms
          alone. Our team is expertly trained to find common stomach problems.
          <br />
          <br />
          Stomach aches, also known as abdominal pain, can have a wide range of
          causes. Symptoms can often go away in 24-48 hours when stomach aches
          are caused by indigestions, food poisoning or a virus.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className="flex justify-center items-center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce="true"
            >
              <div className="w-4/5 rounded-xl mx-auto overflow-hidden">
                <LazyLoadImage
                  src="/img/compressed-files/pexels-sora-shimazaki-5938366.jpg"
                  alt="couple-in-bed"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="flex flex-col justify-center items-start lg:mx-0 mx-2">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="lg:text-lg text-blue-logo-primary text-center lg:text-start mb-4">
                When symptoms are severe or last longer, it’s important to seek
                medical attention. Other causes of stomach pain can include:
              </p>
              <div className="flex flex-col justify-center items-start w-fit lg:mx-0 mx-auto">
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Gastrointestinal infections: Bacterial, viral, or parasitic
                    infections can cause stomach aches and are usually
                    accompanied by symptoms such as diarrhea, nausea, vomiting,
                    and fever.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Irritable bowel syndrome (IBS): IBS is a chronic condition
                    that affects the large intestine and can cause abdominal
                    pain, cramping, bloating, gas, and diarrhea or constipation.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Gastroesophageal reflux disease (GERD): GERD occurs when
                    stomach acid flows back into the esophagus, causing a
                    burning sensation in the chest and stomach.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Food allergies or intolerances: Certain foods, such as
                    lactose, gluten, or certain types of fruits or vegetables,
                    can cause stomach aches in people who are allergic or
                    intolerant to them.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Food allergies or intolerances: Certain foods, such as
                    lactose, gluten, or certain types of fruits or vegetables,
                    can cause stomach aches in people who are allergic or
                    intolerant to them.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Appendicitis: Appendicitis is a condition in which the
                    appendix becomes inflamed, causing severe abdominal pain
                    that usually requires immediate medical attention.
                  </h5>
                </div>
                <div className="flex items-start justify-start w-fit my-1">
                  <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                  <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                    Appendicitis: Appendicitis is a condition in which the
                    appendix becomes inflamed, causing severe abdominal pain
                    that usually requires immediate medical attention.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-secondary/10 py-8">
        <div className="py-16 bg-[url(../public/img/patterns/Q-logo-pattern.svg)] bg-center bg-no-repeat bg-contain">
          <div className="container mx-auto">
            <h2 className="text-blue-primary text-2xl lg:text-4xl font-semibold text-center">
              When to see care for stomach pain
            </h2>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              Stomach pain can be caused by a variety of factors, including
              indigestion, gas, or a stomach virus. In some cases, however,
              stomach pain can be a symptom of a more serious condition that
              requires medical attention.
            </p>
            <div className="flex flex-col justify-center items-start lg:w-1/2 w-fit lg:mx-auto mx-8 mt-12">
              <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 w-5/6 mx-auto mb-4">
                It's important to see a healthcare provider if you experience
                any of the following symptoms along with stomach pain:
              </p>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Severe or persistent pain that doesn't go away with
                  over-the-counter remedies or home treatments.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Blood in your stool
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Chest pain: If you experience stomach pain that radiates to
                  your chest, it could be a sign of a heart attack and you
                  should seek emergency medical attention.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Vomiting or diarrhea: If you experience vomiting or diarrhea
                  along with stomach pain, you may be dehydrated and require
                  medical treatment.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <IoIosMedical className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-logo-primary lg:text-lg ml-2 w-fit">
                  Unexplained weight loss: If you experience unexplained weight
                  loss along with stomach pain, it could be a sign of a serious
                  condition and you should seek medical attention.
                </h5>
              </div>
            </div>
            <p className="text-blue-logo-primary text-center text-lg lg:text-xl font-medium mt-16 lg:w-2/3 w-5/6 mx-auto">
              In general, if you are concerned about your stomach pain, it's
              always a good idea to seek medical advice to determine the
              underlying cause and appropriate treatment.
            </p>
          </div>
        </div>
        <div className="pb-16 container mx-auto">
          <div className="mt-12 border-2 rounded-xl bg-white border-blue-primary p-6 md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-blue-primary text-2xl font-semibold text-center">
              What to expect at an urgent care visit for stomach pain
            </h2>
            <p className="text-blue-primary text-lg text-center mt-8">
              If you are experiencing stomach pain and decide to visit an urgent
              care facility, here's what you can generally expect:
            </p>
            <div className="flex flex-col justify-center items-start lg:w-3/4 w-fit mx-auto">
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  One of our healthcare providers will ask about your symptoms
                  and medical history.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  A clinician will then conduct a physical exam to check for
                  signs of any underlying medical conditions that may be causing
                  your stomach pain.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  Diagnostic tests: Depending on your symptoms, the medical
                  professional may order diagnostic tests such as blood tests,
                  urine tests, or imaging tests like an X-ray or CT scan.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  Treatment: Based on your symptoms and test results, the
                  medical professional may provide treatment such as medication
                  or fluids to help alleviate your symptoms. If they determine
                  that your condition is severe, they may recommend that you go
                  to the emergency room for further treatment.
                </h5>
              </div>
              <div className="flex items-start justify-start w-fit my-1">
                <BsCheck2Circle className="text-2xl text-blue-logo-secondary" />
                <h5 className="text-blue-secondary lg:text-lg ml-2 w-fit">
                  Follow-up: Before you leave, the medical professional will
                  provide you with instructions on how to manage your symptoms
                  at home and may recommend a follow-up visit with your primary
                  care provider.
                </h5>
              </div>
            </div>
            <p className="text-blue-primary text-lg text-center mt-8">
              It's important to note that the specific course of treatment for
              stomach pain at an urgent care facility will vary depending on the
              cause and severity of your symptoms. Qcare staff will work to
              provide you with efficient and effective care to help alleviate
              your discomfort.
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

export default Stomach;
