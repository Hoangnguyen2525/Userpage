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
  
    constructor(id, name, users) {
      this.id = id;
      this.name = name;
      this.users = users;
  
      this.txtName.innerHTML = name;
      this.txtNoOfUsers.innerHTML = `( ${users.length} )`;


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
    
            this.pingChat.setAttribute("class","col-lg-2 ping_chat_box")
            this.pingChat.appendChild(this.pingChatText)
        
    //   this.container.setAttribute("class", "col-lg-12")
    //   this.container.appendChild(this.txtName);
    //   this.container.appendChild(this.txtNoOfUsers);
            this.chatText.innerHTML= this.name
            this.nameChat.innerHTML=this.users
    }
  
    setOnClick = (listener) => {
      this.contentDiv.onclick = () => {
        listener(this.id, this.name, this.users);
      };
    };
  
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