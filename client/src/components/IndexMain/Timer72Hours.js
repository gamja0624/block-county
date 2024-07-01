import { useState, useEffect } from 'react';
import timmerlogo1 from './auctionImg/timmerlogo1.png'

function Timer72Hours() {
  const [hours, setHours] = useState(72);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);



  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else {
          setIsRunning(false);
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [hours, minutes, seconds, isRunning]);


  return (
    <div >
      {/* <h1>72-Hour Timer</h1> */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5%', backgroundColor: '#9E9E9E' }}>
        <img src={timmerlogo1} style={{ width: '30px', height: '30px' }} />
        <div style={{ margin: '10px' }}>
          {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}

export default Timer72Hours;
