import React, { Component } from 'react'
import abou1 from '../Image/about/1.png'
import abou2 from '../Image/about/2.png'
import abou3 from '../Image/about/3.png'
import abou4 from '../Image/about/4.png'


export default class About extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="section_header">
                        <h3 className="section_suptitle">What we do</h3>
                        <h2 className="section_title">Story about us</h2>
                        <div className="section_text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="about">
                        <div className="about_item">
                            <div className="about_image">
                                <img src={abou1} />
                            </div>
                            <h2 className="item_title">MIRAGE</h2>
                        </div>
                        <div className="about_item">
                            <div className="about_image">
                                <img src={abou2} />
                            </div>
                            <h2 className="item_title">LOBA</h2>
                        </div>
                        <div className="about_item">
                            <div className="about_image">
                                <img src={abou3} />
                            </div>
                            <h2 className="item_title">RAMPART</h2>
                        </div>
                        <div className="about_item">
                            <div className="about_image">
                                <img src={abou4} />
                            </div>
                            <h2 className="item_title">Denis</h2>
                        </div>


                    </div>
                </div>
            </section >
        )
    }
}