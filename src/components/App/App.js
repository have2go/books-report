import "./App.css";
import Table from "../Table/Table";
import Popup from "../Popup/Popup";
import { useEffect, useState } from "react";
import Toolbar from "../Toolbar/Toolbar";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [books, setBooks] = useState([]);
    const [selectedRow, setSelectedRow] = useState('');
    const [popupType, setPopupType] = useState('');

    useEffect(() => {
        const fs = window.require("fs");
        const rawBooks = fs.readFileSync("src/data/books.json");
        const preparedBooks = JSON.parse(rawBooks);
        setBooks(preparedBooks);
        console.log("useEffect triggered");
    }, []);

    function handleNewBook(newBook) {
        const booksArr = books;
        booksArr.push(newBook);
        setBooks(booksArr);
        console.log(books);
      // вряд ли каждый раз перезаписывать файл это оптимальное решение
      // особенно если учитывать, что книг будет много
        const fs = window.require("fs");
        const booksToJson = JSON.stringify(booksArr, null, 2);
        fs.writeFile("src/data/books.json", booksToJson, (err) => {
            if (err) throw err;
            console.log("Data has been added!");
        });
    }

    function handleDeleteBook(bookToDelete) {
        
        let booksArray = books;
        booksArray = booksArray.filter(b => b.id !== bookToDelete.id);
        // console.log(booksArray);
        // console.log(books)
        setBooks(booksArray)  
        
        // booksArray.forEach((b, i) => {
        //     console.log(i)
        // })
        // console.log(books);
    }

    return (
        <div className="App">
            <Toolbar isOpen={isOpen} setIsOpen={setIsOpen} setPopupType={setPopupType} selectedRow={selectedRow} />
            <Table books={books} selectedRow={selectedRow} setSelectedRow={setSelectedRow} />
            <Popup
                books={books}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleNewBook={handleNewBook}
                type={popupType}
                selectedRow={selectedRow}
                handleDelete={handleDeleteBook}
            />
        </div>
    );
}

export default App;
