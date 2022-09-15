import React from "react";
import EmbedMap from "./EmbedMap";
import StoreList from "./StoreList";

function StoreLocator(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <StoreList locations={props.locations} buttonStyle={props.buttonStyle}/>
        </div>
        <div className="col-md-8">
          <EmbedMap src={props.src}/>
        </div>
      </div>
    </div>
  );
}

export default StoreLocator;
