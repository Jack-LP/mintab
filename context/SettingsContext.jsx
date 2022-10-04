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

  useEffect(() => {
    setToStorage('bookmarks', JSON.stringify(bookmarks));
    setToStorage('useIcon', useIcon);
  }, [bookmarks, useIcon]);

  return (
    <SettingsContext.Provider
      value={{
        bookmarks,
        setBookmarks,
        useIcon,
        setUseIcon,
        background,
        setBackground,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
