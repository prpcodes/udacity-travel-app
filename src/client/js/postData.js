// POST data to the Server
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  try {
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
export { postData };
