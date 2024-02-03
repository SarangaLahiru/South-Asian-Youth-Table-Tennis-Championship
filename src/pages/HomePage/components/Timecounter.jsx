import React, { useState, useEffect } from 'react';
import './Timecounter.css';

const Timecounter = () => {
  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateCountdown() {
    const targetDate = new Date('2024-06-30T20:00:00Z'); // Set your target date and time
    const now = new Date();
    const difference = targetDate - now;

    if (difference < 0) {
      // Target date has passed
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    const days = padZero(Math.floor(difference / (1000 * 60 * 60 * 24)));
    const hours = padZero(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = padZero(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = padZero(Math.floor((difference % (1000 * 60)) / 1000));

    return { days, hours, minutes, seconds };
  }

  function padZero(value) {
    return value.toString().padStart(2, '0');
  }

  return (
    <div className="boxa">
      <div className="boxa1">
        <h2>Jun 30, 2020 / 8:00 pm / New York</h2>
        <h1>National leagues 2020 session begins</h1>
        <div className="boxa2">
          <div className="t1">
            <span>{countdown.days}</span>
            <p>Days</p>
          </div>
          <span className="text">:</span>
          <div className="t1">
            <span>{countdown.hours}</span>
            <p>Hours</p>
          </div>
          <span className="text">:</span>
          <div className="t1">
            <span>{countdown.minutes}</span>
            <p>Minutes</p>
          </div>
          <span className="text">:</span>
          <div className="t1">
            <span>{countdown.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>

        <button className='btn1'>Register Now</button>
      </div>
    </div>
  );
};

export default Timecounter;
