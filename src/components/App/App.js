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
        // const rawBooks = fs.readFileSync("/Users/Alexey/Desktop/books.json");
        const preparedBooks = JSON.parse(rawBooks);
        setBooks(preparedBooks);
        console.log("useEffect triggered");
    }, []);

    function handleNewBook(newBook) {
        const booksArr = books;
        booksArr.push(newBook);
        setBooks(booksArr);
        const fs = window.require("fs");
        const booksToJson = JSON.stringify(booksArr, null, 2);
        fs.writeFile("src/data/books.json", booksToJson, (err) => {
            if (err) throw err;
            console.log("Data has been added!");
        });
    }

    function handleDeleteBook(bookToDelete) {
        let booksArr = books;
        booksArr = booksArr.filter(b => b.id !== bookToDelete.id);
        setBooks(booksArr);
        const fs = window.require("fs");
        const booksToJson = JSON.stringify(booksArr, null, 2);
        fs.writeFile("src/data/books.json", booksToJson, (err) => {
            if (err) throw err;
            console.log("Data has been removed!");
        });
        console.log(booksArr);
    }

    function handleEditCell() {
        const fs = window.require("fs");
        fs.writeFile("src/data/books.json", JSON.stringify(books, null, 2), (err) => {
            if (err) throw err;
            console.log("Data has been changed!");
        });
    }

    return (
        <div className="App">
            <Toolbar isOpen={isOpen} setIsOpen={setIsOpen} setPopupType={setPopupType} selectedRow={selectedRow} />
            <Table books={books} selectedRow={selectedRow} setSelectedRow={setSelectedRow} handleEditCell={handleEditCell} />
            <Popup
                books={books}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleNewBook={handleNewBook}
                type={popupType}
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
                handleDelete={handleDeleteBook}
            />
        </div>
    );
}

export default App;
