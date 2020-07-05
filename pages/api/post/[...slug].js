import api from '../defaultAxios'

export const getParams = (slug) => {
    return new Promise(resolve =>{
        console.log(slug)
        const params = [{category:''},{name:''}]
        const request = slug
        const result = params.map((item, i) => {
            const key = Object.keys(item)[0];
            console.log(typeof key)
            item[key] = request[i];
            return item;
        })    

        const {category} = result[0];
        const { name }   = result[1];

        resolve({
            category: category,
            name: name
        })        
    })

}

export default (req, res) => {
    getParams(req.query.slug)
    .then(res => {
        const { category , name } = res;
        api.get(`posts/${category}/${name}.json`)
        .then((response)=>{
            const post = response.data; 
            const postKey = Object.keys(post)[0]
            res.status(200).json(post[postKey])      
        })  
        .catch((err)=>res.status(500).json({erro: err}))
    })
}
