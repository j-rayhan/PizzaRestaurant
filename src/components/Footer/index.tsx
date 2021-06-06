import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Container, IconLink, Icons, SocialLogo, SocialMedia, SocialMediaWrap, Wrapper } from './FooterElements';

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="https://"> Pizza</SocialLogo>
                        <Icons>
                            <IconLink href="https://" target="_blank" aria-label="Facebook" rel="noopener">
                                <FaFacebook />
                            </IconLink>
                            <IconLink href="https://" target="_blank" aria-label="Instagram" rel="noopener">
                                <FaInstagram />
                            </IconLink>
                            <IconLink href="https://" target="_blank" aria-label="Youtube" rel="noopener">
                                <FaYoutube />
                            </IconLink>
                            <IconLink href="https://" target="_blank" aria-label="Twitter" rel="noopener">
                                <FaTwitter />
                            </IconLink>
                            <IconLink href="https://" target="_blank" aria-label="Linkedin" rel="noopener">
                                <FaLinkedin />
                            </IconLink>
                        </Icons>
                    </SocialMediaWrap>
                </SocialMedia>
            </Wrapper>
        </Container>
    )
}

export default Footer;