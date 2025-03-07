import './App.css';
import MyName from './components/MyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
     <h1>Olá Mundo</h1>
     <p>Salve React</p>
     <MyName />
     <Pessoa nome = "João" idade = {20} curso = "Engenharia" foto = "https://www.w3schools.com/w3images/avatar2.png"/>
      <Pessoa nome = "Maria" idade = {22} curso = "Medicina" foto = "https://www.w3schools.com/w3images/avatar3.png"/>
      <Pessoa nome = "José" idade = {24} curso = "Direito" foto = "https://www.w3schools.com/w3images/avatar4.png"/>
    </div>
  );
}
export default App;