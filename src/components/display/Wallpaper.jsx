import { useContext } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const Wallpaper = () => {
  const { wallpaper, brightness, blur } = useContext(AppContext);

  return (
    <div className='absolute inset-0 -z-10 h-screen w-screen object-cover'>
      <img
        style={{
          filter: `brightness(${brightness / 100}) blur(${blur}px)`,
        }}
        className='h-full w-full object-cover'
        src={wallpaper ? wallpaper : 'https://picsum.photos/1920/1080'}
      />
    </div>
  );
};
