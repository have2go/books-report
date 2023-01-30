import "./Popup.css";
import Form from "../Form/Form";
import Delete from "../Delete/Delete";

function Popup({
    books,
    isOpen,
    setIsOpen,
    handleNewBook,
    type,
    selectedRow,
    handleDelete,
    setSelectedRow,
}) {
    function handleClose(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    // console.log(type)

    return (
        <>
            <div
                className={`popup ${isOpen ? "popup_active" : "popup_closed"}`}>
                <button
                    className="popup__close-btn"
                    onClick={handleClose}></button>
                
                    {type === "add" && (
                        <div className="popup__form">
                        <Form
                            books={books}
                            setIsOpen={setIsOpen}
                            handleNewBook={handleNewBook}
                        />
                        </div>
                    )}
                    {type === "delete" && (
                        <div className="popup__delete">
                            <Delete
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                            handleDelete={handleDelete}
                            setIsOpen={setIsOpen}
                        />
                        </div>
                    )}
                
            </div>
            <button
                className={`popup__overlay ${
                    isOpen ? "popup__overlay_active" : "popup__overlay_closed"
                }`}
                onClick={handleClose}></button>
        </>
    );
}

export default Popup;
