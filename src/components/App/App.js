import React from 'react';
import { MainContainer } from '../MainContainer';
import { Header } from '../Header';
import { TopBar } from '../TopBar';
import { SearchBar } from '../SearchBar';
import { Games } from '../Games';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
        <TopBar />
        <SearchBar />
        <Games />
      </MainContainer>
    </div>
  );
}

export { App };