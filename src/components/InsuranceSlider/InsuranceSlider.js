import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import useWindowSize from "../../hooks/useWindowSize";
import INSURANCE_DATA from "./insurance.json";

const InsuranceSlider = () => {
  const insuranceList = INSURANCE_DATA;
  const size = useWindowSize();

  const divisor = size.width < 1024 ? 2 : 4;
  const insuranceSliderIndicators = [
    ...Array(Math.ceil(insuranceList.length / divisor)).keys(),
  ];

  const range = (start, stop, step) => {
    let a = [start],
      b = start;
    while (b < stop) {
      a.push((b += step || 1));
    }
    return b > stop ? a.slice(0, -1) : a;
  };

  return (
    <div
      className="carousel relative slide"
      id="insuranceSlide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          class="carousel-control-next !bg-transparent !mr-4"
          type="button"
          data-bs-target="#insuranceSlide"
          data-bs-slide="prev"
        >
          <BsArrowLeft className="text-4xl !text-blue-logo-secondary" />
          <span class="visually-hidden">Previous</span>
        </button>
        {insuranceSliderIndicators.map((i) => {
          return (
            <button
              type="button"
              data-bs-target="#insuranceSlide"
              className={
                "!w-3 !h-3 rounded-full !bg-blue-logo-secondary" +
                (i === 0 ? " active" : "")
              }
              data-bs-slide-to={i}
              aria-label={"Slide " + (i + 1)}
            ></button>
          );
        })}

        <button
          class="carousel-control-next !bg-transparent !ml-4"
          type="button"
          data-bs-target="#insuranceSlide"
          data-bs-slide="next"
        >
          <BsArrowRight className="text-4xl !text-blue-logo-secondary" />
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        {insuranceSliderIndicators.map((i) => {
          return (
            <div
              className={
                "carousel-item float-left w-full py-16" +
                (i === 0 ? " active" : "")
              }
            >
              <div className={"grid grid-cols-" + divisor + " gap-4"}>
                {range(i * divisor, (i + 1) * divisor - 1).map((j) => {
                  return insuranceList[j] !== undefined ? (
                    <div
                      className="d-flex flex-col justify-center"
                      id="insuranceItem"
                    >
                      <img
                        src={"/img/insurance/" + insuranceList[j].logo}
                        className="w-3/4 mx-auto"
                      />
                      <h5 className="text-blue-primary text-2xl font-semibold text-center">
                        {insuranceList[j].name}
                      </h5>
                    </div>
                  ) : (
                    <div></div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsuranceSlider;
