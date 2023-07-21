import { useContext } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const Search = () => {
  const { engine, setEngine, autoFocus } = useContext(AppContext);

  console.log(engine);

  return (
    <form
      className='flex w-full items-center border-b-[1px] border-white/5'
      action={`${
        engine === 'google'
          ? 'https://www.google.com/search'
          : 'https://www.duckduckgo.com/'
      }`}
    >
      <input
        type='text'
        name='q'
        target='_self'
        placeholder='Search'
        autoComplete='off'
        autoFocus={autoFocus}
        className='w-full bg-transparent py-1 pl-1 outline-none'
      />
      <img
        onClick={() =>
          setEngine((prev) => (prev === 'google' ? 'duckduckgo' : 'google'))
        }
        src={`/img/${engine}.svg`}
        alt=''
        className='ml-auto h-6 w-6 cursor-pointer opacity-30 invert'
      />
    </form>
  );
};
