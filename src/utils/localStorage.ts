export const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '{}');
};

export const setLocalStorage = <T>(key: string, value: T) => {
  return localStorage.setItem(
    key,
    typeof value === 'string' ? value : JSON.stringify(value),
  );
};

export const removeLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};
