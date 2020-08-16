const inputs = document.querySelectorAll('.input');

// adicionando a classe focus
function focusFunc() {
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

// removendo a classe focus
function blurFunc() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
})


let show_hide = document.querySelector('#show-hide');
const password = document.querySelector('.password');
// ***
const [eye] = document.querySelectorAll('.eye .eye');
const eyeOff = document.querySelector('.eyeOff');

function showHide() {
  if (password.type == "password") {
    password.type = "text";
    eyeOff.style.opacity = '1';
    eye.style.opacity = '0';
  } else {
    password.type = "password";
    eyeOff.style.opacity = '0';
    eye.style.opacity = '1';
  }
}

function valid(item, v_icon, inv_icon) {
  let text = document.querySelector(`#${item} .here`);
  text.classList.add('check');
  let valid_icon = document.querySelector(`#${item} .${v_icon}`);
  valid_icon.style.opacity = '1';
  let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
  invalid_icon.style.opacity = '0';
}

function invalid(item, v_icon, inv_icon) {
  let text = document.querySelector(`#${item} .here`);
  text.classList.remove('check');
  let valid_icon = document.querySelector(`#${item} .${v_icon}`);
  valid_icon.style.opacity = '0';
  let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
  invalid_icon.style.opacity = '1';
}

function textChange() {
  if (password.value.match(/[A-Z]/) != null) {
    valid('capital', 'fa-check', 'fa-times');
  }
  else {
    invalid('capital', 'fa-check', 'fa-times');
  }

  if (password.value.match(/[0-9]/) != null) {
    valid('num', 'fa-check', 'fa-times');
  }
  else {
    invalid('num', 'fa-check', 'fa-times');
  }

  if (password.value.match(/[!@#$%^&*-]/) != null) {
    valid('char', 'fa-check', 'fa-times');
  }
  else {
    invalid('char', 'fa-check', 'fa-times');
  }

  if (password.value.length > 7) {
    valid('more8', 'fa-check', 'fa-times')
  }
  else {
    invalid('more8', 'fa-check', 'fa-times')
  }
}
