import React, { useState } from 'react';
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
            onChange={props.callback}
            height={'92vh'}
            width={'45rem'}
            setOptions={{
                height: 200,
                buttonList: [
                    ['font'],
                    ['fontColor'],
                    ['paragraphStyle'],
                    ['align'],
                    ['list'],
                    ['image'],
                ]
            }}
            setDefaultStyle={"font-family: 'Slabo 27px', serif; font-size: 20px;"}    
        />
    );
};
export default Editor;

