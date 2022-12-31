const mail = document.querySelector('.--js-mail');
const submit = document.querySelector('.--js-submit');
const input_box = document.querySelector('.container__inputs');
const error = document.querySelector('.error_mess');

const email = mail.value

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

submit.addEventListener('click', () => {
    if (!validateEmail(mail.value)) {
        // alert("Please enter a valid email address");
        mail.classList.add('error');
        error.style.display = 'block'
      } else {
        mail.classList.remove('error');
        error.style.display = 'none'
      }
});

// console.log(validateEmail('czernik@interia.eu'))