import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [links, setLinks] = useState([]);
  const [wallpaper, setWallpaper] = useState('');
  const [brightness, setBrightness] = useState(100);
  const [blur, setBlur] = useState(0);

  return (
    <AppContext.Provider
      value={{
        links,
        setLinks,
        wallpaper,
        setWallpaper,
        brightness,
        setBrightness,
        blur,
        setBlur,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
