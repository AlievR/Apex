import React, { Component } from 'react'
import logo from "../Image/logo/mir_card.png"


export default class Reclam_Service extends Component {
    render() {
        return (
            <div className="service_reklam">
                <div className="container">
                        <div className="sr_logo">
                            <img src={logo} /> 
                        </div>
                        <div className="sr_content">
                            <div className="suptitle_sr">
                                Обнови гардероб с картой "МИР"!
                            </div>
                            <div className="title_sr">
                                 Добавь ее в свои способы оплаты прямо сейчас
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
