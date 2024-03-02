import axios from "axios";

// Endpoints

const apiBaseUrl = "https://dummyjson.com";

const productList = () => `${apiBaseUrl}/products`;

const product = (query: any) => `${apiBaseUrl}/products/${query}`;

const productApiCall = async (endpoints: any, params: any) => {
  const options = {
    method: "GET",
    url: endpoints,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const fetchDiscoverNews = async () => {
  return await productApiCall(productList(), "");
};

export const fetchSearchNews = async (query: any) => {
  const endpoint = product(query);
  return await productApiCall(endpoint, "");
};
