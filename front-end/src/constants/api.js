// export const PATH_TO_ENDPOINT_MAPPING = {
//   //  Map gender to API endpoint
//   main: "main",
//   women: "women",
//   men: "men",
//   kids: "children",
// };

// export const BACK_END_URL = "http://localhost:3000";

// użyj proxy Netlify zamiast localhost:
export const BACK_END_URL = import.meta.env.VITE_API_BASE || "/api";

// mapuj param "gender" na ścieżkę functions
export const PATH_TO_ENDPOINT_MAPPING = {
  men: "catalog/men",
  women: "catalog/women",
  kids: "catalog/kids",
  // dopisz inne, które masz w routerze
};
