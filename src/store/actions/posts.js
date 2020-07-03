import { SET_POSTS, SET_CATEGORIAS } from './actionsType'
import { InternalApi } from '../../../pages/api/defaultAxios'

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const setCategorias = categorias => {
    return {
        type: SET_CATEGORIAS,
        payload: categorias
    }
}

export const fetchPosts = () => {
    return dispatch => {
        InternalApi.get('api/post')
        .then(res =>{           
            const posts = res.data.posts;
            const keys = Object.keys(res.data.posts);
            const categorias = keys.map((item)=>{
                return {
                    name: item,
                    length: Object.keys(posts[item]).length
                }
            })
            
            dispatch(setCategorias(categorias))
            dispatch(setPosts(posts))            
        })
        .catch(err => console.log(err))
    }
}