import { useContext, useState } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const SettingsGreeting = () => {
  const { greeting, setGreeting } = useContext(AppContext);
  const [inputText, setInputText] = useState();

  const addGreeting = (e) => {
    e.preventDefault();
    if (inputText.length <= 10) {
      setGreeting(inputText);
      setInputText('');
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl font-bold'>Greeting</h2>
      <form className='flex h-10 gap-2' onSubmit={(e) => addGreeting(e)}>
        <input
          type='text'
          placeholder='Enter name'
          maxLength={10}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='fous:border-transparent w-64 rounded-md border-[1px] border-white/10 bg-transparent pl-3 outline-none transition-all duration-200 ease-out focus:ring-2 focus:ring-mint'
        />
        <button
          type='submit'
          className='h-full w-10 rounded-md bg-white/10 transition-colors duration-150 ease-out hover:bg-white/20'
        >
          <i class='bi bi-check-lg'></i>
        </button>
      </form>
      {!greeting ? null : (
        <div className='flex items-center justify-between rounded-md bg-white/20 py-1 pl-5 pr-2'>
          <p className='overflow-hidden overflow-ellipsis whitespace-nowrap text-sm'>
            {greeting}
          </p>
          <button
            onClick={() => setGreeting('')}
            className='h-8 w-8 rounded-md transition-colors duration-150 ease-out hover:bg-white/20'
          >
            <i class='bi bi-trash3-fill text-sm'></i>
          </button>
        </div>
      )}
    </div>
  );
};
