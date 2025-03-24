import { easeInOut, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faGithub ,faLinkedin,faDiscord,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState ,useEffect } from "react";



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
      <h3>AZi ze</h3>
    </div>
  );
}

const SocialLinks =[
  {icon:faFacebook ,link : "https://www.facebook.com/bruyne.de.10?mibextid=wwXIfr"},
  {icon:faInstagram ,link:"https://www.instagram.com/boujaada__azi_ze/profilecard/?igsh=MW0wbm51Y3IxNHZzaA=="},
  {icon:faLinkedin ,link:"https://www.linkedin.com/in/aziz-boujaada-065278340"},
  {icon:faDiscord,link:"https://discord.gg/xSz4ZAuw"},
  {icon:faGithub,link:"https://github.com/aziz-boujaada/"}
]

const Achieved =[
  {achievedCategory:"experience  months" , Score : 6},
  {achievedCategory:" Mastered Technologies" , Score : 8},
  {achievedCategory:"Projects Completed" , Score : 6},
  {achievedCategory:"Code Commit" , Score : 117},
]
  
function AchievementCounter({TargetScore}){
  const [score ,setScore] =useState(0);
  useEffect (()=>{
    const interval= setInterval(() => {
      setScore((start)=>{
         if(start<TargetScore){
          return start+1
         }else{
          clearInterval(interval);
          return start;
         }
      })
    }, 50); 

    return () => clearInterval(interval); 
  }, [TargetScore]);

  return <strong>{score}</strong>;
}

function Description() {
  return (
    <motion.div
      className="Home_description"
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <h2>Hi, I'm AZi Ze BoujaaDa</h2>
      <h3>Front-End Developer</h3>
      <p>
        " My name is Aziz Boujaada. I am 22 years old and from the city of{" "}
        <br />
        Amizmiz. I study web development by myself. and my goal is to become a{" "}
        <br />
        good developer. "
      </p>

      <motion.div className="SocialIcons"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 4, ease: "easeInOut" }}
      >
     {SocialLinks.map((item ,index)=>(
      <a key={index} href={item.link} target="_blank">
        <FontAwesomeIcon
        
        key ={index}
        icon={item.icon}
        size="2x"
        color="#646cff"
        className="social-icon"
/>
        </a>
      ))}
      
      </motion.div>
     <motion.div className="MyAchieved"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
     >
      <ul>
       {Achieved.map((achieved,index)=>(
         <li key={index}>
          <AchievementCounter TargetScore={achieved.Score}/><br/>
                {achieved.achievedCategory}
        </li>
       ))} 
       </ul>
     </motion.div>
      
     </motion.div>
    

  );
}

function MyImage() {
  return (
    <motion.div
      className="MyImage"
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 5, ease: easeInOut }}
    >
      <img src="/src/assets/mypectuer.png" alt="my photo" />
    </motion.div>
  );
}
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
        <AchievementCounter/>
      </section>
    </div>
  );
}
