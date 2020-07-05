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

import useSWR from 'swr'
import { fetcher } from '../pages/api/defaultAxios'

const getPosts = `
    query{
        posts(category: "null"){
            category
        }
    }
`;

const containerLink = {
    cursor: 'pointer',
    display:'flex',
    flexDirection: 'row',  
    width: '100%',
    justifyContent: 'space-between'
}

const createLinks = categorys => {
    return categorys.map((item, i)=>(
        <Link href={`/categoria/${item.category}`}>                
            <div style={containerLink}>
            <a style={{padding: 5}}>
                {item.category.split('-').join(' ').replace('_','.')}
            </a>            
            </div>
        </Link>
    ))
}

function Home() {
    const { data, error } = useSWR(getPosts, fetcher)    
    console.log(data)
    return (
        <GridContent>
            <LinksArea>
                <h4>Categorias</h4>      
                {data ? createLinks(data.posts): null}          
            </LinksArea>
            <UpdatesArea>
                <Calendar />
            </UpdatesArea>
            <Data></Data>
        </GridContent>
    )
}

export default Home
