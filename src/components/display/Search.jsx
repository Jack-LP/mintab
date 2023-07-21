import { useContext } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const Search = () => {
  const { engine, autoFocus } = useContext(AppContext);

  return (
    <form
      className='w-full'
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
        className='w-full border-b-[1px] border-white/5 bg-transparent py-1 pl-1 outline-none'
      />
    </form>
  );
};
