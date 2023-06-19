import React from 'react';
import { MainContainer } from '../MainContainer';
import { Header } from '../Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
      </MainContainer>
    </div>
  );
}

export { App };