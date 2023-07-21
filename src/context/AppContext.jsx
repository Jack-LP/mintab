import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { getFromStorage, setToStorage } from '../utilities/localStorage';

export const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [links, setLinks] = useState(getFromStorage('links', 'parse') || []);
  const [wallpaper, setWallpaper] = useState(
    getFromStorage('wallpaper') || 'https://i.imgur.com/HS4bQaB.jpg'
  );
  const [brightness, setBrightness] = useState(
    getFromStorage('brightness', 'parse') || 100
  );
  const [blur, setBlur] = useState(getFromStorage('blur', 'parse') || 0);
  const [clockFormat, setClockFormat] = useState(
    getFromStorage('clockFormat', 'parse') || 24
  );
  const [seconds, setSeconds] = useState(
    getFromStorage('seconds') === undefined
      ? false
      : getFromStorage('seconds', 'parse')
  );
  const [engine, setEngine] = useState(getFromStorage('engine') || 'google');
  const [autoFocus, setAutoFocus] = useState(
    getFromStorage('autoFocus') === undefined
      ? true
      : getFromStorage('autoFocus', 'parse')
  );
  const [greeting, setGreeting] = useState(getFromStorage('greeting') || '');

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setToStorage('links', JSON.stringify(links));
    setToStorage('wallpaper', wallpaper);
    setToStorage('brightness', brightness);
    setToStorage('blur', blur);
    setToStorage('clockFormat', clockFormat);
    setToStorage('seconds', seconds);
    setToStorage('engine', engine);
    setToStorage('autoFocus', autoFocus);
    setToStorage('greeting', greeting);
  }, [
    links,
    wallpaper,
    brightness,
    blur,
    clockFormat,
    seconds,
    engine,
    autoFocus,
    greeting,
  ]);

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
        engine,
        setEngine,
        autoFocus,
        setAutoFocus,
        greeting,
        setGreeting,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
