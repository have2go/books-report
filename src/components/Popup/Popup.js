import "./Popup.css";
import Form from "../Form/Form";
import Delete from '../Delete/Delete'

function Popup({ books, isOpen, setIsOpen, handleNewBook, type, selectedRow, handleDelete }) {
    function handleClose(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    // console.log(type)

    return (
        <div className={`popup ${isOpen ? "popup_active" : "popup_closed"}`}>
            <button className="popup__close-btn" onClick={handleClose}></button>
            <div className="popup__content">
                {type === 'add' && (<Form books={books} setIsOpen={setIsOpen} handleNewBook={handleNewBook}/>)}
                {type === 'delete' && (<Delete selectedRow={selectedRow} handleDelete={handleDelete} setIsOpen={setIsOpen} />)}  
            </div>
        </div>
    );
}

export default Popup;
