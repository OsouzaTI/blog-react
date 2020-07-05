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

<<<<<<< HEAD
=======
import useSWR from 'swr'
import { fetcher } from '../pages/api/defaultAxios'

const getPosts = `
    query{
        posts(category: "null"){
            category
        }
    }
`;

>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
const containerLink = {
    cursor: 'pointer',
    display:'flex',
    flexDirection: 'row',  
    width: '100%',
    justifyContent: 'space-between'
}

<<<<<<< HEAD
function Home() {
    return (
        <GridContent>
            <Data>OI</Data>
=======
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
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
        </GridContent>
    )
}

export default Home
