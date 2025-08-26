import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
  function setJSONToLocalStorage(newData) {
    localStorage[key] = JSON.stringify(newData);
  }

  function getJSONFromLocalStorage() {
    if (localStorage[key]) {
      return JSON.parse(localStorage[key]);
    } else {
      return defaultValue;
    }
  }

  const [data, setData] = useState();
}
