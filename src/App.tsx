import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';

export const App = () => {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <Form />
        <Footer />
      </div>
    </div>
  );
};
