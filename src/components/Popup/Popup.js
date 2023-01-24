import "./Popup.css";
// import handleReadingFile from "../../../files";

function Popup({ isOpen, setIsOpen, books, setBooks, handleNewBook }) {
    function handleClose(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newBook = {
            id: 4,
            date: "00.00.2023",
            department: "Е1",
            title: "Книга",
            vi: "У",
            sp: "Т",
            editor: "З",
            layout: "СВ",
            pages: "45",
            volume: "5500",
            printing: "100",
            year: "2005",
        };
        handleNewBook(newBook);
        setIsOpen(false);
    }

    return (
        <div className={`popup ${isOpen ? "popup_active" : "popup_closed"}`}>
            <button className="popup__close-btn" onClick={handleClose}></button>
            <div className="popup__content">
                <h4 className="popup__title">Добавить издание</h4>
                <form className="popup__input-container">
                    <label className="popup__input-label">
                        Дата постановки
                        <input
                            className="popup__input-date"
                            name="date"
                            type="date"
                            min="2017-01-01"
                            max="2030-12-31"
                        />
                    </label>

                    <label className="popup__input-label">
                        Кафедра
                        <input
                            className="popup__input-dep"
                            name="dep"
                            type="text"
                        />
                    </label>
                    <label className="popup__input-label">
                        Название
                        <input
                            className="popup__input-title"
                            name="title"
                            type="text"
                        />
                    </label>
                    <label className="popup__input-label">
                        ВИ
                        <input
                            className="popup__input-vi"
                            name="vi"
                            type="text"
                        />
                    </label>
                    <label className="popup__input-label">
                        СП
                        <input
                            className="popup__input-sp"
                            name="sp"
                            type="text"
                        />
                    </label>
                    <label className="popup__input-label">
                        Редактор
                        <input
                            className="popup__input-editor"
                            name="editor"
                            type="text"
                        />
                    </label>
                    <label className="popup__input-label">
                        Верстальщик
                        <input
                            className="popup__input-layout"
                            name="layout"
                            type="text"
                        />
                    </label>
                    <label className="popup__input-label">
                        Страниц
                        <input
                            className="popup__input-pages"
                            name="pages"
                            type="number"
                        />
                    </label>
                    <label className="popup__input-label">
                        Объём
                        <input
                            className="popup__input-volume"
                            name="volume"
                            type="number"
                        />
                    </label>
                    <label className="popup__input-label">
                        Тираж
                        <input
                            className="popup__input-printing"
                            name="printing"
                            type="number"
                        />
                    </label>
                    <label className="popup__input-label">
                        Год
                        <input
                            className="popup__input-year"
                            name="year"
                            type="number"
                            maxLength="4"
                        />
                    </label>
                    <button
                        className="popup__submit-btn"
                        type="submit"
                        onClick={handleSubmit}>
                        Добавить
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Popup;
