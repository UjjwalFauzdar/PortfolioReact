import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <section className="container about active" id="about">
      <div className="main-title">
        <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
      </div>
      
      <div className="about-container">
        <div className="left-about">
          <h4>Information About me</h4>
          <p>
            I have recently completed my graduate degree in B.Tech with Information Technology
            from Ajay Kumar Garg Engineering College. I have strong knowledge of
            Java, SpringBoot, MySQL, HTML, CSS, ReactJS, and C/C++. I excel at problem solving and have a passion for continuous learning and growth. 
            I'm actively seeking opportunities in Web Development.
          </p>
          <div className="btn-con">
            <a 
              href={process.env.PUBLIC_URL + "/Ujjwals_Resume.pdf"} 
              className="resume-btn" 
              download="Ujjwal_Fauzdar_Resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="btn-text">Download Resume</span>
              <span className="btn-icon">
                <FontAwesomeIcon icon="fa-solid fa-download" />
              </span>
            </a>
          </div>
        </div>
        <div className="right-about">
          <div className="about-stats">
            <h4 className="stat-title">My Skills</h4>
            <div className="progress-bars">
              {[
                { skill: 'Java', percent: 80 },
                { skill: 'SpringBoot', percent: 70 },
                { skill: 'MySQL', percent: 70 },
                { skill: 'ReactJS', percent: 65 },
                { skill: 'html', percent: 80 },
                { skill: 'css', percent: 75 },
                { skill: 'Js', percent: 70 },
                { skill: 'DSA', percent: 70 }
              ].map((item, index) => (
                <div className="progress-bar" key={index}>
                  <p className="prog-title">{item.skill}</p>
                  <div className="progress-con">
                    <p className="prog-text">{item.percent}%</p>
                    <div className="progress">
                      <span className={item.skill.toLowerCase()}></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <h4 className="stat-title">My Timeline</h4>
          <div className="timeline">
            {[
              {
                duration: '2017 - 2018',
                title: 'High School',
                subtitle: '10th',
                institution: 'DehraDun Public School, Sanjay Nagar, Ghaziabad',
                score: 'Percentage: 85.6'
              },
              {
                duration: '2019-2020',
                title: 'Intermediate',
                subtitle: '12th',
                institution: 'DehraDun Public School, Sanjay Nagar, Ghaziabad',
                score: 'Percentage: 90'
              },
              {
                duration: '2020 - 2024',
                title: 'Graduate',
                subtitle: 'B.Tech | IT',
                institution: 'Ajay Kumar Garg Engineering College, Ghaziabad',
                score: 'CGPA: 7.34'
              }
            ].map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="tl-icon">
                  <FontAwesomeIcon icon="fa-solid fa-briefcase" />
                </div>
                <p className="tl-duration">{item.duration}</p>
                <h5>{item.title}<span> - {item.subtitle}</span></h5>
                <p>{item.institution}</p>
                <p>{item.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;