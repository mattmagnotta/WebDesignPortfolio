import React from "react";
import Particles from "react-particles-js";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Wave } from "react-animated-text";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import { ReactSVG } from "react-svg";
import { ReactComponent as Check } from "../Assets/Check.svg";
import Modal from "react-bootstrap/Modal";
import { SocialIcon } from 'react-social-icons';
const style = {
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  selected:'white',
  fullWidth: 'true'
};
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      name: "",
      email: "",
      thanksName: "",
      show: false,
      renderThanks: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeFeedback = this.handleChangeFeedback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  render() {
    return (
      <div id="formContainer">
        <>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Success! Message Sent</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo! Thanks for your time {this.state.thanksName}!<br /> I
              typically respond within a day.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <div id="formDiv">
          <form
            color="main"
            id="MobilecontactForm"
            onSubmit={this.handleSubmit}
            autoComplete="false"
          >
            <TextField
              color='white'
              required={true}
              value={this.state.email}
              onChange={this.handleChangeEmail}
              id="standard-full-width"
              label="Your Email"
              placeholder="MarkBing@Gmail.com"
              fullWidth={true}
              margin="normal"
              id="noBackground"
            />
            <br />
            <TextField
              required={true}
              value={this.state.name}
              onChange={this.handleChangeName}
              id="standard-full-width"
              label="Your Email"
              style={{ margin: 8,  }}
              placeholder="Whatever you want me to call you!"
              fullWidth
              margin="normal"
              label="Your Name"
            />
            <br />
            <br />
            <TextField
              required={true}
              value={this.state.feedback}
              onChange={this.handleChangeFeedback}
              id="outlined"
              multiline
              fullWidth
              label="Your Messsage"
              variant="outlined"
              style={{ margin: 8, }}
            />
            <div>
              <Button
                style={{
                  backgroundColor: "#4083C4",
                  borderRadius: 5,
                  border: 0,
                  color: "white",
                  height: 48,
                  padding: "0 30px",
                  boxShadow: "0 3px 5px 2px #4083C4",
                  width: "300px",
                  marginTop: "50px",
                }}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>

    );
  }
  handleClick() {
    console.log("handleClick just ran");
    this.setState({ redirect: true });
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleChangeEmail(event) {
    event.preventDefault();
    this.setState({ email: event.target.value });

  }
  handleChangeName(event) {
    console.log(this.state.name)
    event.preventDefault();
    this.setState({ name: event.target.value, thanksName: event.target.value });

  }

  handleChangeFeedback(event) {
    event.preventDefault();
    this.setState({ feedback: event.target.value });

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submited");

    const templateId = "template_LCPQ3nU6";
    console.log(templateId);

    this.sendFeedback(templateId, {
      reply_to: this.state.email,
      from_name: this.state.name,
      to_name: "to_name_value",
      message_html: this.state.feedback,
    });
    this.setState({
      email: "",
      name: "",
      feedback: "",
      show: true,
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
}
export default Contact;
