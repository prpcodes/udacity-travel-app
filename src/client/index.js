import { formHandler } from "./js/formHandler";
import { postData } from "./js/postData";
import { updateUi } from "./js/updateUi";
import { geoApi } from "./js/geoApi";

// addEventListener for "click" on button "generate"
document.getElementById("generate").addEventListener("click", formHandler);

import "./styles/style.scss";

export { formHandler, postData, updateUi, geoApi };
