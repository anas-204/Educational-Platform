import Cookies from "js-cookie";
export default (BASE_URL) => {
  const fetchRequest = async (endpoint, options = {}) => {
    const TOKEN = Cookies.get("token")?.replace(/['"]+/g, "");

    const { headers = {}, body, ...restOptions } = options;

    const finalHeaders = {
      "x-app-type": "web",
      authorization: `Bearer ${TOKEN}`,
      Accept: "application/json",
      ...headers,
    };


    
    if (!(body instanceof FormData))
      finalHeaders["Content-Type"] = "application/json";
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: finalHeaders,
      body,
      ...restOptions,
    });

    if (!response.ok) {
      if (response.status === 401) {
        Cookies.remove("token");
        // Cookies.remove("user");
        window.location.href = "/Login";
      }
      throw await response.json();
    }

    if ([204].includes(response.status))
      return { message: "Success! Your request has been processed." };

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) return await response.json();

    return await response.blob();
  };

  return fetchRequest;
};
/*
get sttudent   
* */