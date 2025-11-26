
//Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

//Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    //Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //Remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

//Scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.home-content, heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', {origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right' });

//Typed JS
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineering Intern', 'Game Developer', 'Website Penetration Tester'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

//For the 'read more' buttons
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function () {
        let moreText = this.previousElementSibling;
        moreText.classList.toggle('show');

        // Change button text
        if (moreText.classList.contains('show')) {
            this.textContent = 'Read Less';
        } else {
            this.textContent = 'Read More';
        }
    });
});

const projects = {
    project1: {
        title: "AI Chatbot",
        description: "A chatbot that connects to OpenAI to answer any questions the user may have. Created with Python and OpenAI APIs as the backend, and Voiceflow as the frontend",
        images: ["img/chatbot2.png", "img/chatbot1.jpg", "img/chatbot3.png"]
    },
    project2: {
        title: "Game Development",
        description: "Retro style snake game with different game modes. User can set the board size and snake speed. There is an extra challenging gamemode where the user plays against an AI-driven competitive snake.",
        images: ["img/snake1.png", "img/snake2.png", "img/snake3.png"]
    },
    project3: {
        title: "Using Web APIs",
        description: "This program uses the OpenWeather and Aplha Vantage APIs for easy viewing of the weather anywhere and the price of any stock.",
        images: ["img/api1.png", "img/api2.png", "img/api3.png"]
    },
    project4: {
        title: "16 Bit Adventure Game",
        description: "This game is a 16 bit adventure style 2d game, made exclusively with Java. Currently the user can only pick up keys to unlock door to buildings, but there are more updates coming to turn it into a full game.",
        images: ["img/javagame1.png", "img/javagame2.png", "img/javagame3.png"]
    },
    project5: {
        title: "Login Page",
        description: "This is a fully functional login page that lets you sign up, sign in, and recover your password. Login information is stored in a MySQL table and PHP is ran through XAMPP.",
        images: ["img/login1.png", "img/login2.png"]
    },
    project6: {
        title: "Stealth Game",
        description: "This is a game that was made to test my Python skills as well as using a popular framework, PyGame. The user has to not be in the radius of the red circle (who uses AI to partol the area) or else it starts chasing the user. Once the user is touched then the game is over. The user can use walls to hide from the enemy. More updates will bring more objectives for the user.",
        images: ["img/spy1.png", "img/spy2.png", "img/spy3.png"]
    },
    project7: {
        title: "Plagiarism Checker",
        description: "Created using Python and Tkinter for the UI. Uses data mining techniques like shingling, min-hashing, and LSH to find jaccard and cosine similarities to calculate how similar two documents are.",
        images: ["img/checker1.png", "img/checker2.png", "img/checker3.png"]
    }
};

const modal = document.getElementById("project-modal");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectImage = document.getElementById("project-image");
const closeModal = document.querySelector(".close");

let currentProject = null;
let currentImageIndex = 0;

document.querySelectorAll(".portfolio-box").forEach(box => {
    box.addEventListener("click", function () {
        let projectKey = this.getAttribute("data-project");
        if (projects[projectKey]) {
            currentProject = projects[projectKey];

            // Ensure the elements are being updated correctly
            projectTitle.textContent = currentProject.title;
            projectDescription.innerHTML = currentProject.description; // Use innerHTML in case of rich text
            currentImageIndex = 0;
            projectImage.src = currentProject.images[currentImageIndex];
            


            modal.style.display = "block";
        }
    });
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Carousel Controls
document.getElementById("prev").addEventListener("click", () => {
    if (currentProject) {
        currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
        projectImage.src = currentProject.images[currentImageIndex];
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentProject) {
        currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
        projectImage.src = currentProject.images[currentImageIndex];
    }
});


