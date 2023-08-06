import React from 'react'
import './cta.css';
import { Practice } from '../../Container';
import { Link } from 'react-router-dom';
const CTA = () => {
  return (
    <div className="gpt3__cta" >
      <div className="gpt3__cta-content">
        <p>Let's start your Competitive Coding Journey</p>
        <h3>Solve the best and the most asked questions around the World !</h3>
      </div>
      <div className="gpt3__cta-btn">
        <Link to="/practice">
        <button type='button'>Get Started</button>
        </Link>
      </div>
    </div>
  )
}

export default CTA