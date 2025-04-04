//Import libraries
import { easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashRouter as Router, Routes, Route ,Link , useLocation } from "react-router-dom";
import {
  faCode,
  faExternalLinkAlt,
  faLink,
  faEnvelope,
  faPhone,
  faLocation,
  faPaperPlane,
  faXmark,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faDiscord,
  faInstagram,
  faHtml5,
  faCss3,
  faJs,
  faGitSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import { useState, useEffect } from "react";

//Header Components


// --Navigation list component--
function NavList() {
  const [NavVisible , setNavVisible] = useState(false);
  useEffect (()=>{
    const handleClickOutSide =(event) =>{

      if(NavVisible && !event.target.closest(".navList"))
        setNavVisible(false)
    }
    document.addEventListener("click" ,handleClickOutSide)
    return () =>{
      document.removeEventListener("click",handleClickOutSide)
    }
  },[NavVisible])

  return (
    <>
        <FontAwesomeIcon icon={faBars} size="2x"  className=" openNav-btn"  onClick={(event)=>{ event.stopPropagation(); setNavVisible(true)}}/>
    <motion.div
     className= {`navList ${!NavVisible ? "nav_visibility" : ""}`}
     initial={{x: -100 }}
     animate={{x: NavVisible? 0 :-100}}
     transition={{ duration: 0.6, ease: "easeInOut" }}

     >
      <ul>
        <FontAwesomeIcon icon={faXmark} size="2x"  className="Xmark_btn" onClick={()=>{setNavVisible(false)}}/>
        {["Home", "About", "Skills", "Project", "Contact"].map(
          (listItem, index) => (
            <li key={index}>
              <Link to={`/${listItem.toLowerCase()}`} onClick={ ()=>setNavVisible(false)}>
              {listItem}
              </Link>
            </li>
          )
        )}
      </ul>
    </motion.div>
    </>
  );
  
  
}
// --logo component
function MyLogo() {
  return (
    <div className="logo">
      <h3>
        AZI ZE
        <span>
          <FontAwesomeIcon icon={faCode} />
        </span>
      </h3>
    </div>
  );
}
//mobile navigation control 

// END of Header Components

                       // HERO SECTION //
// ---Array of my social accounts with icons ---
const SocialLinks = [
  {
    icon: faFacebook,
    link: "https://www.facebook.com/bruyne.de.10?mibextid=wwXIfr",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/boujaada__azi_ze/profilecard/?igsh=MW0wbm51Y3IxNHZzaA==",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/aziz-boujaada-065278340",
  },
  { icon: faDiscord, link: "https://discord.gg/xSz4ZAuw" },
  { icon: faGithub, link: "https://github.com/aziz-boujaada/" },
];
// ---Array of my Achievement---
const Achieved = [
  { achievedCategory: "experience  months", Score: 5 },
  { achievedCategory: " Mastered Technologies", Score: 8 },
  { achievedCategory: "Projects Completed", Score: 6 },
  { achievedCategory: "Code Commit", Score: 117 },
];

// Function To add effect Of number counter
function AchievementCounter({ TargetScore }) {
  const [score, setScore] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setScore((start) => {
        if (start < TargetScore) {
          return start + 1;
        } else {
          clearInterval(interval);
          return start;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [TargetScore]);

  return <strong>{score}</strong>;
}

// ---Description about me And Social icons display---
function Description() {
  return (
    // --description Paragraph--
    <motion.div
      className="Home_description"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <h2>Hi, I'm AZi Ze BoujaaDa</h2>
      <h3>Front-End Developer ...</h3>
      <p>
        "I'm Aziz Boujaada, a 22-year-old web developer from Amizmiz.
        <br />
        I specialize in front-end development, creating interactive and
        responsive websites. <br />
        With a strong foundation in HTML, CSS, and JavaScript, <br />I
        continuously enhance my skills to build innovative digital solutions."
      </p>

         {/* --Display Social icons--  */}
      <motion.div
        className="SocialIcons"
        //Social icons Display
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {SocialLinks.map((item, index) => (
          <a key={index} href={item.link} target="_blank">
            <FontAwesomeIcon
              key={index}
              icon={item.icon}
              size="2x"
              color="#646cff"
              className="social-icon"
            />
          </a>
        ))}
      </motion.div>
         {/* --Display Achievement */}
      <motion.div
        className="MyAchieved"
        //Achieved Display
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <ul>
          {Achieved.map((achieved, index) => (
            <li key={index}>
              <AchievementCounter TargetScore={achieved.Score} />
              <br />
              {achieved.achievedCategory}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

// ---Hero Section image component---
function MyImage() {
  return (
    <motion.div
      className="MyImage"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 5, ease: easeInOut }}
    >

      <img src="mypectuer.png" alt="my photo" />

    </motion.div>
  );
}

               // ---ABOUT SECTION ---
  // --Education & experience Component--
function EducationAndExperience() {
  const { ref: sectionTitleRef, inView: sectionTitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  console.log(educationInView);
  return (
    <div>
      {/* -- section title -- */}
      <motion.h2
        className="Section_title"
        ref={sectionTitleRef}
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: sectionTitleInView ? 1 : 0,
          y: sectionTitleInView ? 0 : -100,
        }}
        transition={{ duration: 3, ease: easeInOut }}
      >
        Education & Experience
      </motion.h2>
      <div className="Education_Experience">
        {/* --- Education part ---*/}
        <motion.div
          className="education"
          ref={educationRef}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: educationInView ? 1 : 0,
            x: educationInView ? 0 : -100,
          }}
          transition={{ duration: 2, ease: easeInOut }}
        >
          <h2>🎓</h2>
          <h3>Education</h3>
          <p>
            Self-taught Web Development (2024 - Present) Continuously learning
            and improving my skills in front-end development through hands-on
            projects and self-study.
          </p>
        </motion.div>

        {/* --- Experience  part ---*/}
        <motion.div
          className="experience"
          ref={experienceRef}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: experienceInView ? 1 : 0,
            x: educationInView ? 0 : 100,
          }}
          transition={{ duration: 2, ease: easeInOut }}
        >
          <h2>💼</h2>
          <h3>Experience</h3>
          <p>
            Gaining practical experience by working on real-world projects,
            enhancing problem-solving skills, and continuously improving my
            development expertise
          </p>
        </motion.div>
      </div>
    </div>
  );
}

                          // ----SKILLS SECTION ----
function MySkills() {
  //Array Of my skills 
  const SkillsObject = [
    { name: "HTML 5", img: "html.png" },
    { name: "CSS 3", img: "css.png" },
    { name: "JavaScript", img: "JS.png" },
    { name: "React JS", img: "reactjs.png" },
    { name: "Figma", img: "figma.png" },
    { name: "Git", img: "git.png" },

  ];

  const { ref: sectionTitleRef, inView: sectionTitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: skillsCardsRef, inView: skillsCardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      <motion.h2
        ref={sectionTitleRef}
        className="Section_title"
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: sectionTitleInView ? 1 : 0,
          y: sectionTitleInView ? 0 : -100,
        }}
        transition={{ duration: 3, ease: easeInOut }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="Skills_cards"
        ref={skillsCardsRef}
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: skillsCardsInView ? 1 : 0,
          y: skillsCardsInView ? 0 : -100,
        }}
        transition={{ duration: 3, ease: easeInOut }}
      >
        {SkillsObject.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.img} alt={skill.img} />
            <h4> {skill.name}</h4>
          </div>
        ))}
      </motion.div>
    </>
  );
}

                         // ---- PROJECTS SECTION ----
