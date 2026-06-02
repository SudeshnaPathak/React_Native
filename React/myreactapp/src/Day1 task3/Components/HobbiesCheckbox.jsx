export function HobbiesCheckbox({ hobbies, setHobbies })
{
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setHobbies([...hobbies, value]);
        } else {
            setHobbies(hobbies.filter((hobby) => hobby !== value));
        }
    };

    return (
        <div className="hobbies-checkbox">
            <strong>Hobbies:</strong>
            <div className="checkbox-group">
                <label>
                    <input
                        type="checkbox" 
                        value="Reading"
                        checked={hobbies.includes("Reading")}
                        onChange={handleCheckboxChange}
                    />
                    Reading
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Coding"
                        checked={hobbies.includes("Coding")}
                        onChange={handleCheckboxChange}
                    />
                    Coding
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Music"
                        checked={hobbies.includes("Music")}
                        onChange={handleCheckboxChange}
                    />
                    Music
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Sports"
                        checked={hobbies.includes("Sports")}
                        onChange={handleCheckboxChange}
                    />
                    Sports
                </label>
            </div>
        </div>
    );

}