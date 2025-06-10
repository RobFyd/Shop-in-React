import { redirect } from "react-router-dom";
import { PATH_TO_ENDPOINT_MAPPING } from "../constants/api.js";

export function mainPageLoader({ params }) {
  const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender];
  if (backEndPath) {
    return fetch(`http://localhost:3000/${backEndPath}`);
  } else {
    return redirect("/women");
  }
}
