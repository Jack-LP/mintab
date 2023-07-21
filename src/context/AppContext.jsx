import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [links, setLinks] = useState([]);
  const [wallpaper, setWallpaper] = useState('');
  const [brightness, setBrightness] = useState(100);
  const [blur, setBlur] = useState(0);
  const [clockFormat, setClockFormat] = useState(24);
  const [seconds, setSeconds] = useState();

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
        clockFormat,
        setClockFormat,
        seconds,
        setSeconds,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
