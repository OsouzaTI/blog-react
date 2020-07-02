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
				marginBottom: 2,
			}}>
			<MenuItem style={{borderBottomColor: 'red'}}>
				<a>Publicar</a>
			</MenuItem>
			</div>
            
			<Editor nome={user}/>
		</ContentData>
	)
}