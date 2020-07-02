import { setup } from 'axios-cache-adapter'

const api = setup({
    baseURL: 'https://blog-30d3b.firebaseio.com',
    cache: {
        maxAge: 15 * 60 * 1000
    }
})

export const InternalApi = setup({
    baseURL: 'https://algorithms-study.herokuapp.com',
    cache: {
        maxAge: 15 * 60 * 1000
    }
})

export default api;