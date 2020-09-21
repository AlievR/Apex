import React, { Component } from 'react'
import back from '../Image/Modes/back.mp4'
import wolf from '../Image/Modes/w.png'
import pop from '../Image/Modes/p.png'
import sos from '../Image/Modes/s.png'



export default class Modes extends Component {
    render() {
        return (
            <div className="modes">
                <video autoplay="autoplay" loop="loop" muted className="modes_back">
                    <source src={back} type="video/mp4" />
                </video>

                <div className="modes_block">
                    <div className="container">
                        <div className="modes_header">
                            <h2 class="modes_suptitle">new word in the genre "battle royal"</h2>
                            <h3 class="modes_title">Show what you can do in Apex Legends, a free-to-play battle royale game where challengers from all over the Frontier form teams to battle for glory and fortune. </h3>
                        </div>
                        <div className="modes_item">
                            <div className="item_slow">
                                <img class="modes_img" src={wolf} />
                                <h2 >Legendary characters</h2>
                            </div>
                            <div className="item_slow">
                                <img class="modes_img" src={pop} />
                                <h2>Greatest Squad</h2>
                            </div>
                            <div className="item_slow">
                                <img class="modes_img" src={sos} />
                                <h2>Strategic battle</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
