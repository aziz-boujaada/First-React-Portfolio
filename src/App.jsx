//Import libraries
import { easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode,faExternalLinkAlt, faLink } from "@fortawesome/free-solid-svg-icons";
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
function MyButton() {
  return (
    <div className="Contact">
      <button>contact Me</button>
    </div>
  );
}

function NavList() {
  return (
    <div className="navList">
      <ul>
        {["Home", "About", "Project"].map((listItem, index) => (
          <li key={index}>
            <a href="#">{listItem}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MyLogo() {
  return (
    <div className="logo">
      <h3>
        AZI ZE{" "}
        <span>
          <FontAwesomeIcon icon={faCode} />
        </span>
      </h3>
    </div>
  );
}
// END of Header Components

//Hero Section .
// ---My Social Accounts---
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
// ---My Achievements---
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

//Description about me And Social icons display
function Description() {
  return (
    //description Paragraph
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

// Hero Section image
function MyImage() {
  return (
    <motion.div
      className="MyImage"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 5, ease: easeInOut }}
    >
      <img src="/src/assets/mypectuer.png" alt="my photo" />
    </motion.div>
  );
}

// About Section Components

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

//skills section
function MySkills() {
  const SkillsObject = [
    { name: "HTML 5", img: "/src/assets/html.png" },
    { name: "CSS 3", img: "/src/assets/css.png" },
    { name: "JavaScript", img: "/src/assets/JS.png" },
    { name: "React JS", img: "/src/assets/reactjs.png" },
    { name: "Figma", img: "/src/assets/figma.png" },
    { name: "Git", img: "/src/assets/git.png" },
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

// MY projects Section
function MyProjects() {
  const ProjectsList = [
    {
      ProjectName: "Online Education Platform ",
      ProjectImage: "/src/assets/Education-Platform.png",
      ProjectDescription: "Online Education Platform ",
      links: [
        { link: "https://github.com/aziz-boujaada/Education-platform.git" ,linkIcon :faGithub},
        { link: "https://aziz-boujaada.github.io/Education-platform/" ,linkIcon :faExternalLinkAlt },
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
      ProjectImage: "/src/assets/restaurant.png",
      ProjectDescription: "Online Education Platform ",
      links:[
         { link: "https://github.com/aziz-boujaada/Restaurant.git" ,linkIcon:faGithub},
         { link: "https://aziz-boujaada.github.io/Restaurant/" ,linkIcon:faExternalLinkAlt}
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
      ProjectImage: "/src/assets/cafe-management-sales.png",
      ProjectDescription: "Online Education Platform ",
      links:[
        { link: "https://github.com/aziz-boujaada/Cafe_managment.git" ,linkIcon:faGithub},
        { link: "https://aziz-boujaada.github.io/Cafe_managment/" ,linkIcon:faExternalLinkAlt}
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
      ProjectImage: "/src/assets/weatherAPP.png",
      ProjectDescription: "Online Education Platform ",
        links:[
          { link: "https://github.com/aziz-boujaada/Weather-app.git" ,linkIcon:faGithub},
          { link: "https://aziz-boujaada.github.io/Weather-app/" ,linkIcon:faExternalLinkAlt}
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
      ProjectImage: "/src/assets/myPortfolio.png",
      ProjectDescription: "My portfolio when i showcase what i can do  ",
      links:[
        { link: "https://github.com/aziz-boujaada/First-React-Portfolio.git" ,linkIcon:faGithub},
        { link: "https://aziz-boujaada.github.io/Weather-app/" ,linkIcon:faExternalLinkAlt}
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
    threshold: 0.5,
  });
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
        My Projects
      </motion.h2>
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
        {ProjectsList.map((project, index) => (
          <div key={index} className="project_card">
            <img src={project.ProjectImage} alt="" />
            <h3>{project.ProjectName}</h3>
            <p>{project.ProjectDescription}</p>


            <div className="projects_links">
              {project.links && project.links.map((projectLink ,linkIndex) => (
                <a key={linkIndex} href= {projectLink.link} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={projectLink.linkIcon}/>
                
                </a>
              ))}
            </div>

            <div className="project_technologies">
              {project.Technologies && project.Technologies.map((Technology, techIndex) => (
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
//My APP
export default function MyApp() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <motion.div
        className={`header ${scrolled ? "scrolled" : ""}`}
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <MyLogo />
        <NavList />
        <MyButton />
      </motion.div>

      <section className="HeroSection">
        <Description />
        <MyImage />
      </section>

      <section className="AboutSection">
        <EducationAndExperience />
      </section>

      <section className="SkillsSection">
        <MySkills />
      </section>
      <section className="ProjectsSection">
        <MyProjects />
      </section>
    </div>
  );
}
