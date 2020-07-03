import React from 'react'
import {Card, Button} from "react-bootstrap";
import Link from 'next/link'
import {
    CardAnimation
} from './styles'
function Cards({ title, subtitle, link }) {
    console.log('link' + link)
    return (
        <CardAnimation>
        <Card style={{ width: '18rem', margin: 10 }}>        
        <Card.Body>
            <Card.Title style={{padding: 5}}>{title}</Card.Title>
            <Card.Subtitle style={{height: 50}}>{subtitle}</Card.Subtitle>            
            <Link href={link}>
                <Button variant={"outline-success"}>Ler</Button>
            </Link>
        </Card.Body>
        </Card>
        </CardAnimation>
    )
}

export default Cards
