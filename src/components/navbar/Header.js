import React, { useState } from "react";
import "./style.scss";
import { Nav, Navbar } from "react-bootstrap";
function Header() {
    const [active, setActive] = useState(null);

    const navlink = [
        {
            id: 1,
            navTitle: "Home",
            navlink: "#home",
            navClicked: false,
        },
        {
            id: 2,
            navTitle: "About",
            navlink: "#about",
            navClicked: false,
        },
        {
            id: 3,
            navTitle: "Qualification",
            navlink: "#qualification",
            navClicked: false,
        },
        {
            id: 4,
            navTitle: "Services",
            navlink: "#services",
            navClicked: false,
        },
        {
            id: 5,
            navTitle: "Portfolio",
            navlink: "#portfolio",
            navClicked: false,
        },
    ];
    const handleNavLinkClick = (id) => {
        setActive(id);
    };
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
                <div className="logo">Denis</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {navlink.map((item) => (
                    <Nav.Link
                        key={item.id}
                        href={item.navlink}
                        className={item.id === active ? "active" : ""}
                        onClick={() => handleNavLinkClick(item.id)}
                    >
                        {item.navTitle}
                    </Nav.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
