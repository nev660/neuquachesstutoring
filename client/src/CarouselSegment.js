import React from 'react';
import { Carousel } from 'react-bootstrap';
const images = [];
for (let i = 1; i <= 7; i++) images.push(require(`./images/img${i}.png`));
function CarouselSegment() {
    return (
        <Carousel fade interval={4000} pause={false} className="scrollable-carousel" controls={false} style={{ height: '100vh', width: '100vw' }}>
        {images.map((image, index) => (
          <Carousel.Item key={index} style={{ height: '100vh', width: '100vw' }}>
            <div className="carousel-img-container">
              <img
                className="d-block carousel-img"
                src={image}
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-text">Neuqua's chess team. Now offering <br></br>one-on-one lessons</div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
}
export default CarouselSegment;