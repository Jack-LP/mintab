import { useContext, useState } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';
import { saveAs } from 'file-saver';
import { imageExists } from '../../utilities/imageExists';

export const SettingsWallpaper = () => {
  const { wallpaper, setWallpaper, brightness, setBrightness, blur, setBlur } =
    useContext(AppContext);
  const [inputText, setInputText] = useState();

  const addWallpaper = (e) => {
    e.preventDefault();
    if (imageExists(inputText)) {
      setWallpaper(inputText);
      setInputText('');
    }
  };

  const deleteWallpaper = () => {
    wallpaper !== 'https://i.imgur.com/HS4bQaB.jpg'
      ? setWallpaper('https://i.imgur.com/HS4bQaB.jpg')
      : null;
  };

  const downloadWallpaper = () => {
    saveAs(
      wallpaper,
      `mintab-wallpaper-${Math.floor(Math.random() * Date.now())}`
    );
  };

  const handleRange = (e, filter) => {
    filter === 'brightness'
      ? setBrightness(e.target.value)
      : setBlur(e.target.value);
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl font-bold'>Wallpaper</h2>
      <form onSubmit={(e) => addWallpaper(e)} className='flex h-10 gap-2'>
        <input
          type='text'
          placeholder='Direct link'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='fous:border-transparent w-60 rounded-md border-[1px] border-white/10 bg-transparent pl-3 outline-none transition-all duration-200 ease-out focus:ring-2 focus:ring-mint'
        />
        <button className='h-full w-10 rounded-md bg-white/10 transition-colors duration-150 ease-out hover:bg-white/20'>
          <i class='bi bi-check-lg'></i>
        </button>
      </form>
      <div className={`${wallpaper ? 'flex' : 'hidden'} flex-col gap-2`}>
        <div className='flex flex-col gap-2 rounded-md bg-white/20 p-3'>
          <img
            src={wallpaper}
            alt=''
            className='h-[140px] w-full rounded-md object-cover'
          />
          <div className='flex justify-between gap-2'>
            <button
              onClick={downloadWallpaper}
              className=' h-10 w-full rounded-md border-[1px] border-white/10 transition-colors duration-150 ease-out hover:bg-white/5'
            >
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
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='font-bold'>Brightness</h3>
          <input
            onInput={(e) => handleRange(e, 'brightness')}
            type='range'
            min={0}
            max={100}
            defaultValue={brightness}
            className='h-1 cursor-pointer accent-mint'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='font-bold'>Blur</h3>
          <input
            onInput={(e) => handleRange(e, 'blur')}
            type='range'
            min={0}
            max={16}
            defaultValue={blur}
            className='h-1 cursor-pointer accent-mint'
          />
        </div>
      </div>
    </div>
  );
};
