const coloredLogo = document.getElementById("logo");

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.getElementById('navbar_top').classList.add('fixed-navbar');
            coloredLogo.src="https://www.simbrella.com/site/templates/img/logo_colored.svg";
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-navbar');
            coloredLogo.src="https://www.simbrella.com/site/templates/img/logo.svg";
        } 
    });
  }); 