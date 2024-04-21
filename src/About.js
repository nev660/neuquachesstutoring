import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import kundan from './images/kundan.png';
import vrishank from './images/vrishank.png';
import nevin from './images/nevin.png';
import rishi from './images/rishi.png';

function About() {
  return (
    <section id="about" className="section about">
      <Container>
        <h2>About Us</h2>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={vrishank} />
              <Card.Body>
                <Card.Title>Vrishank Ramnath</Card.Title>
                <Card.Text>
                  When he isn't fiddling his violin, Vrishank loves playing chess. This highschool junior is a 2-time chess State Champion and placed 4th in Nationals, so watch out!
                  <br/><br/><br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={rishi} />
              <Card.Body>
                <Card.Title>Rishi Murali</Card.Title>
                <Card.Text>
                  He's a sophomore thats great at biology and plays the viola, but above all he's amazing at chess. Rishi placed 2nd at the Illinois All Grade Championship, so take him seriously!  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={nevin} />
              <Card.Body>
                <Card.Title>Nevin Philip</Card.Title>
                <Card.Text>
                  A veteran at the game, Nevin has played chess for over 12 years! He's a junior who likes everything science, and enjoys swimming on the weekends.
                  <br/><br/><br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={kundan} />
              <Card.Body>
                <Card.Title>Kundan Baliga</Card.Title>
                <Card.Text>
                  Kundan's a sophomore at Neuqua, and a wizard at puzzles! He'll treat every position like one, until he brings back the win for his team. 
                  <br/><br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <div className="mission-statement">
          <p className="abouts"><b>Our Mission</b><br/><br/>"Our goal at NVChess+ is to empower individuals of all ages and skill levels to develop ther strategic thinking, enhance their problem-solving abilities, and foster a lifelong love for the game of chess. Through personalized lessons, innovative teaching methods, and a supportive learning environment, we aim to cultivate confident, proficient, and enthusiastic chess players who are ready to excel both on and off the board."</p>
        </div>
      </Container>
    </section>
  );
}

export default About;
