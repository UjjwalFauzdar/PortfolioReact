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
            I'm a 21yr old currently pursuing my graduate degree in Btech with Information and technology
            from Ajay Kumar Garg Engineering College. I have good knowledge of
            Java, SpringBoot, HTML, CSS, ReactJs, C/C++. I am good at problem solving and have zeal to learn and grow. 
            I am looking for opportunities in field of Web Development.
          </p>
          <div className="btn-con">
            <a 
              href="/Ujjwal's_Resume.pdf" 
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
              <div className="progress-bar">
                <p className="prog-title">html</p>
                <div className="progress-con">
                  <p className="prog-text">80%</p>
                  <div className="progress">
                    <span className="html"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">css</p>
                <div className="progress-con">
                  <p className="prog-text">75%</p>
                  <div className="progress">
                    <span className="css"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">javascript</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="js"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">ReactJS</p>
                <div className="progress-con">
                  <p className="prog-text">65%</p>
                  <div className="progress">
                    <span className="react"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Java</p>
                <div className="progress-con">
                  <p className="prog-text">80%</p>
                  <div className="progress">
                    <span className="java"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">SpringBoot</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="springboot"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h4 className="stat-title">My Timeline</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon="fa-solid fa-briefcase" />
              </div>
              <p className="tl-duration">2017 - 2018</p>
              <h5>High School<span> - 10th</span></h5>
              <p>DehraDun Public School, Sanjay Nagar, Ghaziabad</p>
              <p>Percentage: 85.6</p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon="fa-solid fa-briefcase" />
              </div>
              <p className="tl-duration">2019-2020</p>
              <h5>Intermediate<span> - 12th</span></h5>
              <p>DehraDun Public School, Sanjay Nagar, Ghaziabad</p>
              <p>Percentage: 90</p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon="fa-solid fa-briefcase" />
              </div>
              <p className="tl-duration">2020 - 2024</p>
              <h5>Graduate<span> - B.tech.|IT</span></h5>
              <p>Ajay Kumar Garg Engineering College, Ghaziabad</p>
              <p>CGPA: 7.34</p>
            </div>
            {/* <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon="fa-solid fa-briefcase" />
              </div> */}
              {/* <p className="tl-duration">July,2023 - August,2023</p> */}
              {/* <h5>Web Developer Intern<span> - Bharat Intern</span></h5>
              <p>
                I was provided with an educational opportunity to learn and develop
                new skills. It provided me a hands-on learning experience, where I had the chance to apply
                my theoretical knowledge to real-world scenarios.
                I was provided with numerous opportunities to refine and showcase
                my skills, enabling me to gain a deeper understanding of the industry
                and its workings.
              </p> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;