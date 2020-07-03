import React from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import {
    ContentData,
    PostContainer
} from '../../src/components/styles'
import Cards from '../../src/components/Cards'

function Categoria(props) {
    const router = useRouter()
    const { name } = router.query;
    const getPost = (categoriaObject) => {
        return categoriaObject[Object.keys(categoriaObject)[0]]
    }
    return (
        <div>
            {props.posts && name ?
                props.posts.map((item)=>{
                    const categoria = item[name]
                    console.log(categoria)
                    return (
                    <ContentData>
                    {
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingTop:10,
                        }}>
                        {
                            Object.keys(categoria).map((itemKey)=>{
                                const postObject = getPost(categoria[itemKey])                        
                                return <Cards   title={itemKey}
                                                subtitle={postObject.subtitle}
                                                link={`/post/${name}/${postObject.title}`}/>                
                            })
                        }
                        </div>
                    }                   
                    </ContentData>
                    )
                })
                :null
            }
        </div>
    )
}


const mapDispatchToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

export default connect(mapDispatchToProps, null)(Categoria)