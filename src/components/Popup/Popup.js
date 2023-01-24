import "./Popup.css";
import Form from "../Form/Form";

function Popup({ books, isOpen, setIsOpen, handleNewBook }) {
    function handleClose(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    return (
        <div className={`popup ${isOpen ? "popup_active" : "popup_closed"}`}>
            <button className="popup__close-btn" onClick={handleClose}></button>
            <div className="popup__content">
                <h4 className="popup__title">Добавить издание</h4>
                <Form books={books} setIsOpen={setIsOpen} handleNewBook={handleNewBook}/>
            </div>
        </div>
    );
}

export default Popup;
