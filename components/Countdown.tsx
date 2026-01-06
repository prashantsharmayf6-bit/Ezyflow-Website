import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  // Set launch date to 14 days from now for demo purposes
  const [targetDate] = useState<Date>(() => {
    const date = new Date();
    date.setDate(date.getDate() + 14); 
    return date;
  });

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="glass-card w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-2 shadow-lg shadow-blue-900/10">
        <span className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-xs md:text-sm text-slate-400 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center flex-wrap my-10">
      <TimeBox value={timeLeft.days} label="Days" />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;