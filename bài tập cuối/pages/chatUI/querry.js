const db = firebase.firestore();

const userPage = document.createElement("div");
userPage.classList.add("col-lg-11", "userPage");

const wrap = document.querySelector(".chat_content_border");


const imgUser = document.createElement("div");
imgUser.classList.add("imgUser");

const avtUser = document.createElement("img");
avtUser.setAttribute("id", "avtUser");


imgUser.appendChild(avtUser);


let imgURL;
let files = [];
let reader;

avtUser.src = "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg";

const userForm = document.createElement("form");
const userList = document.createElement("ul");

userList.setAttribute("id", "user-list");

wrap.appendChild(userPage);

userPage.appendChild(imgUser);
imgUser.appendChild(userList);

const updateDiv = document.createElement("div");
updateDiv.classList.add("btnUpload");

const btnUpdate = document.createElement("button");
btnUpdate.innerHTML = "Save";
btnUpdate.setAttribute("id", "update")

updateDiv.appendChild(btnUpdate);

imgUser.appendChild(updateDiv);



// =========== RENDER USER INFOR =========== //

let form = document.createElement("form");

const nameDiv = document.createElement("div");
nameDiv.classList.add("inforDiv");

// ========= NAME ============
let labelName = document.createElement("label");
labelName.innerHTML = "Name: ";
const updateName = document.createElement("p");
nameDiv.appendChild(labelName);
nameDiv.appendChild(updateName);

// ========= PHONE NUMBER ============
const phoneDiv = document.createElement("div");
phoneDiv.classList.add("inforDiv");
let labelPhone = document.createElement("label");
labelPhone.innerHTML = "Phone number: ";
const updatePhone = document.createElement("p");
phoneDiv.appendChild(labelPhone);
phoneDiv.appendChild(updatePhone);

// ========= EMAIL ============
const emailDiv = document.createElement("div");
emailDiv.classList.add("inforDiv");
let labelEmail = document.createElement("label");
labelEmail.innerHTML = "Email: ";
const updateEmail = document.createElement("p");
emailDiv.appendChild(labelEmail);
emailDiv.appendChild(updateEmail);


const passDiv = document.createElement("div");
passDiv.classList.add("inforDiv");
let labelPass = document.createElement("label");
labelPass.innerHTML = "Password: ";
const updatePass = document.createElement("p");
passDiv.appendChild(labelPass);
passDiv.appendChild(updatePass);

db.collection("userInfor").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        if (firebase.auth().currentUser.email == doc.data().email) {
            renderUser(doc);
        }
    });
})

function renderUser(doc) {

    form.setAttribute("data-id", doc.id)

    updateName.textContent = doc.data().name;
    updatePhone.textContent = doc.data().phoneNumber;
    updateEmail.textContent = doc.data().email;
    updatePass.textContent = doc.data().password;

    form.appendChild(nameDiv);

    form.appendChild(phoneDiv);

    form.appendChild(emailDiv);
    form.appendChild(passDiv);

    userList.appendChild(form);
    userList.appendChild(updateDiv);
}



// ======================================================= //

