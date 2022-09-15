import React from 'react';
import Data from '../../components/Locations/Data';
import StoreLocator from '../../components/Locations/StoreLocator';
import './Locations.css';

const Locations = () => {
    const locationList = Data()

    return (
        <div className='locations-container container'>
            <h1 className='locations-header'>Our Clinic Locations</h1>
            <div className='location-fronts-container visually-hidden'>
                <div className='carousel slide' id='storeFrontsCarousel'>
                    <div className='carousel-indicators'>
                        {locationList.map((location, index) => {
                            return (
                                <button type="button" data-bs-target="#storeFrontsCarousel" data-bs-slide-to={index} class={index === 0 ? "active" : ''} aria-current="true" aria-label={"Slide "+(index+1)}></button>
                            )
                        })}
                    </div>
                    <div className='carousel-inner'>
                        {locationList.map((location, index) => {
                            return (
                                <div className={'carousel-item'+(index === 0 ? ' active' : '')}>
                                    <div className='location-front-item'>
                                        <img className='location-front-img' src={location.Img}/>
                                        <h5 className='location-front-text'>{location.Name}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#storeFrontsCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#storeFrontsCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='map-container'>
                <StoreLocator 
                    locations={locationList} 
                    src='https://www.google.com/maps/d/u/1/embed?mid=1xwRDy-mAHVhayzNjSXDYxrHLbUckrFM&ehbc=2E312F'
                    buttonStyle='blue'
                />
            </div>
        </div>
    )
}

export default Locations