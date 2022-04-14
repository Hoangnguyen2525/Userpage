import { inputCommon } from '../../common/inputCommon.js';
import { inputCheckBox } from '../../common/inputCheckBox.js';
import { setScreen } from '../../Js/index.js';
import { SignIn } from './signIn.js';


import { isValidName, isValidEmail } from '../../Validate/validation.js';

class Register {
    image = document.createElement("img");
    container = document.createElement("div");
    title = document.createElement('h3');

    form = document.createElement('form');

    nameDiv = document.createElement('div');
    errName = document.createElement('span');

    phoneNumberDiv = document.createElement('div');


    emailDiv = document.createElement('div');
    errEmail = document.createElement('span');

    passDiv = document.createElement('div');
    errPass = document.createElement('span');

    passConfirmDiv = document.createElement('div');
    errPassConfirm = document.createElement('span');


    iconName = document.createElement('div');
    iconPhone = document.createElement('div');
    iconUser = document.createElement('div');
    iconPass = document.createElement('div');
    iconPassConfirm = document.createElement('div');

    inputName = new inputCommon("name", "Enter your name", "inputName");
    inputPhoneNumber = new inputCommon("number", "Enter your phone number", "inputPhoneNumber");
    inputEmail = new inputCommon("email", "Enter your email", "inputEmail");
    inputPassword = new inputCommon("password", "Enter your password", "inputPassword");
    inputConfirmPassword = new inputCommon("password", "Enter your confirm password", "inputConfirmPassword");

    lableCheckBox = document.createElement('span');
    inputCheckBox = new inputCheckBox('checkbox', 'remember', 'Agree statement', 'check');

    rule = document.createElement('a');

    actionContainer = document.createElement("div");
    btnLogin = document.createElement("button");
    btnRegister = document.createElement("button");

    correct = document.createElement("span");
    cmCircle = document.createElement('div');
    cmStem = document.createElement('div');
    cmKick = document.createElement('div');

