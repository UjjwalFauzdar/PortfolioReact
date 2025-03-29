import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeButton = ({ toggleTheme }) => {
  return (
    <div className="theme-btn" onClick={toggleTheme}>
      <FontAwesomeIcon icon="fa-solid fa-adjust" />
    </div>
  );
};

export default ThemeButton;