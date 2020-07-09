let pixabayApi = async (cityName) => {
  const pixabayApiKey = "17157704-eccea26d680203f3390b998d1";
  const pixabayApiReqURL = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${cityName}&image_type=photo`;
  const res = await fetch(pixabayApiReqURL);
  let result = {};
  try {
    result = await res.json();
  } catch (error) {
    console.log("error:", error);
  }
  return result;
};

export { pixabayApi };
