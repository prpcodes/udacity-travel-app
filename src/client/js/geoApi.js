//make API call to get JSON data
const geoApi = async (baseURL, cityName, apiKey) => {
  const res = await fetch(baseURL + cityName + apiKey);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
export { geoApi };
