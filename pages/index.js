import React from 'react'

import {
    GridContent,
    LinksArea,
    UpdatesArea,
    Data
} from '../src/components/styles'
import Link from 'next/link'
import {
    InternalApi
} from './api/defaultAxios'
import Calendar from 'react-calendar';

const createLinks = links => {
    if(links){
        return links.map((item, i)=>(
            <Link href={`/post/${item}`}>
                <a>{item}</a>
            </Link>
        ))
    }
}

function Home(props) {
    const links = props.posts
    console.log(links)
    return (
        <GridContent>
            <LinksArea>
                <h4>Atividades Recentes</h4>
                {createLinks(links)}
            </LinksArea>
            <UpdatesArea>
                <Calendar />
            </UpdatesArea>
            <Data></Data>
        </GridContent>
    )
}

Home.getInitialProps = async (ctx) => {    
    const res = await new Promise(resolve => {
        InternalApi.get('/api/post')
        .then(res =>{           
            resolve(res.data.names)
        })
        .catch(err => resolve(err))
    })
    return {posts: res}
}

export default Home
