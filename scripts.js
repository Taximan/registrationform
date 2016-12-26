var form = document.querySelector('.register-form');
var usernameInput = document.querySelector('#register-form-username-field');
var passwordInput = document.querySelector('#register-form-password-field');
var passwordConfirmInput = document.querySelector('#register-form-password-confirm-field');
var submitButton = document.querySelector('.register-form > button[type="submit"]');

var loadingIndicator = document.querySelector('.loading-indicator');
var successMsg = document.querySelector('.form-message-success')
var successMsgActionBtn = document.querySelector('.form-message-success-action');

var failMsg = document.querySelector('.form-message-fail')
var failMsgActionBtn = document.querySelector('.form-message-fail-action');

form.addEventListener('submit', function (e) {
  console.log('submitting..');

  document.activeElement.blur();
  setLoadingState();

  setTimeout(() => {
    if(Math.random() > 0.5) {
      setSuccessState('Welcome aboard!');
    } else {
      setFailState('Username already taken!');
    }
  }, 700)
  
});

successMsgActionBtn.addEventListener('click', function (e) {
  e.preventDefault();
  unsetSuccessState();
});

failMsgActionBtn.addEventListener('click', function (e) {
  e.preventDefault();
  unsetFailState();
})

function clearForm() {
  usernameInput.value = '';
  passwordInput.value = '';
  passwordConfirmInput.value = '';
}

function setInputsDisabledState(val) {
  usernameInput.disabled = val;
  passwordInput.disabled = val;
  passwordConfirmInput.disabled = val;
  submitButton.disabled = val;
}

function unlockInputs() {
  setInputsDisabledState(false);
}

function lockInputs() {
  setInputsDisabledState(true);
}

function setLoadingState() {
  loadingIndicator.classList.add('is-visiable');
  lockInputs();
}

function unsetLoadingState() {
  loadingIndicator.classList.remove('is-visiable');
  unlockInputs();
}

function setSuccessState(msg) {
  successMsg.classList.add('is-visiable')
  successMsg.querySelector('.form-message-success-text').innerHTML = msg;
  clearForm();
}

function unsetSuccessState() {
  unsetLoadingState();
  successMsg.classList.remove('is-visiable');
}

function setFailState(msg) {
  failMsg.classList.add('is-visiable');
  failMsg.querySelector('.form-message-fail-text').innerHTML = msg;
}

function unsetFailState() {
  unsetLoadingState();
  failMsg.classList.remove('is-visiable');
}