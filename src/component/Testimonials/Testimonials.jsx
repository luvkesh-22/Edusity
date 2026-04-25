import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/img/next-icon.png';
import back_icon from '../../assets/img/back-icon.png';
import user_1 from '../../assets/img/user-1.png';
import user_2 from '../../assets/img/user-2.png';
import user_3 from '../../assets/img/user-3.png';
import user_4 from '../../assets/img/user-4.png';

const Testimonials = () => {

  const slider = useRef();
  let tx = 0; 
 
 const slideForward = () => {
  if(tx > -50){
    tx -= 25;
  }

  slider.current.style.transform = `translateX(${tx}%)`;
 }
 const slideBackward = () => {
  if(tx < 0){
    tx += 25;
  }

  slider.current.style.transform = `translateX(${tx}%)`;
 } 

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="next icon" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="back icon" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="Student Photo" />
                <div>
                  <h3>Rinki Sharma</h3>
                  <span>B.Tech CSE, Delhi</span>
                </div>
              </div>
              <p>
                The institute provides excellent academic support along with practical exposure. The faculty members are very helpful and always guide us in the right direction. It has truly helped me improve my technical and communication skills.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="Student Photo" />
                <div>
                  <h3>Ashish Verma</h3>
                  <span>MBA, Mumbai</span>
                </div>
              </div>
              <p>
                I had a great learning experience here. The campus environment is very positive and motivating. Various workshops and seminars helped me gain industry knowledge and confidence.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="Student Photo" />
                <div>
                  <h3>Ankita Sharma</h3>
                  <span>B.Tech Mechanical, Patna</span>
                </div>
              </div>
              <p>
                The infrastructure and lab facilities are very good. The institute focuses not only on academics but also on overall personality development, which is very important for career growth.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="Student Photo" />
                <div>
                  <h3>Sudhanshu Reddy</h3>
                  <span>BBA, Hyderabad</span>
                </div>
              </div>
              <p>
                The placement support provided by the institute is excellent. The training sessions and mock interviews really helped me get placed in a reputed company. I am very thankful for the guidance I received here.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Testimonials