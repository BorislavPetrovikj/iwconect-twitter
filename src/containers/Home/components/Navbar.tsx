import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button/Button'
import { NavLink } from '../../../components/NavLink/NavLink'




export const Navbar = () => {
    return (

        < Styled.Container className='col-3'>
            <NavLink text='Home' icon={<i className="fa-solid fa-barcode"></i>}></NavLink>
            <NavLink text='Explore'></NavLink>
            <NavLink text='Notifications'></NavLink>
            <NavLink text='Messages'></NavLink>
            <NavLink text='Lists'></NavLink>
            <NavLink text='Profile'></NavLink>
            <NavLink text='More'></NavLink>
            <Button name="Tweet" backgorundColor='blue' textColor='white'></Button>
        </Styled.Container>

    )
}


const Styled = {
    Container: styled.nav`
    background: cyan;
    height: 100vh; 
    `
}