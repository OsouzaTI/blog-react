import React from 'react'
import {
    GridContent,
    LinksArea,
    UpdatesArea,
    Data,
    Span
} from '../src/components/styles'
import Link from 'next/link'
import Calendar from 'react-calendar';

const containerLink = {
    cursor: 'pointer',
    display:'flex',
    flexDirection: 'row',  
    width: '100%',
    justifyContent: 'space-between'
}

function Home() {
    return (
        <GridContent>
            <Data>OI</Data>
        </GridContent>
    )
}

export default Home
