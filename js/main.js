//Hide/Show passwords
// const hide = document.getElementById('show');
// hide.addEventListener('click', eyeToggle);

// function eyeToggle() {
//     passwordInput = document.getElementById('pw1');
//     const input = document.getElementById('icon');
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text"
//         icon.innerText = "visibility_off"
//     } else {
//         passwordInput.type = "password"
//         icon.innerText = "visibility"
//     }
// };

// let psw1 = document.getElementById('pw1');
// let psw2 = document.getElementById('pw2');



//  if (user.value == '' && psw1.value  == '' && 
// psw2.value == '') {


// button.setAttribute('disabled', '');
// }
// subMit.disabled = true;
let psw1 = document.getElementById('pw1');
let psw2 = document.getElementById('pw2');
let user = document.getElementById('user');

function enableSubmit(){
  let inputs = document.getElementsByClassName('required'); // Enter your class name for a required field, this should also be reflected within your form fields.
  let btn = document.querySelector('input[type="submit"]');
  let isValid = true;
  for (var i = 0; i < inputs.length; i++){
  let changedInput = inputs[i];
  if (changedInput.value.trim() === "" || changedInput.value === null){
  isValid = false;
  break;
  } else if(isValid = true) {}
  }
  btn.disabled = !isValid;
  }

  if (btn.disabled = isValid) {
    document.getElementsByClassName('sub')[0].classList.remove('subWhite')
  }

function submit() {
  let psw1 = document.getElementById('pw1');
  let psw2 = document.getElementById('pw2');
  let user = document.getElementById('user');

  if (user.value == "") {
    alert('Please enter a User Name')
  }
  if (psw1.value.match(/^(?=.{6,20}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$/) == null) {
    alert('Password does not not meet requirements')
    psw1.value = '';
    psw2.value = ''
  } else if (psw1.value != psw2.value) {
    alert('Passwords do not  match')
    psw2.value = '';
  }  else {
    document.getElementsByClassName('accepted')[0].classList.remove('hidden');
    document.getElementsByClassName('formBox')[0].classList.add('hidden');
    document.getElementById('userName').innerHTML = `Hello ${user.value}!`
  }
};