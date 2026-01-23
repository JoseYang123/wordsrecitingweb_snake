// Storage service that provides async API similar to AsyncStorage

interface StorageService {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
  clear: () => Promise<void>;
}

// Implementation for web using localStorage with async wrapper
export const storageService: StorageService = {
  async getItem(key: string): Promise<string | null> {
    return new Promise((resolve) => {
      try {
        const value = localStorage.getItem(key);
        resolve(value);
      } catch (error) {
        console.error('Error getting item from storage:', error);
        resolve(null);
      }
    });
  },

  async setItem(key: string, value: string): Promise<void> {
    return new Promise((resolve) => {
      try {
        localStorage.setItem(key, value);
        resolve();
      } catch (error) {
        console.error('Error setting item to storage:', error);
        resolve();
      }
    });
  },

  async removeItem(key: string): Promise<void> {
    return new Promise((resolve) => {
      try {
        localStorage.removeItem(key);
        resolve();
      } catch (error) {
        console.error('Error removing item from storage:', error);
        resolve();
      }
    });
  },

  async clear(): Promise<void> {
    return new Promise((resolve) => {
      try {
        localStorage.clear();
        resolve();
      } catch (error) {
        console.error('Error clearing storage:', error);
        resolve();
      }
    });
  },
};

// Helper functions for JSON data
export const getJsonItem = async <T>(key: string): Promise<T | null> => {
  try {
    console.log('Getting JSON item from storage:', key);
    const jsonString = await storageService.getItem(key);
    console.log('Got JSON string:', jsonString);
    if (jsonString) {
      const parsedValue = JSON.parse(jsonString) as T;
      console.log('Parsed JSON value:', parsedValue);
      return parsedValue;
    }
    return null;
  } catch (error) {
    console.error('Error parsing JSON item:', error);
    return null;
  }
};

export const setJsonItem = async <T>(key: string, value: T): Promise<void> => {
  try {
    console.log('Setting JSON item to storage:', key, value);
    const jsonString = JSON.stringify(value);
    console.log('Stringified JSON:', jsonString);
    await storageService.setItem(key, jsonString);
    console.log('JSON item set successfully');
  } catch (error) {
    console.error('Error stringifying JSON item:', error);
  }
};
