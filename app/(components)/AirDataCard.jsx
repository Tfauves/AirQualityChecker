import React from "react";
import { latoNormal, poppinsMed, lilitaOneRegular } from "../fonts/font";

const AirDataCard = ({ apiData }) => {
  if (!apiData) {
    return (
      <div className=" flex flex-col rounded-md p-3 m-2">
        <div className=" flex justify-center">
          <h2>Get air quality data where you live.</h2>
        </div>
      </div>
    );
  }

  let cardClass = "";
  let actionMessage = "";
  switch (apiData.Category.Number) {
    case 1:
      cardClass = "bg-pollutantCardGood";
      actionMessage =
        "Air quality is satisfactory, and air pollution poses little or no risk.";
      break;
    case 2:
      cardClass = "bg-pollutantCardModerate";
      actionMessage =
        "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.";
      break;
    case 3:
      cardClass = "bg-pollutantCardSensitive";
      actionMessage =
        "Members of sensitive groups may experience health effects. The general public is less likely to be affected.";
      break;
    case 4:
      cardClass = "bg-pollutantCardUnhealthy";
      actionMessage =
        "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.";
      break;
    case 5:
      cardClass = "bg-pollutantCardVeryUnhealthy";
      actionMessage =
        "Health alert: The risk of health effects is increased for everyone.";
      break;
    case 6:
      cardClass = "bg-pollutantCardHazardous";
      actionMessage =
        "Health warning of emergency conditions: everyone is more likely to be affected.";
      break;
    default:
      cardClass = "bg-pollutantCardUnknown";
      actionMessage = "";
      break;
  }

  return (
    <div className=" card">
      <div>
        <h1 className={latoNormal.className}>Your Reporting Area</h1>
      </div>
      <div
        className={`flex flex-col ${cardClass} hover: rounded-md shadow-lg p-3 m-2 bg-opacity-90 `}
      >
        {apiData.ReportingArea} {apiData.StateCode}
        <div>
          <h3>{apiData.Category.Name}</h3>
          <h5>
            AQI:{apiData.AQI}
            {actionMessage}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AirDataCard;
