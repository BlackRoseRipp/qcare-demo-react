import { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <div className="banner bg-blue-primary pb-24">
        <div className="container mx-auto py-32">
          <h1 className="text-white text-6xl heading font-semibold text-center">
            How Can We Help?
          </h1>
          <h3 className="text-white text-xl font-medium text-center lg:w-2/3 mx-auto mt-6">
            If you need medical care, do not use the form below. Instead, please
            request a visit here:{" "}
            <a
              href="#"
              className="text-blue-secondary hover:underline transition-all"
            >
              Book an Appointment
            </a>
            , or Call 1-877-Qcare18 or 1 877-722-7318.
          </h3>
        </div>
      </div>
      <div className="py-24 container mx-auto">
        <h2 className="text-blue-primary text-3xl font-medium text-center lg:text-start">
          Contact us for more information about our company and services.
        </h2>
        <p className="text-xl text-blue-logo-primary text-center lg:text-start mt-2">
          This form should not be used to request an appointment or to relay any
          medical information.
          <br />
          Please call 911 if you’re experiencing a medical emergency.
        </p>
        <form className="grid md:grid-cols-3 gap-8 mt-16">
          <input
            className="form-input"
            type="name"
            id="contactNameInput"
            placeholder="Name"
            required
          ></input>
          <input
            className="form-input"
            type="email"
            id="contactEmailInput"
            placeholder="Email"
            required
          ></input>
          <input
            className="form-input"
            type="phone"
            id="contactPhoneInput"
            placeholder="Phone Number"
            required
          ></input>
          <textarea
            className="form-input md:col-span-3"
            id="contactMessageInput"
            placeholder="Message"
            rows="6"
            required
          ></textarea>
          <button
            type="submit"
            disabled={false}
            className="md:col-start-2 btn-primary font-medium text-2xl text-blue-primary hover:text-white focus:text-white border-2 border-blue-primary hover:border-blue-logo-primary focus:border-blue-logo-primary hover:bg-blue-logo-primary focus:bg-blue-logo-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Contact;
