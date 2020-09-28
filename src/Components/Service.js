import React, { Component } from 'react'
import service from '../Image/service.png'
import icon from '../Image/icon.png'

import rus from '../Image/about/1.png'
import den from '../Image/about/2.png'
import arch from '../Image/about/3.png'
import toha from '../Image/about/4.png'


export default class Service extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="section_header">
                        <h3 className="section_suptitle">Service</h3>
                        <h2 className="section_title">what we do</h2>
                        <div className="about-reklam_text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                        </div>
                    </div>
                    <div className="service_content">
                        <div className="service_item">
                            <div className="service_image">
                                <img src={rus} />
                                <div className="service_text">
                                <div className="social">
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-vk"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            </div>

                        </div>

                        <div className="service_item">
                            <div className="service_image">
                                <img src={den} />
                                <div className="service_text">
                                <div className="social">
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-vk"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="service_item">
                            <div className="service_image">
                                <img src={arch} />
                                <div className="service_text">
                                <div className="social">
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-vk"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="service_item">
                            <div className="service_image">
                                <img src={toha} />
                                <div className="service_text">
                                <div className="social">
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-vk"></i>
                                    </a>
                                    <a class="social_item" href="" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
