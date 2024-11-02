import React from 'react';

// Sample faculty data
const faculty = [
  { id: 1, name: 'Dr. Alice Smith', subjects: ['Mathematics', 'Physics'] },
  { id: 2, name: 'Prof. Bob Johnson', subjects: ['Chemistry', 'Biology'] },
  { id: 3, name: 'Dr. Charlie Brown', subjects: ['Computer Science', 'Data Structures'] },
  { id: 4, name: 'Dr. David Wilson', subjects: ['History', 'Political Science'] },
  { id: 5, name: 'Prof. Emily Davis', subjects: ['Literature', 'Creative Writing'] },
  { id: 6, name: 'Dr. Fiona Green', subjects: ['Economics', 'Finance'] },
  { id: 7, name: 'Prof. George White', subjects: ['Philosophy', 'Ethics'] },
  { id: 8, name: 'Dr. Hannah Black', subjects: ['Biology', 'Genetics'] },
  { id: 9, name: 'Dr. Isaac Blue', subjects: ['Chemistry', 'Organic Chemistry'] },
  { id: 10, name: 'Prof. Jack Brown', subjects: ['Software Engineering', 'Machine Learning'] },
];

const Faculty = () => {
  return (
    <div style={styles.container}>
      <h1>Faculty List</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>ID</th>
            <th style={styles.header}>Name</th>
            <th style={styles.header}>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map(member => (
            <tr key={member.id} style={styles.row}>
              <td style={styles.cell}>{member.id}</td>
              <td style={styles.cell}>{member.name}</td>
              <td style={styles.cell}>{member.subjects.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  table: {
    borderCollapse: 'collapse',
    width: '80%',
    marginTop: '20px',
  },
  header: {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  },
  cell: {
    border: '1px solid #ddd',
    padding: '12px',
  },
  row: {
    '&:nth-child(even)': {
      backgroundColor: '#f9f9f9',
    },
    '&:hover': {
      backgroundColor: '#f1f1f1',
    },
  },
};

export default Faculty;
