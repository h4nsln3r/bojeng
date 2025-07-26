import React, { useEffect, useState } from 'react';
import './digital-timer.scss';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface CountdownTimerProps {
  targetDate: string;
  onClickStart: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, onClickStart }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      timeLeft = {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      };
    } else {
      timeLeft = { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  console.log('timeLeft', timeLeft);

  return (
    <div className="digital-timer">
      {timeLeft.days === '00' && timeLeft.hours === '00' && timeLeft.minutes === '00' && timeLeft.seconds === '00' ? (
        <>
          {' '}
          <button className="enter__button margin__top--2" onClick={onClickStart}>
            Enter
          </button>
        </>
      ) : (
        <>
          <span>{timeLeft.days}</span> : <span>{timeLeft.hours}</span> : <span>{timeLeft.minutes}</span> : <span>{timeLeft.seconds}</span>
          <br />
          <a href="https://share.amuse.io/track/bojeng-misery" className="presave__button margin__top--2" rel="noreferrer" target="_blank">
            Presave
          </a>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
