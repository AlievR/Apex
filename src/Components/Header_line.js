import React, { Component } from 'react'


export default class Header_line extends Component {
    render() {
        return (
            <div className="intro">
                <div className="container">
                    <div class="intro_header">
                        <div className="header_logo">ApeX</div>
                        <nav className="nav">
                            <a class="nav_link" href="#">About</a>
                            <a class="nav_link" href="#">Service</a>
                            <a class="nav_link" href="#">Blog</a>
                            <a class="nav_link" href="#">Work</a>
                        </nav>
                    </div>
                    <div className="intro_inner">
                        <div className="inner_title">Welcome to ApeX</div>
                        <a class="inner_btn" href="#">Learn more</a>
                    </div>
                </div>
            </div>
        )
    }
}