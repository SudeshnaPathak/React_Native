import './App.css';
import { Header } from './Components/Header';
import { StudentForm } from './Components/StudentForm';
import { ProfilePreview } from './Components/ProfilePreview';
import { useState } from 'react';

function App()
{
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [hobbies, setHobbies] = useState([]);
    const [about, setAbout] = useState('');
    const [welcome, setWelcome] = useState(false);
    
    return(
        <div className="App">
            <Header />
            <div className="main-content">
                <StudentForm name={name} setName={setName} course={course} setCourse={setCourse} hobbies={hobbies} setHobbies={setHobbies} about={about} setAbout={setAbout} welcome={welcome} setWelcome={setWelcome} />
                <ProfilePreview name={name} course={course} hobbies={hobbies} about={about} welcome={welcome} />
            </div>
        </div>
    );
}

export default App;