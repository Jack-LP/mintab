import { useContext, useState } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const SettingsWallpaper = () => {
  const { wallpaper, setWallpaper, brightness, setBrightness, blur, setBlur } =
    useContext(AppContext);
  const [inputText, setInputText] = useState();

  const addWallpaper = (e) => {
    e.preventDefault();
    setWallpaper(inputText);
    setInputText('');
  };

  const deleteWallpaper = () => {
    setWallpaper('');
  };

  const handleRange = (e, filter) => {
    filter === 'brightness'
      ? setBrightness(e.target.value)
      : setBlur(e.target.value);
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl font-bold'>Wallpaper</h2>
      <form onSubmit={(e) => addWallpaper(e)} className='flex w-full gap-2'>
        <input
          type='text'
          placeholder='Direct link'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='w-full rounded-md border-[1px] border-white/10 bg-transparent pl-3 outline-none'
        />
        <button className='h-10 w-10 rounded-md bg-sky/20'>
          <i class='bi bi-check-lg'></i>
        </button>
      </form>
      <div className={`${wallpaper ? 'flex' : 'hidden'} flex-col gap-2`}>
        <div className='flex flex-col gap-2 rounded-md bg-sky/20 p-3'>
          <img src={wallpaper} alt='' className='rounded-md object-cover' />
          <div className='flex justify-between gap-2'>
            <button className='h-10 w-full rounded-md border-[1px] border-white/10 transition-colors duration-150 ease-out hover:bg-white/5'>
              <i class='bi bi-download'></i>
            </button>
            <button
              onClick={deleteWallpaper}
              className='h-10 w-full rounded-md border-[1px] border-white/10 transition-colors duration-150 ease-out hover:bg-white/5'
            >
              <i class='bi bi-trash3-fill'></i>
            </button>
          </div>
        </div>

        <div className='flex flex-col'>
          <h3 className='font-bold'>Brightness</h3>
          <input
            onInput={(e) => handleRange(e, 'brightness')}
            type='range'
            min={0}
            max={100}
            defaultValue={100}
          />
        </div>
        <div className='flex flex-col'>
          <h3 className='font-bold'>Blur</h3>
          <input
            onInput={(e) => handleRange(e, 'blur')}
            type='range'
            min={0}
            max={16}
            defaultValue={blur}
          />
        </div>
      </div>
    </div>
  );
};
