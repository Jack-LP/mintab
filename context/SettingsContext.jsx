import { createContext, useState, useEffect } from 'react';
import { getFromStorage, setToStorage } from '../utilities/localStorage';

const SettingsContext = createContext();

export const SettingsWrapper = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(
    getFromStorage('bookmarks', true) || ['youtube.com', 'twitter.com']
  );

  const [useIcon, setUseIcon] = useState(
    getFromStorage('useIcon', false) || 'iconOff'
  );

  const [background, setBackground] = useState(
    getFromStorage('background', false) || 'https://i.imgur.com/QJRaeyy.jpg'
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

  const [engine, setEngine] = useState(getFromStorage('engine', false) || '');

  useEffect(() => {
    setToStorage('bookmarks', JSON.stringify(bookmarks));
    setToStorage('useIcon', useIcon);
    setToStorage('background', background);
    setToStorage('brightness', brightness);
    setToStorage('blur', blur);
    setToStorage('clockFormat', clockFormat);
    setToStorage('useSeconds', useSeconds);
    setToStorage('username', username);
    setToStorage('engine', engine);
  }, [
    bookmarks,
    useIcon,
    background,
    brightness,
    blur,
    clockFormat,
    useSeconds,
    username,
    engine,
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
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
