import React, { Component } from 'react'


export default class Reclam_About extends Component {
    render() {
        return (
            <div className="about_reklam">
                <div className="container">
                    <div className="about-reklam_info">
                        <h1 class="about-reklam_suptitle">Играйте бесплатно*</h1>
                        <h2 class="about-reklam_title">На PlayStation® 4, Xbox One и Origin для ПК.</h2>
                        <a class="about-reklam_btn" href="#">Играть бесплатно</a>
                        <div className="about-reklam_text">
                            <p>
                            * Может потребоваться учетная запись на соответствующей платформе и подписка платформы (продается отдельно). Требуется постоянное подключение к Интернету и учетная запись EA. Действуют возрастные ограничения. Включает в себя возможность совершать внутриигровые покупки.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
