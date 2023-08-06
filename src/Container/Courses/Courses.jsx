import React from 'react'
import "./courses.css";
import {Article, Navbar} from '../../Components';
import {Footer} from '../../Container';
import { img1,img2, img3 } from './imports';

const Courses = () => {
  return (
    <div>
      <Navbar/>
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Look out to some paid Courses out there.
        </h1>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupB">
            <Article imgURL={img1} externalLink="https://www.geeksforgeeks.org/courses/dsa-to-development-coding-guide?utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=courses" title="DSA to Development" />
            <Article imgURL={img1} externalLink="https://www.geeksforgeeks.org/courses/cpp-programming-basic-to-advanced" title="Mastering C++" />
            <Article imgURL={img1} externalLink="https://www.geeksforgeeks.org/courses/dsa-self-paced" title="DSA self paced" />
            <Article imgURL={img1} externalLink="https://www.geeksforgeeks.org/courses/devops-live" title="DevOps Engineering - Planning to Production" />
            <Article imgURL={img2} externalLink="https://neetcode.io/courses/dsa-for-beginners/0" title="Algorithms and Data Structures for Beginners" />
            <Article imgURL={img2} externalLink="https://neetcode.io/courses/advanced-algorithms/0" title="Advanced Algorithms" />
            <Article imgURL={img2} externalLink="https://neetcode.io/courses/full-stack-dev/0" title="Full Stack Development" />
            <Article imgURL={img2} externalLink="https://neetcode.io/courses/system-design-for-beginners/0" title="System Design for Beginners" />
            <Article imgURL={img3} externalLink="https://pwskills.com/course/decode-dsa-with-c-2.0" title="Decode DSA with C++ 2.0" />
            <Article imgURL={img3} externalLink="https://pwskills.com/course/full-stack-web-development-ja" title="Full Stack Web Development" />
            <Article imgURL={img3} externalLink="https://pwskills.com/course/full-stack-data-science-pro" title="Full Stack Data Science Pro" />
            <Article imgURL={img3} externalLink="https://pwskills.com/course/java-with-dsa-and-system-design-2-english" title="Java with DSA and System Design 2.0" />
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  ) 
}

export default Courses