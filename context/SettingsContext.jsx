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

  useEffect(() => {
    setToStorage('bookmarks', JSON.stringify(bookmarks));
    setToStorage('useIcon', useIcon);
  }, [bookmarks, useIcon]);

  return (
    <SettingsContext.Provider
      value={{ bookmarks, setBookmarks, useIcon, setUseIcon }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
