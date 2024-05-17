"use client";
import React, { useState, useEffect } from "react";
import { AIRNOW_API_KEY } from "../config";
import AirDataCard from "./AirDataCard";

const AirDataForm = () => {
  const [formData, setFormData] = useState({ zip: "" });
  const [data, setData] = useState(null);
  const apiKEY = AIRNOW_API_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData(formData.zip);
    setFormData({ zip: "" });
  };

  const fetchData = async (zip) => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const response = await fetch(
      `https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zip}&date=${currentDate}&distance=25&API_KEY=${apiKEY}`
    );
    const result = await response.json();
    setData(result[0]);
    console.log(result);
  };

  return (
    <div>
      <div className="flex justify-center">
        <form
          className="flex flex-col gap-3 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-card px-3 py-2 border rounded-md text-sm sm:text-base md:text-lg w-full bg-opacity-20 backdrop-blur-md border-white border-opacity-40 shadow-lg"
            id="zip"
            name="zip"
            type="text"
            placeholder="ZIP Code"
            onChange={handleChange}
            required={true}
            value={formData.zip}
          />
          <button className="btn" type="submit" value="search zip">
            Search{" "}
          </button>
        </form>
      </div>
      <div>
        <AirDataCard apiData={data} />
      </div>
    </div>
  );
};

export default AirDataForm;
