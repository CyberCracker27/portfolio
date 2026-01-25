/* =========================
   HEADER / PROFILE
   ========================= */

document.getElementById("profile-name").textContent = profile.name;
document.getElementById("profile-role").textContent = profile.role;

// Inject email and phone into the terminal box (HTML doesn't have static placeholders for these)
const terminalBox = document.querySelector(".terminal-box");
if (terminalBox) {
  const emailLabel = document.createElement("p");
  emailLabel.innerHTML = `<span class="prompt">root@portfolio</span>:~$ cat contact.txt`;

  const emailValue = document.createElement("p");
  const emailText = profile.email || (profile.links?.email || "").replace(/^mailto:/, "");
  const emailLink = document.createElement("a");
  emailLink.href = `mailto:${emailText}`;
  emailLink.textContent = `Email : ${emailText}`;
  emailLink.classList.add("contact-line");
  emailValue.appendChild(emailLink);

  const phoneValue = document.createElement("p");
  const phoneLink = document.createElement("a");
  phoneLink.href = `tel:${profile.phone || ""}`;
  phoneLink.textContent = `Phone : ${profile.phone || ""}`;
  phoneLink.classList.add("contact-line");
  phoneValue.appendChild(phoneLink);

  terminalBox.appendChild(emailLabel);
  terminalBox.appendChild(emailValue);
  terminalBox.appendChild(phoneValue);
}
// Set profile picture
const profileImg = document.getElementById("profile-img");
if (profile.profilePicture) {
  profileImg.src = profile.profilePicture;
}


const linksContainer = document.getElementById("profile-links");

function createLink(text, url, iconClass = '') {
  const a = document.createElement("a");
  a.href = url;
  if (!url.startsWith('mailto:')) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  
  if (iconClass) {
    const icon = document.createElement("i");
    icon.className = iconClass;
    a.appendChild(icon);
    a.appendChild(document.createTextNode(' ' + text));
  } else {
    a.textContent = text;
  }
  
  return a;
}

// Social links with icons
linksContainer.appendChild(createLink("GitHub", profile.links.github, "fab fa-github"));
linksContainer.appendChild(createLink("LinkedIn", profile.links.linkedin, "fab fa-linkedin"));
linksContainer.appendChild(createLink("Medium", profile.links.medium, "fab fa-medium"));

// Resume links
linksContainer.appendChild(createLink("View Resume", profile.resume.view, "fas fa-eye"));

const downloadLink = createLink("Download Resume", profile.resume.download, "fas fa-download");
downloadLink.setAttribute("download", "");
linksContainer.appendChild(downloadLink);


/* =========================
   SKILLS
   ========================= */

const skillsContainer = document.getElementById("skills-container");

skills.forEach(skill => {
  const span = document.createElement("span");
  span.className = "skill-chip fade-in";
  span.textContent = skill;
  skillsContainer.appendChild(span);
});


/* =========================
   TOOLS
   ========================= */

const toolsContainer = document.getElementById("tools-container");

tools.forEach((tool, index) => {
  const div = document.createElement("div");
  div.className = "tool-card fade-in";
  div.style.animationDelay = `${index * 0.1}s`;

  const img = document.createElement("img");
  img.src = tool.icon;
  img.alt = tool.name;

  const p = document.createElement("p");
  p.textContent = tool.name;

  div.appendChild(img);
  div.appendChild(p);
  toolsContainer.appendChild(div);
});


/* =========================
   PROJECTS
   ========================= */

const projectsContainer = document.getElementById("projects-container");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "project-card fade-in";
  card.style.animationDelay = `${index * 0.15}s`;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.textContent = project.description;

  const tech = document.createElement("small");
  tech.textContent = project.tech.join(" • ");

  const link = createLink("View Project", project.link);
  link.innerHTML = 'View Project <i class="fas fa-external-link-alt"></i>';

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(tech);
  card.appendChild(link);

  projectsContainer.appendChild(card);
});


/* =========================
   PRACTICE & PLATFORMS
   ========================= */

const platformsContainer = document.getElementById("platforms-container");

platforms.forEach((platform, index) => {
  const card = document.createElement("div");
  card.className = "platform-card fade-in";
  card.style.animationDelay = `${index * 0.15}s`;

  const img = document.createElement("img");
  img.src = platform.icon;
  img.alt = platform.name;

  const title = document.createElement("h4");
  title.textContent = platform.name;

  const link = createLink("View Profile", platform.profile);
  link.innerHTML = 'View Profile <i class="fas fa-external-link-alt"></i>';

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(link);

  platformsContainer.appendChild(card);
});


/* =========================
   CERTIFICATIONS
   ========================= */

const certContainer = document.getElementById("certificates-container");

certificates.forEach((cert, index) => {
  const card = document.createElement("div");
  card.className = "certificate-card fade-in";
  card.style.animationDelay = `${index * 0.15}s`;

  const title = document.createElement("h4");
  title.textContent = cert.title;

  const issuer = document.createElement("p");
  issuer.textContent = cert.issuer;

  const link = createLink("View Certificate", cert.link);
  link.innerHTML = 'View Certificate <i class="fas fa-external-link-alt"></i>';

  card.appendChild(title);
  card.appendChild(issuer);
  card.appendChild(link);

  certContainer.appendChild(card);
});


/* =========================
   EDUCATION
   ========================= */

const educationContainer = document.getElementById("education-container");

education.forEach((edu, index) => {
  const card = document.createElement("div");
  card.className = "education-card fade-in";
  card.style.animationDelay = `${index * 0.15}s`;

  const degree = document.createElement("h4");
  degree.textContent = edu.degree;

  const institution = document.createElement("p");
  institution.className = "institution";
  institution.textContent = edu.institution;

  const year = document.createElement("p");
  year.className = "year";
  year.textContent = edu.year;

  card.appendChild(degree);
  card.appendChild(institution);
  card.appendChild(year);

  if (edu.description) {
    const description = document.createElement("p");
    description.className = "description";
    description.textContent = edu.description;
    card.appendChild(description);
  }

  educationContainer.appendChild(card);
});


/* =========================
   FOOTER
   ========================= */

const footerLinks = document.getElementById("footer-links");

footerLinks.appendChild(createLink("GitHub", profile.links.github, "fab fa-github"));
footerLinks.appendChild(createLink("LinkedIn", profile.links.linkedin, "fab fa-linkedin"));
footerLinks.appendChild(createLink("Medium", profile.links.medium, "fab fa-medium"));
footerLinks.appendChild(createLink("Resume", profile.resume.view, "fas fa-file-pdf"));
footerLinks.appendChild(createLink("Email", profile.links.email, "fas fa-envelope"));


/* =========================
   INTERACTIVE EFFECTS
   ========================= */

// Add mouse tracking for background effect
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--x', e.clientX + 'px');
  document.documentElement.style.setProperty('--y', e.clientY + 'px');
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Profile picture error handling
profileImg.onerror = function() {
  this.src = "https://via.placeholder.com/400x400/6366f1/ffffff?text=GS";
  this.alt = "Default Profile - Gopikrishnan S";
};

// Add animation to profile picture
setTimeout(() => {
  document.querySelector('.profile-picture-container').classList.add('fade-in');
}, 300);