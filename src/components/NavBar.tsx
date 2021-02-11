import React from 'react'

export const NavBar: React.FC = () => (
    <nav>
        <div className="nav-wrapper px1 teal darken-1">
            <a href="/" className="brand-logo">React + TypeScript</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">TODO List</a></li>
                <li><a href="/">About Us</a></li>
            </ul>
        </div>
    </nav>
)