import { useContext, useEffect } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const SettingsModal = () => {
  const { showModal, setShowModal } = useContext(AppContext);

  useEffect(() => {
    if (showModal) {
      const keyDownHandler = (e) => {
        e.key === 'Escape' && setShowModal(false);
      };
      document.addEventListener('keydown', keyDownHandler);
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }
  }, [showModal]);

  const resetSettings = () => {
    setShowModal(false);
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div
        onClick={() => setShowModal(false)}
        className={`${
          !showModal ? 'invisible opacity-0' : 'visible opacity-100'
        } absolute inset-0 h-screen w-screen bg-black/50 transition-all duration-100 ease-out`}
      ></div>
      <div
        className={`${
          !showModal
            ? 'invisible scale-90 opacity-0'
            : 'visible scale-100 opacity-100'
        } absolute left-1/2 top-16 flex h-[170px] w-[450px] -translate-x-1/2 flex-col justify-between rounded-md bg-glass/10 px-6 py-4 shadow-2xl shadow-black backdrop-blur-[8px] transition-all duration-200 ease-out`}
      >
        <h3 className='text-lg font-bold'>Reset Settings</h3>
        <p>Are you sure you want to return to default settings?</p>
        <div className='flex gap-2 self-end'>
          <button className='rounded-md bg-white/20 px-3 py-2'>Cancel</button>
          <button
            onClick={resetSettings}
            className='rounded-md bg-mint px-3 py-2'
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
