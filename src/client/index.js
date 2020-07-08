import { formHandler } from "./js/formHandler";
import { postData } from "./js/postData";
import { updateUi } from "./js/updateUi";
import { getData } from "./js/getData";
import { safeData } from "./js/safeData";

import "./styles/style.scss";

// addEventListener for "click" on button "generate"
document.getElementById("generate").addEventListener("click", formHandler);

export { formHandler, updateUi, getData, safeData, postData };
