class UserList {
    activeConversation = null;
  
    container = document.createElement("div");
    title = document.createElement("p");
    userList = document.createElement("ul");
  
    constructor() {
      this.container.classList.add("userList");
      this.title.classList.add("title");
      this.title.innerHTML = "User list";
      this.container.appendChild(this.title);
      this.container.appendChild(this.userList);
    }
  
    handleAddNewUser = (event) => {
      event.preventDefault();
      const newUserList = this.activeConversation.users.concat(this.input.value);
  
      db.collection("conversations").doc(this.activeConversation.id).update({
        users: newUserList,
      });
    };
  
    setActiveConversation = (conversation) => {
      this.activeConversation = conversation;
      this.userList.innerHTML = "";
      conversation.users.forEach((user) => {
        const li = document.createElement("li");
        li.innerHTML = user;
        this.userList.appendChild(li);
      });
    };
  }
  
  export { UserList };
  