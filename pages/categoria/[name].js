import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
    ContentData,
    PostContainer,
    GridPosts,
    ContainerGridPosts
} from '../../src/components/styles'
import Cards from '../../src/components/Cards'

import useSWR from 'swr'
import { fetcher } from '../api/defaultAxios'

function Categoria(props) {
    const router = useRouter()
    const { name } = router.query;    
    const getPosts = `
        {
            posts(category: "${name}"){
                title
                subtitle
                index
            }
        }
    `;
    const { data, error } = useSWR(getPosts, fetcher)      
    return (
        <div>
            <ContentData>
                <ContainerGridPosts>
                <GridPosts>
                    {data ? 
                        data.posts.map((item, i)=>
                            <Cards  title={item.title}
                                subtitle={item.subtitle}
                                link={`/post/${item.index}`}/>                                        )
                        :null
                    }
                </GridPosts>
                </ContainerGridPosts>               
            </ContentData>
        </div>
    )
}

export default Categoria