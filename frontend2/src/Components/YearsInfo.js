import React from 'react';

function YearsInfo() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center my-8 space-y-4 md:space-x-4 md:space-y-0">
      <div className="md:w-1/3 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-bold text-lg mb-2">Maggiore Durata, Maggior Tasso</h2>
        <p>Un vincolo più lungo tende ad offrire tassi d'interesse superiori. Potrai rimodificare in seguito la durata</p>
      </div>

     

      <div className="md:w-1/3 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-bold text-lg mb-2">Liquidazione Trimestrale</h2>
        <p>Gli interessi sono generalmente liquidati ogni trimestre sul conto corrente di appoggio</p>
      </div>
    </div>
  );
}

export default YearsInfo;
