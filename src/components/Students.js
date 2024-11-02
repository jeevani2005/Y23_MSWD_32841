import React from 'react';

// Sample student data
const students = [
  { id: 1, name: 'Alice Smith', course: 'React for Beginners' },
  { id: 2, name: 'Bob Johnson', course: 'Advanced JavaScript' },
  { id: 3, name: 'Charlie Brown', course: 'Node.js Essentials' },
  { id: 4, name: 'David Wilson', course: 'Python Programming' },
  { id: 5, name: 'Emily Davis', course: 'Web Development Bootcamp' },
  { id: 6, name: 'Fiona Green', course: 'Machine Learning A-Z' },
  { id: 7, name: 'George White', course: 'Django for Everybody' },
  { id: 8, name: 'Hannah Black', course: 'iOS Development with Swift' },
  { id: 9, name: 'Isaac Blue', course: 'Android Development Bootcamp' },
  { id: 10, name: 'Jack Brown', course: 'Data Structures and Algorithms' },
];

const Students = () => {
  return (
    <div style={styles.container}>
      <h1>Students List</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>ID</th>
            <th style={styles.header}>Name</th>
            <th style={styles.header}>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} style={styles.row}>
              <td style={styles.cell}>{student.id}</td>
              <td style={styles.cell}>{student.name}</td>
              <td style={styles.cell}>{student.course}</td>
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

export default Students;
