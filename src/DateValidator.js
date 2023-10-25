import React, {useState} from "react";
import validator from "validator";
import img from "./logo.png"

const DateValidator = () => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const isValidDate = () => {
        // Check if the input is a number.
        //
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            var day1 = parseInt(day, 10);
            var month1 = parseInt(month, 10);
            var year1 = parseInt(year, 10);

            // Check if the day is in the valid range.

            // Change this
            // if (day < 1 || day > 31) {
            if (day < 1 || day > 31) {
                // setErrorMessage("Day must be between 1 and 32.");
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
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <table style={{width: '50%', boxShadow: '0 0 10px 10px #888888', padding: '20px', marginTop: '70px'}}>
                <caption style={{backgroundColor:'#ccc'}}><h1>Date time checker</h1></caption>

                <tr>
                    <td>
                        <h3>Day: </h3>
                    </td>
                    <td style={{display: 'flex', flexWrap: 'wrap'}}>
                        <input
                            style={{width: '100%', padding: '20px'}}
                            type="text"
                            placeholder="Day"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        />
                    </td>
                </tr>

                <tr>
                    <td>
                        <h3>Month: </h3>
                    </td>
                    <td style={{display: 'flex', flexWrap: 'wrap'}}>
                        <input
                            style={{width: '100%', padding: '20px'}}
                            type="text"
                            placeholder="Month"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Year: </h3>
                    </td>
                    <td style={{display: 'flex', flexWrap: 'wrap'}}>
                        <input
                            style={{width: '100%', padding: '20px'}}
                            type="text"
                            placeholder="Year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </td>
                </tr>
                <tr>

                    <td></td>
                    <td style={{display:'flex', justifyContent:'center'}}>
                        <button style={{padding: '20px 60px'}} onClick={isValidDate}>Check</button>
                    </td>
                </tr>

            </table>
            <h1 style={{color: "red"}} data-testid={"error"}>{errorMessage}</h1>
        </div>
    );
};
export default DateValidator;