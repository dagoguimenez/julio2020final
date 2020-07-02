import React from 'react';

import PageFooter from './components/footer.jsx';
import Header from './components/header.jsx';

import { TextBenelli,TextBmw,TextKawa,TextKtm } from "./components/paginaTexto";


function App() {
  
  
  return (
    <>
      
        <Header />

        <div className="grilla-principal">
            <TextBenelli />
            <TextBmw />
            <TextKawa />
            <TextKtm />
        </div>  
                                     
        <PageFooter />
        
    </>
  );
}

export default App;
