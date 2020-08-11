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
// retornando array
const eye = document.querySelectorAll('.eye');
const eyeOff = document.querySelector('.eyeOff');

function showHide() {

  if(password.type == "password") {

    password.type = "text";
    eyeOff.style.opacity = '1';
    eye.style.opacity = '0';

  } else {

    password.type = "password";
    eyeOff.style.opacity = '0';
    eye.style.opacity = '1';

  }

}
