import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col, Form } from 'react-bootstrap';

import './DisplayArea.css';

const DisplayArea = () => {
  // Declare a state variable "count" with an initial value of 0
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [ratersIsChecked, setRatersIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRatersCheckboxChange = () => {
    setRatersIsChecked(!ratersIsChecked);
  };


  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  const onChange = () => {
    console.log('hi')
  }

  const onClickItem = () => {
    console.log('hi')
  }

  const onClickThumb = () => {
    console.log('hi')
  }

  const imgI = [];

    for (let i = 0; i <= 168; i++) {
    imgI.push(i);
    }

    let imgRequire = 'original'
    if (isChecked && ratersIsChecked) {
        imgRequire = '_rater_and_predicted'
    } else if (isChecked) {
        imgRequire = 'predicted'
    } else if (ratersIsChecked) {
        imgRequire = 'raters'
    }

  return (
    <Container>

        <div className='text-start'>
        <Form>
            <Form.Check // prettier-ignore
                enabled={isChecked}
                onChange={handleCheckboxChange}
                type="switch"
                id="custom-switch"
                label="Show Segmentations"
            />
            <Form.Check // prettier-ignore
                enabled={ratersIsChecked}
                onChange={handleRatersCheckboxChange}
                type="switch"
                label="Show 5 Rater Annotations of Disk"
                id="disabled-custom-switch"
            />
            </Form>
        </div>

        
      <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} width="400px" showIndicators={false} className='m-auto text-center'>
        {imgI.map((imageName, index) => (
            <div key={index}>
                <img
                src={require(`./img/img_${String(imageName)}${imgRequire}.png`)} // Dynamically load images
                alt={`Image ${index}`}
                />
            </div>
        ))}
      </Carousel>
    </Container>
  );
}

export default DisplayArea;