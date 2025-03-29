import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {
  return (
    <section className="container active" id="portfolio">
      <div className="main-title">
        <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
      </div>
      <p className="port-text">
      Explore my projects below—each built with different tools, but all with the same goal: to create efficient, user-friendly solutions.
      </p>
      <div className="portfolios">
      <div className="portfolio-item">
          <div className="image">
            <img src="/img/Main.trek.jpg" alt="Pacman Game" />
          </div>
          <div className="hover-items">
            <h3>Trek Explorer</h3>
            <div className="icons">
              <a href="https://github.com/UjjwalFauzdar/Pacman" className="icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="/img/blog1.jpg" alt="Pacman Game" />
          </div>
          <div className="hover-items">
            <h3>Expense Tracker</h3>
            <div className="icons">
              <a href="https://github.com/UjjwalFauzdar/Pacman" className="icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="/img/thumbnails_5.jpg" alt="Pacman Game" />
          </div>
          <div className="hover-items">
            <h3>Weather API</h3>
            <div className="icons">
              <a href="https://github.com/UjjwalFauzdar/Pacman" className="icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <img src="/img/port2.jpg" alt="Pacman Game" />
          </div>
          <div className="hover-items">
            <h3>Facebook Clone</h3>
            <div className="icons">
              <a href="https://github.com/UjjwalFauzdar/Pacman" className="icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src="/img/pacman.jpg" alt="Pacman Game" />
          </div>
          <div className="hover-items">
            <h3>Pacman Game</h3>
            <div className="icons">
              <a href="https://github.com/UjjwalFauzdar/Pacman" className="icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src="/img/blog2.jpg" alt="Todo App" />
          </div>
          <div className="hover-items">
            <h3>Todo App</h3>
            <div className="icons">
              <a href="https://github.com/UjjwalFauzdar/ToDOs" className="icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="image">
            <img src="/img/port3.jpg" alt="Portfolio Website" />
          </div>
          <div className="hover-items">
            <h3>Portfolio Website</h3>
            <div className="icons">
              <a href="https://github.com/UjjwalFauzdar/Portfolio" className="icon" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;