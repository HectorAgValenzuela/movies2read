import React from "react";

const Header = () => {
    return (
        <div class="header_section">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="logo" href="index.html"><img src="assets/images/logo.png"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                     <a class="nav-link" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="movies.html">Movies</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="tv.html">TV</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="celebs.html">Celebs</a>
                  </li>
               </ul>
               <div class="search_icon"><a href="#"><img src="assets/images/notification-icon.png"/><span class="padding_left_15">Notificastion</span></a></div>
               <div class="search_icon"><a href="#"><img src="assets/images/eye-icon.png"/><span class="padding_left_15">Viwe</span></a></div>
               <div class="search_icon"><a href="#"><img src="assets/images/user-icon.png"/><span class="padding_left_15">login</span></a></div>
               <div class="search_icon"><a href="#"><img src="assets/images/search-icon.png"/><span class="padding_left_15">Search...</span></a></div>
            </div>
         </nav>
      </div>
    )
}

export default Header