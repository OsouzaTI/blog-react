import {
    LoadingScreen as LS
} from './styles'

import React from 'react'

function LoadingScreen() {
    return (
        <LS>
            <img style={{
                width: 250,
                height: 250
            }} src={'/loading.gif'}/>
        </LS>
    )
}

export default LoadingScreen;
