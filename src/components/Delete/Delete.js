import "./Delete.css";

function Delete({selectedRow, handleDelete, setIsOpen}) {

    // console.log(selectedRow);
    function handleClick() {
        handleDelete(selectedRow);
        setIsOpen(false);
    }
    return (
        <div>
            <h4>Вы действительно хотите удалить "{selectedRow.title}"?</h4>
            <button className="delete__btn" onClick={handleClick}>Удалить</button>
        </div>
    );
}

export default Delete;
