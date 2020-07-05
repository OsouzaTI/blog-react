const functions = require('firebase-functions');
const cors = require('cors')({ origin: true })
const fs = require('fs')
const uuid = require('uuid-v4')

const { Storage } = require('@google-cloud/storage')
const storage = new Storage({
    projectId: 'blog-30d3b',
    keyFilename:'key-file.json'
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.UploadImage = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        try{
            fs.writeFileSync('/tmp/img.png',
                request.body.image, 'base64')
                console.log(request.body.image)
            const bucket = storage.bucket('blog-30d3b.appspot.com')
            const id = uuid()
            bucket.upload('/tmp/img.png', {
                uploadType: 'image',
                destination: `/posts/${id}.png`,
                metadata:{
                    metadata: {
                        contentType: 'image/png',
                        firebaseStorageDownloadTokens: id,
                    }
                }
            },(err, file)=>{
                if(err){
                    return response.status(500).json({error: err+'-request'})
                }else{
                    const fileName = encodeURIComponent(file.name)
                    const imageUrl  = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileName}?alt=media&token=${id}` 

                    return response.status(201).json({ imageUrl: imageUrl })
                }
            })
        }catch(err){
            console.log(err)
            return response.status(500).json({ error: err })
        }
    })
});
