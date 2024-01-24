document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            console.log("salam");
            document.getElementById('navbar_top').classList.add('fixed-navbar');
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-navbar');
        } 
    });
  }); 