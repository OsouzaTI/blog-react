import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
    InternalApi
} from '../api/defaultAxios'
import {
    ContentData,
    PostContainer
} from '../../src/components/styles'
import Comments from './Disq';


const createPage = obj => {
    return obj.map((item, i)=>{
        return (
            <div key={i}>                        
                <h1>{item.title}</h1>
                <h5>{item.subtitle}</h5>
                <h5>{item.data}</h5>
                <div>{item.content}</div>                        
            </div>
        )
    })
}

export default function Post(props) {
    const [post, setPost] = useState([])
    const [artigo, setArtigo] = useState('')
    const router = useRouter()
    const { name } = router.query;    
    useEffect(() => {        
        if(name){
            InternalApi.get(`api/post/${name}`)
            .then(res => {            
                setPost([res.data])
                setArtigo(res.data.title)
            })
            .catch(err => console.log(err))
        }                 
    }, [name])   
 
    return (
        <ContentData>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <PostContainer>
                    {post ? createPage(post) : 'loading'}
                </PostContainer>
            </div>
            <div style={{backgroundColor: 'white'}}>
                {post ?
                    <Comments 
                        fullUrl={`https://algorithms-study.herokuapp.com/post/${name}`}
                        id={name}    
                    />
                :null
                }
            </div>
        </ContentData>
    )
}
