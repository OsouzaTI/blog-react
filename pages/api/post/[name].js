import api from '../defaultAxios'
export default (req, res) => {
    //req.query.name
    const { name } = req.query;
    console.log(name)
    api.get(`posts/${name}.json`)
    .then((response)=>{
        const post = response.data; 
        const postKey = Object.keys(post)[0]
        res.status(200).json(post[postKey])      
    })  
    .catch((err)=>res.status(500).json({erro: err}))
}
