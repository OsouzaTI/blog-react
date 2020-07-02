import React from 'react';
import dynamic from 'next/dynamic'
const SunEditor = dynamic(
    () => import('suneditor-react'),
    {
        ssr: false
    }
)

const Editor = props => {
    return (            
        <SunEditor 
            height={'95vh'}
            setDefaultStyle={"font-family: 'Slabo 27px', serif; font-size: 27px;"}    
        />
    );
};
export default Editor;

