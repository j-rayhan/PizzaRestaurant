import styled from 'styled-components';
import { Link } from "react-router-dom";
export const Container = styled.div`
    background-color: #0d0909;
`

export const Wrapper = styled.div`
    padding: 1rem 1.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
`

export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 1rem auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: flex;
    justify-self: start;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
    cursor: pointer;
`

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const IconLink = styled.a`
    color: #fff;
    font-size: 1.5rem;
`
