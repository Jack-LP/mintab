export const SettingsBtn = ({ showDrawer, setShowDrawer }) => {
  return (
    <button
      className={`${
        showDrawer ? 'hidden' : null
      } absolute right-4 top-4 h-8 w-8 rounded-md border-[1px] border-white/50 transition-colors duration-100 ease-out hover:bg-white/10`}
      onClick={() => setShowDrawer(true)}
    >
      <i class='bi bi-gear-fill text-sm'></i>
    </button>
  );
};
