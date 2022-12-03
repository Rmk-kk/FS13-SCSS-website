
window.addEventListener('DOMContentLoaded', () => {
    modals();
});
const modals = () => {
    function bindModal(trigger, modal, close, modalContent) {
        trigger.addEventListener('click', e => {
            if(e.target) {
                e.preventDefault();
            }

            modal.style.display = 'block';
            document.body.style.overflow = 'none';
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'true';
        })

        modal.addEventListener('click', e => {
            if(e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'true';
            }
        })
    }

    const popUp = document.querySelector('.pop-up_overlay'),
        popUpBtn = document.querySelector('#togglePopUp'),
        popUpCloseBtn = document.querySelector('#popUpClose'),
        modalContent = document.querySelector('.pop-up_overlay_content');

    bindModal(popUpBtn, popUp, popUpCloseBtn,modalContent);
}