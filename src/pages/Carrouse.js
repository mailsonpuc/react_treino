import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from './imgs/img1.svg'
import img2 from './imgs/img2.svg'
import img3 from './imgs/img3.svg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Image src={img1}  style={{width:500}}/>;
        <Carousel.Caption>
          <h3 className='text-info'><em>Agora o cartão perfeito para você</em></h3>
          <p className='text-info'>O bitcoin é unico.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={img2}  style={{width:500}}/>;
        <Carousel.Caption>
          <h3 className='text-info'><em>Milhares de pessoas em todo mundo ja usa</em></h3>
          <p className='text-info'>Venha fazer parte voce tambem.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={img3}  style={{width:500}}/>;
        <Carousel.Caption>
          <h3 className='text-info'><em>O melhor do mercado</em></h3>
          <p className='text-info'>
            0 % de taxa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;