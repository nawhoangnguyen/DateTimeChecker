import React, { useState } from "react";
import validator from "validator";

const DateValidator = () => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const isValidDate = () => {
        // Check if the input is a number.np
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            var day1 = parseInt(day, 10);
            var month1 = parseInt(month, 10);
            var year1 = parseInt(year, 10);

            // Check if the day is in the valid range.
            if (day < 1 || day > 31) {
                setErrorMessage("Day must be between 1 and 31.");
                return;
            }
            if (day1 > 0 && day1 < 10) day1 = "0" + day1;

            // Check if the month is in the valid range.
            if (month1 < 1 || month1 > 12) {
                setErrorMessage("Month must be between 1 and 12.");
                return false;
            }
            if (month1 > 0 && month1 < 10) month1 = "0" + month1;

            // Check if the year is in the valid range.
            if (year1 < 1000 || year1 > 3000) {
                setErrorMessage("Year must be between 1000 and 3000.");
                return;
            }

            // Check if the date is valid.
            const date = year1 + "-" + month1 + "-" + day1;
            console.log(date);
            if (!validator.isDate(date)) {
                setErrorMessage("Invalid date.");
                return false;
            }

            // The date is valid.
            setErrorMessage("");
            alert(`Valid date: ${day}/${month}/${year}`);
        } else {
            setErrorMessage("Date must be a valid date.");
        }
    };

    return (
        <div>
            <h1>Date Validator</h1>
            <input
                type="text"
                placeholder="Day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
            />
            <input
                type="text"
                placeholder="Month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
            />
            <input
                type="text"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <button onClick={isValidDate}>Check</button>
            <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
    );
};
export default DateValidator;