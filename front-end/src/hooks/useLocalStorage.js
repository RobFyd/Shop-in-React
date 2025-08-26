export function useLocalStorage() {
  function setJSONToLocalStorage(key, newData) {
    localStorage[key] = JSON.stringify(newData);
  }

  function getJSONFromLocalStorage(key, defaultValue) {
    if (localStorage[key]) {
      return JSON.parse(localStorage[key]);
    } else {
      return defaultValue;
    }
  }
}
