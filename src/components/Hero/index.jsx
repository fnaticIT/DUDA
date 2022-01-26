import React, { useState } from "react";
import Video from "../../videos/video2.mp4";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements";
import { Button } from "../ButtonElements";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const [placeholder, setPlaceholder] = React.useState("");

  const string = "This is the final string.",
    index = React.useRef(0);

  React.useEffect(() => {
    function tick() {
      setPlaceholder((prev) => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length) {
      let addChar = setInterval(tick, 100);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);
  return (
    <HeroContainer id="home" >
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          {" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString("Welcome to Duda")

                .pauseFor(1000)
                .deleteAll()
                .typeString("World of Experts awaits You!")
                .start();
                
            }}
          />
        </HeroH1>
        <HeroP>Have a Doubt? In need of counselling? Just book a session and get helped by experts from top IITS / NITS.</HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Book Session {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
