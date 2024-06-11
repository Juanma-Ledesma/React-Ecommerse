import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner () {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex) => {
          setIndex(selectedIndex);
        };     
        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img src="https://gnrmerch.com/cdn/shop/files/GUNS_0207_STATIC_DESKTOP_v02.png?v=1715970775&width=2000" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://gnrmerch.com/cdn/shop/files/01_-_Women_s_and_Kids.png?v=1713971401&width=2000" alt="Second slide" />
              </Carousel.Item>
            </Carousel>
          );
        }
export default Banner