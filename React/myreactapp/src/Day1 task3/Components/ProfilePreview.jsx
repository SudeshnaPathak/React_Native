export function ProfilePreview({name, course, hobbies, about, welcome})
{
    return (
        <div className="profile-preview">
            <h2>Profile Preview</h2>
            <p><strong>Name:</strong> {name ? name : "Name not Entered"}</p>
            <p><strong>Course:</strong> {course ? course : "Course not Selected"}</p>
            <p><strong>Hobbies:</strong> {hobbies.length > 0 ? hobbies.join(", ") : "No Hobbies Selected"}</p>
            <p id="about-text"><strong>About:</strong> {about ? about : "No Description Provided"}</p>
            <p><strong>Message:</strong> {welcome ? 'Have a Great Learning Day!' : 'Welcome Student'}</p>
        </div>
    )
}