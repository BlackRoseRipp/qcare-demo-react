import { Fragment } from "react";
import Data from "../components/Locations/Data";
import StoreLocator from "../components/Locations/StoreLocator";

const Locations = () => {
  return (
    <Fragment>
      <div className="banner bg-blue-primary pb-24">
        <div className="container mx-auto py-56 bg-[url(../public/img/patterns/Q-logo-pattern-home-banner.svg)] bg-center bg-no-repeat bg-contain">
          <h1 className="text-white text-6xl heading font-semibold text-center">
            Find One of Our Convenient Locations Near You
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <StoreLocator
          locations={Data()}
          src="https://www.google.com/maps/d/u/1/embed?mid=1xwRDy-mAHVhayzNjSXDYxrHLbUckrFM&ehbc=2E312F"
        />
      </div>
    </Fragment>
  );
};

export default Locations;
