import React from "react";
import EmbedMap from "./EmbedMap";
import StoreList from "./StoreList";

function StoreLocator(props) {
  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-4">
          <StoreList locations={props.locations} buttonStyle={props.buttonStyle}/>
        </div>
        <div className="col-lg-8">
          <EmbedMap src={props.src}/>
        </div>
      </div>
    </div>
  );
}

export default StoreLocator;
