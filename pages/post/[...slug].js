import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import {
    InternalApi
} from '../api/defaultAxios'
import {
    ContentData,
    PostContainer
} from '../../src/components/styles'
import Comments from './Disq';
import { getParams } from '../api/post/[...slug]'

const createPage = obj => {
    return Object.keys(obj).map((item, i)=>{        
        return (
            <div key={i}>                        
                <h1>{obj[item].title.split('-').join(' ').replace('_', '.')}</h1>
                <h5>{obj[item].subtitle}</h5>
                <h5>{obj[item].data}</h5>
                <div dangerouslySetInnerHTML={{__html: obj[item].content}}
                     style={{wordWrap: 'break-word'}}
                ></div>                        
            </div>
        )
    })
}

function Post(props) {
    const [post, setPost] = useState()
    const router = useRouter()
    if(router.query.slug && props.posts){
        getParams(router.query.slug)
        .then(res => {
            const { category, name } = res;
            const categoria = props.posts[0][category]
            const postagem = categoria[name]            
            setPost(postagem)
        })
    }
    return (
        <ContentData>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',                                
            }}>
                <PostContainer style={{minHeight: '60vh'}}>
                    {post ? createPage(post) : 'loading'}
                </PostContainer>
            </div>
            <div style={{backgroundColor: 'white'}}>
                {post ?
                    <Comments 
                        fullUrl={`https://algorithms-study.herokuapp.com/post/teste`}
                        id={post.title}    
                    />
                :null
                }
            </div>
        </ContentData>
    )
}

const mapDispatchToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

export default connect(mapDispatchToProps, null)(Post)