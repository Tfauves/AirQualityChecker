"use client";
import React, { useState, useEffect } from "react";
import { AIRNOW_API_KEY } from "../config";
import { ZIPCODE_API_KEY } from "../config";
import AirDataCard from "./AirDataCard";

const AirDataForm = () => {
  const [formData, setFormData] = useState({ zip: "" });
  const [data, setData] = useState(null);
  const [zipData, setZipData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKEY = AIRNOW_API_KEY;
  const zipApiKey = ZIPCODE_API_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await fetchData(formData.zip);
    } catch (err) {
      setError("Faild to fetch data");
    }
    setLoading(false);
    setFormData({ zip: "" });
  };

  const fetchData = async (zip) => {
    const currentDate = new Date().toISOString().slice(0, 10);

    try {
      const [airQualityResponse, zipAreaResponse] = await Promise.all([
        fetch(
          `https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zip}&date=${currentDate}&distance=25&API_KEY=${apiKEY}`
        ),
        fetch(
          `https://api.zipcodestack.com/v1/search?codes=${zip}&country=us&apikey=${zipApiKey}`
        ),
      ]);

      const airQualityResult = await airQualityResponse.json();
      const zipAreaResult = await zipAreaResponse.json();

      if (airQualityResult.length > 0) {
        setData(airQualityResult[0]);
      } else {
        setData(null);
        setError("No air quality data found for this ZIP code");
      }

      // Set ZIP code area data
      if (
        zipAreaResult.results &&
        zipAreaResult.results[zip] &&
        zipAreaResult.results[zip][0]
      ) {
        setZipData(zipAreaResult.results[zip][0]);
      } else {
        setZipData(null);
        setError("No ZIP code data found");
      }
    } catch (error) {
      setError("An error occurred while fetching data");
      setData(null);
      setZipData(null);
    }
  };

  return (
    <div className="mt-32">
      <div className="flex justify-center  ">
        <form
          className="flex flex-col gap-3 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
          onSubmit={handleSubmit}
        >
          <input
            id="zip"
            name="zip"
            type="text"
            placeholder="ZIP Code"
            onChange={handleChange}
            required={true}
            value={formData.zip}
          />
          <button
            className="btn max-w-screen-sm text-white"
            type="submit"
            value="search zip"
          >
            Search By ZIP Code
          </button>
        </form>
      </div>
      <div className="flex justify-center mt-10">
        <AirDataCard apiData={data} zipData={zipData} />
      </div>
    </div>
  );
};

export default AirDataForm;
