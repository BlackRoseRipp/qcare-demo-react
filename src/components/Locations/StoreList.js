import React, { useEffect, useState } from "react";
import './StoreList.css';

function StoreList(props) {
    const [filteredLocations, setFilteredLocations] = useState(props.locations)
    const locationLength = filteredLocations.length
    //console.log(props.locations)
    //console.log(filteredLocations)
    const filterLocations = (e) => {
        //console.log(e.target.value)
        let text = e.target.value
        if (text !== "") {
          setFilteredLocations(
              props.locations.filter((location) =>
                location.Name.toLowerCase().includes(text.toLowerCase()) || location.Address.toLowerCase().includes(text.toLowerCase())
            )
          )
        } else {
            setFilteredLocations(props.locations)
        }
    }

    useEffect(() => {
      //console.log(props.locations)
      setFilteredLocations(props.locations)
    }, [props])

    //const locData = filteredLocations.length > 0 ? filteredLocations : props.locations
    //const locData = filteredLocations
    //console.log("Here I am")

  return (
    <div>
      <input
        type="search"
        className="form-control location-search"
        placeholder="Find a location"
        onChange={filterLocations}
      />
      <div className="store-list">
        {filteredLocations.map((location, index) => {
          const doEmail = location.Email !== "" ? true : false
          const doPhone = location.Phone !== "" ? true : false

          return (
            <div className="store-item mt-4">
              <div className="ps-2">
                <h5 className="location-name">{location.Name} </h5>
                <p className="location-address-one">
                  {location.Address},
                </p>
                <p className="location-address-two">
                  {location.City} {location.State} {location.Zip}
                </p>
                <p className="location-address-three">
                  {location.Country}
                </p>
                <div className="location-contact text-center">
                  <a className={"btn btn-phone"+(props.buttonStyle ? '-'+props.buttonStyle : '')} href={'tel:'+location.Phone} style={{display: doPhone ? 'inline' : 'none'}}>Call this location</a>
                  <a className="btn btn-email" href={'mailto:'+location.Email} style={{display: doEmail ? 'inline' : 'none'}}>{location.Email}</a>
                </div>
              </div>
              <hr class="divider" style={{ display: index === locationLength - 1 ? 'none' : 'block' }}></hr>
            </div>
            
          );
        })}
      </div>
    </div>
  );
}

export default StoreList;
