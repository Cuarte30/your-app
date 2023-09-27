
import './App.css';
import Encuestas from './components/Encuestas';
import React, { useState } from 'react';
function App() {

const [encuestas] = useState([
  {
    id: 1,
    pregunta: '¿Cuál es tu color favorito?',
    opciones: ['Rojo', 'Azul', 'Verde'],
  },
  {
    id: 2,
    pregunta: '¿Cuál es tu comida favorita?',
    opciones: ['Pizza', 'Hamburguesa', 'Sushi','Asado'],
  },
  {
    id: 3,
    pregunta: '¿Cuál es tu deporte favorito?',
    opciones: ['Futbol', 'Basquet', 'Voley','Rugby', 'Otros'],
  },
  // Puedes agregar más encuestas aquí si lo deseas
]);

return (
  <div className="App">
    <header className="App-header">
     
      <h1>Aplicación de Encuestas</h1>
     
      <Encuestas encuestas={encuestas} />
    </header>
  </div>
);
}

export default App;



