import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaMailBulk, FaSearchLocation, FaLocationArrow, FaPhone ,FaTelegram} from "react-icons/fa";
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          {/* <FooterLinkWrapper>
           
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to='/'><FaMailBulk /> duda-io@gmail.com</FooterLink>
                <FooterLink to='/'><FaPhone /> 9999999999</FooterLink>
                <FooterLink to='/'><FaLocationArrow />India</FooterLink>
                <FooterLink to='/'></FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper> */}
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Contact us
            </SocialLogo>
            <WebsiteRights>
              <div>
                <FaMailBulk /> &nbsp; dudaexperts@gmail.com
              </div>{" "}
              &nbsp;{" "}
              <div>
                <FaPhone /> &nbsp; +91 9022618621{" "}
              </div>{" "}
              &nbsp;{" "}
              <div>
                {" "}
                <FaLocationArrow /> &nbsp; Warangal, India
              </div>{" "}
            </WebsiteRights>

            <SocialIcons></SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              DUDA
            </SocialLogo>
            <WebsiteRights>DUDA © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://t.me/+8JmrEAkosXw0YzU1" target="_blank" arial-label="Facebook">
                <FaTelegram />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/company/dudaexperts" target="_blank" arial-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="//www.instagram.com/dudaexperts/" target="_blank" arial-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://www.youtube.com/channel/UCLOgv9d8W9lDviexMp0FE2A/featured" target="_blank" arial-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
