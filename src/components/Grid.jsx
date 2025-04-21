import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

function Grid() {
  const [year, setYear] = useState('');
  const [markedDays, setMarkedDays] = useState({}); // dateformat:- { "1-January-2025": "bg-red-500" }
  console.log(markedDays);
  

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-cyan-500",
    "bg-lime-500",
    "bg-rose-500"
  ];

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  const handleClick = (day, month, year) => {
    const dayKey = `${day}-${month}-${year}`;
    setMarkedDays((prev) => {
      const updated = { ...prev };
      if (updated[dayKey]) {
        delete updated[dayKey]; // unmark
      } else {
        updated[dayKey] = getRandomColor(); // mark with random color
      }
      return updated;
    });
  };

  const col_fill = (monthName, numOfDays) => {
    const dayElements = [];

    for (let day = 1; day <= 31; day++) {
      const dayKey = `${day}-${monthName}-${year}`;
      const bgColor = markedDays[dayKey] || '';

      if (day <= numOfDays) {
        dayElements.push(
          <button
            key={dayKey}
            className={`markinput hover:opacity-80 border-dark rounded-0 border-1 ${bgColor}`}
            onClick={() => handleClick(day, monthName, year)}
          >
            {/* No number inside */}
          </button>
        );
      } else {
        dayElements.push(
          <button
            key={dayKey}
            className="border markinput bg-slate-500 border-dark rounded-0 border- invisible"
            disabled
          />
        );
      }
    }

    const text = monthName === 'July' ? 'Ju' : monthName[0];

    return (
      <div key={monthName} className="d-flex flex-column">
        <p className="mb-0 text-dark text-center">
          <b>{text}</b>
        </p>
        {dayElements}
      </div>
    );
  };

  const isLeapYear = (yr) => (yr % 400 === 0 || (yr % 4 === 0 && yr % 100 !== 0));
  const days = [
    31,
    isLeapYear(year) ? 29 : 28,
    31, 30, 31, 30,
    31, 31, 30, 31, 30, 31
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const indices = new Array(31).fill(1);

  const handleChange = (val) => {
    setYear(val);
  };

  return (
    <Container className="d-flex justify-center align-items-center flex-column">
      <div className="calendar-grid my-1 p-5">
        <div className="flex justify-center">
          <button
            className="rounded-3 shadow bg-red-500 px-4 fs-3 me-3"
            onClick={() => handleChange(year - 1)}
          > - </button>
          <span className="fs-3 fw-bold">Year {year}</span>
          <button
            className="rounded-3 shadow bg-green-400 px-3 fs-3 ms-3"
            onClick={() => handleChange(year + 1)}
          > + </button>
        </div>

        <div className="d-flex my-2">
          {/* Day indices (1–31) */}
          <div className="d-flex flex-column">
            <p className="m-0 h-[25px]"></p>
            {indices.map((_, idx) => (
              <p key={`Day-${idx + 1}`} className="mb-0 text-dark me-2 text-center h-[25px] fw-bold">
                {idx + 1}
              </p>
            ))}
          </div>

          {/* Month columns with day buttons */}
          {months.map((month, idx) => col_fill(month, days[idx]))}
        </div>
      </div>
    </Container>
  );
}

export default Grid;
