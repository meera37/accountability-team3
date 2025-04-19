import React, { useState } from 'react';

function Mgrid() {
    //state for creating div boxes : 15 is given has default can be changed
  const [divCount, setDivCount] = useState(15);

  const handleClick = (e) => {
    console.log(e);
  };

  //function to change the state value according to desired input
  const updateDivCount = (newCount) => {
    setDivCount(newCount);
  };

  const createColumn = (index) => {
    return (
      <div key={`column-${index}`} className="flex flex-col items-center mb-2">
        <p className="mb-1 text-dark text-center font-bold">Day {index + 1}</p>
        <button
          className="w-10 h-10 border markinput hover:bg-green-500 border-dark rounded"
          onClick={handleClick}
        ></button>
      </div>
    );
  };

  return (
    <div className="calendar-grid my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-1 mb-7">
      {[...Array(divCount)].map((_, idx) => createColumn(idx))}
    </div>
  );
}

export default Mgrid;
