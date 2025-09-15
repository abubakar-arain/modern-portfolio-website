const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("show");
  btn.classList.toggle("active");
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    menu.clasList.remove("show");
    btn.classList.remove("active");
  }
});
document.querySelectorAll('nav a').forEach(link =>{
    link.addEventListener('click',()=>{
        menu.classList.remove('show');
        btn.classList.remove('active');
    });
});


const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeBtn");

    // Open lightbox
    document.querySelectorAll(".gallery img").forEach(img => {
      img.addEventListener("click", () => {
        lightbox.classList.add("show");
        lightboxImg.src = img.src;
      });
    });

    // Close by button
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("show");
    });

    // Close by clicking outside image
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("show");
      }
    });

      const topBtn = document.getElementById("btnn");

// Show button when scrolling down
window.onscroll = function () {
  if (window.scrollY > 1000) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Smooth scroll to top on click
topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// Get container
const container = document.getElementById("project-container");

// Function to show projects
function displayProjects(category) {
  container.innerHTML = ""; // clear first

  // Filter projects
  const filtered = category === "all"
    ? projects : projects.filter(p => p.category === category);

  // Add cards to page
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <div class="project-info">${p.info}</div>
      <div class="project-card">${p.description}</div>
      <a href="${p.link}" target="_blank" class="view-btn">View Project</a>
    `;
    container.appendChild(card);
  });
}

// Show all projects at start
displayProjects("all");

// Add event listeners to buttons
document.querySelectorAll(".filter-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    displayProjects(category);
  });
});

//get all section
const section= document.querySelectorAll("section");
//create oserver
const observer=new IntersectionObserver((entries) => {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");//add animation
    }
  });
},{threshold:0.1}); // 0.2 = when 20% is visible
// observe each section 
section.forEach(sec => observer.observe(sec));