$(document).ready(function() {
    $(".search_input").focus(function() {
        $(".input-group-search").css("box-shadow", "1px 1px 10px #888888");
    })
    $(".search_input").blur(function() {
        $(".input-group-search").css("box-shadow", "none");
    })
    $("#nav_Active").click(function() {
        // hide and show user page
        $(".hide").css("display", "block");
        $(".userPage").css("display", "none");
        // ===========================
        $("#nav_Active").css({
            "background-color": "#363e47",
            "color": "#f7f7f8"
        });
        $("#nav_Active").css("border-left", "3px solid #55d48b");
        $("#nav_item1").css("border", "0px");
        $("#nav_item2").css("border", "0px");
        $("#nav_item3").css("border", "0px");
        $("#nav_item4").css("border", "0px");
        $("#nav_item1").css({
            " border-left": "0px",
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_item2").css({
            " border-left": "0px",
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_item3").css({
            " border-left": "0px",
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_item4").css({
            " border-left": "0px",
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
    });
    $("#logOutBtn").click(function() {
        firebase
            .auth()
            .signOut()
            .then(() => {
                // Sign-out successful.
                location.replace("../../index.html")
                console.log("Sign out successful");
                $(".chat_box_left").innerHTML = ""
            })
            .catch((error) => {
                // An error happened.
                console.log(error.message);
            });

    })

    $("#nav_item1").click(function() {
        // hide and show user page
        $(".hide").css("display", "none");
        $(".userPage").css("display", "block");
        // =============================
        $("#nav_item1").css({
            "border-left": "3px solid #55d48b ",
            "background-color": "#363e47",
            "color": "#f7f7f8"
        });
        $("#nav_Active").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_Active").css("border", "0px");
        $("#nav_item2").css("border", "0px");
        $("#nav_item3").css("border", "0px");
        $("#nav_item4").css("border", "0px");
        $("#nav_item2").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_item3").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_item4").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
    });
    $("#nav_item2").click(function() {
        $("#nav_item2").css({
            "border-left": "3px solid #55d48b ",
            "background-color": "#363e47",
            "color": "#f7f7f8"
        });
        $("#nav_Active").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_Active").css("border", "0px");
        $("#nav_item1").css("border", "0px");
        $("#nav_item3").css("border", "0px");
        $("#nav_item4").css("border", "0px");
        $("#nav_item1").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_item3").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_item4").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
    });
    $("#nav_item3").click(function() {
        $("#nav_item3").css({
            "border-left": "3px solid #55d48b ",
            "background-color": "#363e47",
            "color": "#f7f7f8"
        });
        $("#nav_Active").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_Active").css("border", "0px");
        $("#nav_item2").css("border", "0px");
        $("#nav_item1").css("border", "0px");
        $("#nav_item4").css("border", "0px");
        $("#nav_item1").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_item2").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_item4").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
    });
    $("#nav_item4").click(function() {
        $("#nav_item4").css({
            "border-left": "3px solid #55d48b ",
            "background-color": "#363e47",
            "color": "#f7f7f8"
        });
        $("#nav_Active").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_Active").css("border", "0px");
        $("#nav_item1").css("border", "0px");
        $("#nav_item3").css("border", "0px");
        $("#nav_item2").css("border", "0px");
        $("#nav_item1").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_item3").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
        $("#nav_item2").css({
            "background-color": "#303841",
            "color": "#a5b5c1"
        });
    });

    console.log($("#select"));

    // $("#select").click(function() {
    //     let input = document.createElement("input");
    //     input.type = 'file';

    //     input.onchange = e => {
    //         files = e.target.files;
    //         reader = new FileReader();
    //         reader.onload = function() {
    //             avtUser.src = reader.result;
    //         }
    //         reader.readAsDataURL(files[0]);
    //     }
    //     input.click();
    // });

    // $("#update").click(function() {
    //     console.log("ok");
    //     const emailVal = updateEmail.value;
    //     console.log(emailVal);
    //     const newEmailVal = updateNewEmail.value;
    //     console.log(newEmailVal);

    //     const nameVal = updateName.value;
    //     const passVal = updatePass.value;
    //     const phoneVal = updatePhone.value;
    //     db.collection("userInfor").get().then((snapshot) => {
    //         snapshot.docs.forEach(doc => {
    //             if (firebase.auth().currentUser.email == doc.data().email) {
    //                 //renderUser(doc);
    //                 //console.log(emailVal, nameVal, passVal, phoneVal);
    //                 db.collection("userInfor").doc(doc.id).update({
    //                     email: newEmailVal,
    //                     name: nameVal,
    //                     password: passVal,
    //                     phoneNumber: phoneVal,
    //                 })
    //             }
    //         });
    //     });

    //     const user = firebase.auth().currentUser;
    //     user.updateEmail(newEmailVal).then(() => {
    //         console.log("update email succesfully");
    //     }).catch((error) => {
    //         console.log("error");
    //     });
    // });

    // let imgName = document.getElementById("name-box");
    // console.log(imgName);

    // console.log($(".upload"));

    // UPLOAD IMAGE FIRESTORE DATABASE

    // document.querySelector("#upload").addEventListener("click", upanh)

    // function upanh() {

    //     var ref = firebase.storage().ref();

    //     let file = document.getElementById("name-box").files[0];
    //     let metadata = {
    //         contentType: file.type
    //     }
    //     const name = file.name

    //     const upLoadImg = ref.child(name).put(file, metadata)


    //     // uploadTask.on('state_changed', function(snapshot) {
    //     //         let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     //         console.log('Upload is ' + progress + '% done');
    //     //     },

    //     //     function(error) {
    //     //         alert('error in saving the image');
    //     //     },

    //     //     function() {
    //     //         uploadTask.snapshot.ref.getDownLoadURL().then(function(url) {
    //     //             ImgUrl = url;
    //     //             firebase.database().ref('Pictures/' + imgName).set({
    //     //                 Name: imgName,
    //     //                 Link: imgURL
    //     //             });
    //     //             alert("add image succesfully");
    //     //         });
    //     //     });

    //     // upLoadImg.then(snapshot => snapshot.ref.getDownloadURL()).then(url => { console.log(url); }).then(console.error)

    //     // db.collection("userInfor").get().then((snapshot) => {
    //     //     snapshot.docs.forEach(doc => {
    //     //         if (firebase.auth().currentUser.email == doc.data().email) {
    //     //             renderUser(doc);
    //     //         }
    //     //     });
    //     // })


    // };

    // $('textarea').keyup(function (e) {
    //     if (e.keyCode == 13) {    
    //         $(".chat-area").append(`       
    //          <div class="row mt-2 mb-4  chat-right-site">
    //         <div class="col-lg-11  pr-2 chat-content-area-right">
    //             <p>${$('textarea').val()}</p>
    //         </div>
    //         <div class="col-lg-1 d-flex align-items-center avatar_chat_area">
    //             <img src="https://vcdn1-giaitri.vnecdn.net/2013/09/09/Big-Moon-Above-River-1378713411.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=wV3BzDufSDkPN8rM8fpyWg"
    //                 class="rounded-circle mx-auto d-block  " alt="Cinque Terre" width="50"
    //                 height="50">
    //         </div>
    //     </div>`);
    //     $('textarea').val(" ") ;
    //     }
    // });
    //     $(".fa-location-arrow").click(function () {
    //         $(".chat-area").append(`       
    //         <div class="row mt-2    mb-4  chat-right-site">
    //        <div class="col-lg-11  pr-2 chat-content-area-right">
    //            <p >${$('textarea').val()}</p>
    //        </div>
    //        <div class="col-lg-1 d-flex align-items-center avatar_chat_area">
    //            <img src="https://vcdn1-giaitri.vnecdn.net/2013/09/09/Big-Moon-Above-River-1378713411.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=wV3BzDufSDkPN8rM8fpyWg"
    //                class="rounded-circle mx-auto d-block  " alt="Cinque Terre" width="50"
    //                height="50">
    //        </div>
    //    </div>`);
    //    $('textarea').val(" ") ;
    //     })
});