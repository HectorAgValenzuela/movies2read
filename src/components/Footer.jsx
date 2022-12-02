import React from "react";

const Footer = () => {
      return(
        <div class="footer_section layout_padding">
            <div class="container">
                <div class="footer_menu">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="movies.html">Movies</a></li>
                    <li><a href="tv.html">TV</a></li>
                    <li><a href="celebs.html">Celebs</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">News</a></li>
                </ul>
                </div>
                <div class="social_icon">
                <ul>
                    <li><a href="#"><img src="assets/images/fb-icon.png"/></a></li>
                    <li><a href="#"><img src="assets/images/twitter-icon.png"/></a></li>
                    <li><a href="#"><img src="assets/images/linkedin-icon.png"/></a></li>
                    <li><a href="#"><img src="assets/images/instagram-icon.png"/></a></li>
                </ul>
                </div>
            </div>
        </div>
      )
}

export default Footer