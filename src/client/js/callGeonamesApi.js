let geonamesApi = async (geoURL, cityName, apiKey) => {
  const res = await fetch(geoURL + cityName + apiKey);
  try {
    const result = await res.json();
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
  return result;
};
export { geonamesApi };
