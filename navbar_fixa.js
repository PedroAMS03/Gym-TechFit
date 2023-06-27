document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('header').classList.add('fixed-top');
          // add padding top to show content behind navbar
          header_height = document.querySelector('.header').offsetHeight;
          document.body.style.paddingTop = header_height + 'px';
        } else {
          document.getElementById('header').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
  // DOMContentLoaded  end