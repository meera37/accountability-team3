import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

function Grid() {
  const [year, setYear] = useState('');
  const [markedDays, setMarkedDays] = useState([]); // dateformat:- { "1-January-2025": "bg-red-500" }
  const [selectedColor, setSelectedColor] = useState("bg-green-800"); // Dark green color

  console.log(markedDays);
  

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  useEffect(() => {
    const totalDays = isLeapYear(year) ? 366 : 365;
    setMarkedDays(new Array(totalDays).fill(0));
  }, [year]);

  const handleColorChange = (color) => {
    setSelectedColor(color); // Update the color state to a new color
  };

  const getDayIndex = (day, monthIndex) => {
    const monthDayCounts = [
      31, 28, 31, 30, 31, 30,
      31, 31, 30, 31, 30, 31
    ];
    if (isLeapYear(year)) monthDayCounts[1] = 29;

    let index = day - 1;
    for (let i = 0; i < monthIndex; i++) {
      index += monthDayCounts[i];
    }
    return index;
  };

  const handleClick = (day, monthIndex) => {
    const index = getDayIndex(day, monthIndex);
    setMarkedDays((prev) => {
      const updated = [...prev];
      updated[index] = updated[index] ? 0 : selectedColor; // mark/unmark with the selected  green color
      return updated;
    });
  };

  const col_fill = (monthName, numOfDays, monthIndex) => {
    const dayElements = [];

    for (let day = 1; day <= 31; day++) {
      const index = getDayIndex(day, monthIndex);
      const bgColor = (day <= numOfDays) ? markedDays[index] || '' : '';

      if (day <= numOfDays) {
        dayElements.push(
          <button
            key={`${day}-${monthName}`}
            className={`markinput hover:opacity-80 border-dark rounded-0 border-1 ${bgColor}`}
            onClick={() => handleClick(day, monthIndex)}
          >
           
          </button>
        );
      } else {
        dayElements.push(
          <button
            key={`${day}-${monthName}`}
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
          {/* <button
            className="rounded-3 shadow bg-red-500 px-4 fs-3 me-3"
            onClick={() => handleChange(year - 1)}
          > - </button> */}
          <span className="fs-3 fw-bold">Year {year}</span>
          {/* <button
            className="rounded-3 shadow bg-green-400 px-3 fs-3 ms-3"
            onClick={() => handleChange(year + 1)}
          > + </button> */}
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
          {months.map((month, idx) => col_fill(month, days[idx], idx))}
        </div>
      </div>
    </Container>
  );
}

export default Grid;
