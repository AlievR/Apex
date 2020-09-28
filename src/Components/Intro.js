import React, { Component } from 'react'


export default class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <div className="container">
                    <div className="intro_inner">
                        <div className="inner_title">Welcome to ApeX</div>
                        <a class="inner_btn" href="#">Learn more</a>
                    </div>
                </div>
            </div>
        )
    }
}