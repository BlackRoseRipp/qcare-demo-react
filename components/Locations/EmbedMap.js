import React from "react";

const EmbedMap = (props) => {
  const mapSource = props.src;

  return (
    <div>
      <div className="h-[700px] border border-blue-light rounded-[2rem] overflow-hidden w-full mx-auto">
        <iframe
          style={{ position: "relative", top: "-70px", border: "none" }}
          src={mapSource}
          width="100%"
          height="770px"
        ></iframe>
      </div>
    </div>
  );
};

export default EmbedMap;
