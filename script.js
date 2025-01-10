// Sample project data - replace with your actual projects
const projects = [
    {
        title: "Project 1",
        description: "A brief description of your first project. Highlight the key features and technologies used.",
        image: "https://via.placeholder.com/400x200",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "#",
        github: "#"
    },
    {
        title: "Project 2",
        description: "Description of your second project. What problems did it solve? What did you learn?",
        image: "https://via.placeholder.com/400x200",
        technologies: ["Python", "Django", "PostgreSQL"],
        link: "#",
        github: "#"
    },
    {
        title: "Project 3",
        description: "Overview of another significant project. Focus on your role and the impact it had.",
        image: "https://via.placeholder.com/400x200",
        technologies: ["Vue.js", "Express", "MySQL"],
        link: "#",
        github: "#"
    }
];

// Function to create project cards
function createProjectCards() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="skill-tags">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links" style="margin-top: 1rem;">
                    <a href="${project.link}" class="btn primary" target="_blank">View Live</a>
                    <a href="${project.github}" class="btn secondary" target="_blank">GitHub</a>
                </div>
            </div>
        `;
        
        projectGrid.appendChild(card);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
});

// Add scroll-based animations for nav
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down & past the threshold
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});
