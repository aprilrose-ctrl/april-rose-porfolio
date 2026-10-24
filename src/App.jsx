
import { useState } from 'react'
import './App.css'
import profile from './assets/APRILROSe.png'

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  return (

    <>
      <section className="hero">
        <nav className="navbar">
          <a href="#" className="logo">ARJ.</a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <img
            src={profile}
            alt="April Rose Jorquia"
            className="profile-picture"
          />
          <p className="eyebrow">ASPIRING WEB DEVELOPER</p>

          <h1>
            Hi, I'm April Rose
            <br />
            <span>Jorquia.</span>
          </h1>

          <p className="hero-description">
            I am an aspiring web developer passionate about
            creating beautiful, responsive, and user-friendly
            websites. Welcome to my personal portfolio!
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-decoration">ARJ</div>
      </section>


      <section className="section about" id="about">
        <div className="about-heading">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>
            A Little About <span>Me</span>
          </h2>
          <p className="about-subtitle">
            A little about my journey, goals, and passion for web development.
          </p>
        </div>

        {/* WHO I AM + MY GOALS */}
        <div className="about-layout">
          <div className="about-text">
            <div className="about-label">
              <span className="about-label-icon">
                <icon name="user-round" size="lg" />
              </span>
              <span>WHO I AM</span>
            </div>

            <p className="about-intro">
              Hello! I'm <strong>April Rose Jorquia</strong>,
              an aspiring web developer who enjoys creating
              beautiful and user-friendly websites.
            </p>

            <p>
              I'm currently developing my skills in web development
              and exploring technologies that help bring creative
              ideas to life. I enjoy learning new things and turning
              ideas into meaningful digital experiences.
            </p>

            <p>
              My goal is to continue improving my technical skills,
              gain practical experience, and build websites that
              are both useful and enjoyable to use.
            </p>

            <a href="#contact" className="btn primary about-btn">
              Let's Connect <span>↗</span>
            </a>
          </div>

          <div className="about-highlight">
            <div className="highlight-icon">
              <icon name="target" size="xl" />
            </div>

            <p className="eyebrow">MY GOALS</p>
            <h3>Growing One Step at a Time</h3>

            <p>
              I'm working toward becoming a skilled web developer
              by learning new technologies, practicing through
              projects, and continuously improving my abilities.
            </p>

            <div className="goal-divider"></div>

            <div className="goal-item">
              <icon name="check-circle-2" size="lg" />
              <span>Keep learning and improving</span>
            </div>

            <div className="goal-item">
              <icon name="check-circle-2" size="lg" />
              <span>Build useful digital experiences</span>
            </div>

            <div className="goal-item">
              <icon name="check-circle-2" size="lg" />
              <span>Gain practical development experience</span>
            </div>
          </div>
        </div>

        {/* PERSONAL HIGHLIGHTS */}
        <div className="about-highlights">
          <div className="about-mini-card">
            <div className="mini-icon">
              <icon name="book-open" size="xl" />
            </div>
            <h3>Always Learning</h3>
            <p>
              Exploring new tools and technologies to expand
              my knowledge and development skills.
            </p>
          </div>

          <div className="about-mini-card">
            <div className="mini-icon">
              <icon name="lightbulb" size="xl" />
            </div>
            <h3>Creative Thinking</h3>
            <p>
              Enjoying new ideas and finding thoughtful ways
              to make websites attractive and easy to use.
            </p>
          </div>

          <div className="about-mini-card">
            <div className="mini-icon">
              <icon name="trending-up" size="xl" />
            </div>
            <h3>Goal-Oriented</h3>
            <p>
              Staying committed to my goals and taking small
              steps toward becoming a better developer.
            </p>
          </div>
        </div>

        {/* SKILLS AND TECHNOLOGIES */}

        <div className="about-skills">
          <p className="eyebrow">MY TECH TOOLKIT</p>

          <h3 className="skills-heading">
            Skills I'm <span>Building</span>
          </h3>

          <div className="skill-card-grid">
            <div className="skill-card skill-html">
              <div className="skill-card-top">
                <h4>HTML</h4>
                <span>01</span>
              </div>
              <div className="skill-accent"></div>
              <p>Web page structure</p>
              <small>MARKUP</small>
            </div>

            <div className="skill-card skill-css">
              <div className="skill-card-top">
                <h4>CSS</h4>
                <span>02</span>
              </div>
              <div className="skill-accent"></div>
              <p>Visual styling and layouts</p>
              <small>DESIGN</small>
            </div>

            <div className="skill-card skill-js">
              <div className="skill-card-top">
                <h4>JavaScript</h4>
                <span>03</span>
              </div>
              <div className="skill-accent"></div>
              <p>Interactive web experiences</p>
              <small>LOGIC</small>
            </div>

            <div className="skill-card skill-react">
              <div className="skill-card-top">
                <h4>React</h4>
                <span>04</span>
              </div>
              <div className="skill-accent"></div>
              <p>Reusable UI components</p>
              <small>FRONTEND</small>
            </div>

            <div className="skill-card skill-git">
              <div className="skill-card-top">
                <h4>Git & GitHub</h4>
                <span>05</span>
              </div>
              <div className="skill-accent"></div>
              <p>Version control workflow</p>
              <small>DEVELOPMENT</small>
            </div>

            <div className="skill-card skill-responsive">
              <div className="skill-card-top">
                <h4>Responsive UI</h4>
                <span>06</span>
              </div>
              <div className="skill-accent"></div>
              <p>Layouts for different screens</p>
              <small>LAYOUT</small>
            </div>
          </div>
        </div>


        {/* WHAT DRIVES ME */}
        <div className="about-motivation">
          <div className="motivation-icon">
            <icon name="sparkles" size="2xl" />
          </div>

          <div>
            <p className="eyebrow">WHAT DRIVES ME</p>
            <h3>Curiosity, Creativity, and Continuous Growth</h3>
            <p>
              I believe that every project is a chance to learn
              something new. I'm motivated by the opportunity to
              turn ideas into digital experiences and keep growing
              through every challenge.
            </p>
          </div>
        </div>
      </section>

      <section className="section achievements" id="achievements">
        <p className="eyebrow">MY MILESTONES</p>

        <h2>
          Achievements & <span>Certificates</span>
        </h2>

        <p className="achievement-description">
          Every certificate represents a step in my learning
          journey and my commitment to improving my skills.
        </p>

        <div className="certificate-grid">
          {[
            "cert1.jpg",
            "cert2.jpg",
            "cert3.jpg",
            "cert4.jpg",
            "cert5.jpg",
            "cert6.jpg",
            "cert7.jpg",
          ].map((certificate, index) => (
            <button
              type="button"
              className="certificate-card"
              key={certificate}
              onClick={() => setSelectedCertificate(certificate)}
              aria-label={`View certificate ${index + 1}`}
            >
              <img
                src={`/Certificates/${certificate}`}
                alt={`Certificate ${index + 1}`}
              />

              <div className="certificate-info">
                <h3>Certificate {index + 1}</h3>
                <p>Learning & Achievement</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <button
            type="button"
            className="certificate-close"
            onClick={() => setSelectedCertificate(null)}
            aria-label="Close certificate"
          >
            × Close
          </button>

          <img
            src={`/Certificates/${selectedCertificate}`}
            alt="Selected certificate"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
      <section className="section projects" id="projects">
        <p className="eyebrow">MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>


        <div className="project-grid">

          {/* PROJECT 1: PORTFOLIO */}
          <article className="project-card">
            <div className="project-preview">
              <span>01</span>
              <span className="preview-symbol">&lt;/&gt;</span>
            </div>

            <div className="project-info">
              <h3>Portfolio Website</h3>
              <p>
                A personal website showcasing my skills and projects.
              </p>
              <p className="tech">React · CSS</p>
              <span className="github-link">Currently in Progress</span>
            </div>
          </article>

          {/* PROJECT 2: WORD COUNTER */}

          <article className="project-card">
            <div className="project-number">02</div>

            <div className="project-content">
              <h3>Word Counter</h3>

              <p>
                A web application that counts the words in a text input.
                It helps users quickly check the number of words in their
                written content.
              </p>

              <p className="project-tech">
                React · JavaScript · CSS
              </p>

              <a
                className="project-link"
                href="https://github.com/aprilrose-ctrl/word-counter"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub ↗
              </a>
            </div>
          </article>


          {/* PROJECT 3: QUOTES API */}
          <article className="project-card">
            <a
              href="https://github.com/aprilrose-ctrl/qoutes-api"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <div className="project-preview">
                <span>03</span>
                <span className="preview-symbol">{'{ }'}</span>
              </div>

              <div className="project-info">
                <h3>Quotes API</h3>
                <p>
                  An API project for retrieving and managing quotes.
                </p>
                <p className="tech">Node.js · Express</p>
                <span className="github-link">View on GitHub ↗</span>
              </div>
            </a>
          </article>

        </div>

      </section>


      <section className="section contact" id="contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Get In <span>Touch</span></h2>

        <p className="contact-description">
          Have a question, project, or opportunity in mind?
          Feel free to reach out. I'd love to connect with you!
        </p>

        <div className="contact-grid">
          <a
            href="aprilrosejorquia@g.cjc.edu.ph"
            className="contact-card"
          >
            <span className="contact-icon email-icon">@</span>
            <span className="contact-details">
              <strong>Email Me</strong>
              <small>Send me an email</small>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://www.facebook.com/ar.jorquia.4194?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon facebook-icon">f</span>
            <span className="contact-details">
              <strong>Facebook</strong>
              <small>Connect with me</small>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://www.instagram.com/its_pyangs?cplk=MWU5cGp0YjF5YW12Yg=="
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon instagram-icon">◎</span>
            <span className="contact-details">
              <strong>Instagram</strong>
              <small>Follow my journey</small>
            </span>
            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://t.me/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon telegram-icon">➤</span>
            <span className="contact-details">
              <strong>Telegram</strong>
              <small>Message me</small>
            </span>
            <span className="contact-arrow">↗</span>
          </a>
        </div>
      </section>


      <footer className="footer">
        <p>© 2026 April Rose Jorquia</p>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App

import {
  UserRound,
  Target,
  CheckCircle2,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Code2,
  Palette,
  FileCode2,
  Atom,
  GitBranch,
  MonitorSmartphone,
  Sparkles,
} from 'lucide-react'