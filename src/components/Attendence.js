import React, { useState } from 'react';

const PresenceButton = () => {
  const [status, setStatus] = useState("Present");
  const [color, setColor] = useState("green");

  function toggleStatus() {
    if (status === "Present") {
      setStatus("Absent");
      setColor("red");
    } else {
      setStatus("Present");
      setColor("green");
    }
  }

  return (
    <button style={{ backgroundColor: color }} onClick={toggleStatus}>
      {status}
    </button>
  );
};

const Students = (props) => {
  return (
    <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={{ padding: '8px' }}>Student Name</th>
          <th style={{ padding: '8px' }}>Student ID</th>
          <th style={{ padding: '8px' }}>Student Section</th>
          <th style={{ padding: '8px' }}>Attendance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '8px', color: 'orange' }}>jeevani</td>
          <td style={{ padding: '8px' }}>2300032841</td>
          <td style={{ padding: '8px' }}>31</td>
          <td style={{ padding: '8px' }}><PresenceButton /></td>
        </tr>
        <tr>
          <td style={{ padding: '8px', color: 'orange' }}>bhargavi</td>
          <td style={{ padding: '8px' }}>2300032842</td>
          <td style={{ padding: '8px' }}>31</td>
          <td style={{ padding: '8px' }}><PresenceButton /></td>
        </tr>
        <tr>
          <td style={{ padding: '8px', color: 'orange' }}>niha</td>
          <td style={{ padding: '8px' }}>2300032843</td>
          <td style={{ padding: '8px' }}>31</td>
          <td style={{ padding: '8px' }}><PresenceButton /></td>
        </tr>
        <tr>
          <td style={{ padding: '8px', color: 'orange' }}>jabili</td>
          <td style={{ padding: '8px' }}>2300032844</td>
          <td style={{ padding: '8px' }}>31</td>
          <td style={{ padding: '8px' }}><PresenceButton /></td>
        </tr>
        <tr>
          <td style={{ padding: '8px', color: 'orange' }}>deepika</td>
          <td style={{ padding: '8px' }}>2300032845</td>
          <td style={{ padding: '8px' }}>31</td>
          <td style={{ padding: '8px' }}><PresenceButton /></td>
        </tr>
        <tr>
          <td style={{ padding: '8px', color: 'orange' }}>jeevani</td>
          <td style={{ padding: '8px' }}>2300032846</td>
          <td style={{ padding: '8px' }}>31</td>
          <td style={{ padding: '8px' }}><PresenceButton /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Students;
