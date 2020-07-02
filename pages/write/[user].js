import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Editor from '../../src/components/Editor'
import {
	ContentData,
	Menu,
	MenuItem
} from '../../src/components/styles'
import api from '../api/defaultAxios'

export default () => {
	const router = useRouter()	
	const { user } = router.query; 
	const [title, setTitle]  = useState('')
	const [data, setData] = useState('')
    const setTextEdit = text => {
        setData(text)
        console.log(text)
    }
    const setTextTitle = ev => {
        setTitle(ev.target.value)
        console.log(title)
    }
	const enviarPost = () => {
		const titulo = title.split(' ').join('-').toLocaleLowerCase()
		const post = {
			"content": data,
			"data":"00/00/2020",
			"subtitle":"humm",
			"title": titulo
		}
		api.post(`/posts/${titulo}.json`, {...post})
		.then(res => {			
			console.log('Resolvido')
		})
		.catch(err => {
			console.log('Erro no post ->'+`${err}`)

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
			<div style={{display: 'flex',
				width: '45rem',
				flexDirection: 'row',
				justifyContent:'flex-end',
				alignItems: 'center',
				marginBottom: 2,
			}}>
				<input type={'text'} 
					onChange={setTextTitle}
					placeholder={'Título da postagem'}
					style={{
						marginRight: 10,
						width: '100%',
						
						padding: 5,
						borderRadius: 4,
						fontSize: 16
					}}
				/>
				<MenuItem style={{borderBottomColor: 'red'}} onClick={enviarPost}>
					<a>Publicar</a>
				</MenuItem>
			</div>
            
			<Editor nome={user} callback={setTextEdit}/>
		</ContentData>
	)
}