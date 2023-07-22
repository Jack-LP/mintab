import { useContext, useState } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const SettingsLinks = () => {
  const { links, setLinks } = useContext(AppContext);
  const [inputText, setInputText] = useState();

  const uniqueID = () => Math.floor(Math.random() * Date.now());

  const addLink = (e) => {
    e.preventDefault();
    if (
      /^(?:(?:https?|ftp):\/\/)?[^\s/$.?#]+\.[^\s]*$/.test(inputText) && // Checks if input is a valid link
      links.length < 15
    ) {
      setLinks((prev) => [
        ...prev,
        {
          url: inputText.includes('http') ? inputText : `https://${inputText}`,
          id: uniqueID(),
        },
      ]);
      setInputText('');
    }
  };

  const deleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl font-bold'>Links</h2>
      <form className='flex gap-2' onSubmit={(e) => addLink(e)}>
        <input
          type='text'
          placeholder='Add Link'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='min-w-0 rounded-md border-[1px] border-white/10 bg-transparent pl-3 outline-none'
        />
        <button type='submit' className='h-10 w-10 rounded-md bg-sky/20'>
          <i class='bi bi-plus-lg'></i>
        </button>
        <button className='h-10 w-10 rounded-md bg-sky/20'>
          <i class='bi bi-eye-fill'></i>
        </button>
      </form>
      {links.map((link) => (
        <div
          key={link.id}
          className='flex items-center justify-between rounded-md bg-sky/20 py-1 pl-5 pr-2'
        >
          <p className='overflow-hidden overflow-ellipsis whitespace-nowrap text-sm'>
            {/* Removes "https://" from url display */}
            {link.url.replace(/(^\w+:|^)\/\//, '')}
          </p>
          <button
            onClick={() => deleteLink(link.id)}
            className='h-8 w-8 rounded-md transition-colors duration-150 ease-out hover:bg-white/20'
          >
            <i class='bi bi-trash3-fill text-sm'></i>
          </button>
        </div>
      ))}
    </div>
  );
};
