import React from "react";
import { useHistory } from "react-router";
import { Button } from "../ButtonElements";
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from "./InfoElements";

const Info = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2, number }) => {
  const history = useHistory();
  function handle() {
    history.push("/submit");
  }
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                {number == 4 ? (
                  <>
                    <Heading lightText={lightText} style={{ color: "#00CED1" }}>
                      {headline}
                    </Heading>
                    <Subtitle>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                          <ul style={{ padding: 20 }}>
                            <li>
                              <strong>
                                <span>1. </span>
                                <span>Counselling</span>
                              </strong>
                            </li>
                            <li>
                              <strong>
                                <span>2. </span>
                                <span>Career guidance</span>
                              </strong>
                            </li>
                            <li>
                              <strong>
                                <span>3. </span>
                                <span>Competitive programming</span>
                              </strong>
                            </li>
                            <li>
                              <strong>
                                <span>4. </span>
                                <span>Full Stack Development</span>
                              </strong>
                            </li>
                            <li>
                              <strong>
                                <span>5. </span>
                                <span>ML / AI</span>
                              </strong>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul style={{ padding: 20 }}>
                            <li>
                              <strong>
                                <span>1. </span>
                                <span>Counselling</span>
                              </strong>
                            </li>
                            <li>
                              <strong>
                                <span>2. </span>
                                <span>Career guidance</span>
                              </strong>
                            </li>
                            <li>
                              <strong>
                                <span>3. </span>
                                <span>Competitive programming</span>
                              </strong>
                            </li>
                            <li>
                              <strong>
                                <span>4. </span>
                                <span>Full Stack Development</span>
                              </strong>
                            </li>
                            <li>
                              <strong>
                                <span>5. </span>
                                <span>ML / AI</span>
                              </strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Subtitle>
                  </>
                ) : (
                  <>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                      {number == 3 ? (
                        <Button onClick={handle} smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>
                          {buttonLabel}
                        </Button>
                      ) : (
                        <Button to={number == 1 ? "discover" : number == 2 ? "domain" : null} smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>
                          {buttonLabel}
                        </Button>
                      )}
                    </BtnWrap>
                  </>
                )}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
