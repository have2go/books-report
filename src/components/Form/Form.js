import { useState } from "react";
import "./Form.css";

function Form({ books, setIsOpen, handleNewBook }) {
    const [date, setDate] = useState("");
    const [dep, setDep] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [vi, setVi] = useState("");
    const [sp, setSp] = useState("");
    const [editor, setEditor] = useState("");
    const [layout, setLayout] = useState("");
    const [pages, setPages] = useState(0);
    const [volume, setVolume] = useState(0);
    const [printing, setPrinting] = useState(0);
    const [year, setYear] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        const bookId = books[books.length - 1].id + 1;
        const newBook = {
            id: bookId,
            date: date.split("-").reverse().join("."),
            author: author,
            department: dep,
            title: title,
            vi: vi,
            sp: sp,
            editor: editor,
            layout: layout,
            pages: pages,
            volume: volume,
            printing: printing,
            year: year,
        };
        handleNewBook(newBook);
        setIsOpen(false);
    }

    return (
        <>
            <h4 className="from__title">Добавить издание</h4>
            <form className="form">
                <label className="form__input-label">
                    Дата постановки
                    <input
                        className="form__input form__input-date"
                        name="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min="2017-01-01"
                        max="2030-12-31"
                    />
                </label>
                <label className="form__input-label">
                    Кафедра
                    <input
                        className="form__input form__input-dep"
                        name="dep"
                        type="text"
                        maxLength={2}
                        value={dep}
                        onChange={(e) => setDep(e.target.value)}
                    />
                </label>
                <label className="form__input-label">
                    Автор
                    <input
                        className="form__input form__input-author"
                        name="author"
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </label>
                <label className="form__input-label">
                    Название
                    <input
                        className="form__input form__input-title"
                        name="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label className="form__input-label">
                    ВИ
                    <input
                        className="form__input form__input-vi"
                        name="vi"
                        type="text"
                        value={vi}
                        onChange={(e) => setVi(e.target.value)}
                    />
                </label>
                <label className="form__input-label">
                    СП
                    <input
                        className="form__input form__input-sp"
                        name="sp"
                        type="text"
                        value={sp}
                        onChange={(e) => setSp(e.target.value)}
                    />
                </label>
                <label className="form__input-label">
                    Редактор
                    <input
                        className="form__input form__input-editor"
                        name="editor"
                        type="text"
                        value={editor}
                        onChange={(e) => setEditor(e.target.value)}
                    />
                </label>
                <label className="form__input-label">
                    Верстальщик
                    <input
                        className="form__input form__input-layout"
                        name="layout"
                        type="text"
                        value={layout}
                        onChange={(e) => setLayout(e.target.value)}
                    />
                </label>
                <label className="form__input-label">
                    Страниц
                    <input
                        className="form__input form__input-pages"
                        name="pages"
                        type="number"
                        value={pages || ""}
                        onChange={(e) => setPages(e.target.value)}
                    />
                </label>
                <label className="form__input-label">
                    Объём
                    <input
                        className="form__input form__input-volume"
                        name="volume"
                        type="number"
                        value={volume || ""}
                        onChange={(e) => setVolume(e.target.value)}
                    />
                </label>
                <label className="form__input-label">
                    Тираж
                    <input
                        className="form__input form__input-printing"
                        name="printing"
                        type="number"
                        value={printing || ""}
                        onChange={(e) => setPrinting(e.target.value)}
                    />
                </label>
                <label className="form__input-label">
                    Год
                    <input
                        className="form__input form__input-year"
                        name="year"
                        type="number"
                        max={4}
                        value={year || ""}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </label>
                <button
                    className="form__submit-btn"
                    type="submit"
                    onClick={handleSubmit}>
                    Добавить
                </button>
            </form>
        </>
    );
}

export default Form;
