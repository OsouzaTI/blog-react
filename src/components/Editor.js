import React, { useState } from 'react';
import dynamic from 'next/dynamic'
const SunEditor = dynamic(
    () => import('suneditor-react'),
    {
        ssr: false
    }
)

<<<<<<< HEAD

const Editor = props => {
    return (                 
=======
const Editor = props => {
    return (            
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
        <SunEditor 
            onChange={props.callback}
            height={'92vh'}
            width={'45rem'}
<<<<<<< HEAD
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
=======
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
            setDefaultStyle={"font-family: 'Slabo 27px', serif; font-size: 20px;"}    
        />
    );
};
export default Editor;

