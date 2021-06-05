import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return (
        <HeroContainer>
            <Navbar toggle={() => setIsOpen(!isOpen)} />
            <Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;