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

  useEffect(() => {
    setToStorage('bookmarks', JSON.stringify(bookmarks));
    setToStorage('useIcon', useIcon);
    setToStorage('background', background);
    setToStorage('brightness', brightness);
    setToStorage('blur', blur);
  }, [bookmarks, useIcon, background, brightness, blur]);

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
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
