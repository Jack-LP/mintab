import { useState } from 'preact/hooks';
import { Wallpaper } from './components/display/Wallpaper';
import { SettingsBtn } from './components/display/SettingsBtn';
import { SettingsDrawer } from './components/settings/SettingsDrawer';
import { SettingsModal } from './components/settings/SettingsModal';
import { Clock } from './components/display/Clock';
import { Greeting } from './components/display/Greeting';
import { Search } from './components/display/Search';
import { Links } from './components/display/Links';

export const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className='relative flex min-h-screen w-screen items-center justify-center font-nunito text-white'>
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
