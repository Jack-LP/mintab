import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [links, setLinks] = useState([]);

  return (
    <AppContext.Provider value={{ links, setLinks }}>
      {children}
    </AppContext.Provider>
  );
};
