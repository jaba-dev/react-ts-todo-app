import { useState, useEffect, Dispatch, SetStateAction } from 'react';

// Define the type for the value you want to store in local storage
type LocalStorageValue<T> = T | (() => T);

// Custom hook to handle local storage
function useLocalStorage<T>(
  key: string,
  initialValue: LocalStorageValue<T>
): [T, Dispatch<SetStateAction<T>>] {
  // Initialize state with the value from local storage, if available
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or return initialValue
      return item ? (JSON.parse(item) as T) : initialValue instanceof Function ? initialValue() : initialValue;
    } catch (error) {
      // If error, return initialValue
      console.error(error);
      return initialValue instanceof Function ? initialValue() : initialValue;
    }
  });

  // Update local storage whenever the state changes
  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      // Set state
      setStoredValue(valueToStore);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
