import React, { useEffect, useState } from "react";

function StoreList(props) {
  const [filteredLocations, setFilteredLocations] = useState(props.locations);
  const locationLength = filteredLocations.length;
  //console.log(props.locations)
  //console.log(filteredLocations)
  const filterLocations = (e) => {
    //console.log(e.target.value)
    let text = e.target.value;
    if (text !== "") {
      setFilteredLocations(
        props.locations.filter(
          (location) =>
            location.Name.toLowerCase().includes(text.toLowerCase()) ||
            location.Address.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFilteredLocations(props.locations);
    }
  };

  useEffect(() => {
    //console.log(props.locations)
    setFilteredLocations(props.locations);
  }, [props]);

  //const locData = filteredLocations.length > 0 ? filteredLocations : props.locations
  //const locData = filteredLocations
  //console.log("Here I am")

  return (
    <div>
      <input
        type="search"
        className="w-full rounded-full border border-blue-light px-3 py-1.5 outline-blue-light outline-offset-2 focus-visible:!outline-4 transition-all"
        placeholder="Find a location"
        onChange={filterLocations}
      />
      <div className="scrollbar overflow-y-auto bg-white h-[630px] p-4 rounded-[2rem] border border-blue-light mt-8">
        {filteredLocations.map((location, index) => {
          const doEmail = location.Email !== "" ? true : false;
          const doPhone = location.Phone !== "" ? true : false;

          return (
            <div className="mt-4">
              <div className="ps-2 text-center lg:text-start">
                <h5 className="font-semibold text-blue-900 text-lg">
                  {location.Name}{" "}
                </h5>
                <p className="text-blue-dark font-medium">
                  {location.Address},
                </p>
                <p className="text-blue-dark font-medium">
                  {location.City} {location.State} {location.Zip}
                </p>
                <p className="text-blue-dark font-medium">{location.Country}</p>
                <div className="my-4 text-center">
                  <a
                    className="btn-primary text-blue-dark font-semibold border-2 border-blue-dark hover:text-white hover:bg-blue-light hover:border-blue-light"
                    href={"tel:" + location.Phone}
                    style={{ display: doPhone ? "inline" : "none" }}
                  >
                    Call this location
                  </a>
                  <a
                    className="btn-primary text-blue-dark font-semibold border-2 border-blue-dark hover:text-white hover:bg-blue-light hover:border-blue-light"
                    href={"mailto:" + location.Email}
                    style={{ display: doEmail ? "inline" : "none" }}
                  >
                    {location.Email}
                  </a>
                </div>
              </div>
              <hr
                class="mt-8 border-blue-light/40"
                style={{
                  display: index === locationLength - 1 ? "none" : "block",
                }}
              ></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StoreList;
