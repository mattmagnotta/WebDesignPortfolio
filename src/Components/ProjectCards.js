import React from 'react'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function ProjectCard(props) {
  return(
    <>
    <div href='www.google.com' id='PCContainer'>
      <Card style={{display:'flex', }}>
        <Card.Img href='www.google.com' variant="top" src="https://res.cloudinary.com/dsjwujdgd/image/upload/v1610917918/Web%20Dev%20Portfolio/landing_page_tlmyi7.png" />
        <Card.Body >
          <Card.Title style={{display:'flex',margin:'0 auto', justifyContent:'center'}}>Pantry</Card.Title>
          <Card.Text>
          Full stack web application, which keeps a running inventory of ingredients you have in your kitchen. Then it allows you to search for detailed recipes you can make with the on hand ingredients.
            <ul>
              <li>RESTful API architecture</li>
              <li>Full user system made with Django</li>
              <li>Designed using the Materialze front-end framework</li>
            </ul>
            Tech Stack: Python, Django, Javascript, Axios, CSS, HTML
          </Card.Text>
          <Button
            style={{
              backgroundColor: "#4083C4",
              borderRadius: 5,
              border: 0,
              color: "white",
              height: 48,
              padding: "0 30px",
              boxShadow: "0 3px 5px 2px #4083C4",
              width: "100px",
              display:'flex',
              margin:'0 auto',
              justifyContent:'center',
              alignItems:'center'
            }}
            type="submit"
            variant="contained"
          >
            <Link style={{color:'white'}} to={{ pathname: "https://aqueous-gorge-46064.herokuapp.com/overview" }} target="_blank" >View</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
    <div id='PCContainer'>
      <Card style={{display:'flex' , }}>
        <Card.Img variant="top" src="https://res.cloudinary.com/dsjwujdgd/image/upload/v1610918180/Web%20Dev%20Portfolio/Screen_Shot_2021-01-17_at_1.15.39_PM_kkks21.png" />
        <Card.Body>
          <Card.Title style={{display:'flex',margin:'0 auto', justifyContent:'center'}}> Photography Portfolio</Card.Title>
          <Card.Text>
            A place to display my photography skills, while also showing off more of my React skills.
            <ul>
              <li> Custom design & animations</li>
              <li> Before & after sliders using JS</li>
              <li> Optimized images for SEO & fast loading</li>
            </ul>
            Tech Stack: React, Javascript, Material Ui, ,React Bootstrap, React Router, CSS & HTML
          </Card.Text>
          <Button
            style={{
              backgroundColor: "#4083C4",
              borderRadius: 5,
              border: 0,
              color: "white",
              height: 48,
              padding: "0 30px",
              boxShadow: "0 3px 5px 2px #4083C4",
              width: "100px",
              display:'flex',
              margin:'0 auto',
              justifyContent:'center',
              alignItems:'center'
            }}
            type="submit"
            variant="contained"
          >
            <Link style={{color:'white'}} to={{ pathname: "https://aqueous-gorge-46064.herokuapp.com/overview" }} target="_blank" >View</Link>
          </Button>

        </Card.Body>
      </Card>
    </div>
    <div id='PCContainer'>
      <Card style={{  display:'flex' }}>
        <Card.Img variant="top" src="https://res.cloudinary.com/dsjwujdgd/image/upload/v1610918596/Web%20Dev%20Portfolio/Screen_Shot_2021-01-17_at_1.22.35_PM_dnjjjx.png" />
        <Card.Body>
          <Card.Title style={{display:'flex',margin:'0 auto', justifyContent:'center'}}>NeoCard</Card.Title>
          <Card.Text>
          A MERN web application, that acts as a centralized hub, containing information about you and your business, along with some other added benefits.
          <ul>
          <li>Led a team of 3 using Agile workflow</li>
        <li>Designed a custom sleek UI a better user experience</li>
          <li>Full user system created with Mongo DB </li>
          </ul>
          Tech Stack: React, Javascript, Express, Node.js, Material Ui, ,React Bootstrap, React Router MongoDB,
          </Card.Text>
          <Button
            style={{
              backgroundColor: "#4083C4",
              borderRadius: 5,
              border: 0,
              color: "white",
              height: 48,
              padding: "0 30px",
              boxShadow: "0 3px 5px 2px #4083C4",
              width: "100px",
              display:'flex',
              margin:'0 auto',
              justifyContent:'center',
              alignItems:'center'
            }}
            type="submit"
            variant="contained"
          >
            <Link style={{color:'white'}} to={{ pathname: "https://aqueous-gorge-46064.herokuapp.com/overview" }} target="_blank" >View</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>


</>
  )
}
export default ProjectCard
