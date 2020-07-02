import React from 'react';
import { useRouter } from 'next/router'
import Editor from '../../src/components/Editor'
import {
	ContentData
} from '../../src/components/styles'
export default () => {
	const router = useRouter()
    const { user } = router.query;   
	return (
		<ContentData>
			<Editor nome={user}/>
		</ContentData>
	)
}