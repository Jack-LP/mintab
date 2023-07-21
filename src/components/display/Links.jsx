import { useContext } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const Links = () => {
  const { links } = useContext(AppContext);

  const getInitial = (str) => str.charAt(0).toUpperCase();

  return (
    <div className='flex flex-wrap gap-2'>
      {links.map((link) => (
        <a
          href={link.url}
          target='_self'
          className='grid h-12 w-12 cursor-pointer place-items-center rounded-md border-2 border-white/10 transition-colors duration-150 ease-out hover:bg-white/5'
        >
          {getInitial(link.url)}
        </a>
      ))}
    </div>
  );
};
