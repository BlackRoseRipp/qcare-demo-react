import React, { useEffect, useState } from "react";
import INSURANCE_DATA from './insurance.json';
import './InsuranceSlider.css';

const InsuranceSlider = () => {
    const insuranceList = INSURANCE_DATA

    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    })
    
    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        })
    }
    
    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimenion])

    const divisor = windowDimenion.winWidth < 991 ? 2 : 4
    const insuranceSliderIndicators = [...Array(Math.ceil(insuranceList.length / divisor)).keys()]

    const range = (start, stop, step) => {
        let a = [start], b = start;
        while (b < stop) {
            a.push(b += step || 1);
        }
        return (b > stop) ? a.slice(0,-1) : a;
    }

    return (
        <div className='carousel carousel-dark slide' id='insuranceSlide'>
            <div class="carousel-indicators">
                {insuranceSliderIndicators.map((i) => {
                    return (
                        <button type="button" data-bs-target="#insuranceSlide" className={i === 0 ? 'active' : ''} data-bs-slide-to={i} aria-label={"Slide "+(i+1)}></button>
                    )
                })}
            </div>
            <div className='carousel-inner justify-content-center mx-auto'>
                {insuranceSliderIndicators.map((i) => {
                    return (
                        <div className={'carousel-item'+(i === 0 ? ' active' : '')}>
                            <div className='row g-4 w-75 mx-auto'>
                                {range(i*divisor, ((i+1)*divisor)-1).map((j) => {
                                    return (insuranceList[j] !== undefined ? (
                                        <div className={'col-'+(12/divisor)+' d-flex flex-column justify-content-center'} id='insuranceItem'>
                                            <img src={'assets/img/insurance/'+insuranceList[j].logo} className='insurance-img' />
                                            <h5 className='insurance-text'>{insuranceList[j].name}</h5>
                                        </div>
                                    ) : (
                                        <div></div>
                                    ))
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#insuranceSlide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#insuranceSlide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default InsuranceSlider