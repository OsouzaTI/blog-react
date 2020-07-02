import React from 'react';
import { useRouter } from 'next/router'
import Editor from '../../src/components/Editor'
import {
	ContentData,
	Menu,
	MenuItem
} from '../../src/components/styles'

export default () => {
	const router = useRouter()	
    const { user } = router.query;   
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
					placeholder={'Título da postagem'}
					style={{
						marginRight: 10,
						width: '100%',
						
						padding: 5,
						borderRadius: 4,
						fontSize: 16
					}}
				/>
				<MenuItem style={{borderBottomColor: 'red'}}>
					<a>Publicar</a>
				</MenuItem>
			</div>
            
			<Editor nome={user}/>
		</ContentData>
	)
}