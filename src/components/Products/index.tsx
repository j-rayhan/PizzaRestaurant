import React from 'react';
import { Button, Card, Container, Desc, Heading, Img, Info, Price, Title, Wrapper } from './ProductsElements';
interface product {
    img: string,
    alt: string,
    name: string,
    desc: string,
    price: string,
    button: string
}
interface ProductsProps {
    heading: string,
    data: product[],
}
const Products = ({ heading, data }: ProductsProps) => {
    return (
        <Container>
            <Heading>{heading}</Heading>
            <Wrapper>
                {data.map(({ img, alt, name, desc, price, button }, index) => (
                    <Card key={index}>
                        <Img src={img} alt={alt} />
                        <Info>
                            <Title>{name}</Title>
                            <Desc>{desc}</Desc>
                            <Price>{price}</Price>
                            <Button>{button}</Button>
                        </Info>
                    </Card>
                ))}
            </Wrapper>
        </Container>
    )
}

export default Products;