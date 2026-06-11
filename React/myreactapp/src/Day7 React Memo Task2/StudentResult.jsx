import React from 'react'

export default function StudentResult() {
  
  const [marks, setMarks] = React.useState([78, 85, 92, 88, 76]);

  const [theme, setTheme] = React.useState('light');

  const [themeChangeCount, setThemeChangeCount] = React.useState(0);

  function toggleTheme() {
    setThemeChangeCount(prevCount => prevCount + 1);
    setTheme(theme => theme === 'light' ? 'dark' : 'light');
  }

  const calculateTotalMarks = React.useMemo(() => {
    console.log('Calculating total marks');
    return marks.reduce((total , mark) => total + mark, 0);
  }, [marks]);

  return (
    <div>
      <h1>Student Result</h1>
      <p>Subject Marks:</p>
      <ul style={{'listStyleType':'none'}}>
        {marks.map((mark, index) => (
          <li key={index}>{mark}</li>
        ))}
      </ul>
      <p>Total Marks: {calculateTotalMarks}</p>
      <div style={{backgroundColor: theme === 'light' ? 'lightgray' : 'black', color: theme === 'light' ? 'black' : 'white', padding: '10px', marginTop: '20px'}}>
      <p>Theme Change Count: {themeChangeCount}</p>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>{theme === 'light' ? 'Change to dark' : 'Change to light'}</button>
      </div>
    </div>
  )
}
