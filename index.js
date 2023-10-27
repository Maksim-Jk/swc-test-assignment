const modals = document.getElementById('modals');
const contactsModal = document.getElementById('contacts-modal');
const showContactsModelButton = document.getElementById('show-contacts-model-button');

showContactsModelButton.addEventListener('click', () => {
    modals.style.opacity = '1';
    modals.style.zIndex = '100';
    contactsModal.style.opacity = '1';
    contactsModal.style.zIndex = '110';
})

modals.addEventListener("click", function (event) {
    if (event.target === modals) {
        modals.style.opacity = '-1';
        modals.style.zIndex = '-1';
        contactsModal.style.opacity = '-1';
        contactsModal.style.zIndex = '-1';
    }
});
