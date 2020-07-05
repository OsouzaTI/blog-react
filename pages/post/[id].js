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
<<<<<<< HEAD
    console.log(obj)
=======
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
    return (
        <div>                        
            <h1>{obj.title}</h1>
            <h5>{obj.subtitle}</h5>
<<<<<<< HEAD
            <h5>{DateFormat(obj.date)}</h5>
=======
            <h5>{DateFormat(obj.data)}</h5>
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
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
<<<<<<< HEAD
                date
=======
                data
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
                content
            }
        }
    `;
<<<<<<< HEAD
    const { data, error } = useSWR(getPost, fetcher)        
=======
    const { data, error } = useSWR(getPost, fetcher)      
    console.log(data)
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
    return (
        <ContentData style={{backgroundColor: 'white'}}>
            <div style={{
                display: 'flex',
<<<<<<< HEAD
                justifyContent: 'center',
                alignItems: 'center',
                width:'100%'                                
=======
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',                                
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
            }}>
                <PostContainer style={{minHeight: '100vh'}}>
                    {data ? createPage(data.post) : 'loading'}
                </PostContainer>
            </div>
            <div style={{backgroundColor: 'white'}}>
<<<<<<< HEAD
                {data  ?
=======
                {data ?
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
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