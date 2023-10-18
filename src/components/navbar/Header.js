import "./style.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Header() {
    return (
        <div className="header">
            <div className="logo">Denis</div>
            <div className="navbar">
                <AnchorLink href="#home">Home</AnchorLink>
                <AnchorLink offset="120" href="#about">
                    About
                </AnchorLink>
                <AnchorLink offset="120" href="#qualification">
                    Qualification
                </AnchorLink>
                <AnchorLink offset="120" href="#services">
                    Service
                </AnchorLink>
                <AnchorLink offset="120" href="#portfolio">
                    Portfolio
                </AnchorLink>
            </div>
        </div>
    );
}

export default Header;
