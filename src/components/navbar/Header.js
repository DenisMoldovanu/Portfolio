import React, { useState } from "react";
import "./style.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
        <div className="header">
            <div className="logo">Denis</div>
            <div className="navbar">
                {navlink.map((item) => (
                    <AnchorLink
                        key={item.id}
                        href={item.navlink}
                        offset="120"
                        className={item.id === active ? "active" : ""}
                        onClick={() => handleNavLinkClick(item.id)}
                    >
                        {item.navTitle}
                    </AnchorLink>
                ))}
            </div>
        </div>
    );
}

export default Header;
