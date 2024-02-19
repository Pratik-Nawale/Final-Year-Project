import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: 'Free',
      price: '$0',
      features: [
        { name: 'Basic Training Videos', accessible: true },
        { name: 'Community Forums', accessible: true },
        { name: 'Live Webinars', accessible: false },
        { name: 'Advanced Analytics', accessible: false }
      ]
    },
    {
      id: 2,
      title: 'Premium',
      price: '$49.99/month',
      features: [
        { name: 'Basic Training Videos', accessible: true },
        { name: 'Community Forums', accessible: true },
        { name: 'Live Webinars', accessible: true },
        { name: 'Advanced Analytics', accessible: false }
      ]
    },
    {
      id: 3,
      title: 'Premium Plus',
      price: '$99.99/month',
      features: [
        { name: 'Basic Training Videos', accessible: true },
        { name: 'Community Forums', accessible: true },
        { name: 'Live Webinars', accessible: true },
        { name: 'Advanced Analytics', accessible: true }
      ]
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-section-title">Our Plans</h2>
        <div className="pricing-cards">
          {plans.map(plan => (
            <div className="pricing-card" key={plan.id}>
              <div className="pricing-card-header">
                <h3 className="pricing-card-title">{plan.title}</h3>
              </div>
              <div className="pricing-card-content">
                <h4 className="pricing-card-price">{plan.price}</h4>
                <ul className="pricing-card-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      {feature.accessible ? (
                        <span className="tick">&#10003;</span>
                      ) : (
                        <span className="cross">&#10007;</span>
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
                <button className="pricing-card-button">Sign Up</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pricing-about-us">
        <h2 className="pricing-about-us-title">About Us</h2>
        <p className="pricing-about-us-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vitae dui aliquam, nec lobortis purus placerat. Duis tempus quam id mauris ultrices, ut dignissim tortor luctus. Proin aliquam eros eu odio pharetra, a tempor orci lacinia. Nulla facilisi. Nam bibendum arcu at nunc ullamcorper sagittis. Fusce tempus, lorem sit amet mattis efficitur, felis lorem tristique lectus, quis dapibus lectus neque sed libero. Donec vehicula est vitae pulvinar tincidunt. Nullam ut pharetra quam. Donec eu est vel urna tristique tristique. Morbi lacinia nisl eget ex tristique posuere. Integer non est at felis venenatis tincidunt id at lorem. Duis nec lacinia sapien.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
