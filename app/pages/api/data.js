import { AIRNOW_API_KEY } from "@/app/config";
export default async function handler(req, res) {
  const response = await fetch(
    `https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=02780&date=2024-05-04&distance=25&API_KEY=${AIRNOW_API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  res.status(200).json(data);
}
