import React from 'react'
import Layout from '../components/Layout'
import "../styles/Courses.css"
import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.webp"
import c4 from "../images/c9.jpg"
import c5 from "../images/c7.jpg"
import add from "../images/add.png"
import deleted from "../images/delete.png"

function Courses() {
  return (
    <Layout>
     <div style={{display:"flex",justifyContent:"space-between",paddingTop:"3rem"}} className="courseMain px-2 py-5">
     <div className="card">
      <div className="card-image" ><img src={c1} style={{width:"100%",height:"8rem"}}/></div>
      <div className="card-body">
        <h5 className="card-title"> Introduction to Machine Learning</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Dr. Laura Thompson</h6>
        <p className="card-text">Introduction to Machine Learning covers the fundamental concepts and techniques of machine learning. The course includes supervised and unsupervised learning methods.</p>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <button className="addCourse btn btn-success me- pb-2"><img src={add} className="buttonImage"/></button>
        <button className="deleteCourse btn btn-danger ms-5 pb-2"><img src={deleted} className="buttonImage"/></button>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-image" ><img src={c2} style={{width:"100%",height:"8rem"}}/></div>
      <div className="card-body">
        <h5 className="card-title">Introduction to Deep Learning</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Dr. Karen Lee</h6>
        <p className="card-text">Introduction to Deep Learning delves into the concepts and applications of deep neural networks. This course covers essential topics such as neural network.</p>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <button className="addCourse btn btn-success me- pb-2"><img src={add} className="buttonImage"/></button>
        <button className="deleteCourse btn btn-danger ms-5 pb-2"><img src={deleted} className="buttonImage"/></button>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-image" ><img src={c3} style={{width:"100%",height:"8rem"}}/></div>
      <div className="card-body">
        <h5 className="card-title">Modern Web Development</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Ms. Rachel Lee</h6>
        <p className="card-text">Learn the latest web development technologies and frameworks, including HTML5, CSS3, JavaScript, React, and Node.js, to build responsive and interactive web applications.</p>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <button className="addCourse btn btn-success me- pb-2"><img src={add} className="buttonImage"/></button>
        <button className="deleteCourse btn btn-danger ms-5 pb-2"><img src={deleted} className="buttonImage"/></button>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-image" ><img src={c4} style={{width:"100%",height:"8rem"}}/></div>
      <div className="card-body">
        <h5 className="card-title">Digital Marketing Strategies</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Dr. Michael Brown</h6>
        <p className="card-text">Digital Marketing Strategies provides a comprehensive understanding of digital marketing tools and techniques. Topics include SEO, content marketing, social media strategies.</p>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <button className="addCourse btn btn-success me- pb-2"><img src={add} className="buttonImage"/></button>
        <button className="deleteCourse btn btn-danger ms-5 pb-2"><img src={deleted} className="buttonImage"/></button>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-image" ><img src={c5} style={{width:"100%",height:"8rem"}}/></div>
      <div className="card-body">
        <h5 className="card-title">Introduction to Artificial Intelligence</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Dr. Liam Anderson</h6>
        <p className="card-text">This course offers an introduction to artificial intelligence, covering key concepts such as machine learning, neural networks, and natural language processing. </p>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <button className="addCourse btn btn-success me- pb-2"><img src={add} className="buttonImage"/></button>
        <button className="deleteCourse btn btn-danger ms-5 pb-2"><img src={deleted} className="buttonImage"/></button>
        </div>
      </div>
    </div>
      </div>
      
    </Layout>
  )
}

export default Courses;
