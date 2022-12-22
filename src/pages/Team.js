import { Fragment } from "react";

const Team = () => {
  return (
    <Fragment>
      <div className="banner bg-blue-primary pb-8">
        <div className="pt-32 pb-48 container mx-auto  bg-[url(../public/img/patterns/Q-logo-pattern-home-banner.svg)] bg-center bg-no-repeat bg-contain">
          <h1 className="text-white heading text-6xl font-semibold text-center">
            Meet Our Team
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col p-8 rounded-xl shadow-lg hover:shadow-2xl w-4/5 mx-auto transition-all">
            <img
              src="img/Team/waiho-lum.jpg"
              className="rounded-full w-2/3 mx-auto hidden"
            />
            <h2 className="text-blue-primary text-center font-medium text-2xl my-4">
              Dominique Darguin
            </h2>
            <p className="text-blue-secondary text-center uppercase">
              Nurse Practitioner
            </p>
          </div>
          <div className="flex flex-col p-8 rounded-xl shadow-lg hover:shadow-2xl w-4/5 mx-auto transition-all">
            <img
              src="img/Team/ping-wong.jpg"
              className="rounded-full w-2/3 mx-auto hidden"
            />
            <h2 className="text-blue-primary text-center font-medium text-2xl my-4">
              Xhorxhina Tafani
            </h2>
            <p className="text-blue-secondary text-center uppercase">
              Medical Assistant
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Team;
