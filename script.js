// Project data
const projects = [
    {
        title: "Instagram 2: Electric Boogaloo",
        description: "Developed a full stack Instagram clone that enables users to view, post, like, and comment on posts. Produced an Flask based API that stores and retrieves user data using a SQL database.",
        image: "https://via.placeholder.com/400x200",
        technologies: ["HTML", "CSS", "Python", "Flask", "SQL", "React.js"],
        link: "#",
        github: "#"
    },
    {
        title: "Futuristic Fitness",
        description: "Built an image based data set of International Powerlifting Federation regulated squats with over 300 files. Utilized Google MediaPipe to analyze a camera livestream, track the user's landmark ratios, and check for proper form given calculated angles.",
        image: "https://via.placeholder.com/400x200",
        technologies: ["Python", "Excel", "MediaPipe"],
        link: "#",
        github: "#"
    },
    {
        title: "Minnow Analytics",
        description: "Made a visually impaired accessible website that brings users time sensitive stock prediction. Trained a TensorFlow model with past year's stock data, with the output being its predicted stock value trend.",
        image: "https://via.placeholder.com/400x200",
        technologies: ["MongoDB", "Streamlit", "TensorFlow", "Kaggle"],
        link: "#",
        github: "#"
    },
    {
        title: "RideSharer: Carpool Coordinate",
        description: "Founded a carpool coordination website that allowed over 200 college students find rides to their local church. Implemented K-Means clustering using Google Geocaching data to find optimal ride pathing for each driver.",
        image: "https://via.placeholder.com/400x200",
        technologies: ["PostgreSQL", "Python", "Sci-Kit", "Flask"],
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
