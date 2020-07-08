import { updateUi } from "./updateUi";

let getData = async () => {
  const response = await fetch("http://localhost:8081/getData");
  try {
    const result = await response.json();
    updateUi(result);
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
export { getData };
