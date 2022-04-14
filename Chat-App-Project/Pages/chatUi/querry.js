
db.collection("user").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        if (firebase.auth().currentUser.email == doc.data().email) {
            renderUser(doc);
        }
    });
})

function renderUser(doc) {
    $(".name").html(doc.data().name);
    $(".phone").html(doc.data().phoneNumber);
    $(".email").html(doc.data().email);
    $(".password").html(doc.data().password);
}

$(document).ready(function () {
    $(".search_input").focus(function () {
        $(".input-group-search").css("box-shadow", "1px 1px 10px #888888");
    })
    $(".search_input").blur(function () {
        $(".input-group-search").css("box-shadow", "none");
    })
    $("#nav_Active").click(function () {

        $(".user_page").fadeOut(500);
        $(".chat_left").fadeIn(500);
        $(".chat_center").fadeIn(500);
        $(".chat_right").fadeIn(500);
        $(".user_page").attr('hidden','true');
        $(".chat_left").removeAttr('hidden');
        $(".chat_center").removeAttr('hidden');
        $(".chat_right").removeAttr('hidden');
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
    $("#logOutBtn").click(function(){
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


    if($(".chat_left")[0].hidden == false ){
        $(".user_page")[0].hidden = true
    }
    $("#nav_item1").click(function () {
        $(".chat_left").attr('hidden','true');
        $(".chat_center").attr('hidden','true');
        $(".chat_right").attr('hidden','true');
        $(".chat_left").fadeOut(500);
        $(".chat_center").fadeOut(500);
        $(".chat_right").fadeOut(500);
        $(".user_page").fadeIn(500);
        $(".user_page").removeAttr('hidden');
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
    $("#nav_item2").click(function () {
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
    $("#nav_item3").click(function () {
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
    $("#nav_item4").click(function () {
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

