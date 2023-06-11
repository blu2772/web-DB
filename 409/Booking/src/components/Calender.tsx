import React, { useState } from "react";
import { sendPostRequest } from "./sql";

interface Reservation {
  id: string;
  name: string;
  email: string;
  startdate: string;
  enddate: string;
}

interface CalendarProps {
  initialDate: Date;
}

const Calendar: React.FC<CalendarProps> = ({ initialDate }) => {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate);
  const [reservation, setReservation] = useState<Reservation[]>([]);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const handleDateClick = (date: Date) => {
    if (selectedStartDate && selectedEndDate) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (
      selectedStartDate &&
      !selectedEndDate &&
      date >= selectedStartDate
    ) {
      setSelectedEndDate(date);
    } else {
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

    updateresmo(previousMonth);

    setCurrentDate(previousMonth);
  };

  const handleNext = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );

    updateresmo(nextMonth);

    setCurrentDate(nextMonth);
  };

  const updateresmo = (newdate: Date) => {
    const year = newdate.getFullYear();
    const startOfMonth = new Date(year, 1, 0);
    const endOfMonth = new Date(year, 12, 1);
    const readdata = {
      startdate: startOfMonth.toISOString().split("T")[0],
      enddate: endOfMonth.toISOString().split("T")[0],
      cmd: "read",
    };
    console.log(readdata);
    sendPostRequest(readdata)
      .then((result) => {
        console.log(result);
        setReservation(result);
        // Verarbeitung der Antwort
      })
      .catch((error) => {
        console.error(error);
        // Fehlerbehandlung
      });
  };

  const handleDateHover = (date: Date | null) => {
    setHoverDate(date);
  };

  const isReserved = (date: Date): boolean => {
    return reservation.some((res) => {
      const startDate = new Date(res.startdate);
      const endDate = new Date(res.enddate);
      return date >= startDate && date <= endDate;
    });
  };

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();
    const weekRows: Date[][] = [];

    let currentWeek: Date[] = [];
    for (let i = 0; i < startDay; i++) {
      currentWeek.push(null as any);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      currentWeek.push(date);

      if (currentWeek.length === 7) {
        weekRows.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      weekRows.push(currentWeek);
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
            {weekRows.map((week, index) => (
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
                          : isReserved(date)
                          ? "bg-danger"
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
