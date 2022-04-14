import { InputCommon } from "../inputCommon.js";
const addUserInputModal = document.querySelector(".userEmail")
const addUserInputModalLable = document.querySelector(".chatUserLable")
const userMessages = document.querySelector(".nameChat");
const addUserBtn = document.querySelector(".addUser")
class ConversationItem {
    id;
    name;
    users;
  
    container = document.createElement("div");
    txtName = document.createElement("span");
    txtNoOfUsers = document.createElement("span");

    contentDiv = document.createElement("div")
    avatarChat = document.createElement("div")
    avatarImg = document.createElement("img")
    contentChatBox = document.createElement("div")
    nameChat = document.createElement("h4")
    chatText = document.createElement("p")
    pingChat = document.createElement("div")
    pingChatText = document.createElement("span")
    addUser = new InputCommon(
      "text",
      "Enter your conversation name",
      "conversationName"
    );
    constructor(id, name, users) {
      this.id = id;
      this.name = name;
      this.users = users;
  


       this.container.appendChild(this.contentDiv)
            this.contentDiv.setAttribute("class", "row chat_box")
           
    
            this.contentDiv.appendChild(this.avatarChat)
            this.contentDiv.appendChild(this.contentChatBox)
            this.contentDiv.appendChild(this.pingChat)
    
            this.avatarChat.setAttribute("class", "col-lg-3 avatar_chat_box")
            this.avatarChat.appendChild(this.avatarImg)
            this.avatarImg.setAttribute("class", "rounded-circle mx-auto d-block")
            this.avatarImg.setAttribute("width", "45")
            this.avatarImg.setAttribute("height", "45")
    
            this.contentChatBox.setAttribute("class","col-lg-7 content_chat_box")
            this.contentChatBox.appendChild(this.nameChat)
            this.contentChatBox.appendChild(this.chatText)
    
            this.pingChat.setAttribute("class","col-lg-2")
            this.pingChat.innerHTML = "<i class='fa fa-user-plus' aria-hidden='true'></i>"
            this.pingChat.style.fontSize = "25px"
            this.pingChat.style.color = "#00c1a6"
            this.pingChat.setAttribute("data-toggle","modal")
            this.pingChat.setAttribute("data-target","#exampleModal")
            this.pingChat.appendChild(this.pingChatText)


        
          this.users.forEach((userArr) => {
            // console.log(userArr);
            if(userArr != firebase.auth().currentUser.email){
              this.chatText.innerHTML= this.name
              this.nameChat.innerHTML=userArr
            }
            else{
              this.chatText.innerHTML= this.name
            }
          })
    }
  


    setOnClick = (listener) => {
      this.contentDiv.onclick = () => {
        listener(this.id, this.name, this.users);

      };
    };

    setOnClickUser = (listener) => {
      this.pingChat.onclick = () => {
        listener(this.id, this.name, this.users);
        addUserBtn.addEventListener('click', () =>{
          const newUserList = this.users.concat(addUserInputModal.value);
          console.log(newUserList);
          console.log(this.id);
          db.collection("conversations").doc(this.id).update({
            users: newUserList,
          });
  
        })
       
      };
    };
    setAddUserBtn = () => {
 
    }
  
    setActiveHighlight = (isHighlight) => {
      if (isHighlight) {
        this.contentDiv.style.background = "#404953";
        this.contentDiv.style.color = "#f7f7f8";
      } else {
        this.contentDiv.style.background = "#363e47";
        this.contentDiv.style.color = "#f7f7f8";
      }
    };
  }
  

  export { ConversationItem };
  