import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img 
              src={process.env.PUBLIC_URL + "/img/Hero.jpeg"} 
              alt="Ujjwal Fauzdar" 
            />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Ujjwal Fauzdar.</span>
            A Software Developer.
          </h1>
          <p>
            I'm a passionate Software Developer who specializes in crafting elegant, functional digital experiences. With a Bachelor's degree in Information Technology and a keen eye for detail, I thrive at the intersection of problem-solving and creativity—whether it's building robust applications or transforming complex data into intuitive visualizations.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;