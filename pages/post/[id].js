import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
    ContentData,
    PostContainer
} from '../../src/components/styles'
import Comments from './Disq';

import useSWR from 'swr'
import { fetcher } from '../api/defaultAxios'

const DateFormat = stringDate => {
    console.log(stringDate)
    const date = new Date(stringDate);
    return `${date.toLocaleDateString()}`
}
const createPage = obj => {
    return (
        <div>                        
            <h1>{obj.title}</h1>
            <h5>{obj.subtitle}</h5>
            <h5>{DateFormat(obj.data)}</h5>
            <div dangerouslySetInnerHTML={{__html: obj.content}}
                    style={{wordWrap: 'break-word'}}
            ></div>                        
        </div>
    )
}

function Post(props) {
    const router = useRouter()
    const { id } = router.query;
    const getPost = `
        {
            post(index: "${id}"){
                title
                subtitle
                data
                content
            }
        }
    `;
    const { data, error } = useSWR(getPost, fetcher)      
    console.log(data)
    return (
        <ContentData style={{backgroundColor: 'white'}}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',                                
            }}>
                <PostContainer style={{minHeight: '100vh'}}>
                    {data ? createPage(data.post) : 'loading'}
                </PostContainer>
            </div>
            <div style={{backgroundColor: 'white'}}>
                {data ?
                    <Comments 
                        fullUrl={`https://algorithms-study.herokuapp.com/post/teste`}
                        id={data.post.title}    
                    />
                :null
                }
            </div>
        </ContentData>
    )
}

export default Post;