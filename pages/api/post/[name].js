import api from '../defaultAxios'
export default (req, res) => {
    //req.query.name
    const { name } = req.query;
    console.log(name)
    api.get(`posts/${name}.json`)
    .then((response)=>{
        console.log(response.data)             
        res.status(200).json(response.data)
    })  
    .catch((err)=>res.status(500).json({erro: err}))
}
