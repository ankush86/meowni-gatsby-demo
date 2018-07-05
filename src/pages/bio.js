import React from 'react'

// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'

import profilePic from './profile-pic.jpeg'
import { rhythm } from '../utils/typography'
import Link from 'gatsby-link'

class Bio extends React.Component {
 render() {
   return (
     <div
       style={{
         maxWidth: '16.6%',
         textAlign: 'center'
       }}
     >
       <Link to="/">
         <img
           src={profilePic}
           alt={`Photo of my face`}
           style={{
             borderRadius: "50%", 
             width: "150px",
             height: "150px",
             textDecoration: "none",
             marginBottom: '0px',
           }}
         />
       </Link>
       <div className='social-media' style={{ textAlign: 'center' }}>
         <a href="https://github.com/notwaldorf" title="Peep at my GitHub">
           <i 
             className="fa fa-github"
             style={{
               width: "16px",
               textDecoration: "none",
               height: "16px",
               padding: "10px",
               color: "black",
             }}>
           </i>
         </a>
         <a href="https://github.com/notwaldorf" title="Follow me on twitter">
           <i 
             className="fa fa-twitter"
             style={{
               width: "16px",
               textDecoration: "none",
               height: "16px",
               color: "black",
               padding: "10px",
             }}>
           </i>
         </a>
         <a href="https://github.com/notwaldorf" title="Follow me on dribbble">
           <i 
             className="fa fa-dribbble"
             style={{
               width: "16px",
               textDecoration: "none",
               color: "black",
               height: "16px",
               padding: "10px",
             }}>
           </i>
         </a>
         <a href="https://github.com/notwaldorf" title="Follow my photos on exposure.co">
           <i 
             className="fa fa-github"
             style={{
               color: "black",
               textDecoration: "none",
               width: "16px",
               padding: "10px",
               height: "16px",
             }}>
           </i>
         </a>
         <a href="https://github.com/notwaldorf" title="Atom RSS feed">
           <i 
             className="fa fa-rss"
             style={{
               color: "black",
               textDecoration: "none",
               width: "16px",
               padding: "10px",
               height: "16px",
             }}>
           </i>
         </a>
       </div>
       <div style={{ padding: '10px' }}>
         <Link to="/about"><p style={{ fontWeight: 'bold', color: "black" }}>about</p></Link>
         <Link to="/"><p style={{ fontWeight: 'bold', color: "black" }}>posts</p></Link>
         <Link to="/projects"><p style={{ fontWeight: 'bold', color: "black" }}>codes</p></Link>
         <Link to="talks"><p style={{ fontWeight: 'bold', color: "black" }}>talks</p></Link>
       </div>
     </div>
   )
 }
}

export default Bio