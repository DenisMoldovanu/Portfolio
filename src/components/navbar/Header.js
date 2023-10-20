import React, { useState, useEffect } from "react";
import "./style.scss";
import { scroller } from "react-scroll";
import { Nav, Navbar } from "react-bootstrap";
function Header() {
    const [active, setActive] = useState(null);
    const [scrollOffset, setScrollOffset] = useState(-160);

    const navlink = [
        {
            id: 1,
            navTitle: "home",
            navlink: "#home",
            navClicked: false,
        },
        {
            id: 2,
            navTitle: "about",
            navlink: "#about",
            navClicked: false,
        },
        {
            id: 3,
            navTitle: "qualification",
            navlink: "#qualification",
            navClicked: false,
        },
        {
            id: 4,
            navTitle: "services",
            navlink: "#services",
            navClicked: false,
        },
        {
            id: 5,
            navTitle: "portfolio",
            navlink: "#portfolio",
            navClicked: false,
        },
    ];
    const handleNavLinkClick = (id) => {
        setActive(id);
    };

    useEffect(() => {
        // Check the screen width and set the appropriate scroll offset
        const isMobile = window.innerWidth <= 992;
        if (isMobile) {
            setScrollOffset(-250);
        } else {
            setScrollOffset(-100);
        }
    }, []);

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
                        onClick={() => {
                            scroller.scrollTo(item.navTitle, {
                                smooth: true,
                                offset: scrollOffset,
                                duration: 500,
                            });
                            handleNavLinkClick(item.id);
                        }}
                    >
                        {item.navTitle}
                    </Nav.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
