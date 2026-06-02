export function AboutTextArea({about, setAbout})
{
    return(
        <div className="about-textarea">
            <label htmlFor="about"><strong>About:</strong> </label>
            <textarea
                id="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
            />
        </div>
    )
}