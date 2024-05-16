import React from "react";

const AirDataCard = ({ apiData }) => {
  if (!apiData) {
    return <div>Search Your Zip Code</div>;
  }

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <h1>Your Reporting Area</h1>
      </div>
      <div>
        {apiData.ReportingArea} {apiData.StateCode}
      </div>
      {/* {apiData.map((item, index) => (
        <div key={index}>
          <h1>{item.ReportingArea}</h1>
          <p>{item.StateCode}</p>
        </div>
      ))} */}
    </div>
  );
};

export default AirDataCard;
