import './App.css';
import Table from '../Table/Table';
import Popup from '../Popup/Popup';
import { useEffect, useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';


// fs.readFile('src/data/data.json', (err, data) => {
//   if (err) throw err;
//   const books = JSON.parse(data);
//   console.log(books);
// });

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [books, setBooks] = useState([]);
  // console.log(isOpen)
  useEffect(() => {
    const fs = window.require('fs');
    const rawBooks = fs.readFileSync('src/data/books.json');
    const preparedBooks = JSON.parse(rawBooks);
    setBooks(preparedBooks);
    console.log('useEffect triggered')
  }, [])

  function handleNewBook(newBook) {
    const booksArr = books;
    booksArr.push(newBook);
    setBooks(booksArr);
    console.log(books);
  }
  

  return (
    <div className="App">
      <Toolbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Table books={books} />
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} books={books} setBooks={setBooks} handleNewBook={handleNewBook} />
    </div>
  );
}

export default App;
