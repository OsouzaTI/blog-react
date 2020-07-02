import React, { useState } from 'react'
import {Modal, Button, Form} from "react-bootstrap";
import axios from 'axios'

function ModalComponent(props){
    const [image, setImage] = useState('')
    const [sendImage, setSendImage] = useState(false)
    const [show, setShow] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showLinks, setShowLinks] = useState(false)
    const [links, setLinks] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowImage = () => {
        const value = !showImage
        setShowImage(value)
    }
    const handleShowLinks = () => {
        const value = !showLinks
        setShowLinks(value)
    }
    const enviarImagem = () => {
        setSendImage(true)
        console.log(image)
        const link = ' https://us-central1-blog-30d3b.cloudfunctions.net/'
        axios({
			url: 'UploadImage',
			baseURL: link,
			method: 'post',
			data: {
                image: image
            }
		})
        .then(res => {
            console.log(`upload feito`)
            setSendImage(false)
            const temp = links;
            temp.push(res.data.imageUrl)
            setLinks(temp)
            console.log(links)
        })
        .catch(err => {
            console.log('erro no upload')
            setSendImage(false)
        })
    }

    const pickImage = event => {        
        const file = event.target.files[0];        
        const FR = new FileReader();
        FR.addEventListener("load", function(e) {
            const base64result = e.target.result.split(',')[1]
            setImage(base64result)
        });          
        if(file){
            FR.readAsDataURL( file );      
        }
    }

    return (
        <>
            <Button variant={'success'}
                style={{height: 50, padding: 0, color:'white'}} onClick={handleShow}>
                {props.title}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Selecione a imagem</Form.Label>                        
                        <Form.File 
                            onChange={pickImage}
                            id={"custom-file"}
                            label={"Custom file input"}
                            custom
                        />                                                
                    </Form>
                    {image && showImage ? 
                        <img 
                            style={{maxWidth: '100%', maxHeight: '100%'}}
                            src={`data:image/png;base64,${image}`} />
                        : null                        
                    }
                    <hr/>
                    <Form.Label style={{width:'100%', textAlign: 'center'}}>Links uploaded</Form.Label>
                    <div>
                    {links && showLinks ?                        
                        links.map((item, i)=>(<a target={'_blank'} href={item} key={i}>Link {i}<br/></a>))
                        :null                   
                    }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="secondary" onClick={handleShowImage}>
                    Show Image
                </Button>
                <Button variant="secondary" onClick={handleShowLinks}>
                    Show Links uploaded
                </Button>
                <Button variant="primary"
                    disabled={sendImage} onClick={enviarImagem}>
                    Enviar
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalComponent;