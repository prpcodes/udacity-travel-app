import { formHandler } from "./js/formHandler";
import { updateUi } from "./js/updateUi";
import { getData } from "./js/getData";
import { geonamesApi } from "./js/callGeonamesApi";
import { pixabayApi } from "./js/callPixabayApi";
import { weatherbitApi } from "./js/callWeatherbitApi";

import "./styles/style.scss";

// addEventListener for "click" on button "generate"
document.getElementById("generate").addEventListener("click", formHandler);

export {
  formHandler,
  updateUi,
  getData,
  geonamesApi,
  pixabayApi,
  weatherbitApi,
};
