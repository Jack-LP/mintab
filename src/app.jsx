import { useState, useEffect } from 'preact/hooks';
import { Wallpaper } from './components/display/Wallpaper';
import { SettingsBtn } from './components/display/SettingsBtn';
import { SettingsDrawer } from './components/settings/SettingsDrawer';
import { SettingsModal } from './components/settings/SettingsModal';
import { Clock } from './components/display/Clock';
import { Greeting } from './components/display/Greeting';
import { Search } from './components/display/Search';
import { Links } from './components/display/Links';
import { getFromStorage, setToStorage } from './utilities/localStorage';
import { printConsole } from './utilities/printConsole';

export const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [msgLogged, setMsgLogged] = useState(false);

  if (!msgLogged) {
    printConsole();
    setMsgLogged(true);
  }

  return (
    <div className='relative flex min-h-screen w-screen items-center justify-center overflow-hidden font-nunito text-white'>
      <SettingsDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <SettingsModal />
      <Wallpaper />
      <SettingsBtn showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <div className='flex flex-col items-center justify-center gap-4'>
        <Clock />
        <Greeting />
        <Search />
        <Links />
      </div>
    </div>
  );
};
