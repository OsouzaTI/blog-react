import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Editor from '../../src/components/Editor'
import Alert from '../../src/components/Alerts'
import {
	ContentData,
	Menu,
	MenuItem,
	GridWrite
} from '../../src/components/styles'
import useSWR from 'swr'
import fetcher from '../api/defaultAxios'
import axios from 'axios'
import Modal from '../../src/components/Modal'
import {Form} from "react-bootstrap";
const options = require('./_options.json')
export default () => {
	const router = useRouter()	
	const { user } = router.query; 
	const [title, setTitle]  = useState('')
	const [subtitle, setSubTitle]  = useState('')
	const [date, setDate] = useState([<></>])
	const [category, setCategory] = useState(options[0].option)
	const [showAlert, setShowAlert] = useState(false)
	const [messageAlert, setMessageAlert] = useState({type:'', message:''})
    const setTextEdit = text => {
        setDate(text)
	}
	
    const setTextTitle = ev => {
        setTitle(ev.target.value)
	}
    const setTextSubTitle = ev => {
        setSubTitle(ev.target.value)
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
		
		const post = {
			category: category,
			content: date,
			date:`${new Date().toISOString()}`,
			subtitle:subtitle,
			title: title
		}	
		const createPost = `
        mutation{
			createPost(
				category:"${post.category}"
				title:"${post.title}",
				subtitle:"${post.subtitle}",
				date:"${post.date}",
				content:"${post.content}"
			){
				title
				subtitle
				data
				content
			}
		}
		`;
		// const { data, error } = useSWR(createPost, fetcher)	
		axios({
			url: '/api/graphql',
			method: 'post',
			data: {
			  query: createPost
			}
		}).then((result) => {			
		 	alert('success', 'Postado com sucesso')
			console.log(result.data)
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
			<GridWrite>
				{showAlert ? <Alert data={messageAlert}/> : null}
				<input type={'text'} 
					onChange={setTextTitle}
					placeholder={'Título da postagem'}
					style={styleInput}
				/>
				<input type={'text'} 
					onChange={setTextSubTitle}
					placeholder={'Sub-título'}
					style={styleInput}
				/>
				<Form.Control as="select" custom onChange={_setCategory}>
					{options ? options.map((item, i)=><option key={i} value={item.option}>{item.option}</option>):null}
				</Form.Control>
			</GridWrite>
			<div style={{
				display:'flex',
				flexDirection:'row',
				width: '45rem',
				// backgroundColor:'red',
				justifyContent:'flex-end',
			}}>
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
	fontSize: 16,
}