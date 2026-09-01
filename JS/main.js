// Current Year
const currentYear = document.getElementById("current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Typing Effect
// ================================

const typingElement = document.getElementById("typing");

const words = [
  "Start in 2022",
  "Frontend Developer",
  "Learn Javascript",
  "Learn API",
  "Learn React",
  "Full Stack Developer",
  "Learn php",
  "Learn Laravel",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typingElement) {
    return;
  }

  const currentWord = words[wordIndex];

  if (deleting === false) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  if (deleting) {
    setTimeout(typeEffect, 60);
  } else {
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

// ================================
// Projects
// ================================
/* Done */
const projects = [
  {
    title: "Restaurant Managment",

    description:
      "A modern e-commerce website with responsive design and interactive features.",

    icon: "fa-utensils",

    technologies: ["HTML5", "CSS3", "JavaScript"],

    category: "javascript",

    liveDemo: "https://majd2022.github.io/Third-Project/",

    github: "https://github.com/Majd2022/Third-Project",
  },

  {
    title: "Simple Web Page JavaScript",

    description:
      "A clean dashboard interface designed for data visualization and user management.",

    icon: "fa-solid fa-code",

    technologies: ["HTML5", "CSS3", "JavaScript"],

    category: "javascript",

    liveDemo: "https://majd2022.github.io/Task-Simple-Javascript/",

    github: "https://github.com/Majd2022/Task-Simple-Javascript/",
  },
  /* Done */
  {
    title: "CSS Draw Flags",

    description:
      "Interactive task management application with filtering and local storage.",

    icon: "fa-solid fa-palette",

    technologies: ["HTML5", "CSS3"],

    category: "html-css",

    liveDemo: "https://majd2022.github.io/Task-6/",

    github: "https://github.com/Majd2022/Task-6",
  },  

  {
    /* Done */
    title: "Personal Bio Page",

    description: "My First HTML Page.",

    icon: "fa-user",

    technologies: ["HTML5"],

    category: "html-css",

    liveDemo: "https://majd2022.github.io/First-Project/",

    github: "https://github.com/Majd2022/First-Project",
  },

  /* Done */
  {
    title: "Simple Web Page",

    description:
      "Responsive website created using Bootstrap components and utilities.",

    icon: "fa-solid fa-code",

    technologies: ["HTML5", "CSS3"],

    category: "html-css",

    liveDemo: "https://majd2022.github.io/Task5/",

    github: "https://github.com/Majd2022/Task5/",
  },

  {
    /* Done */
    title: "Mobile Store",

    description:
      "Modern login page with a clean interface and responsive design.",

    icon: "fa-solid fa-mobile-screen-button",

    technologies: ["HTML5", "CSS3", "Javascript"],

    category: "javascript",

    liveDemo: "https://majd2022.github.io/Fourth-Project/",

    github: "https://github.com/Majd2022/Fourth-Project/",
  },

  {
    /* Done */
    title: "Simple Landing Page with CSS",

    description:
      "Responsive personal website with a modern and professional design.",

    icon: "fa-solid fa-photo-film",

    technologies: ["HTML5", "CSS3"],

    category: "html-css",

    liveDemo: "https://majd2022.github.io/Task2/",

    github: "https://github.com/Majd2022/Task2/",
  },

  {
    /* Done */
    title: "Responsive Team Section UI",

    description:
      "Professional product landing page designed with responsive layouts.",

    icon: "fa-box-open",

    technologies: ["HTML5", "CSS3"],

    category: "html-css",

    liveDemo: "https://majd2022.github.io/Cards-Project/",

    github: "https://github.com/Majd2022/Cards-Project",
  },

  {
    /* Done */
    title: "Introduction JavaScript",

    description:
      "Simple notes application with JavaScript and browser local storage.",

    icon: "fa-solid fa-wand-magic-sparkles",

    technologies: ["HTML5", "CSS3", "JavaScript"],

    category: "javascript",

    liveDemo: "https://majd2022.github.io/Task-Java-script/",

    github: "http://github.com/Majd2022/Task-Java-script/",
  },

  {
    /* Done */
    title: "Responsive Contact Section Component",

    description:
      "Responsive admin dashboard built with Bootstrap and JavaScript.",

    icon: "fa-solid fa-address-book",

    technologies: ["HTML5", "Bootstrap", "JavaScript"],

    category: "bootstrap",

    liveDemo: "https://majd2022.github.io/Fifth-project/",

    github: "https://github.com/Majd2022/Fifth-project/",
  },
];

// ================================
// Project Elements
// ================================

const projectsContainer = document.getElementById("projects-container");

const loadMoreButton = document.getElementById("load-more");

const filterButtons = document.querySelectorAll(".filter-btn");

const projectsPerPage = 6;

let currentFilter = "all";

let visibleProjects = projectsPerPage;

// ================================
// Create Project Card
// ================================

function createProjectCard(project) {
  const article = document.createElement("article");

  article.className = "col-md-6 col-lg-4";

  const card = document.createElement("div");

  card.className =
    "card h-100 bg-dark text-white border-secondary project-card";

  const image = document.createElement("div");

  image.className =
    "card-img-top project-img d-flex align-items-center justify-content-center bg-secondary bg-opacity-25";

  const icon = document.createElement("i");

  icon.className = "fa-solid " + project.icon + " display-4 text-info";

  image.appendChild(icon);

  const body = document.createElement("div");

  body.className = "card-body p-4 d-flex flex-column";

  const title = document.createElement("h3");

  title.className = "card-title h4 mb-3";

  title.textContent = project.title;

  const description = document.createElement("p");

  description.className = "card-text text-muted mb-4 flex-grow-1";

  description.textContent = project.description;

  const technologies = document.createElement("div");

  technologies.className = "d-flex flex-wrap gap-2 mb-4";

  project.technologies.forEach(function (technology) {
    const badge = document.createElement("span");

    badge.className =
      "badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill";

    badge.textContent = technology;

    technologies.appendChild(badge);
  });

  const links = document.createElement("div");

  links.className = "d-flex gap-3";

  const liveDemo = document.createElement("a");

  liveDemo.href = project.liveDemo;

  liveDemo.target = "_blank";

  liveDemo.className = "text-info text-decoration-none small";

  liveDemo.innerHTML =
    '<i class="fa-solid fa-arrow-up-right-from-square me-1"></i> Live Demo';

  const github = document.createElement("a");

  github.href = project.github;

  github.target = "_blank";

  github.className = "text-light text-decoration-none small";

  github.innerHTML = '<i class="fa-brands fa-github me-1"></i> GitHub';

  links.appendChild(liveDemo);

  links.appendChild(github);

  body.appendChild(title);

  body.appendChild(description);

  body.appendChild(technologies);

  body.appendChild(links);

  card.appendChild(image);

  card.appendChild(body);

  article.appendChild(card);

  return article;
}

// ================================
// Render Projects
// ================================

function renderProjects() {
  if (!projectsContainer) {
    return;
  }

  let filteredProjects;

  if (currentFilter === "all") {
    filteredProjects = projects;
  } else {
    filteredProjects = projects.filter(function (project) {
      return project.category === currentFilter;
    });
  }

  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  projectsContainer.innerHTML = "";

  projectsToShow.forEach(function (project) {
    const projectCard = createProjectCard(project);

    projectsContainer.appendChild(projectCard);
  });

  if (!loadMoreButton) {
    return;
  }

  if (visibleProjects >= filteredProjects.length) {
    loadMoreButton.style.display = "none";
  } else {
    loadMoreButton.style.display = "inline-block";
  }
}

// ================================
// Load More
// ================================

if (loadMoreButton) {
  loadMoreButton.addEventListener("click", function () {
    visibleProjects += projectsPerPage;

    renderProjects();
  });
}

// ================================
// Filters
// ================================

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active", "btn-info");

      btn.classList.add("btn-outline-info");
    });

    button.classList.add("active", "btn-info");

    button.classList.remove("btn-outline-info");

    currentFilter = button.dataset.filter;

    visibleProjects = projectsPerPage;

    renderProjects();
  });
});

// ================================
// Start
// ================================

renderProjects();
