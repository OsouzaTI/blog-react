import api from './defaultAxios'
export default (req, res) => {
    api.get(`posts.json`)
    .then((response)=>{             
        res.status(200).json({names: Object.keys(response.data)})
    })  
    .catch((err)=>res.status(500).json({erro: err}))
}