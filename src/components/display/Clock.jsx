import { useState, useEffect, useContext } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const Clock = () => {
  const { clockFormat, seconds } = useContext(AppContext);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time, format) => {
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours < 10 ? `0${hours}` : hours;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    return format === 12
      ? `${hours % 12}:${mins}${seconds ? ':' : ''}${
          seconds ? secs : ''
        }\u00A0${ampm}`
      : `${hours}:${mins}${seconds ? ':' : ''}${seconds ? secs : ''}`;
  };

  return (
    <h1 className='text-8xl uppercase'>{formatTime(time, clockFormat)}</h1>
  );
};
