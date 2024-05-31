import React from "react";
import { latoNormal, poppinsMed } from "../fonts/font";

const AirDataCard = ({ apiData, zipData }) => {
  if (!apiData) {
    return (
      <div className="flex flex-col rounded-md p-3 m-2">
        <div className="flex justify-center">
          <h2 className={latoNormal.className}>
            Get air quality data where you live.
          </h2>
        </div>
      </div>
    );
  }

  const { Category, ReportingArea, StateCode, AQI } = apiData;
  const cityData = zipData;

  let AQIAlertColor = "";
  let actionMessage = "";

  switch (Category.Number) {
    case 1:
      AQIAlertColor = "bg-pollutantCardGood";
      actionMessage =
        "Air quality is satisfactory, and air pollution poses little or no risk.";
      break;
    case 2:
      AQIAlertColor = "bg-pollutantCardModerate";
      actionMessage =
        "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.";
      break;
    case 3:
      AQIAlertColor = "bg-pollutantCardSensitive";
      actionMessage =
        "Members of sensitive groups may experience health effects. The general public is less likely to be affected.";
      break;
    case 4:
      AQIAlertColor = "bg-pollutantCardUnhealthy";
      actionMessage =
        "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.";
      break;
    case 5:
      AQIAlertColor = "bg-pollutantCardVeryUnhealthy";
      actionMessage =
        "Health alert: The risk of health effects is increased for everyone.";
      break;
    case 6:
      AQIAlertColor = "bg-pollutantCardHazardous";
      actionMessage =
        "Health warning of emergency conditions: everyone is more likely to be affected.";
      break;
    default:
      AQIAlertColor = "bg-pollutantCardUnknown";
      actionMessage = "Air quality data is unavailable.";
      break;
  }

  return (
    <div className="card p-3">
      <img
        alt="Card Image"
        className="rounded-t-lg object-cover w-full h-48"
        height={300}
        src="/bgimg.jpg"
        style={{
          aspectRatio: "500/300",
          objectFit: "cover",
        }}
        width={500}
      />
      <h1 className={`${latoNormal.className} text-2xl mb-3 mt-3`}>
        Your Reporting Area
      </h1>
      <div
        className={`flex flex-col  rounded-md shadow-lg p-3 m-2 bg-opacity-90`}
      >
        <div className="flex justify-between items-center">
          <span className={`${poppinsMed.className} text-lg`}>
            {cityData}, {StateCode}
          </span>
          <div
            className={`flex flex-col items-center justify-center rounded-md p-2 border border-slate-600 ${AQIAlertColor}`}
          >
            <h3 className={`${poppinsMed.className} text-xl`}>
              {Category.Name}
            </h3>
            <span className={`${poppinsMed.className} text-lg`}>
              AQI: {AQI}
            </span>
          </div>
        </div>
        <p className={`${latoNormal.className} mt-2`}>{actionMessage}</p>
      </div>
    </div>
  );
};

export default AirDataCard;
