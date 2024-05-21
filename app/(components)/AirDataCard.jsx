import React from "react";

const AirDataCard = ({ apiData }) => {
  if (!apiData) {
    return (
      <div className=" flex flex-col rounded-md shadow-lg p-3 m-2">
        <div className=" flex justify-center">
          <h2>Get air quality data where you live.</h2>
        </div>
      </div>
    );
  }

  let cardClass = "";
  switch (apiData.Category.Number) {
    case 1:
      cardClass = "bg-pollutantCardGood";
      break;
    case 2:
      cardClass = "bg-pollutantCardModerate";
      break;
    case 3:
      cardClass = "bg-pollutantCardSensitive";
      break;
    case 4:
      cardClass = "bg-pollutantCardUnhealthy";
      break;
    case 5:
      cardClass = "bg-pollutantCardVeryUnhealthy";
      break;
    case 6:
      cardClass = "bg-pollutantCardHazardous";
      break;
    default:
      cardClass = "bg-pollutantCardUnknown";
      break;
  }

  return (
    <div
      className={`flex flex-col ${cardClass} hover:bg-card-hover rounded-md shadow-lg p-3 m-2 `}
    >
      <div className="flex mb-3">
        <h1>Your Reporting Area</h1>
      </div>
      <div>
        {apiData.ReportingArea} {apiData.StateCode}
        <div>
          <h3>{apiData.Category.Name}</h3>
          AQI:{apiData.AQI}
        </div>
      </div>
    </div>
  );
};

export default AirDataCard;
