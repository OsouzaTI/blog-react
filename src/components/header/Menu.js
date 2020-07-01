import React from 'react'

import {
    Menu, MenuItem
} from '../styles'
import Link from 'next/link'

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
        </Menu>
    )
}

export default MenuComponent

