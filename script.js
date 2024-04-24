var typing = new Typed(".text", {
  strings: ["Full Stack Web Developer"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

const projectdata = [
  {
    "img": "/Entertainment.png",
    "live": "https://entertainment-app-1-kvea.onrender.com/",
    "github": "https://github.com/chinmaydhabale/Entertainment-app",
    "title": "Entertainment-App",
  },
  {
    "img": "/resumebuilder.png",
    "live": "https://resume-builder-bay.vercel.app/",
    "github": "https://github.com/chinmaydhabale/Resume-Builder",
    "title": "Resume Builder",
  }
]



function renderprojectcard() {
  const projectcardContainer = document.querySelector(".allcard");

  projectdata.forEach((project) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
          <img src="${project.img}" alt="">
          <div class="title">${project.title}</div>
          <div class="link">
              <a href="${project.live}" class="view">View</a>
              <a href="${project.github}" class="github" target="_blank">GitHub</a>
          </div>
      `;

    projectcardContainer.appendChild(card);
  });
}

renderprojectcard();


document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  // Send data to EmailJS
  emailjs.sendForm('service_phlrb7o', 'template_himn7sb', this)
    .then(function (response) {
      alert('Your message has been sent successfully!');
      // Clear form fields
      document.getElementById('contact-form').reset();
    }, function (error) {
      alert('Oops! Something went wrong. Please try again later.');
      console.error('Error:', error);
    });
});

