import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {
  const projects = [
    {
      img: "img/Main.trek.jpg",
      title: "Trek Explorer",
      github: "https://github.com/UjjwalFauzdar/TrekExplorer"
    },
    {
      img: "img/blog1.jpg",
      title: "Expense Tracker",
      github: "https://github.com/UjjwalFauzdar/ExpenseTracker"
    },
    {
      img: "img/thumbnails_5.jpg",
      title: "Weather API",
      github: "https://github.com/UjjwalFauzdar/weatherAPI"
    },
    {
      img: "img/port2.jpg",
      title: "Facebook Clone",
      github: "https://github.com/UjjwalFauzdar/FacebookClone"
    },
    {
      img: "img/pacman.jpg",
      title: "Pacman Game",
      github: "https://github.com/UjjwalFauzdar/Pacman"
    },
    {
      img: "img/blog2.jpg",
      title: "Todo App",
      github: "https://github.com/UjjwalFauzdar/ToDOs"
    },
    {
      img: "img/port3.jpg",
      title: "Portfolio Website",
      github: "https://github.com/UjjwalFauzdar/PortfolioReact"
    }
  ];

  return (
    <section className="container active" id="portfolio">
      <div className="main-title">
        <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
      </div>
      <p className="port-text">
        Explore my projects below—each built with different tools, but all with the same goal: to create efficient, user-friendly solutions.
      </p>
      <div className="portfolios">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <div className="image">
              <img 
                src={process.env.PUBLIC_URL + "/" + project.img} 
                alt={project.title} 
              />
            </div>
            <div className="hover-items">
              <h3>{project.title}</h3>
              <div className="icons">
                <a href={project.github} className="icon" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;