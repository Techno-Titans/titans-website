let logoButton = document.querySelector("#home-button");
let teamButton = document.querySelector("#our-team");
let projectsButton = document.querySelector("#our-projects");
let contactButton = document.querySelector("#our-contact");

logoButton.addEventListener('click', () => {
    location.href = '../index.html'
})

teamButton.addEventListener('click', () => {
    location.href = '../team-page.html'
})

contactButton.addEventListener('click', () => {
    location.href = '../contact-page.html'
})

projectsButton.addEventListener('click', () => {
    location.href = '../project-page.html'
})