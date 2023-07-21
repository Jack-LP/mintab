import { useContext } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const SettingsClock = () => {
  const { clockFormat, setClockFormat, seconds, setSeconds } =
    useContext(AppContext);

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-bold'>Clock</h2>
      <form
        onChange={(e) => setClockFormat(parseInt(e.target.value, 10))}
        className='flex gap-4'
      >
        <div className='flex gap-1'>
          <input
            type='radio'
            value={24}
            id='radio24'
            name='clockFormat'
            checked={clockFormat === 24}
          />
          <label htmlFor='radio24'>24 Hour</label>
        </div>
        <div className='flex gap-1'>
          <input
            type='radio'
            value={12}
            id='radio12'
            name='clockFormat'
            checked={clockFormat === 12}
          />
          <label htmlFor='radio12'>12 Hour</label>
        </div>
      </form>
      <div className='flex items-center justify-between rounded-md bg-sky/20 p-3'>
        <p>Display seconds</p>
        <input type='checkbox' onInput={(e) => setSeconds(e.target.checked)} />
      </div>
    </div>
  );
};
