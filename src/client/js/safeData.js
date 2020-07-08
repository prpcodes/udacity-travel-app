let safeData = async (geoURL, cityName, apiKey) => {
  const response = await fetch(geoURL + cityName + apiKey);
  try {
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
export { safeData };
