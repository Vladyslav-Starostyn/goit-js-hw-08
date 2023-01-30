import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('input[name="email"]'),
  messageEl: document.querySelector('textarea[name="message"]'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ email: refs.emailEl.value, message: refs.messageEl.value })
  );
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: refs.emailEl.value, message: refs.messageEl.value });
  refs.formEl.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  refs.emailEl.value = storageData.email;
  refs.messageEl.value = storageData.message;
}
