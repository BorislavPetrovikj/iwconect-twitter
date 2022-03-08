import Button from '../../components/Button/Button';
import {NavLink} from '../../components/NavLink/NavLink';
import React from 'react';
import styled from 'styled-components';

export const Navbar = () => {
  return (
    <Styled.Container className="col-3">
      <NavLink text="Home" icon={<i className="fa fa-phone"></i>} />
      <NavLink text="Explore" />
      <NavLink text="Notifications" />
      <NavLink text="Messages" />
      <NavLink text="Bookmarks" />
      <NavLink text="Lists" />
      <NavLink text="Profile" />
      <NavLink text="More" />
      <Button name="Tweet" backgroundColor="blue" textColor="white" />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.nav`
    background: black;
    height: 100vh;
    border-right: 1px solid white;
  `,
};
