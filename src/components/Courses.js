import React from 'react';

// Sample course data
const courses = [
  { id: 1, name: 'React for Beginners', description: 'Learn the basics of React.', duration: '4 weeks', instructor: 'John Doe' },
  { id: 2, name: 'Advanced JavaScript', description: 'Deep dive into JavaScript.', duration: '6 weeks', instructor: 'Jane Smith' },
  { id: 3, name: 'Node.js Essentials', description: 'Learn how to build backend applications.', duration: '5 weeks', instructor: 'Alice Johnson' },
  { id: 4, name: 'Python Programming', description: 'Master Python for data science.', duration: '8 weeks', instructor: 'Michael Brown' },
  { id: 5, name: 'Web Development Bootcamp', description: 'Full-stack web development course.', duration: '12 weeks', instructor: 'Emily Davis' },
  { id: 6, name: 'Data Structures and Algorithms', description: 'In-depth understanding of data structures.', duration: '6 weeks', instructor: 'David Wilson' },
  { id: 7, name: 'Machine Learning A-Z', description: 'Hands-on course to learn ML concepts.', duration: '10 weeks', instructor: 'Sarah Connor' },
  { id: 8, name: 'Django for Everybody', description: 'Build web applications using Django.', duration: '7 weeks', instructor: 'Chris Martin' },
  { id: 9, name: 'iOS Development with Swift', description: 'Create apps for iOS devices.', duration: '9 weeks', instructor: 'Liam Thomas' },
  { id: 10, name: 'Android Development Bootcamp', description: 'Learn to develop Android applications.', duration: '11 weeks', instructor: 'Olivia Taylor' },
];

const Courses = () => {
  return (
    <div style={styles.container}>
      <h1>Available Courses</h1>
      <div style={styles.cardContainer}>
        {courses.map(course => (
          <div key={course.id} style={styles.card}>
            <h2 style={styles.title}>{course.name}</h2>
            <p style={styles.description}>{course.description}</p>
            <p style={styles.details}>Duration: {course.duration}</p>
            <p style={styles.details}>Instructor: {course.instructor}</p>
          </div>
        ))}
      </div>
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
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '250px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  title: {
    fontSize: '1.5em',
    marginBottom: '8px',
  },
  description: {
    fontSize: '0.9em',
    marginBottom: '8px',
  },
  details: {
    fontSize: '0.8em',
    color: '#555',
  },
};

export default Courses;
