export const useLocalStorage = (key) => {
  const setLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage:", error);
      return false;
    }
  };

  const getLocalStorage = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error getting localStorage:", error);
      return null;
    }
  };

  return { setLocalStorage, getLocalStorage };
};
