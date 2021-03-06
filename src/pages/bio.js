import React from 'react'
import Link from 'gatsby-link';
import atom_logo from '../img/atom_logo.png';
import exposure_logo from '../img/exposure_logo.png';
import github from '../img/github.svg';
import medium_logo from '../img/medium_logo.png';
import profilePic from '../img/profile-pic.jpg';
import twitter from '../img/twitter.svg';

class Bio extends React.Component {
  render() {
    return (
      <div className="sidebar">
      <a href="/" title="Photo of my face" aria-label="Photo of my face">
        <img
          src={profilePic}
          className="avtar"
          alt={`Photo of my face`}
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            marginBottom: '0px',
          }}
        />
       </a>
       <div className='social-media' style={{ textAlign: 'center' }}>
         <a href="https://github.com" target="_blank" title="Peep at my GitHub">
         <img
            src={github}
            className="social-img"
          />
         </a>
         <a href="https://twitter.com" target="_blank" title="Follow me on twitter">
          <img
            src={twitter}
            className="social-img"
          />
         </a>
         <a href="https://exposure.co/" target="_blank" title="Follow my photos on exposure.co">
          <img
            src={exposure_logo}
            className="social-img"
          />
         </a>
         <a href="https://ide.atom.io/" target="_blank" title="Atom RSS feed">
          <img
            src={atom_logo}
            className="social-img"
          />
         </a>
         <a href="https://medium.com" target="_blank" title="Find me on medium">
          <img
            src={medium_logo}
            className="social-img"
          />
         </a>
       </div>
       <div style={{ padding: '10px' }}>
         <Link to="/about"><p style={{ fontWeight: 'bold', color: "black" }}>about</p></Link>
         <Link to="/posts"><p style={{ fontWeight: 'bold', color: "black" }}>posts</p></Link>
         <Link to="/codes"><p style={{ fontWeight: 'bold', color: "black" }}>codes</p></Link>
         <Link to="/talks"><p style={{ fontWeight: 'bold', color: "black" }}>talks</p></Link>
         <p id='rainButton' title="emoji-rain" style={{ fontSize: '20px' }}>✨</p>
       </div>
     </div>
   )
 }
}

export default Bio
