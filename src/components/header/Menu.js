import React from 'react'

import {
    Menu, MenuItem
} from '../styles'
import Link from 'next/link'
const cores = require('../../colors/colors.json')
function MenuComponent(props) {
    return (
        <Menu>
            <Link href={'/'}>
                <MenuItem>
                    <a>Home</a>
                </MenuItem>
            </Link>
            <Link href={'/'}>
                <MenuItem>
                    <a>Recentes</a>
                </MenuItem>
            </Link>
            <Link href={'/'}>
                <MenuItem>
                    <a>Contato</a>
                </MenuItem>
            </Link>
            <Link href={'/about'}>
                <MenuItem>
                    <a>Sobre</a>
                </MenuItem>
            </Link>
            <Link href={'/write/ozeias'}>
                <MenuItem style={{
                    width: 55,
                    height: 55,                    
                    borderWidth: 5,                     
                    borderRadius: '50%',
                    borderColor: cores.BACKGROUND,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <a>Logar</a>
                </MenuItem>
            </Link>
        </Menu>
    )
}

export default MenuComponent

