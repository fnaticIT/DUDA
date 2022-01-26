import React from 'react'
import Icon1 from "../../images/pngwing.com (5).png"
import Icon2 from "../../images/pngwing.com (3).png"
import Icon3 from "../../images/pngwing.com (4).png"

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Simple to use</ServicesH2>
          <ServicesP>Just fill a simple form mentioning your doubts and its our responsibility to find you the perfect expert.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Fast and secure</ServicesH2>
          <ServicesP>We guarantee to provide you with a mentor within a specific time frame, or your money will be refunded.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Minimal expenses</ServicesH2>
          <ServicesP>We charge minimum rates to provide best experience for our users and mentors. Our current plan is Rs 150 per hour.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
