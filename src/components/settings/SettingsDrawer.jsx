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
        } fixed right-0 top-0 flex h-screen w-[320px] flex-col items-center bg-neutral-800/50 p-2 shadow-lg backdrop-blur-md transition-transform duration-150 ease-out`}
      >
        SettingsDrawer
      </div>
    </div>
  );
};
