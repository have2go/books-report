import "./Toolbar.css";

function Toolbar({ isOpen, setIsOpen, setPopupType, selectedRow }) {
    function handleAdd(e) {
        e.preventDefault();
        setPopupType("add");
        setIsOpen(true);
    }

    function handleDelete(e) {
        e.preventDefault();
        setPopupType("delete");
        setIsOpen(true);
    }

    return (
        <section className="toolbar">
            <button
                className="toolbar__btn toolbar__add-btn"
                onClick={handleAdd}>
                Добавить издание
            </button>
            {selectedRow !== '' && <button
                className="toolbar__btn toolbar__delete-btn"
                onClick={handleDelete}>
                Удалить издание
            </button>}
            
        </section>
    );
}

export default Toolbar;
