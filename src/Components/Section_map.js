import React, { Component } from 'react'
import abou1 from '../Image/about/1.png'
import abou2 from '../Image/about/2.jpg'
import abou3 from '../Image/about/3.jpg'


export default class Section_map extends Component {
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
                            <h3 className="item_text">Another member of the eclectic cast of Apex Legends heroes.</h3>
                        </div>
                        <div className="about_item">
                            <div className="about_image">
                                <img src={abou2} />
                            </div>
                            <h2 className="item_title">LOBA</h2>
                            <h3 className="item_text">Master thief with teleportation and loot stealing abilities.</h3>
                        </div>
                        <div className="about_item">
                             <div className="about_image">
                                <img src={abou3} />
                             </div>
                             <h2 className="item_title">RAMPART</h2>
                            <h3 className="item_text">Rampart is an expert modder, ready to battle anyone in her way.</h3>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}