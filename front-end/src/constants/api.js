// export const BACK_END_URL = "http://localhost:3000";
// export const BACK_END_URL = "https://shop-in-react.onrender.com";

// Maping
export const PATH_TO_ENDPOINT_MAPPING = {
  main: "main",
  women: "women",
  men: "men",
  kids: "children",
};

// W DEV możesz ustawić VITE_API_URL=http://localhost:3000 (plik .env.local)
// Na produkcji (Netlify) używamy proxy /api -> Render (patrz netlify.toml)
export const BACK_END_URL = import.meta.env.VITE_API_URL || "/api";
