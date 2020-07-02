import { formHandler } from "./js/formHandler";
import { updateUi } from "./js/updateUi";
import { geoHandler } from "./js/geoHandler";

import "./styles/style.scss";

// addEventListener
document.getElementById("generate").addEventListener("click", geoHandler);

export { formHandler, updateUi, geoHandler };
