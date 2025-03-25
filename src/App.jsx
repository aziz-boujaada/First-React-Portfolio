//Import libraries
import { easeInOut, motion  } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faDiscord,
  faInstagram,
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
      <h3>AZI ZE <span><FontAwesomeIcon icon={faCode}/></span></h3>
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

function EducationAndExperience(){
  const { ref: sectionTitleRef, inView: sectionTitleInView } = useInView({
    triggerOnce:true,
    threshold:0.5,
  });

  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce:true,
    threshold:0.5,
  });

  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce:true,
    threshold:0.5,
  });


  console.log(educationInView )
  return(
    
    <div>
  <motion.h2 
  className="Section_title"
  ref={sectionTitleRef}
  initial={{ opacity :0, y:-100 }}
  animate={{ opacity: sectionTitleInView ? 1 :0, y:sectionTitleInView?0 :-100 }}
  transition={{ duration: 3, ease: easeInOut }}
  >
    Education & Experience
  </motion.h2>
  <div className="Education_Experience">
  <motion.div
  className="education"
  ref={educationRef}
  initial={{ opacity :0, x:-100 }}
  animate={{ opacity: educationInView ? 1 :0, x: educationInView?0 :-100}}
  transition={{ duration: 2, ease: easeInOut }}
  
  >
  
    <h2>🎓</h2>
    <h3>Education</h3>
    <p>
      Self-taught Web Development (2024 - Present)
      Continuously learning and improving my skills in front-end
      development
      through hands-on projects and self-study.
    </p>
  </motion.div>
  <motion.div
   className="experience"
   ref={experienceRef}
   initial={{ opacity: 0, x:-100 }}
  animate={{ opacity: experienceInView ?1 :0 , x:educationInView ?0 :100 }}
  transition={{ duration: 2, ease: easeInOut }}
   >
    <h2>💼</h2>
    <h3>Experience</h3>
    <p>
      Gaining practical experience by working on real-world
      projects,
      enhancing problem-solving skills, and continuously improving my
      development expertise
    </p>
  </motion.div>
</div>
</div>
  );
     }



//My APP
export default function MyApp() {
  return (
    <div>
      <motion.div
        className="header"
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
        <EducationAndExperience/>
        
      </section>
    </div>
  );
}
