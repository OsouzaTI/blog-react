import React from 'react'
import {Card, Button} from "react-bootstrap";
import Link from 'next/link'
function Cards({ title, subtitle, link }) {
    console.log('link' + link)
    return (
        <Card style={{ width: '18rem' }}>        
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{subtitle}</Card.Subtitle>            
            <Link href={link}>
                <Button variant={"outline-success"}>Ler</Button>
            </Link>
        </Card.Body>
        </Card>
    )
}

export default Cards
