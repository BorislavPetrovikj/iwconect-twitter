import React from 'react'
import styled from 'styled-components'



interface Props {
    icon?: JSX.Element;
    text: string;

}

export const NavLink = ({ icon, text }: Props) => {
    return (
        <Styled.Container >
            <Styled.Iconwrapper>{icon}</Styled.Iconwrapper>
            <Styled.TextWrapper>{text}</Styled.TextWrapper>
        </Styled.Container>

    )
}

const Styled = {
    Container: styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    height:50px;
    margin-bottom:10px;
   `,
    Iconwrapper: styled.div`
    display:flex;
    flex: 1;
    height:50px;
   `,
    TextWrapper: styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding-left:10px;
    flex:4;
    height:50px;
  `
} 