import { Navbar } from '../Navbar/Navbar';

import React from 'react';
import { Main } from '../containers/Home/components/Main';
import { Search } from '../containers/Search/Search';


export const Home = () => {
  return (
    <div className="row">
      <Navbar />
      <Main />
      <Search />
    </div>
  );
};
