import { useContext } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';

export const Greeting = () => {
  const { greeting } = useContext(AppContext);

  const calcTime = () => {
    const date = new Date();
    const time = date.getHours();
    let greetingText = 'Good evening';
    if (time < 12 && time > 3) {
      greetingText = 'Good morning';
    } else if (time < 19 && time >= 12) {
      greetingText = 'Good afternoon';
    }
    return greetingText;
  };

  return (
    <p
      className={`${!greeting ? 'hidden' : null} text-[26px] text-white/60`}
    >{`${calcTime()}, ${greeting}`}</p>
  );
};
