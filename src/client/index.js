import { formHandler } from "./js/formHandler";
import { updateUi } from "./js/updateUi";

import "./styles/style.scss";

// addEventListener
document.getElementById("generate").addEventListener("click", formHandler);

export { formHandler, updateUi };