    constructor() {
        this.title.innerHTML = "Passionate Chat Register";

        this.image.src = "../../Image/register.jpg"

        this.container.appendChild(this.form);

        this.lableCheckBox.innerHTML = "I agree all statement ";
        this.lableCheckBox.classList.add('check');

        this.rule.innerHTML = '<a href=""> Terms of service </a>';
        this.rule.classList.add('rule');

        this.lableCheckBox.appendChild(this.rule);

        this.form.appendChild(this.title);

        //NAME
        this.nameDiv.classList.add('inputDiv');

        this.iconName.innerHTML = '<i class="fas fa-address-card"></i>';
        this.iconName.classList.add('infor');

        this.nameDiv.appendChild(this.iconName);
        this.nameDiv.appendChild(this.inputName.container);

        // this.errName.classList.add('error');
        // this.nameDiv.appendChild(this.errName);

        this.form.appendChild(this.nameDiv);

        //Phone Number
        this.phoneNumberDiv.classList.add('inputDiv');

        this.iconPhone.innerHTML = '<i class="fas fa-phone-alt"></i>'
        this.iconPhone.classList.add('infor');

        this.phoneNumberDiv.appendChild(this.iconPhone);
        this.phoneNumberDiv.appendChild(this.inputPhoneNumber.container);

        this.form.appendChild(this.phoneNumberDiv);

        //EMAIL
        this.emailDiv.classList.add('inputDiv');

        this.iconUser.innerHTML = '<i class="fas fa-user"></i>';
        this.iconUser.classList.add('infor');

        this.emailDiv.appendChild(this.iconUser);
        this.emailDiv.appendChild(this.inputEmail.container);

        this.errEmail.classList.add('error');
        this.emailDiv.appendChild(this.errEmail);

        this.form.appendChild(this.emailDiv);

        //PASSWORD
        this.passDiv.classList.add('inputDiv');

        this.iconPass.innerHTML = '<i class="fas fa-lock"></i>';
        this.iconPass.classList.add('infor');

        this.passDiv.appendChild(this.iconPass);
        this.passDiv.appendChild(this.inputPassword.container);

        this.errPass.classList.add('error');
        this.passDiv.appendChild(this.errPass);

        this.form.appendChild(this.passDiv);


        this.passConfirmDiv.classList.add('inputDiv');

        this.iconPassConfirm.innerHTML = '<i class="fas fa-unlock-alt"></i>';
        this.iconPassConfirm.classList.add('infor');

        this.passConfirmDiv.appendChild(this.iconPassConfirm);
        this.passConfirmDiv.appendChild(this.inputConfirmPassword.container);

        this.errPassConfirm.classList.add('error');
        this.passConfirmDiv.appendChild(this.errPassConfirm);

        this.correct.classList.add("checkmark");

        this.cmCircle.classList.add("checkmark_circle");
        this.cmStem.classList.add("checkmark_stem");
        this.cmKick.classList.add("checkmark_kick");

        this.correct.appendChild(this.cmCircle);
        this.correct.appendChild(this.cmStem);
        this.correct.appendChild(this.cmKick);

        this.form.appendChild(this.passConfirmDiv);



        //this.form.appendChild(this.inputName.container);
        // this.form.appendChild(this.inputEmail.container);
        // this.form.appendChild(this.inputPassword.container);
        // this.form.appendChild(this.inputConfirmPassword.container);

        this.form.appendChild(this.inputCheckBox.container);
        this.inputCheckBox.container.appendChild(this.lableCheckBox);

        this.inputCheckBox.container.setAttribute('id', 'checkRule');
        this.inputCheckBox.container.classList.add('check');

        this.inputName.container.classList.add('infor');
        this.inputPhoneNumber.container.classList.add('infor');
        this.inputEmail.container.classList.add('infor');
        this.inputPassword.container.classList.add('infor');
        this.inputConfirmPassword.container.classList.add('infor');


        this.btnLogin.innerHTML = "Go to Login";
        this.btnLogin.classList.add("btnLog");
        this.btnRegister.innerHTML = "Register";
        this.btnRegister.classList.add("btnLog");

        this.container.classList.add("wrap");

        this.form.classList.add('form');

        this.btnLogin.addEventListener("click", (e) => {
            e.preventDefault();
            const signInScreen = new SignIn();
            setScreen(signInScreen.container);
        })

        this.btnRegister.addEventListener("click", this.handleRegister);

        this.container.appendChild(this.image);
        this.form.appendChild(this.btnLogin);
        this.form.appendChild(this.btnRegister);
    }

    handleRegister = (e) => {
        e.preventDefault();
        // const inputEmail = this.inputEmail.getValue();
        // const inputPassword = 
        const email = this.inputEmail.getValue();

        const phone = this.inputPhoneNumber.getValue();

        const password = this.inputPassword.getValue();
        const confirmPass = this.inputConfirmPassword.getValue();

        const nameUser = this.inputName.getValue();

        //console.log(checkRules);

        db.collection("users").add({
            email: email,
            name: nameUser,
            password: password,
            phoneNumber: phone,
        })

        //validate name
        if (isValidName(nameUser) == 0) {
            this.errName.classList.add('error');
            this.errName.innerHTML = "Invalid name";
            this.nameDiv.appendChild(this.errName);
        } else {
            this.nameDiv.appendChild(this.correct);
        }

        //validate email
        if (isValidEmail(email) == 1) {
            this.errEmail.appendChild(this.correct);
            //console.log('OK');
        } else {
            this.errEmail.classList.add('error');
            this.errEmail.innerHTML = "Invalid email";
            this.emailDiv.appendChild(this.errEmail);
        }

        //check length password
        if (password.length < 6) {
            this.errPass.innerHTML = "Password needs at least 6 characters";
        }
        else {
            this.errPass.appendChild(this.correct);
        }

        const checkRule = document.getElementById("check");
        //check confirm pass
        if ((password == confirmPass) && (checkRule.checked == true)) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    // ...
                    console.log(`User ${email} is created`);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                });
        } else {
            this.errPassConfirm.innerHTML = "Confirmation password is not correct";
        }
    }
}

export { Register }