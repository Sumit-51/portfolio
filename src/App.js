import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Mobile navigation toggle functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
      });
    }

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });

    // Clean up event listeners
    return () => {
      if (navToggle && navMenu) {
        navToggle.removeEventListener('click', () => {});
      }
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="App">
      {/* Loading Screen - Reduced Time */}
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <div className="logo-rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
            <div className="loading-text">Loading Portfolio</div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="bg-elements">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="grid-lines">
          <div className="grid-line horizontal"></div>
          <div className="grid-line horizontal"></div>
          <div className="grid-line vertical"></div>
          <div className="grid-line vertical"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-container">
              <span className="logo-text">SUMIT</span>
            </div>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link"><span>01.</span> Home</a></li>
            <li><a href="#about" className="nav-link"><span>02.</span> About</a></li>
            <li><a href="#projects" className="nav-link"><span>03.</span> Projects</a></li>
            <li><a href="#contact" className="nav-link"><span>04.</span> Contact</a></li>
          </ul>
          <div className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="matrix-rain">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="matrix-column" style={{left: `${i * 2}%`, animationDelay: `${i * 0.1}s`}}>
                <div className="matrix-char">01101010</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-intro">
              <div className="intro-text">
                <span className="greeting-text">Hello World, I'm</span>
              </div>
            </div>
            
            <div className="hero-name-container">
              <h1 className="hero-name">
                <span className="name-line">SUMIT</span>
                <span className="name-line">PAUDEL</span>
              </h1>
            </div>

            <div className="hero-title">
  <div className="title-container">
    <div className="typing-title">
      <span className="typing-text">Computer Science Student & App Developer</span>
      <span className="cursor-blink">|</span>
    </div>
  </div>
  <div className="title-subtitle">Student • Developer • Designer</div>
</div>


            <div className="hero-description">
              <p className="desc-line">BSc Computer Science student at Kathmandu University</p>
              <p className="desc-line">with passion for mobile app development and Qt frameworks.</p>
              <p className="desc-line">Currently building innovative solutions from Surkhet, Nepal.</p>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span className="btn-text">View My Projects</span>
                <div className="btn-particles">
                  <span className="particle"></span>
                  <span className="particle"></span>
                  <span className="particle"></span>
                </div>
                <div className="btn-wave"></div>
              </a>
              <button className="btn btn-secondary">
                <span className="btn-text">Download CV</span>
                <div className="btn-border-animation"></div>
              </button>
            </div>

            <div className="hero-social">
              <div className="social-item">
                <a 
                  href="https://github.com/Sumit-51" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>GitHub</span>
                  <div className="social-hover"></div>
                </a>
              </div>
              <div className="social-item">
                <a 
                  href="https://www.instagram.com/_sumit404x/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>Instagram</span>
                  <div className="social-hover"></div>
                </a>
              </div>
              <div className="social-item">
                <a 
                  href="https://www.linkedin.com/in/sumit-paudel-762ba2318/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>LinkedIn</span>
                  <div className="social-hover"></div>
                </a>
              </div>
              <div className="social-item">
                <a 
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXmVkSHLwgQJcZZLpskgxSzVmFLxdmHNcPFtWcRLVRvSlrfDclMwRPkHqWTWrFjJhvLjGX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>Email</span>
                  <div className="social-hover"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-visual">
              <div className="profile-card">
                <div className="card-inner">
                  <div className="card-face front">
                    <div className="profile-container">
                      <div className="profile-image-container">
                        <div className="profile-image">
                            <img 
  src="bg.jpg" 
  alt="Sumit Paudel" 
  className="profile-photo"
/>

                          <div className="profile-border"></div>
                          <div className="profile-glow"></div>
                        </div>
                      </div>
                      <div className="profile-info">
                        <div className="info-line">
                          <span className="label">Status:</span>
                          <span className="value online">Student</span>
                        </div>
                        <div className="info-line">
                          <span className="label">Location:</span>
                          <span className="value">Surkhet, Nepal</span>
                        </div>
                        <div className="info-line">
                          <span className="label">University:</span>
                          <span className="value">KU</span>
                        </div>
                        <div className="info-line">
                          <span className="label">Focus:</span>
                          <span className="value">App Development</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-elements">
                <div className="floating-icon icon-1">⚡</div>
                <div className="floating-icon icon-2">🚀</div>
                <div className="floating-icon icon-3">💡</div>
                <div className="floating-icon icon-4">🔥</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-text">SCROLL DOWN</div>
          <div className="scroll-line"></div>
          <div className="scroll-wheel">
            <div className="wheel-dot"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-bg">
          <div className="neon-grid">
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
          </div>
        </div>

        <div className="container">
          <div className="section-header">
            <div className="section-number">02</div>
            <h2 className="section-title">
              <span className="title-main">About Me</span>
              <span className="title-sub">Student & Developer</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-left">
              <div className="about-text">
                <p className="text-reveal">I'm Sumit Paudel, a passionate Computer Science student at Kathmandu University with a strong interest in mobile app development and desktop applications. I specialize in Qt framework and have hands-on experience building real-world applications.</p>
                <p className="text-reveal">Currently pursuing my BSc in Computer Science, I enjoy creating innovative solutions and turning ideas into functional applications. My recent project, ByteBite, is a food delivery app that showcases my skills in mobile development.</p>
              </div>

              <div className="education-timeline">
                <div className="timeline-item">
                  <div className="timeline-date">2024</div>
                  <div className="timeline-content">
                    <h4>BSc Computer Science</h4>
                    <p>Currently studying at Kathmandu University</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2023</div>
                  <div className="timeline-content">
                    <h4>ByteBite Food Delivery App</h4>
                    <p>Developed Android app with admin panel using Qt</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2022</div>
                  <div className="timeline-content">
                    <h4>Started Programming Journey</h4>
                    <p>Began learning Qt and mobile development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-right">
              <div className="skills-container">
                <div className="skill-category">
                  <h4>Mobile Development</h4>
                  <div className="skill-items">
                    <div className="skill-pill">Qt Framework</div>
                    <div className="skill-pill">Android Development</div>
                    <div className="skill-pill">Mobile UI/UX</div>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Desktop Applications</h4>
                  <div className="skill-items">
                    <div className="skill-pill">Qt Desktop</div>
                    <div className="skill-pill">Cross-platform Apps</div>
                    <div className="skill-pill">GUI Development</div>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Design & Tools</h4>
                  <div className="skill-items">
                    <div className="skill-pill">Canva Design</div>
                    <div className="skill-pill">UI/UX Design</div>
                    <div className="skill-pill">Graphic Design</div>
                  </div>
                </div>
              </div>

              <div className="stats-display">
                <div className="stat-item">
                  <div className="stat-number" data-target="2">0</div>
                  <div className="stat-label">Major Projects</div>
                  <div className="stat-bar"></div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-target="3">0</div>
                  <div className="stat-label">Years Learning</div>
                  <div className="stat-bar"></div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-target="1">0</div>
                  <div className="stat-label">University</div>
                  <div className="stat-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <div className="section-number">03</div>
            <h2 className="section-title">
              <span className="title-main">Featured Projects</span>
              <span className="title-sub">My Development Journey</span>
            </h2>
          </div>

          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-visual">
                <div className="project-mockup">
                  <div className="mockup-screen">
                    <div className="screen-header">
                      <div className="app-icon">🍔</div>
                      <span className="app-name">ByteBite</span>
                    </div>
                    <div className="screen-content">
                      <div className="food-card">
                        <div className="food-image"></div>
                        <div className="food-info">
                          <div className="food-title"></div>
                          <div className="food-price"></div>
                        </div>
                      </div>
                      <div className="food-card">
                        <div className="food-image"></div>
                        <div className="food-info">
                          <div className="food-title"></div>
                          <div className="food-price"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mockup-glow"></div>
                </div>
                <div className="project-overlay">
                  <div className="overlay-content">
                    <button className="project-btn">
                      <span>View Project</span>
                      <div className="btn-arrow">→</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-type">Featured Project</span>
                  <span className="project-year">2024</span>
                </div>
                <h3 className="project-title">ByteBite Food Delivery App</h3>
                <p className="project-description">A complete food delivery solution with Android app and admin panel. Built using Qt framework with modern UI/UX design and full functionality for food ordering and restaurant management.</p>
                <div className="project-tech">
                  <span>Qt Framework</span>
                  <span>Android</span>
                  <span>Mobile UI</span>
                  <span>Admin Panel</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-visual">
                <div className="project-mockup">
                  <div className="mockup-desktop">
                    <div className="desktop-header">
                      <div className="window-controls">
                        <span className="control red"></span>
                        <span className="control yellow"></span>
                        <span className="control green"></span>
                      </div>
                      <span className="window-title">Qt Desktop App</span>
                    </div>
                    <div className="desktop-content">
                      <div className="sidebar">
                        <div className="menu-item active"></div>
                        <div className="menu-item"></div>
                        <div className="menu-item"></div>
                      </div>
                      <div className="main-area">
                        <div className="content-header"></div>
                        <div className="content-grid">
                          <div className="grid-box"></div>
                          <div className="grid-box"></div>
                          <div className="grid-box"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mockup-glow"></div>
                </div>
                <div className="project-overlay">
                  <div className="overlay-content">
                    <button className="project-btn">
                      <span>View Project</span>
                      <div className="btn-arrow">→</div>
                    </button>
                    <button className="project-btn">
                      <span>Source Code</span>
                      <div className="btn-arrow">↗</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-type">Desktop Application</span>
                  <span className="project-year">2023</span>
                </div>
                <h3 className="project-title">Qt Desktop Application</h3>
                <p className="project-description">Cross-platform desktop application built with Qt framework featuring modern interface design and robust functionality.</p>
                <div className="project-tech">
                  <span>Qt Framework</span>
                  <span>C++</span>
                  <span>Cross-platform</span>
                  <span>GUI</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-visual">
                <div className="project-mockup">
                  <div className="mockup-design">
                    <div className="design-header">
                      <span className="design-logo">Canva</span>
                      <div className="design-tools">
                        <span className="tool"></span>
                        <span className="tool"></span>
                        <span className="tool"></span>
                      </div>
                    </div>
                    <div className="design-canvas">
                      <div className="design-element element-1"></div>
                      <div className="design-element element-2"></div>
                      <div className="design-element element-3"></div>
                      <div className="design-text">
                        <div className="text-line long"></div>
                        <div className="text-line short"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mockup-glow"></div>
                </div>
                <div className="project-overlay">
                  <div className="overlay-content">
                    <button className="project-btn">
                      <span>View Designs</span>
                      <div className="btn-arrow">→</div>
                    </button>
                    <button className="project-btn">
                      <span>Portfolio</span>
                      <div className="btn-arrow">↗</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-type">Design Work</span>
                  <span className="project-year">2023-2024</span>
                </div>
                <h3 className="project-title">Graphic Design Portfolio</h3>
                <p className="project-description">Collection of graphic design work created using Canva, including app UI designs, promotional materials, and brand identity elements.</p>
                <div className="project-tech">
                  <span>Canva</span>
                  <span>UI/UX Design</span>
                  <span>Brand Identity</span>
                  <span>Graphics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-bg">
          <div className="cosmic-dust">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="dust-particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}></div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="section-header">
            <div className="section-number">04</div>
            <h2 className="section-title">
              <span className="title-main">Get In Touch</span>
              <span className="title-sub">Let's Connect & Collaborate</span>
            </h2>
          </div>

          <div className="contact-content">
            <div className="contact-form">
              <form className="form-container">
                <div className="form-row">
                  <div className="input-group">
                    <input type="text" placeholder="Your Name" required />
                    <div className="input-highlight"></div>
                    <div className="input-particles">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                  <div className="input-group">
                    <input type="email" placeholder="Your Email Address" required />
                    <div className="input-highlight"></div>
                    <div className="input-particles">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Subject" required />
                  <div className="input-highlight"></div>
                  <div className="input-particles">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <div className="input-group">
                  <textarea placeholder="Your Message" rows="8" required></textarea>
                  <div className="input-highlight"></div>
                  <div className="input-particles">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <button type="submit" className="submit-btn">
                  <span className="btn-text">Send Message</span>
                  <div className="btn-rocket">🚀</div>
                  <div className="btn-trail"></div>
                </button>
              </form>
            </div>

            <div className="contact-info">
              <div className="info-card">
                <div className="card-icon">📧</div>
                <div className="card-content">
                  <h4>Email</h4>
                  <p>paudelsumit51@gmail.com</p>
                  <div className="card-glow"></div>
                </div>
              </div>
              <div className="info-card">
                <div className="card-icon">📱</div>
                <div className="card-content">
                  <h4>Phone</h4>
                  <p>+977-9848043977</p>
                  <div className="card-glow"></div>
                </div>
              </div>
              <div className="info-card">
                <div className="card-icon">📍</div>
                <div className="card-content">
                  <h4>Location</h4>
                  <p>Surkhet, Nepal</p>
                  <div className="card-glow"></div>
                </div>
              </div>
              <div className="info-card">
                <div className="card-icon">🎓</div>
                <div className="card-content">
                  <h4>University</h4>
                  <p>Kathmandu University</p>
                  <div className="card-glow"></div>
                </div>
              </div>

              <div className="availability-status">
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Available for projects & internships</span>
                </div>
                <div className="status-text">
                  Currently seeking opportunities in mobile app development and Qt projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-bg">
          <div className="neural-network">
            <div className="node"></div>
            <div className="node"></div>
            <div className="node"></div>
            <div className="connection"></div>
            <div className="connection"></div>
          </div>
        </div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; 2024 Sumit Paudel. Built with passion from Nepal.</p>
            </div>
            <div className="footer-right">
              <div className="footer-social">
                <a 
                  href="https://github.com/Sumit-51" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.instagram.com/_sumit404x/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.linkedin.com/in/sumit-paudel-762ba2318/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXmVkSHLwgQJcZZLpskgxSzVmFLxdmHNcPFtWcRLVRvSlrfDclMwRPkHqWTWrFjJhvLjGX" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
