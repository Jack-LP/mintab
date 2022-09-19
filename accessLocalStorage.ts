export const getFromStorage = (key, parse) => {
  if (typeof window !== 'undefined') {
    if (parse) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      return window.localStorage.getItem(key);
    }
  }
};

export const setToStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, value);
  }
};
