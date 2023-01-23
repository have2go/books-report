import './Popup.css';

function Popup({isOpen, setIsOpen}) {

    function handleClose(e) {
        e.preventDefault();
        setIsOpen(false);
    }
    
    return(
        <div className={`popup ${isOpen ? 'popup_active' : 'popup_closed'}`}>
            <button className='popup__close-btn' onClick={handleClose}></button>
        </div>
    )
}

export default Popup;