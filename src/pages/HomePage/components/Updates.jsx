// src/pages/HomePage.jsx
import React from 'react';
import './Updates.css';
import { BsFillLightningFill } from 'react-icons/bs';

const Updates = () => {
  return (
    <>
      <div className="container1 w-full">
        <div className="utitle flex flex-wrap justify-center w-fit text-5xl h-fit">
          <div className="resultp">
            <h2 className="flex"><BsFillLightningFill className="m-2 iconf" />LATEST RESULTS</h2>
            <div className="resultList p-4">
              <table className="w-full border-collapse border rounded-lg text-2xl">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-2">Day</th>
                    <th className="py-2">Team 1</th>
                    <th className="py-2">Team 2</th>
                    <th className="py-2">Score</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {/* Replace the following line with dynamic data from your backend or state */}
                  <tr className="bg-gray-100">
                    <td className="border py-2 px-4">Monday</td>
                    <td className="border py-2 px-4">Team A</td>
                    <td className="border py-2 px-4">Team B</td>
                    <td className="border py-2 px-4">3 - 2</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="teams">
            <h2 className="flex"><BsFillLightningFill className="m-2 iconf" />TODAY'S TENNIS MATCH</h2>
            <div className="teamList flex space-x-48 text-cyan-50 ">
              <h2>team1</h2>
              <h2>team2</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
