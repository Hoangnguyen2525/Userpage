import { inputCommon } from '../../common/inputCommon.js';
import { inputCheckBox } from '../../common/inputCheckBox.js';
import { setScreen } from '../../Js/index.js';
import { Register } from './signUp.js'

class SignIn {
    image = document.createElement("img");
    //imgDiv = document.createElement('div');
    container = document.createElement('div');
    title = document.createElement('h3');

    form = document.createElement('form');

    emailDiv = document.createElement('div');
    passDiv = document.createElement('div');

    iconUser = document.createElement('div');
    iconPass = document.createElement('div');

    inputEmail = new inputCommon("email", "Enter your email", "inputEmail");
    inputPass = new inputCommon("password", "Enter your password", "inputPassword");

    lableCheckBox = document.createElement('span');
    inputCheckBox = new inputCheckBox('checkbox', 'remember', 'Remember me');

    actionContainer = document.createElement('div');
    btnLogin = document.createElement('button');
    btnRegister = document.createElement('button');

    lableSocial = document.createElement('span');
    socials = document.createElement('div');

    faceBook = document.createElement('a');
    twitter = document.createElement('a');
    google = document.createElement('a');

    constructor() {
        this.title.innerHTML = "Login To Passionate Chat";

        //this.imgDiv.classList.add('img-login');
        this.container.appendChild(this.image);
        this.image.src = '../../Image/login.jpg';

        this.container.appendChild(this.form);

        this.lableCheckBox.innerHTML = "Remember me";
        this.lableCheckBox.classList.add('check');

        this.form.appendChild(this.title);

        this.emailDiv.classList.add('inputDiv');

        this.iconUser.innerHTML = '<i class="fas fa-user"></i>';
        this.iconUser.classList.add('infor');

        this.emailDiv.appendChild(this.iconUser);
        this.emailDiv.appendChild(this.inputEmail.container);

        this.form.appendChild(this.emailDiv);
        //this.form.appendChild(this.inputEmail.container);

        this.passDiv.classList.add('inputDiv');

        this.iconPass.innerHTML = '<i class="fas fa-lock"></i>';
        this.iconPass.classList.add('infor');

        this.passDiv.appendChild(this.iconPass);
        this.passDiv.appendChild(this.inputPass.container);

        this.form.appendChild(this.passDiv);

        this.form.appendChild(this.inputCheckBox.container);

        this.inputCheckBox.container.appendChild(this.lableCheckBox);
        this.form.appendChild(this.socials);
        this.inputCheckBox.container.classList.add('check');

        this.inputEmail.container.classList.add('infor');
        this.inputPass.container.classList.add('infor');

        this.btnLogin.innerHTML = "Login";
        this.btnLogin.classList.add("btnLog");
        this.btnRegister.innerHTML = "Go to register";
        this.btnRegister.classList.add("btnLog");

        this.lableSocial.innerHTML = "Or login with";

        this.socials.classList.add("socials");
        this.faceBook.innerHTML = '<i class="fab fa-facebook-f"></i>';
        this.faceBook.href = "";
        this.twitter.innerHTML = '<i class="fab fa-twitter"></i>';
        this.twitter.href = "";
        this.google.innerHTML = '<i class="fab fa-google"></i>';
        this.google.href = "";

        this.container.classList.add("wrap");

        this.form.classList.add('form');


        this.btnLogin.addEventListener("click", this.handleLogin);
        this.btnRegister.addEventListener("click", this.handleRegister);

        this.container.appendChild(this.image);

        this.form.appendChild(this.btnLogin);
        this.form.appendChild(this.btnRegister);

        this.socials.appendChild(this.lableSocial);
        this.socials.appendChild(this.faceBook);
        this.socials.appendChild(this.twitter);
        this.socials.appendChild(this.google);
    }

    handleLogin = (e) => {
        e.preventDefault();
        const email = this.inputEmail.getValue();
        const password = this.inputPass.getValue();

        console.log(email);
        console.log(password);
        if (!email) {
            this.inputEmail.setErrMessage("Email cannot be empty");
        } else {
            this.inputEmail.setErrMessage("");
        }

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in

            var user = userCredential.user;
            console.log(`Sign in`);
            console.dir(db.collection("users"))
            db.collection("users").onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                  if (change.type === "added") {
                    if(firebase.auth().currentUser.email == change.doc.data().email){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `Hi ${change.doc.data().name}`,
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                  }

                  if (change.type === "modified") {
              
                  }
                  if (change.type === "removed") {
                   
                  }
                });
              });
   
            

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if(errorCode === "auth/wrong-password"){
                this.inputPassword.setErrorMessage("Wrong Password")
            }
            console.log(errorCode);
        });

    }

    handleRegister = (e) => {
        e.preventDefault();
        const registerScreen = new Register();
        setScreen(registerScreen.container);
    }
}

export { SignIn }