import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../src/store/actions/posts'
import {
    GridContent,
    LinksArea,
    UpdatesArea,
    Data,
    Span
} from '../src/components/styles'
import Link from 'next/link'
import Calendar from 'react-calendar';

function Home(props) {

    useEffect(() => {
        console.log('Foi buscado os posts')
        props.onFetchPosts()
    }, [])

    const createLinks = links => {
        return links.map((item, i)=>(
            <Link href={`/categoria/${item.name}`}>                
                <div style={{
                    cursor: 'pointer',
                    display:'flex',
                    flexDirection: 'row',  
                    width: '100%',
                    justifyContent: 'space-between'}}>
                <a style={{padding: 5}}>
                    {item.name.split('-').join(' ').replace('_','.')}
                </a>
                <Span>{item.length}</Span>
                </div>
            </Link>
        ))
    }

    return (
        <GridContent>
            <LinksArea>
                <h4>Categorias</h4>
                {props.categorias ? createLinks(props.categorias) : null}
            </LinksArea>
            <UpdatesArea>
                <Calendar />
            </UpdatesArea>
            <Data></Data>
        </GridContent>
    )
}

const mapStateToProps = ({ posts }) => {
    return {
        categorias: posts.categorias
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
