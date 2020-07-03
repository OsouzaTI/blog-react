import { SET_POSTS, SET_CATEGORIAS } from '../actions/actionsType'

const initialState = {
    posts: [],
    categorias: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            console.log(action.payload)
            return {
                ...state,
                posts: [action.payload]
            }
        case SET_CATEGORIAS:            
            return {
                ...state,
                categorias: action.payload
            }
        default:
            return state;
    }
}

export default reducer;