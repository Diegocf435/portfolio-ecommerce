export const UseFetch = async (url, option) => {
  try {
    const result = await fetch(url, option);
    if (!result.ok) {
      throw new Error("Error al hacer fetch");
    }
    const json = result.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export const Options = {
  method: "GET",
  url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
  params: {
    country: "us",
    lang: "en",
    currentpage: "0",
    pagesize: "30",
    // categories: "men_all",
    // concepts: "H&M MAN",
  },
  headers: {
    "X-RapidAPI-Key": "21c918ae93msh81e995138eca1cap16c6dfjsn78d52db9c9b6",
    "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
  },
};