import { useState } from "react";

export default function EditorWrapper({ nome }) {
    const [editorState, setEditorState] = useState('');    
    const setText = (event) => {
        setEditorState(event.target.value)
        console.log(editorState)
    } 

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <h4>User: {nome}</h4>
        <textarea onChange={setText} style={{width: '90vw', height: '60vh'}}>

        </textarea>
        </div>
    );
}