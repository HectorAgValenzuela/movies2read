import React from "react";

const Footer = () => {
      return(
        <div class="footer_section layout_padding">
            <div class="container">
                <div class="footer_menu">
                    <ul>
                        <li><h2>Luis Juventino Velazquez Hidalgo</h2></li>
                    </ul>
                </div>
                <div class="social_icon">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/luis-juventino-velasquez-hidalgo-457201231/" target="_blank"><img src="assets/images/linkedin-icon.png"/></a></li>
                    </ul>
                </div>
            </div>
            <h2 className="dot">&middot;</h2>
            <div class="container">
                <div class="footer_menu">
                    <h2>Luis Héctor Aguilar Valenzuela</h2>
                </div>
                <div class="social_icon">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/h%C3%A9ctor-aguilar-6263aa252/" target="_blank"><img src="assets/images/linkedin-icon.png"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
      )
}

export default Footer