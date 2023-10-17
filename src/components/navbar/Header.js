import "./style.scss";
function Header() {
    return (
        <div className="header">
            <div className="logo">Logo</div>
            <div className="navbar">
                <a href="Home">Home</a>
                <a href="About">About</a>
                <a href="Service">Service</a>
                <a href="Portfolio">Portfolio</a>
                <a href="Contact">Contact</a>
            </div>
        </div>
    );
}

export default Header;
