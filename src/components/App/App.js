import './App.css';
import Table from '../Table/Table';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [books, setBooks] = useState([]);
  console.log(isOpen)

  return (
    <div className="App">
      <Toolbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Table />
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
