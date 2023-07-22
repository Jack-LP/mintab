import { useContext } from 'preact/hooks';
import { memo } from 'preact/compat';
import { AppContext } from '../../context/AppContext';

export const Links = memo(() => {
  const { links, showLinks } = useContext(AppContext);

  const getInitial = (str) => str.charAt(0).toUpperCase();

  return showLinks !== 'showLinks' ? null : (
    <div className='flex max-w-[275px] flex-wrap gap-2'>
      {links.map((link) => (
        <a
          href={link.url}
          title={link.url}
          target='_self'
          className='grid h-12 w-12 cursor-pointer place-items-center rounded-md border-2 border-white/10 transition-colors duration-150 ease-out hover:bg-white/5'
        >
          {/* Removes "https://" from url display */}
          {getInitial(link.url.replace(/(^\w+:|^)\/\//, ''))}
        </a>
      ))}
    </div>
  );
});
