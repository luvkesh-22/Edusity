import React from 'react'
import './Campus.css';
import gallery_1 from '../../assets/img/gallery-1.png';
import gallery_2 from '../../assets/img/gallery-2.png';
import gallery_3 from '../../assets/img/gallery-3.png';
import gallery_4 from '../../assets/img/gallery-4.png';
import white_arrow from '../../assets/img/white-arrow.png';

const Campus = () => {
  return (
    <div className='campus'>
      
      <h2 className="campus-title">Our Campus Life</h2>
      <p className="campus-desc">
        Explore our vibrant campus environment featuring modern classrooms, well-equipped libraries, and a dynamic student community.
      </p>

      <div className="gallery">
        <img src={gallery_1} alt="Institute Library" />
        <img src={gallery_2} alt="Smart Classroom" />
        <img src={gallery_3} alt="Graduation Ceremony" />
        <img src={gallery_4} alt="Student Achievements" />
      </div>

      <button className='btn dark-btn'>
        Explore More <img src={white_arrow} alt="arrow icon" />
      </button>

    </div>
  )
}

export default Campus