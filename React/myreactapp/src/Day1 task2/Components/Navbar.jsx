function Navbar(){
    return(
        <header className="navbar">
        <div className="logo-section">
            <div className="logo">🍃</div>
            <h1>My Website</h1>
        </div>

        <nav>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </nav>
    </header>
    );
}

export default Navbar;