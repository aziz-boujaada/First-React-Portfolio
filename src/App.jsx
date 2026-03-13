//Import libraries
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HashRouter as Router,
} from "react-router-dom";
import {
  faExternalLinkAlt,
  faEnvelope,
  faPhone,
  faLocation,
  faPaperPlane,
  faArrowUp,
  faDownload,
  faBars,
  faXmark,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faReact,
  faJs,
  faPhp,
  faLaravel,
  faDocker,
  faJira,
  faFigma,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

import { useState, useEffect } from "react";

// Header Components
function NavList() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Project", "Contact"];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <h3 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: 'pointer' }}>
          BOUJAADA<span> AZIZ</span>
        </h3>
      </div>

      {/* Desktop Nav */}
      <nav className="navList desktop-only">
        <ul>
          {navItems.map((listItem, index) => (
            <li key={index}>
              <a href={`#${listItem.toLowerCase()}`}>{listItem}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Trigger */}
      <div className="mobile-only menu-trigger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} size="lg" />
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <ul className="mobile-nav-list">
              {navItems.map((listItem, index) => (
                <li key={index} onClick={() => setMobileMenuOpen(false)}>
                  <a href={`#${listItem.toLowerCase()}`}>{listItem}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Social Links
const SocialLinks = [
  {
    name: "LinkedIn",
    icon: faLinkedin,
    link: "https://linkedin.com/in/aziz-boujaada",
    color: "#0077b5"
  },
  {
    name: "GitHub",
    icon: faGithub,
    link: "https://github.com/aziz-boujaada/",
    color: "#333"
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/boujaada__azi_ze/",
    color: "#e1306c"
  },
];

// Hero Section
function Hero() {
  return (
    <section id="home" className="HeroSection">
      <motion.div
        className="Home_description"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Hello, I'm</h2>
        <h1>AZIZ BOUJAADA</h1>
        <h3>Full-Stack Web Developer</h3>
        <p>
          I'm a dedicated full-stack developer focused on creating responsive,
          scalable, and high-performance web applications. I specialize in
          JavaScript, React, PHP/Laravel, and SQL to build innovative digital solutions.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '3rem', alignItems: 'center' }}>
          <a href="/aziz-boujaada-cv.pdf" download className="btn btn-primary">
            <FontAwesomeIcon icon={faDownload} /> Download CV
          </a>
          <div className="Hero_SocialIcons">
            {SocialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link glass-panel"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={item.name}
              >
                <FontAwesomeIcon icon={item.icon} className="hero-social-icon" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="MyImage"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="image-glow-container">
          <img src="mypectuer.png" alt="Aziz Boujaada" />
        </div>
      </motion.div>
    </section>
  );
}

// Education only (Removed Experience)
function Education() {
  const education = [
    {
      title: "École YouCode (UM6P)",
      desc: "Full-Stack Web Development - Intensive coding bootcamp focused on real-world projects and modern technologies.",
      date: "2025 – Present"
    },
    {
      title: "Faculté des Sciences Humaines",
      desc: "Université Cadi Ayyad - Bachelor's studies providing a strong broad educational foundation.",
      date: "2022 – 2024"
    }
  ];

  return (
    <section id="about">
      <h2 className="Section_title">My Education</h2>
      <div className="education_container">
        <div className="timeline education_timeline">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="timeline-item glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <span className="date">{edu.date}</span>
              <h3 style={{ fontSize: '1.4rem', marginTop: '0.5rem', color: 'var(--secondary)' }}>{edu.title}</h3>
              <p style={{ marginTop: '0.8rem', lineHeight: '1.6' }}>{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Skills() {
  const skillCategories = [
    {
      title: "Front-end",
      skills: [
        { name: "HTML 5", icon: faHtml5 },
        { name: "CSS 3", icon: faCss3Alt },
        { name: "JavaScript", icon: faJs },
        { name: "React JS", icon: faReact },
        { name: "Tailwind CSS", icon: faCode },
      ]
    },
    {
      title: "Back-end",
      skills: [
        { name: "PHP", icon: faPhp },
        { name: "LARAVEL", icon: faLaravel },
        { name: "MySQL", icon: faCode },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git / GitHub", icon: faGitAlt },
        { name: "Docker", icon: faDocker },
        { name: "Jira", icon: faJira },
        { name: "Figma", icon: faFigma },
      ]
    }
  ];

  return (
    <section id="skills">
      <h2 className="Section_title">Skills & Expertise</h2>
      <div className="skills_grid">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="glass-panel skill_category_card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="category_title">{category.title}</h3>
            <div className="skills_list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill_item">
                  <div className="skill_icon_wrapper">
                    <FontAwesomeIcon icon={skill.icon} />
                  </div>
                  <h4 className="skill_name">{skill.name}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Projects
function Projects() {
  const projectList = [
    {
      name: "MakeCV – CV Generator",
      desc: "A multi-step form application for creating, validating, and exporting professional CVs with custom themes.",
      img: "cv_output-1_1.png",
      link: "https://github.com/aziz-boujaada/",
      tech: ["HTML", "CSS", "Tailwind", "JavaScript"]
    },
    {
      name: "Atlas View Hotel",
      desc: "A premium hotel website featuring room management, reservation systems and modern navigation.",
      img: "ATLAS-View-Hotel.png",
      link: "https://github.com/aziz-boujaada/hotel-website.git",
      tech: ["React.js", "Tailwind CSS", "PHP", "SQL"]
    },
    {
      name: "Gestion du Personnel",
      desc: "Enterprise-grade application for managing and organizing large-scale personnel databases efficiently.",
      img: "mypectuer.png",
      link: "https://github.com/aziz-boujaada/",
      tech: ["HTML", "CSS", "Tailwind", "JavaScript"]
    },
    {
      name: "Weather App",
      desc: "Real-time weather data visualization worldwide using OpenWeather API with interactive features.",
      img: "WeatherAPP.png",
      link: "https://github.com/aziz-boujaada/Weather-app.git",
      tech: ["HTML5", "CSS3", "JavaScript", "API"]
    }
  ];

  return (
    <section id="project">
      <h2 className="Section_title">Featured Projects</h2>
      <div className="projects-cards">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            className="project_card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="project_img_container">
              <img src={project.img} alt={project.name} onError={(e) => { e.target.src = 'mypectuer.png' }} />
            </div>
            <div className="project_info">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.name}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{project.desc}</p>
              <div className="project_technologies">
                {project.tech.map((t, ti) => (
                  <span key={ti} className="tech-tag">{t}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="github-link">
                View GitHub <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Contact
function Contact() {
  return (
    <section id="contact">
      <h2 className="Section_title">Get In Touch</h2>
      <div className="contact_container">
        <div className="contact_information">
          <div className="contact-item">
            <div className="contact-icon-box glass-panel">
              <FontAwesomeIcon icon={faEnvelope} color="var(--primary)" size="lg" />
            </div>
            <div>
              <p className="contact-label">Email</p>
              <p className="contact-value">boujaadaaziz2911@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-box glass-panel">
              <FontAwesomeIcon icon={faPhone} color="var(--primary)" size="lg" />
            </div>
            <div>
              <p className="contact-label">Phone</p>
              <p className="contact-value">+212 674490454</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-box glass-panel">
              <FontAwesomeIcon icon={faLocation} color="var(--primary)" size="lg" />
            </div>
            <div>
              <p className="contact-label">Location</p>
              <p className="contact-value">Marrakech, Morocco</p>
            </div>
          </div>
        </div>
        <div className="contact_form_wrapper">
          <form className="glass-panel contact_form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Main App
export default function App() {
  return (
    <Router>
      <NavList />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer_container glass-panel">
        <div className="footer_content">
          <div className="footer_logo">
            <h3>BOUJAADA<span> AZIZ</span></h3>
            <p>Full-Stack Web Developer passionate about building high-quality web applications.</p>
          </div>
          <div className="footer_links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#project">Projects</a></li>
            </ul>
          </div>
          <div className="footer_social">
            <h4>Follow Me</h4>
            <div className="footer_social_icons">
              {SocialLinks.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noreferrer" title={item.name}>
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>© 2025 Aziz Boujaada. All Rights Reserved.</p>
          <p>Built with React, Framer Motion & CSS Glassmorphism.</p>
        </div>
      </footer>
      <ScrollToTop />
    </Router>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    visible && (
      <div className="scrollTop_btn">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    )
  );
}
