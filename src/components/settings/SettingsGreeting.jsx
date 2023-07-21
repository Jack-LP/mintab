import { useContext, useState } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const SettingsGreeting = () => {
  const { greeting, setGreeting } = useContext(AppContext);
  const [inputText, setInputText] = useState();

  const addGreeting = (e) => {
    e.preventDefault();
    setGreeting(inputText);
    setInputText('');
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-lg font-bold'>Greeting</h2>
      <form className='flex gap-2' onSubmit={(e) => addGreeting(e)}>
        <input
          type='text'
          placeholder='Enter name'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='min-w-0 rounded-md border-[1px] border-white/10 bg-transparent pl-3 outline-none'
        />
        <button type='submit' className='h-10 w-10 rounded-md bg-sky/20'>
          <i class='bi bi-check-lg'></i>
        </button>
      </form>
      {!greeting ? null : <div
          className='flex items-center justify-between rounded-md bg-sky/20 py-1 pl-5 pr-2'
        >
          <p className='overflow-hidden overflow-ellipsis whitespace-nowrap text-sm'>
            {greeting}
          </p>
          <button
            onClick={() => setGreeting("")}
            className='h-8 w-8 rounded-md transition-colors duration-150 ease-out hover:bg-white/20'
          >
            <i class='bi bi-trash3-fill text-sm'></i>
          </button>
        </div>}
    </div>
  );
};
