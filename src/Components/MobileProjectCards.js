import React from 'react'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import ReactDOM from "react-dom";
function MobileProjectCards(props) {
  return(
    <>
    <div id='MobilePCContainer'>
      <Card style={{display:'flex',width:'20rem',margin:'5px 5px'}}>
        <Card.Img variant="top" src="https://res.cloudinary.com/dsjwujdgd/image/upload/v1610917918/Web%20Dev%20Portfolio/landing_page_tlmyi7.png" />
        <Card.Body >
          <Card.Title style={{display:'flex',margin:'0 auto', justifyContent:'center'}}>Pantry</Card.Title>
          <Card.Text>
          Full stack web application, which keeps a running inventory of ingredients you have in your kitchen. Then it allows you to search for detailed recipes you can make with the on hand ingredients.
            Tech Stack: Python, Django, Javascript, Axios, CSS, HTML
          </Card.Text>
        </Card.Body>
      </Card>



      <Card style={{  display:'flex',width:'20rem',margin:'5px 5px'}}>
        <Card.Img variant="top" src="https://res.cloudinary.com/dsjwujdgd/image/upload/v1610918596/Web%20Dev%20Portfolio/Screen_Shot_2021-01-17_at_1.22.35_PM_dnjjjx.png" />
        <Card.Body>
          <Card.Title style={{display:'flex',margin:'0 auto', justifyContent:'center'}}>NeoCard</Card.Title>
          <Card.Text>
          A MERN web application, that acts as a centralized hub, containing information about you and your business, along with some other added benefits.
          Tech Stack: React, Javascript, Express, Node.js, Material Ui, ,React Bootstrap, React Router MongoDB,
          </Card.Text>
        </Card.Body>
      </Card>



      <Card style={{display:'flex' , width:'20rem',margin:'5px 5px'}}>
        <Card.Img variant="top" src="https://res.cloudinary.com/dsjwujdgd/image/upload/v1610918180/Web%20Dev%20Portfolio/Screen_Shot_2021-01-17_at_1.15.39_PM_kkks21.png" />
        <Card.Body>
          <Card.Title style={{display:'flex',margin:'0 auto', justifyContent:'center'}}> Photography Portfolio</Card.Title>
          <Card.Text>
            A place to display my photography skills, while also showing off more of my React skills.
            Tech Stack: React, Javascript, Material Ui, ,React Bootstrap, React Router, CSS & HTML
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
</>
  )
}
export default MobileProjectCards
