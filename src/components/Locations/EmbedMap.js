import React from "react";

const EmbedMap = (props) => {
  const mapSource = props.src

  return (
    <div>
      <div
        style={{
          height: "700px",
          border: "2px solid #eee",
          borderRadius: "2rem",
          display: "inline-block",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <iframe
          style={{ position: "relative", top: "-70px", border: "none" }}
          src={mapSource}
          width="100%"
          height="770px"
        ></iframe>
      </div>
    </div>
  );
}

export default EmbedMap;
