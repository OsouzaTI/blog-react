import React, { useEffect, useState } from 'react'

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

function Home(props) {
    const [postagem, setPostagem ] = useState([])   
    useEffect(() => {
        const createLinks = links => {
            const tempMap = links.map((item, i)=>(
                <Link href={`/post/${item}`}>
                    <a>{item}</a>
                </Link>
            ))
            setPostagem(tempMap)
        }
                
        InternalApi.get('api/post')
        .then(res =>{           
            const links = res.data.names;
            createLinks(links)
        })
        .catch(err => console.log(err))       

    }, [])

    return (
        <GridContent>
            <LinksArea>
                <h4>Atividades Recentes</h4>
                {postagem ? postagem : null}
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
