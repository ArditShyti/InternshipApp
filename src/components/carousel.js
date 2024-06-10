import Carousel from 'react-bootstrap/Carousel';
import './cr.css';

function UncontrolledExample() {
  return (
    <div className='cnt'>
    <Carousel>
      <Carousel.Item className='cntitem'>
        <img style={{'borderRadius':'20px'}} src='https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg' height="500px" width="100%" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{'borderRadius':'20px'}} src='https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg' height="500px" width="100%" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{'borderRadius':'20px'}} src='https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg' height="500px" width="100%" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;