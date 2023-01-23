import './Toolbar.css';

function Toolbar({isOpen, setIsOpen}) {
    function handleAdd(e) {
        e.preventDefault();
        setIsOpen(true);
    }

    return(
        <section className='toolbar'>
            <button className='toolbar__add-btn' onClick={handleAdd}></button>
        </section>
    )
}

export default Toolbar;