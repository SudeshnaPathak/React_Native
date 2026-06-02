import { AboutTextArea } from "./AboutTextArea";
import { CourseDropdown } from "./CourseDropdown";
import { HobbiesCheckbox } from "./HobbiesCheckbox";
import { NameInput } from "./NameInput";
import { WelcomeToggle } from "./WelcomeToggle";

export function StudentForm({ name, setName, course, setCourse, hobbies, setHobbies, about, setAbout, welcome, setWelcome })
{
    return(
        <div className="student-form">
            <h2>Student Form</h2>
            <NameInput name={name} setName={setName} />
            <CourseDropdown course={course} setCourse={setCourse} />
            <HobbiesCheckbox hobbies={hobbies} setHobbies={setHobbies} />
            <AboutTextArea about={about} setAbout={setAbout} />
            <WelcomeToggle welcome={welcome} setWelcome={setWelcome} />
        </div>
    );
}
