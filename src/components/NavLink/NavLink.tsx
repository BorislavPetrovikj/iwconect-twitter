import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  icon?: JSX.Element;
}

export const NavLink = ({icon, text}: Props) => {
  return (
    <Styled.Container>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    margin-bottom: 10px;
  `,
  IconWrapper: styled.div`
    display: flex;
    height: 50px;
    flex: 1;
    color: white;
  `,
  TextWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
    padding-left: 10px;
    height: 50px;
    flex: 4;
  `,
};
