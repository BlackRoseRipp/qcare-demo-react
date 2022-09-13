import React from "react";

function EmbedMap() {
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
          src="https://www.google.com/maps/d/u/1/embed?mid=1xwRDy-mAHVhayzNjSXDYxrHLbUckrFM&ehbc=2E312F"
          width="100%"
          height="770px"
        ></iframe>
      </div>
    </div>
  );
}

export default EmbedMap;
