import React from 'react';
import './footer.css';
import logo from '../../Assets/logo.png'
const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-copyright">
        <p>2023 CodeItAll. All rights Reserved</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <a href='https://www.linkedin.com/in/ritikkumarsingh22/' target="_blank"><img className='logo-1' width="30" height="30" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin"/> </a>
        <a href='https://www.facebook.com/thisissinghji' target="_blank"><img className='logo-2' width="30" height="30" src="https://img.icons8.com/ios/50/facebook--v1.png" alt="facebook--v1"/></a>
        <a href='https://www.instagram.com/ritik.css/' target="_blank"><img className='logo-3' width="30" height="30" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/></a>
      </div>
    </div>

  )
}

export default Footer