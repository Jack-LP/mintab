import { useContext } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const SettingsReset = () => {
  const { setShowModal } = useContext(AppContext);

  return (
    <button
      onClick={() => setShowModal(true)}
      className='rounded-md bg-sky/20 py-2 font-semibold'
    >
      Reset Settings
    </button>
  );
};
