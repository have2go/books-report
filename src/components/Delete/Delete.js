import "./Delete.css";

function Delete({selectedRow, setSelectedRow, handleDelete, setIsOpen}) {

    // console.log(selectedRow);
    function handleClick() {
        handleDelete(selectedRow);
        setSelectedRow("");
        setIsOpen(false);
    }
    return (
        <div className="delete">
            <h4>Вы действительно хотите удалить "{selectedRow.title}"?</h4>
            <button className="delete__btn" onClick={handleClick}>Удалить</button>
        </div>
    );
}

export default Delete;
