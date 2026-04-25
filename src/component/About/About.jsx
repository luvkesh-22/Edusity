import React from 'react';
import about_img from '../../assets/img/about.png';
import play_icon from '../../assets/img/play-icon.png';
import './About.css';

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="Student Image"  className='about_img'/>
        <img src={play_icon} alt=" Play Icon"  className='play_icon' onClick={() => {setPlayState(true)}}/>
      </div>
   <div className="about-right">
  <h3>ABOUT OUR INSTITUTE</h3>
  <h2>Empowering Students Through Quality Education</h2>

  <p>
    Our institute is committed to delivering high-quality education with a focus on innovation, practical learning, and academic excellence. We provide students with the skills and knowledge needed to succeed in today's competitive world.
  </p>

  <p>
    With experienced faculty, modern infrastructure, and a student-centered approach, we ensure a supportive learning environment that encourages growth and creativity.
  </p>

  <p>
    We aim to shape future leaders by promoting critical thinking, research, and real-world problem-solving abilities. Our graduates are well-prepared to excel in their careers and contribute to society.
  </p>
</div>
    </div>
  )
}

export default About
