import api from './defaultAxios'
export default (req, res) => {
    api.get(`posts.json`)
    .then((response)=>{        
        const data = response.data;
        res.status(200).json({posts: data})
    })  
    .catch((err)=>res.status(500).json({erro: err}))
}