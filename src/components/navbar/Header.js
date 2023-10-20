import React, { useState, useEffect } from "react";
import "./style.scss";
import { scroller } from "react-scroll";
import { Nav, Navbar } from "react-bootstrap";
import { navlink } from "../../helpers/utils";
function Header() {
    const [scrollOffset, setScrollOffset] = useState(-100);
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
                        onClick={() => {
                            scroller.scrollTo(item.navTitle, {
                                smooth: true,
                                offset: scrollOffset,
                                duration: 50,
                            });
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
