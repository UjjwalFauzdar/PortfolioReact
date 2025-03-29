import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Controls = () => {
  const sections = [
    { id: 'home', icon: 'fa-solid fa-home', path: '/' },
    { id: 'about', icon: 'fa-solid fa-user', path: '/about' },
    { id: 'portfolio', icon: 'fa-solid fa-briefcase', path: '/portfolio' },
    { id: 'contact', icon: 'fa-solid fa-envelope-open', path: '/contact' }
  ];

  return (
    <div className="controls">
      {sections.map((section) => (
        <Link 
          key={section.id}
          to={section.path}
          className={`control`}
        >
          <FontAwesomeIcon icon={section.icon} />
        </Link>
      ))}
    </div>
  );
};

export default Controls;