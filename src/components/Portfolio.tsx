import React from 'react';
import '../App.css';
import headshot from '../assets/images/headshot.png';
import brainIcon from '../assets/images/brain-icon.png';
import chartIcon from '../assets/images/chart-icon.png';
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import person3 from '../assets/images/person3.png';
import chatIcon from '../assets/images/chat-icon.png';
import gearIcon from '../assets/images/gear-icon.png';
import aiIconTwo from '../assets/images/ai-icon2.png';
import linkedinIcon from '../assets/images/linkedin-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';
import facebookIcon from '../assets/images/facebook-icon.png';
import searchIcon from '../assets/images/search-icon.png';

const Portfolio: React.FC = () => {
  return (
    <div>
   <div>
  {/* Geometric Shapes - 26 total */}
  <div className="shape shape-1 shape-square"></div>
  <div className="shape shape-2 shape-triangle"></div>
  <div className="shape shape-3 shape-square"></div>
  <div className="shape shape-4 shape-circle"></div>
  <div className="shape shape-5 shape-triangle"></div>
  <div className="shape shape-6 shape-square"></div>
  <div className="shape shape-7 shape-hexagon"></div>
  <div className="shape shape-8 shape-triangle"></div>
  <div className="shape shape-9 shape-circle"></div>
  <div className="shape shape-10 shape-square"></div>
  {/* Continue adding up to shape-26 */}
  <div className="shape shape-11 shape-triangle"></div>
  <div className="shape shape-12 shape-hexagon"></div>
  <div className="shape shape-13 shape-circle"></div>
  <div className="shape shape-14 shape-square"></div>
  <div className="shape shape-15 shape-triangle"></div>
  <div className="shape shape-16 shape-hexagon"></div>
  <div className="shape shape-17 shape-circle"></div>
  <div className="shape shape-18 shape-square"></div>
  <div className="shape shape-19 shape-triangle"></div>
  <div className="shape shape-20 shape-hexagon"></div>
  <div className="shape shape-21 shape-circle"></div>
  <div className="shape shape-22 shape-square"></div>
  <div className="shape shape-23 shape-triangle"></div>
  <div className="shape shape-24 shape-hexagon"></div>
  <div className="shape shape-25 shape-circle"></div>
  <div className="shape shape-26 shape-square"></div>

  
</div>
      {/* Header Section */}
      <header className="header">
        <div className="header-container">
          <div className="company-name">
            <span className="company-highlight">ADONIS</span> Store
          </div>
          <nav className="header-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#service">Service</a>
          </nav>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-box" />
            <img src={searchIcon} alt="Search" className="search-icon" />
          </div>
        </div>
      </header>
      <br></br>

      <div className="container">
        {/* Hero Section */}
        <div className="hero">
          <div className="hero-text">
            <h1>Hello, I'm an AI Developer</h1>
            <p className="tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod quas dignissimos explicabo. Incidunt mollitia voluptatem beatae,
               ex et veritatis itaque nemo? Voluptate accusantium nulla voluptatum nemo itaque, recusandae architecto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor autem reprehenderit deserunt impedit commodi est neque harum totam soluta dicta? Dicta accusantium reiciendis unde a repellendus aut error, quidem molestias.</p>
            <button className="cta">Contact Me</button>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="headshot-container">
              <img src={headshot} alt="Headshot" className="headshot-circle" />
              <div className="skill-tags-container">
                <div className="skill-tag">Ethical Machine Learning</div>
                <div className="skill-tag">Human-centered AI</div>
                <div className="skill-tag">Creative Automation</div>
                <div className="skill-tag">6+ months experience</div>
                <div className="skill-tag">Problem Solving Code</div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        {/* Work Process Section */}
        <div className="section">
          <h2 className="section-title">My Work Process</h2>
          <div className="work-process-container">
            <div className="work-process-left">
              <h3>How I Approach Projects</h3>
              <p>
                My process begins with understanding your unique requirements and goals. 
                I then analyze the data and create customized AI solutions that deliver 
                real business value. Every step is transparent and collaborative.
              </p>
              <button className="view-more-button">View More</button>
            </div>
            <div className="work-process-right">
              <div className="work-grid">
                <div className="work-card">
                  <div className="icon-text-container">
                    <img src={brainIcon} alt="Machine Learning Icon" className="work-icon brain-icon" />
                    <span className="work-text">Machine Learning</span>
                  </div>
                  <div className="description-box">
                    <p>Building intelligent models to solve complex problems. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quod nulla architecto iste natus explicabo. Voluptatibus, perspiciatis necessitatibus! Repellat, possimus! Voluptatibus id nulla doloremque, sint ex exercitationem et tenetur vero!</p>
                  </div>
                </div>
                <div className="work-card">
                  <div className="icon-text-container">
                    <img src={chartIcon} alt="Data Analysis Icon" className="work-icon chart-icon" />
                    <span className="work-text">Data Analysis</span>
                  </div>
                  <div className="description-box">
                    <p>Extracting insights from data to drive decisions. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint libero aliquam velit quidem esse alias nihil et modi nisi nemo a, consequuntur possimus accusamus placeat non, commodi similique corporis illum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-container">
          <div className="section">
            <h2 className="section-title">Services I Offer</h2>
            <p className="service-description" style={{ textAlign: 'center', marginBottom: '30px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              I provide cutting-edge AI solutions tailored to your business needs. From custom model development to intelligent automation, my services help you leverage artificial intelligence to gain competitive advantage and streamline operations.
            </p>
            <div className="service-grid">
              <div className="service-card">
                <img src={aiIconTwo} alt="AI Icon" className="service-icon" />
                <h3>AI Model Training</h3>
                <p>Custom machine learning models trained on your specific data to solve your unique business challenges with high accuracy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum, quos debitis explicabo numquam totam inventore velit accusamus rem ullam cumque ea officia deleniti illo unde dicta excepturi dolor molestiae!</p>
              </div>
              <div className="service-card">
                <img src={chatIcon} alt="Chat Icon" className="service-icon" />
                <h3>AI Chatbots</h3>
                <p>Intelligent conversational agents that provide 24/7 customer support, lead generation, and personalized user experiences. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad atque voluptas sed ratione, facilis quos, exercitationem dolorem similique aliquid in maiores temporibus eum tenetur alias repudiandae et placeat voluptate.</p>
              </div>
              <div className="service-card">
                <img src={gearIcon} alt="Gear Icon" className="service-icon" />
                <h3>Automation Tools</h3>
                <p>AI-powered automation solutions that streamline repetitive tasks, reduce errors, and increase operational efficiency. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam modi inventore nulla fugit unde dicta facere reprehenderit nesciunt, aspernatur commodi recusandae amet, odio sit eum ad voluptatibus cum repudiandae libero!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
<div className="section">
  <h2 className="section-title">Testimonials</h2>
  <div className="testimonial-section">
    <div className="testimonial-images">
      <div className="testimonial-image-container">
        <img src={person1} alt="Client 1" className="testimonial-image" />
      </div>
      <div className="testimonial-image-container">
        <img src={person2} alt="Client 2" className="testimonial-image" />
      </div>
      <div className="testimonial-image-container">
        <img src={person3} alt="Client 3" className="testimonial-image" />
      </div>
    </div>
    <div className="testimonial-quote">
      <span className="quote-mark quote-top">"</span>
      <p className="testimonial-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur ipsam perspiciatis, possimus quae nisi labore fuga harum tempore libero est maxime consequuntur iure provident molestias nam! Mollitia, eligendi nostrum!
      </p>
      <span className="quote-mark quote-bottom">"</span>
    </div>
  </div>
</div>

        {/* Footer */}
        <div className="footer">
          <span className="logo">Okechukwu Design</span>
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="copyright">© 2025 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;