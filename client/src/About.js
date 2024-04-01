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
                  When he isn't fiddling his violin, he's playing chess. This junior is a 2-time chess state champion, so watch out!
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
                  He's a sophomore that loves Honkai Star Rail, but above all, he loves chess. He placed 2nd at the Illinois All Grade Championship, so take him seriously!  
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
                  A veteran at the game, Nevin has played chess for 10 years! He's a junior that also enjoys swimming.
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
                  Kundan is a sophomore at Neuqua. A wizard at puzzles, he'll treat every position like one, til he brings the win back for his team. 
                  <br/><br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <div className="mission-statement">
          <p className="abouts"><b>We noticed</b> a lack of freshmen on our high school's chess team this year. Was it just us, or was chess interest dwindling? We reached out to the YMCA and started teaching chess to kids there, increasing exposure to the game; The kids loved it, but we felt it wasn't personalized enough for each kid. That's why we made NVChess+, to give the most interested of kids the opportunity to improve their skills. Lessons are just $10 cash per 30 minute session, but what's more valuable to us is the ability to help others out.</p>
        </div>
      </Container>
    </section>
  );
}

export default About;