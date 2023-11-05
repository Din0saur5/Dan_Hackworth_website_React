import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <Box style={{zIndex: '1000', position:'relative'}}>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                All My Links And Where to Find Me!
            </h1>
            <br/>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Links</Heading>
                        <FooterLink href="https://dev.to/din0saur5">
                            Blog || Dev.to
                        </FooterLink>
                        <FooterLink href="https://github.com/Din0saur5">
                            Portfolio || Github
                        </FooterLink>
                        <Link style={{"textDecoration": "none"}} to="/Contact"onClick={()=> {window.scrollTo(0, 0)}}> <FooterLink >Contact Me</FooterLink></Link>
                        <br/>
                        <Link style={{"textDecoration": "none"}} to="/photo gallery"onClick={()=> {window.scrollTo(0, 0)}}> <FooterLink >Photo Gallery</FooterLink></Link>
  
                    </Column>
                    <Column>
                        <Heading>Flatiron Projects</Heading>
                        <FooterLink href="https://github.com/Din0saur5/my-website-mobile">
                            Phase-0
                        </FooterLink>
                        <FooterLink href="https://github.com/Din0saur5/phase-1-project">
                            Phase-1
                        </FooterLink>
                        <FooterLink href="https://github.com/Din0saur5/Team-1-phase-2-project">
                            Phase-2
                        </FooterLink>
                        <FooterLink href="#">
                            Phase-3
                        </FooterLink>
                        <FooterLink href="#">
                            Phase-4
                        </FooterLink>
                        <FooterLink href="#">
                            Phase-5
                        </FooterLink>
                    </Column>
                    <Column >
                        <Heading>Social Media</Heading>
                        <FooterLink href="https://profile.indeed.com/p/danielh-bfdqryx">
                            Indeed
                        </FooterLink>
                        <FooterLink href="https://www.instagram.com/daniel_hackworth/">
                            Instagram
                        </FooterLink>
                        <FooterLink href="https://www.twitter.com/Flipz4650">
                           X/Twitter
                        </FooterLink>
                        <FooterLink href="https://www.facebook.com/profile.php?id=100078174649348">
                            Facebook
                        </FooterLink>
                    </Column>
                    <Column >
                        <Heading>Connections [non-links]</Heading>
                        <FooterLink href="#">
                            <i >
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    danhackworth@icloud.com
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Discord||dinosaur5
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Zoom
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                  Slack  
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;