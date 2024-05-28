document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-audio');
    audio.play();
    
    var links = document.querySelectorAll('.link');
    links.forEach(function(link) {
        link.addEventListener('animationend', function() {
            link.classList.remove('clicked');
        });

        link.addEventListener('click', function() {
            link.classList.add('clicked');
        });
    });
});

// Trigger the shake animation on "Your Name"
    var nameElement = document.querySelector('h1');
    nameElement.classList.add('shake');
});