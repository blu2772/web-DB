import React, { useState } from "react";

interface CalendarProps {
  initialDate: Date;
}

const Calendar: React.FC<CalendarProps> = ({ initialDate }) => {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [coolStyle, setCoolStyle] = useState({});

  const handleDateClick = (date: Date) => {
    if (selectedStartDate && selectedEndDate) {
      // Both start and end dates are already selected, so reset the selection
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (
      selectedStartDate &&
      !selectedEndDate &&
      date >= selectedStartDate
    ) {
      // Start date is selected, and end date is not selected yet
      setSelectedEndDate(date);
    } else {
      // Neither start nor end date is selected
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const handlePrevious = () => {
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(previousMonth);
  };

  const handleNext = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonth);
  };

  const handleDateHover = (date: Date | null) => {
    setHoverDate(date);
  };

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();
    const weeks: Date[][] = [];

    let currentWeek: Date[] = [];
    for (let i = 0; i < startDay; i++) {
      currentWeek.push(null as any);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      currentWeek.push(date);

      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return (
      <div className="Calendar">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-success" onClick={handlePrevious}>
            Previous
          </button>
          <h4 className="m-0">
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              year: "numeric",
            }).format(currentDate)}
          </h4>
          <button className="btn btn-success" onClick={handleNext}>
            Next
          </button>
        </div>
        <div className="mb-3">
          <div className="fw-bold">
            Selected Start Date: {selectedStartDate?.toLocaleDateString()}
          </div>
          <div className="fw-bold">
            Selected End Date: {selectedEndDate?.toLocaleDateString()}
          </div>
        </div>
        <table className="table table-bordered">
          <thead className="bg-success text-white">
            <tr>
              <th scope="col">Sun</th>
              <th scope="col">Mon</th>
              <th scope="col">Tue</th>
              <th scope="col">Wed</th>
              <th scope="col">Thu</th>
              <th scope="col">Fri</th>
              <th scope="col">Sat</th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, index) => (
              <tr key={index}>
                {week.map((date, index) => {
                  const isStartDate =
                    selectedStartDate?.toDateString() === date?.toDateString();
                  const isSelected =
                    (selectedStartDate &&
                      selectedEndDate &&
                      date &&
                      date >= selectedStartDate &&
                      date <= selectedEndDate) ||
                    isStartDate;
                  const isInRange =
                    selectedStartDate &&
                    hoverDate &&
                    !selectedEndDate &&
                    date &&
                    date >= selectedStartDate &&
                    date <= hoverDate;

                  return (
                    <td
                      key={index}
                      onClick={() => handleDateClick(date)}
                      onMouseEnter={() => handleDateHover(date)}
                      onMouseLeave={() => handleDateHover(null)}
                      className={`cursor-pointer ${
                        isSelected
                          ? "bg-success text-white"
                          : isInRange
                          ? "bg-success opacit"
                          : ""
                      }`}
                    >
                      {date ? date.getDate() : ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return <div>{renderCalendar()}</div>;
};

export default Calendar;
