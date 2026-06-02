export function CourseDropdown({ course, setCourse })
{
    return (
        <div className="course-dropdown">
            <label htmlFor="course"><strong>Course:</strong> </label>
            <select id="course" value={course} onChange={(e) => setCourse(e.target.value)} className="options">
                <option value="">--Select a course--</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
            </select>
        </div>
    );
}