function MyProjects() {
  // array of my projects
  const ProjectsList = [
    {
      ProjectName: "Online Education Platform ",
      ProjectImage: "Education-Platform.png",

      ProjectDescription:
        "An interactive e-learning platform that provides a seamless and engaging experience for learners. It features a modern design and smooth navigation to deliver educational content efficiently.",
      links: [
        {
          link: "https://github.com/aziz-boujaada/Education-platform.git",
          linkIcon: faGithub,
        },
        {
          link: "https://aziz-boujaada.github.io/Education-platform/",
          linkIcon: faExternalLinkAlt,
        },
      ],
      Technologies: [
        { ToolName: "HTML 5", ToolIcon: faHtml5 },
        { ToolName: "CSS 3", ToolIcon: faCss3 },
        { ToolName: "JavaScript", ToolIcon: faJs },
        { ToolName: "Git", ToolIcon: faGitSquare },
      ],
    },
    {
      ProjectName: "Restaurant Landing page  ",
      ProjectImage: "restaurant.png",
      ProjectDescription:
        "A stylish and responsive landing page for a restaurant, showcasing the menu, contact details, and ambiance in an appealing and user-friendly manner.",
      links: [
        {
          link: "https://github.com/aziz-boujaada/Restaurant.git",
          linkIcon: faGithub,
        },
        {
          link: "https://aziz-boujaada.github.io/Restaurant/",
          linkIcon: faExternalLinkAlt,
        },
      ],
      Technologies: [
        { ToolName: "HTML 5", ToolIcon: faHtml5 },
        { ToolName: "CSS 3", ToolIcon: faCss3 },
        { ToolName: "JavaScript", ToolIcon: faJs },
        { ToolName: "Git", ToolIcon: faGitSquare },
      ],
    },
    {
      ProjectName: "Cafe Sales Management",
      ProjectImage: "cafe-management-sales.png",
      ProjectDescription:
        "A sales management system designed for cafés, enabling efficient tracking of orders, inventory management, and revenue calculation through a user-friendly interface.",
      links: [
        {
          link: "https://github.com/aziz-boujaada/Cafe_managment.git",
          linkIcon: faGithub,
        },
        {
          link: "https://aziz-boujaada.github.io/Cafe_managment/",
          linkIcon: faExternalLinkAlt,
        },
      ],
      Technologies: [
        { ToolName: "HTML 5", ToolIcon: faHtml5 },
        { ToolName: "CSS 3", ToolIcon: faCss3 },
        { ToolName: "JavaScript", ToolIcon: faJs },
        { ToolName: "Git", ToolIcon: faGitSquare },
      ],
    },
    {
      ProjectName: "weather App",
      ProjectImage: "WeatherAPP.png",
      ProjectDescription:
        "A web application that provides real-time weather updates for any city worldwide, leveraging APIs to fetch accurate data with a sleek and intuitive design.",
      links: [
        {
          link: "https://github.com/aziz-boujaada/Weather-app.git",
          linkIcon: faGithub,
        },
        {
          link: "https://aziz-boujaada.github.io/Weather-app/",
          linkIcon: faExternalLinkAlt,
        },
      ],
      Technologies: [
        { ToolName: "HTML 5", ToolIcon: faHtml5 },
        { ToolName: "CSS 3", ToolIcon: faCss3 },
        { ToolName: "JavaScript", ToolIcon: faJs },
        { ToolName: "Git", ToolIcon: faGitSquare },
        { ToolName: "API", ToolIcon: faLink },
      ],
    },
    {
      ProjectName: "My Portfolio",
      ProjectImage: "myPortfolio.png",
      ProjectDescription:
        "A personal portfolio website that showcases my skills and projects in a professional and visually appealing way, reflecting my expertise as a web developer. ",
      links: [
        {
          link: "https://github.com/aziz-boujaada/First-React-Portfolio.git",
          linkIcon: faGithub,
        },
        {
          link: "https://aziz-boujaada.github.io/Weather-app/",
          linkIcon: faExternalLinkAlt,
        },
      ],
      Technologies: [
        { ToolName: "HTML 5", ToolIcon: faHtml5 },
        { ToolName: "CSS 3", ToolIcon: faCss3 },
        { ToolName: "JavaScript", ToolIcon: faJs },
        { ToolName: "Git", ToolIcon: faGitSquare },
        { ToolName: "React JS", ToolIcon: faReact },
      ],
    },
  ];
  const { ref: sectionTitleRef, inView: sectionTitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: projectsCardRef, inView: projectsCardInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  console.log("project show ," ,projectsCardInView)
  return (
    <>
    {/* -- section title -- */}
      <motion.h2
        className="Section_title"
        ref={sectionTitleRef}
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: sectionTitleInView ? 1 : 0,
          y: sectionTitleInView ? 0 : -100,
        }}
        transition={{ duration: 3, ease: easeInOut }}
      >
        My Projects
      </motion.h2>

      {/* projects cards */}
      <motion.div
        className="projects-cards"
        ref={projectsCardRef}
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: projectsCardInView ? 1 : 0,
          x: projectsCardInView ? 0 : 100,
        }}
        transition={{ duration: 3, ease: easeInOut }}
      
      >
      
        {/* -- Display Projects info (image ,name ,description)  */}
        {ProjectsList.map((project, index) => (
          <div key={index} className="project_card">
            <img src={project.ProjectImage} alt="" />
            <h3>{project.ProjectName}</h3>
            <p>{project.ProjectDescription}</p>
             
             {/* -- Display Projects links (GitHub ,Live Demo)  */}
            <div className="projects_links">
              {project.links &&
                project.links.map((projectLink, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={projectLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={projectLink.linkIcon} />
                  </a>
                ))}
            </div>

             {/* -- Display Technologies that used in Projects */}
            <div className="project_technologies">
              {project.Technologies &&
                project.Technologies.map((Technology, techIndex) => (
                  <div key={techIndex}>
                    <div className="technologies">
                      <div className="tech_icon">
                        <FontAwesomeIcon icon={Technology.ToolIcon} />
                      </div>
                      <div>
                        <span className="tech_name">{Technology.ToolName}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </motion.div>
      
    </> 
  );
}

                            // ---- CONTACT SECTION ----
function ContactMe() {
  const { ref: sectionTitleRef, inView: sectionTitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: contactSectionRef, inView: contactSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  // Array of my contact info 
  const ContactInfo = [
    {
      name: "azizboujaada87@gmail.com",
      contactItem: "mailto:azizboujaada87@gmail.com",
      icon: faEnvelope,
    },
    {
      name: "+212 674490454",
      contactItem: "tel:+212 674490454",
      icon: faPhone,
    },
    { name: "Amizmiz ,Marrakech,Morocco", icon: faLocation },
  ];
  return (
    <>
      <motion.h2
        className="Section_title"
        ref={sectionTitleRef}
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: sectionTitleInView ? 1 : 0,
          y: sectionTitleInView ? 0 : -100,
        }}
        transition={{ duration: 3, ease: easeInOut }}
      >
        Get In Touch
      </motion.h2>

      {/* -- contact container (contact info & contact form) */}
      <div className="contact_container">
          {/* --- contact info --- */}
        <motion.div
          className="contact_information"
          ref={contactSectionRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: contactSectionInView ? 1 : 0,
            y: contactSectionInView ? 0 : 100,
          }}
          transition={{ duration: 3, ease: easeInOut }}
        >
          <h3>Contact Information</h3>
          {ContactInfo.map((contact, index) => (
            <a key={index} href={contact.contactItem}>
              <FontAwesomeIcon icon={contact.icon} />
              <span>{contact.name}</span>
            </a>
          ))}
        </motion.div>
 
          {/* --- contact info --- */}
        <motion.div
          className="contact_form"
          ref={contactSectionRef}
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: contactSectionInView ? 1 : 0,
            y: contactSectionInView ? 0 : -100,
          }}
          transition={{ duration: 3, ease: easeInOut }}
        >
          <form action="">
            <label htmlFor="Name">Your Name</label>
            <input type="text" placeholder="Enter Your Name" required />
            <label htmlFor="Email">Your Email</label>
            <input type="email" name="email" id="email" placeholder="Enter Your Email" required/>
            <label htmlFor="Message">Your Message</label>
            <textarea name="message-area" id="message"placeholder="write Your Message" required></textarea>
            <button type="submit">Send Message{" "}<span> <FontAwesomeIcon icon={faPaperPlane} /></span></button>
          </form>

        </motion.div>
      </div>
    </>
  );
}

                // --- FOOTER --- 
  function Footer(){
    return(
      <>
      <div className="footer_container">

      {SocialLinks.map((item, index) => (
          <a key={index} href={item.link} target="_blank">
            <FontAwesomeIcon
              key={index}
              icon={item.icon}
              size="2x"
              color="#646cff"
              className="social-icon"
            />
          </a>
      ))}
      <div className="copyright">
        <p>copyright © 2025 AZi Ze BouJaaDa .All rights reserved</p>
        <p>Built with ❤️ using React JS</p>
      </div>
      </div>
      </>
    )
  } 

  
  
  function MainContent() {
    const location = useLocation();
  
    useEffect(() => {
      const sectionId = location.pathname.substring(1);
      if (sectionId) {
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }, [location.pathname]);
  
    return (
      <>
        <section id="home" className="HeroSection">
          <Description />
          <MyImage />
        </section>
  
        <section id="about" className="AboutSection">
          <EducationAndExperience />
        </section>
  
        <section id="skills" className="SkillsSection">
          <MySkills />
        </section>
  
        <section id="projects" className="ProjectsSection">
          <MyProjects />
        </section>
  
        <section id="contact" className="ContactSection">
          <ContactMe />
        </section>
  
        <section className="FooterSection">
          <Footer />
        </section>
      </>
    );
  }
  

  export default function MyApp() {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <Router>
        <div>
  
          <motion.div
            className={`header ${scrolled ? "scrolled" : ""}`}
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <MyLogo />
            <NavList />
          </motion.div>

          <Routes>
            <Route path="/*" element={<MainContent />} />
          </Routes>
        </div>
      </Router>
    );
  }
  