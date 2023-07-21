import { useState } from 'preact/hooks';

import { Wallpaper } from './components/display/Wallpaper';
import { SettingsBtn } from './components/display/SettingsBtn';
import { SettingsDrawer } from './components/settings/SettingsDrawer';
import { Clock } from './components/display/Clock';
import { Search } from './components/display/Search';
import { Links } from './components/display/Links';

export const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className='flex min-h-screen w-screen items-center justify-center font-nunito text-white'>
      <div className='flex w-[275px] flex-col items-center gap-4'>
        <Wallpaper />
        <SettingsBtn showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        <SettingsDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        <Clock />
        <Search />
        <Links />
      </div>
    </div>
  );
};
