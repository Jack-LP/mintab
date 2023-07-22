import { useContext } from 'preact/hooks';
import { memo } from 'preact/compat';
import { AppContext } from '../../context/AppContext';

export const Wallpaper = memo(() => {
  const { wallpaper, brightness, blur } = useContext(AppContext);

  return (
    <div className='absolute inset-0 -z-10 h-screen w-screen object-cover'>
      <img
        style={{
          filter: `brightness(${brightness / 100}) blur(${blur}px)`,
        }}
        className='h-full w-full object-cover'
        src={wallpaper}
      />
    </div>
  );
});
