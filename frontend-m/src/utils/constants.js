const token = localStorage.getItem('token');

const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
const config = {
  url: "https://api.mesto.sovickiy.nomoredomains.sbs",
  headers: {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};

export { enableValidation, config };