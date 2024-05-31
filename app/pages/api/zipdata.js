import { ZIPCODE_API_KEY } from "@/app/config";
export default async function handler(req, res) {
  const response = await fetch(
    `https://api.zipcodestack.com/v1/search?codes=&country=us&apikey=${ZIPCODE_API_KEY}`
  );
  const zipdata = await response.json();
  console.log(zipdata);
  res.status(200).json(zipdata);
}
