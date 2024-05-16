// "use client";
// import React, { useEffect, useState } from "react";
// import { AIRNOW_API_KEY } from "../config";

// function AirData() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         `https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=02780&date=2024-05-04&distance=25&API_KEY=${AIRNOW_API_KEY}`
//       );
//       const result = await response.json();
//       setData(result);
//       console.log(result);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from API</h1>

//       {data.map((item, index) => (
//         <h1 key={index}>{item.ReportingArea}</h1>
//       ))}
//     </div>
//   );
// }

// export default AirData;
