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
              </div>
                <button className="pricing-card-button">Sign Up</button>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Pricing;