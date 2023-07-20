export const Search = () => {
  return (
    <form className='w-full' action='https://www.google.com/search'>
      <input
        type='text'
        name='q'
        target='_self'
        placeholder='Search'
        autoComplete='off'
        className='w-full border-b-[1px] border-white/5 bg-transparent py-1 pl-1 outline-none'
      />
    </form>
  );
};
