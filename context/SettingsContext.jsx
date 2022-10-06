import { createContext, useState, useEffect } from 'react';
import { getFromStorage, setToStorage } from '../utilities/localStorage';

const SettingsContext = createContext();

export const SettingsWrapper = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(
    getFromStorage('bookmarks', true) || []
  );

  const [useIcon, setUseIcon] = useState(
    getFromStorage('useIcon', false) || 'iconOff'
  );

  const [background, setBackground] = useState(
    getFromStorage('background', true) || 'https://i.imgur.com/QJRaeyy.jpg'
  );

  const [brightness, setBrightness] = useState(
    getFromStorage('brightness', false) || 1
  );

  const [blur, setBlur] = useState(getFromStorage('blur', false) || 0);

  const [clockFormat, setClockFormat] = useState(
    getFromStorage('clockFormat', false) || 'en-GB'
  );

  const [useSeconds, setUseSeconds] = useState(
    getFromStorage('useSeconds', false) || 'secondsOff'
  );

  const [username, setUsername] = useState(
    getFromStorage('username', false) || ''
  );

  const [autofocus, setAutofocus] = useState(
    getFromStorage('autofocus', false) || 'autofocusOn'
  );

  const [engine, setEngine] = useState(
    getFromStorage('engine', false) || 'http://google.com/search'
  );

  const [clockColor, setClockColor] = useState(
    getFromStorage('clockColor', false) || '#ffffff'
  );

  const [greetingColor, setGreetingColor] = useState(
    getFromStorage('greetingColor', false) || 'whiteAlpha.700'
  );

  useEffect(() => {
    setToStorage('background', JSON.stringify(background));
    setToStorage('bookmarks', JSON.stringify(bookmarks));
    setToStorage('useIcon', useIcon);
    setToStorage('brightness', brightness);
    setToStorage('blur', blur);
    setToStorage('clockFormat', clockFormat);
    setToStorage('useSeconds', useSeconds);
    setToStorage('username', username);
    setToStorage('engine', engine);
    setToStorage('autofocus', autofocus);
    setToStorage('clockColor', clockColor);
    setToStorage('greetingColor', greetingColor);
  }, [
    bookmarks,
    background,
    useIcon,
    brightness,
    blur,
    clockFormat,
    useSeconds,
    username,
    engine,
    autofocus,
    clockColor,
    greetingColor,
  ]);

  return (
    <SettingsContext.Provider
      value={{
        bookmarks,
        setBookmarks,
        useIcon,
        setUseIcon,
        background,
        setBackground,
        brightness,
        setBrightness,
        blur,
        setBlur,
        clockFormat,
        setClockFormat,
        useSeconds,
        setUseSeconds,
        username,
        setUsername,
        engine,
        setEngine,
        autofocus,
        setAutofocus,
        clockColor,
        setClockColor,
        greetingColor,
        setGreetingColor,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
