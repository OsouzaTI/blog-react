import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Editor from '../../src/components/Editor'
import Alert from '../../src/components/Alerts'
import {
	ContentData,
	Menu,
	MenuItem
} from '../../src/components/styles'
import api from '../api/defaultAxios'
import Modal from '../../src/components/Modal'
import {Form} from "react-bootstrap";
const options = require('./_options.json')
export default () => {
	const router = useRouter()	
	const { user } = router.query; 
	const [title, setTitle]  = useState('')
	const [data, setData] = useState([<></>])
	const [category, setCategory] = useState(options[0].option)
	const [showAlert, setShowAlert] = useState(false)
	const [messageAlert, setMessageAlert] = useState({type:'', message:''})
    const setTextEdit = text => {
        setData(text)
	}
	
    const setTextTitle = ev => {
        setTitle(ev.target.value)
	}
	
    const _setCategory = ev => {
		const Categoria = ev.target.value.split(' ').join('-').toLocaleLowerCase()
        setCategory(Categoria)
	}
	
	const alert = (type, message) => {
		setShowAlert(true)
		setMessageAlert({type: type, message: message})

		setTimeout(() => {
			setShowAlert(false)
			setMessageAlert({type:type, message:message})
		}, 5000);

	}

	const enviarPost = () => {
		if(category === 'Selecione'){
			console.log('Selecione a categoria');
			return;
		}
		const titulo = title.split(' ').join('-').toLocaleLowerCase()
		const post = {
			"content": data,
			"data":"00/00/2020",
			"subtitle":"humm",
			"title": titulo
		}
		console.log(post)
		api.post(`/posts/${category}/${titulo}.json`, {...post})
		.then(res => {			
			console.log('Resolvido')
			alert('success', 'Postado com sucesso')
		})
		.catch(err => {
			console.log('Erro no post ->'+`${err}`)
			alert('danger', 'Erro ao postar')
		})
	} 
	return (
		<ContentData style={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			paddingBottom: 10,
			paddingTop: 10,
		}}>
			<div style={{
				display: 'flex',
				width: '45rem',
				flexDirection: 'row',
				justifyContent:'flex-end',
				alignItems: 'center',
				marginBottom: 2,
			}}>
				{showAlert ? <Alert data={messageAlert}/> : null}
				<input type={'text'} 
					onChange={setTextTitle}
					placeholder={'Título da postagem'}
					style={styleInput}
				/>
				<Form.Control as="select" custom onChange={_setCategory}>
					{options ? options.map((item, i)=><option key={i} value={item.option}>{item.option}</option>):null}
				</Form.Control>
				<Modal title={'Upload Image'}/>
				<MenuItem style={{borderBottomColor: 'red'}} onClick={enviarPost}>
					<a>Publicar</a>
				</MenuItem>
			</div>
            
			<Editor nome={user} callback={setTextEdit}/>
		</ContentData>
	)
}

const styleInput = {
	marginRight: 10,
	width: '90%',						
	padding: 5,
	borderRadius: 4,
	fontSize: 16
}