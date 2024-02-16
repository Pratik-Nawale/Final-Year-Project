import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Football Training',
      price: '$99',
      description: 'Get trained by professional coaches and improve your football skills.',
      bullets: [
        'Techniques for dribbling, passing, and shooting',
        'Tactical understanding and game strategy',
        'Physical fitness and conditioning drills',
        'Individual and team skill development',
      ]
    },
    {
      id: 2,
      title: 'Tennis Lessons',
      price: '$149',
      description: 'Learn tennis from experienced instructors and take your game to the next level.',
      bullets: [
        'Fundamentals of forehand, backhand, and serve',
        'Footwork and movement on the court',
        'Match tactics and mental preparation',
        'Advanced stroke techniques and drills',
      ]
    },
    {
      id: 3,
      title: 'Swimming Classes',
      price: '$199',
      description: 'Join our swimming classes to become a confident and skilled swimmer.',
      bullets: [
        'Basic and advanced swimming strokes',
        'Water safety and survival skills',
        'Endurance training and speed improvement',
        'Breath control and diving techniques',
      ]
    },
    // Add more courses here as needed
  ]);

  return (
    <section className="pricing-section">

      <div className="pricing-container">

        <h2 className="pricing-section-title">Our Courses</h2>

        <div className="pricing-cards">
          {courses.map((course) => (

            <div className="pricing-card" key={course.id}>

              <div className="pricing-card-content"> {/* Wrap content with padding */}
                <h3 className="pricing-card-title">{course.title}</h3>
                <p className="pricing-card-description">{course.description}</p>

                <ul className="pricing-card-bullets">
                  {course.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>

              </div>

              <div className="pricing-card-button-container">
                <span className="pricing-card-price">{course.price}</span>
                <a href="#" className="pricing-card-button">Button</a>
              </div>

            </div>
          ))}

        </div>

        <div className="pricing-about-us">
          <h2 className="pricing-about-us-title">About Us</h2>
          <p className="pricing-about-us-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Pricing;
