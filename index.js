// function to remove active class from all links
function removeActiveClass() {
  document.querySelectorAll(".navbar-links a").forEach(function (link) {
    link.classList.remove("active");
  });
}

// function to add active class to clicked link
function addActiveClass(event) {
  removeActiveClass();
  event.target.classList.add("active");
}

// add event listeners to all links in the navbar
document.querySelectorAll(".navbar-links a").forEach(function (link) {
  link.addEventListener("click", addActiveClass);
});

// highlight about link by default
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("about-link").classList.add("active");
});

// scroll to the top of the page on reload
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

// reload page when name is clicked
document.getElementById("home-link").addEventListener("click", function () {
  window.location.reload();
});

// automatically highlight the link that corresponds to the section in view
window.addEventListener("scroll", function () {
  let fromTop = window.scrollY;
  document.querySelectorAll(".navbar-links a").forEach(function (link) {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      removeActiveClass();
      link.classList.add("active");
    }
  });
});

// check for saved dark mode preference on page load
window.addEventListener("DOMContentLoaded", function () {
  const isDarkModeEnabled = localStorage.getItem("dark-mode") === "enabled";
  const toggle = document.getElementById("dark-mode-toggle");

  if (isDarkModeEnabled) {
    document.body.classList.add("dark-mode");

    if (document.querySelector(".navbar")) {
      document.querySelector(".navbar").classList.add("dark-mode");
    }

    if (document.querySelectorAll(".navbar-links a")) {
      document.querySelectorAll(".navbar-links a").forEach(function (link) {
        link.classList.add("dark-mode");
      });
    }

    if (document.querySelector(".navbar-name a")) {
      document.querySelector(".navbar-name a").classList.add("dark-mode");
    }

    if (document.querySelectorAll(".blog")) {
      document.querySelectorAll(".blog").forEach(function (blog) {
        blog.classList.add("dark-mode");
      });
    }

    // check the dark mode toggle is checked
    if (toggle) {
      toggle.checked = true;
    }
  }
});

// toggle dark mode
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("change", function () {
  if (toggle.checked) {
    document.body.classList.add("dark-mode");

    if (document.querySelector(".navbar")) {
      document.querySelector(".navbar").classList.add("dark-mode");
    }

    if (document.querySelectorAll(".navbar-links a")) {
      document.querySelectorAll(".navbar-links a").forEach(function (link) {
        link.classList.add("dark-mode");
      });
    }

    if (document.querySelector(".navbar-name a")) {
      document.querySelector(".navbar-name a").classList.add("dark-mode");
    }

    if (document.querySelectorAll(".blog")) {
      document.querySelectorAll(".blog").forEach(function (blog) {
        blog.classList.add("dark-mode");
      });
    }

    localStorage.setItem("dark-mode", "enabled"); // save dark mode preference
  } else {
    document.body.classList.remove("dark-mode");

    if (document.querySelector(".navbar")) {
      document.querySelector(".navbar").classList.remove("dark-mode");
    }

    if (document.querySelectorAll(".navbar-links a")) {
      document.querySelectorAll(".navbar-links a").forEach(function (link) {
        link.classList.remove("dark-mode");
      });
    }

    if (document.querySelector(".navbar-name a")) {
      document.querySelector(".navbar-name a").classList.remove("dark-mode");
    }

    if (document.querySelectorAll(".blog")) {
      document.querySelectorAll(".blog").forEach(function (blog) {
        blog.classList.remove("dark-mode");
      });
    }

    localStorage.setItem("dark-mode", "disabled");
  }
});

// show hidden elements when they are in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

// typing animation
const texts = [
  "Aspiring Software Engineer.",
  "Computer Science major.",
  "Student @ UPenn.",
];

const textElement = document.querySelector(".text");

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  // if the text is being deleted
  if (isDeleting) {
    currentText = texts[index].substring(0, charIndex - 1);
    charIndex--;
  } else {
    // if the text is being typed
    currentText = texts[index].substring(0, charIndex + 1);
    charIndex++;
  }

  textElement.textContent = currentText;

  if (!isDeleting && charIndex === texts[index].length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  // control speed
  const typingSpeed = isDeleting ? 50 : 100;
  setTimeout(type, typingSpeed);
}

// start the typewriter effect
type();
