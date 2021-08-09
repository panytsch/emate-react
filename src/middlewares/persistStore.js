const StorageKey = 'persistedStorage';

export const persistToSessionStorage = (store) => (next) => (action) => {
  const result = next(action);
  window.sessionStorage.setItem(StorageKey, JSON.stringify(store.getState()));
  return result;
};

export const getInitialState = () => JSON.parse(window.sessionStorage.getItem(StorageKey)) || {};
