import { useContext } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const SettingsSearch = () => {
  const { engine, setEngine, autoFocus, setAutoFocus } = useContext(AppContext);

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl font-bold'>Search</h2>
      <form onChange={(e) => setEngine(e.target.value)} className='flex gap-4'>
        <div className='flex gap-1'>
          <input
            type='radio'
            value={'google'}
            id='radioGoogle'
            name='engine'
            checked={engine === 'google'}
          />
          <label htmlFor='radioGoogle'>Google</label>
        </div>
        <div className='flex gap-1'>
          <input
            type='radio'
            value={'duckduckgo'}
            id='radioDuck'
            name='engine'
            checked={engine === 'duckduckgo'}
          />
          <label htmlFor='radioDuck'>DuckDuckGo</label>
        </div>
      </form>
      <div className='flex items-center justify-between rounded-md bg-sky/20 p-3'>
        <p>Autofocus</p>
        <label className='relative cursor-pointer items-center'>
          <input
            type='checkbox'
            checked={autoFocus}
            onChange={(e) => setAutoFocus(e.target.checked)}
            className='peer sr-only'
          />
          <div class="peer h-[20px] w-[34px] rounded-full bg-white/25 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:bg-white after:transition-all after:duration-150 after:ease-out after:content-[''] peer-checked:bg-mint peer-checked:after:translate-x-[13px] peer-checked:after:border-white"></div>
        </label>
      </div>
    </div>
  );
};
