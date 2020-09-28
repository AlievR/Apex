
import React, { Component, useState, useEffect } from 'react'


function Header() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <header className="header fixed">
            <div className="container">
                <div class="intro_header">
                    <div className="header_logo">ApeX</div>
                    <nav className={click ? 'nav active' : 'nav'} onClick={handleClick}>
                        <a class="nav_link" href="#">About</a>
                        <a class="nav_link" href="#">Service</a>
                        <a class="nav_link" href="#">Blog</a>
                        <a class="nav_link" href="#">Work</a>
                    </nav>
                </div>
                <div className={click ? 'nav-tools active' : 'nav-tools'} onClick={handleClick}>
                    <span class="nav-tools_item">

                    </span>
                </div>
            </div>
        </header>

    )
}


export default Header;
