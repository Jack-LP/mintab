import { SettingsLinks } from './SettingsLinks';

export const SettingsDrawer = ({ showDrawer, setShowDrawer }) => {
  return (
    <div
      onClick={() => setShowDrawer(false)}
      className={`${
        !showDrawer ? 'hidden' : null
      } absolute inset-0 h-screen w-screen bg-black/50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          showDrawer ? 'translate-x-0' : 'translate-x-full'
        } fixed right-0 top-0 flex h-screen w-[320px] flex-col bg-black/20 shadow-lg backdrop-blur-[8px] transition-transform duration-150 ease-out`}
      >
        <div className='flex w-full items-center justify-center border-b-[1px] border-white/10 py-6'>
          <img className='w-32' src='/img/mintab-logo.svg' alt='' />
        </div>
        <div className='flex flex-col p-4'>
          <SettingsLinks />
        </div>
      </div>
    </div>
  );
};
