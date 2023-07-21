import { SettingsClock } from './SettingsClock';
import { SettingsSearch } from './SettingsSearch';
import { SettingsLinks } from './SettingsLinks';
import { SettingsWallpaper } from './SettingsWallpaper';
import { SettingsGreeting } from './SettingsGreeting';

export const SettingsDrawer = ({ showDrawer, setShowDrawer }) => {
  return (
    <>
      <div
        onClick={() => setShowDrawer(false)}
        className={`${
          !showDrawer ? 'invisible opacity-0' : 'visible opacity-100'
        } absolute inset-0 h-screen w-screen bg-black/50 transition-all duration-500 ease-in-out`}
      ></div>
      <div
        className={`${
          showDrawer ? 'translate-x-0' : 'translate-x-full'
        } fixed right-0 top-0 flex h-screen w-[320px] flex-col bg-black/20 shadow-2xl backdrop-blur-[8px] transition-transform duration-500 ease-in-out`}
      >
        <div className='flex w-full items-center justify-center border-b-[1px] border-white/10 py-6'>
          <img className='w-32' src='/img/mintab-logo.svg' alt='' />
        </div>
        <div className='flex flex-col gap-8 overflow-scroll p-4'>
          <SettingsClock />
          <SettingsSearch />
          <SettingsLinks />
          <SettingsWallpaper />
          <SettingsGreeting />
        </div>
      </div>
    </>
  );
};
