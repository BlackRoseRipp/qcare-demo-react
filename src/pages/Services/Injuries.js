import { Fragment } from "react";

const Injuries = () => {
  return (
    <Fragment>
      <div className="bg-[url(../public/img/pexels-mikhail-nilov-7468920.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="bg-blue-primary/80 banner pb-24">
          <div className="bg-[url(../public/img/Q_outlined_letter.svg)] bg-center bg-no-repeat bg-contain">
            <div className="container mx-auto py-56">
              <h1 className="text-white heading font-semibold text-6xl text-center">
                Broken Bones, Strains & Sprains
              </h1>
              <h3 className="text-white text-2xl font-medium text-center mt-8">
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
    </Fragment>
  );
};

export default Injuries;
