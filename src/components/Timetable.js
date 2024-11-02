import React from 'react';

const timetableData = {
    "Monday": ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    "Tuesday": ["-", "23AD2001O - S-308 - Room C506", "23AD2001O - S-308 - Room C506", "23AD2102R - S-35 - Room C317B", "-", "-", "23CS06EF-P - S-31 - Room C017", "-", "-", "23CS06EF-P - S-31 - Room C017", "22UC0022-S - S-307 - Room C311", "22UC0022-S - S-307 - Room C311", "-", "-", "-", "-", "-"],
    "Wednesday": ["-", "-", "23CS2103R - P - S-33 - Room C009", "23CS2103R - P - S-33 - Room C009", "23AD2001O - P - S-308 - Room C308", "-", "23CS06EF - S-31 - Room C017", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    "Thursday": ["-", "-", "23AD2102R - L - S-35 - Room C421B1", "23AD2102R - L - S-35 - Room C421B1", "23MT2005-L - S-31 - Room C521B1", "23MT2005-L - S-31 - Room C521B1", "-", "23SDCS11E - S-33 - Room C321B2", "-", "-", "CRTCODL1V1 - S-25 - Room R405A", "CRTCODL1V1 - S-25 - Room R405A", "-", "-", "-", "-", "-"],
    "Friday": ["-", "-", "23SDCS11E - P - S-33 - Room C317B", "23SDCS11E - P - S-33 - Room C317B", "23CS2103R - L - S-33 - Room C007", "23CS2103R - L - S-33 - Room C007", "-", "-", "23CS06EF - S-31 - Room C017", "-", "-", "CRTCODL1V1 - S-25 - Room R405A", "CRTCODL1V1 - S-25 - Room R405A", "-", "-", "-", "-"],
    "Saturday": ["-", "-", "23MT2005-T - S-31 - Room C521B1", "23MT2005-T - S-31 - Room C521B1", "23SDCS11E - S - S-33 - Room C321B2", "-", "23CS2103R - S - S-33 - Room C209", "23AD2001O - L - S-308 - Room L309", "-", "-", "CRTCODL1V1 - S-25 - Room R405A", "-", "-", "-", "-", "-", "-"]
};

const timeSlots = ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 1:00", "1:00 - 2:00", "2:00 - 3:00", "3:00 - 4:00", "4:00 - 5:00"];

const Timetable = () => {
    return (
        <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={headerCellStyle}>Time</th>
                        {Object.keys(timetableData).map((day, index) => (
                            <th key={index} style={headerCellStyle}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map((time, timeIndex) => (
                        <tr key={timeIndex}>
                            <td style={cellStyle}>{time}</td>
                            {Object.keys(timetableData).map((day, dayIndex) => (
                                <td key={dayIndex} style={cellStyle}>
                                    {timetableData[day][timeIndex] || "-"}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const headerCellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
    textAlign: "center"
};

const cellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "center"
};

export default Timetable;
