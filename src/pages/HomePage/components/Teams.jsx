// src/pages/HomePage.jsx
import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import './Team.css';

const Teams = () => {
  return (
    <div className="container mx-auto p-8 relative top-80">
      <div className="container4">
      <h2 className="text-6xl mb-4 flex items-center flex justify-center">
        <BsFillLightningFill className="mr-2 text-red-500" />
        TEAMS
      </h2>
      <button className='text-2xl btn2 relative left-100'>See more</button>

      <div className="slider overflow-hidden">
        <div className="flex space-x-4">
          <div className="w-1/5">
            <img
              src="https://i.pinimg.com/564x/aa/fe/12/aafe12c1ded9bef1ef08abc7a7b07a8b.jpg"
              alt=""
              className="
              w-full rounded-md"
            />
            <h3 className='text-3xl text-center'>team1</h3>
          </div>
          <div className="w-1/5">
            <img
              src="https://i.pinimg.com/736x/a6/50/2e/a6502e1d8254fcbe111ba0b2bab9040c.jpg"
              alt=""
              className="w-full rounded-md"
            />
            <h3 className='text-3xl text-center'>team1</h3>
          </div>
          <div className="w-1/5">
            <img
              src="https://i.pinimg.com/originals/23/ad/32/23ad32ed6c3211a7b2b8623567b39620.jpg"
              alt=""
              className="w-full rounded-md"
            />
            <h3 className='text-3xl text-center'>team1</h3>
          </div>
          <div className="w-1/5">
            <img
              src="https://i.pinimg.com/736x/a6/50/2e/a6502e1d8254fcbe111ba0b2bab9040c.jpg"
              alt=""
              className="w-full rounded-md"
            />
            <h3 className='text-3xl text-center'>team1</h3>
          </div>
          <div className="w-1/5">
            <img
              src="https://i.pinimg.com/736x/a6/50/2e/a6502e1d8254fcbe111ba0b2bab9040c.jpg"
              alt=""
              className="w-full rounded-md"
            />
            <h3 className='text-3xl text-center'>team1</h3>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Teams;
