var aboutLink = document.getElementById('aboutLink');
var skillsLink = document.getElementById('skillsLink');
var projectsLink = document.getElementById('projectsLink');
var contactLink = document.getElementById('ContactLink');

var navLinks = [aboutLink, skillsLink, projectsLink, contactLink];

aboutLink.onclick = function() {
    removeBg();
    aboutLink.style.backgroundColor = '#ffba00';
};

skillsLink.onclick = function() {
    removeBg();
    skillsLink.style.backgroundColor = '#ffba00';
};

projectsLink.onclick = function() {
    removeBg();
    projectsLink.style.backgroundColor = '#ffba00';
};

contactLink.onclick = function() {
    removeBg();
    contactLink.style.backgroundColor = '#ffba00';
};

function removeBg() {
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.backgroundColor = '';
    }
}

// ! Menu Icon Script

let menuIcon = document.getElementById('menu-icon');
let header = document.querySelector('header');
let nav = document.querySelector('nav');
let links = document.querySelectorAll('.navLink');

menuIcon.onclick = function(e) {
    e.preventDefault();
    header.classList.toggle('expanded');
    nav.classList.toggle('expanded');
};

links.forEach(function(link) {
    link.onclick = function() {
        if (window.innerWidth <= 768) {
            header.classList.remove('expanded');
            nav.classList.remove('expanded');
        }
    };
});




// ! Auto typing in Home Page "Script"

var typed = new Typed(".auto-type",{
    strings : ["Web Developers", "UI , UX Designers" , "Creativity our Title!"],
    typeSpeed : 110,
    backSpeed : 30,
    backDelay: 1500,
    loop : true,
})

// ! Pages "a" system

window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var section = document.querySelector('#About');
        var rect = section.getBoundingClientRect();
        var halfHeight = rect.height / 2;

        if (rect.top < window.innerHeight - halfHeight && rect.bottom > halfHeight) {
            aboutLink.style.backgroundColor = '#ffba00';
        } else {
            aboutLink.style.backgroundColor = 'transparent';
        }
    });

    window.addEventListener('scroll', function() {
        var section = document.querySelector('#Skills');
        var rect = section.getBoundingClientRect();
        var halfHeight = rect.height / 2;

        if (rect.top < window.innerHeight - halfHeight && rect.bottom > halfHeight) {
            skillsLink.style.backgroundColor = '#ffba00';
        } else {
            skillsLink.style.backgroundColor = 'transparent';
        }
    });

    window.addEventListener('scroll', function() {
        var section = document.querySelector('#Projects');
        var rect = section.getBoundingClientRect();
        var halfHeight = rect.height / 2;

        if (rect.top < window.innerHeight - halfHeight && rect.bottom > halfHeight) {
            projectsLink.style.backgroundColor = '#ffba00';
        } else {
            projectsLink.style.backgroundColor = 'transparent';
        }
    });

    window.addEventListener('scroll', function() {
        var section = document.querySelector('#Contact');
        var rect = section.getBoundingClientRect();
        var halfHeight = rect.height / 2;

        if (rect.top < window.innerHeight - halfHeight && rect.bottom > halfHeight) {
            contactLink.style.backgroundColor = '#ffba00';
        } else {
            contactLink.style.backgroundColor = 'transparent';
        }
    });
});


// ! Scroll icon Script
let scrollIcon = document.querySelector('.ScrollIcon');

window.addEventListener('scroll', function () {
    if (window.scrollY <= 40) {
        scrollIcon.style.transform = 'scale(0)';
    } else {
        scrollIcon.style.transform = 'scale(1)';
    }
});

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ! Skills Bars Script

window.addEventListener('scroll', function () {
    const bars = document.querySelectorAll('#SkillsBars .bar');

    bars.forEach(function (bar) {
        const rect = bar.getBoundingClientRect();
        const inner = bar.querySelector('.inner');
        const targetWidth = bar.getAttribute('data-width');

        if (
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight
        ) {
        inner.style.width = targetWidth;
        }
    });
});


// ! Projects Slider Scripts
let current = 0;
const slides = [document.getElementById('first'), document.getElementById('sec')];

document.getElementById('fa-chevron-right').onclick = function () {
    const currentSlide = slides[current];
    const nextIndex = (current + 1) % slides.length;
    const nextSlide = slides[nextIndex];

    currentSlide.style.animation = 'slideNextOut 0.5s forwards';
    nextSlide.style.animation = 'slideNextIn 0.5s forwards';

    currentSlide.style.zIndex = 0;
    nextSlide.style.zIndex = 1;

    current = nextIndex;
};

document.getElementById('fa-chevron-left').onclick = function () {
    const currentSlide = slides[current];
    const prevIndex = (current - 1 + slides.length) % slides.length;
    const prevSlide = slides[prevIndex];

    currentSlide.style.animation = 'slidePrevOut 0.5s forwards';
    prevSlide.style.animation = 'slidePrevIn 0.5s forwards';

    currentSlide.style.zIndex = 0;
    prevSlide.style.zIndex = 1;

    current = prevIndex;
};


// ! Form Scripts in Contact Page
emailjs.init("DiK4pUrzUh7jrPCjc");

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var lastSent = localStorage.getItem("lastMessageSent");
    var now = new Date().getTime();

    if (lastSent && now - lastSent < 24 * 60 * 60 * 1000) {
        alert("You can only send one message per day.");
        return;
    }

    emailjs.sendForm("service_gwggl7c", "template_1wp355e", this)
    .then(function() {
        alert("Message sent successfully!");
        localStorage.setItem("lastMessageSent", now);
    }, function(error) {
        alert("Failed to send message.");
        console.log(error);
    });
});


let formBtn = document.getElementById('formBtn');
let user_name = document.getElementsByName('user_name')
let user_email = document.getElementsByName('user_email');
let messageInp = document.getElementsByName('message');

formBtn.onclick = function(){
    user_name.value = '';
    user_email.value = '';
    messageInp.value = '';
}









