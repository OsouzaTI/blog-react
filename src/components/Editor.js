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
            height={'92vh'}
            width={'45rem'}
            setDefaultStyle={"font-family: 'Slabo 27px', serif; font-size: 20px;"}    
        />
    );
};
export default Editor;

