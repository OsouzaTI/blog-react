import React from 'react';
import Editor from '../../src/components/Editor'
import { useRouter } from 'next/router'

export default (req, res) => {
	const router = useRouter()
    const { user } = router.query;   
	return <Editor nome={user}/>
}