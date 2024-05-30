"use client";
import React, { useState, useEffect } from "react";
import { AIRNOW_API_KEY } from "../config";
import { ZIPCODE_API_KEY } from "../config";
import AirDataCard from "./AirDataCard";

const AirDataForm = () => {
  const [formData, setFormData] = useState({ zip: "" });
  const [data, setData] = useState(null);
  const [zipData, setZipData] = useState("");
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
    await fetchData(formData.zip);
    await fetchZipArea(formData.zip);
    setFormData({ zip: "" });
  };

  const fetchData = async (zip) => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const response = await fetch(
      `https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${zip}&date=${currentDate}&API_KEY=${apiKEY}`
    );
    const result = await response.json();
    setData(result[0]);
    console.log(result);
  };

  const fetchZipArea = async (zip) => {
    const response = await fetch(
      `https://api.zipcodestack.com/v1/search?codes=${zip}&country=us&apikey=${zipApiKey}`
    );
    const result = await response.json();
    setZipData(result);
    console.log(result);
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
