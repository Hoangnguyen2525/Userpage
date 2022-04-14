import { ConversationItem } from "./conversationItem.js";


const userMessages = document.querySelector(".nameChat");
const pingChat = document.querySelector(".ping_chat_box")
class ConversationList {
  container = document.createElement("div");
  onConversationItemClick;
  onClickUser;
  conversations = [];


  constructor() {}

  setOnConversationItemClick = (listener) => {
    this.onConversationItemClick = listener;
    this.onClickUser=listener;

  };

  handleCreateConversationAdded = (id, name, users) => {
    const conversation = new ConversationItem(id, name, users);
    conversation.setOnClickUser((id,name,users)=>{
      this.onClickUser({
        id: id,
        name: name,
        users: users,
      });
    });
    conversation.setOnClick((id, name, users) => {
      console.log(id, name, users);

      this.onConversationItemClick({
        id: id,
        name: name,
        users: users,
      });
      userMessages.innerHTML = name
      

    });

    this.conversations.push(conversation);
    this.container.appendChild(conversation.container);
  };

  setStyleActiveConversation = (conversation) => {
    this.conversations.forEach((item) => {
      if (item.id === conversation.id) {
        item.setActiveHighlight(true);
      } else {
        item.setActiveHighlight(false);
      }
    });
  };
  
  removedItem = (id) => {
    const index = this.conversations.findIndex((item) => item.id === id);
    const conversation = this.conversations.find((item) => item.id === id);
    this.conversations.splice(index, 1);
    conversation.contentDiv.remove();
  };


  // reranking(inId, inName, inUsers){
  //   this.conversations.forEach((item) => {
  //     item.contentDiv.remove();
  //   });
  //   const conversation = new ConversationItem(inId, inName, inUsers);
  //   this.conversations.unshift(conversation);
  //   this.conversations.forEach((item) => {
  //     const conversation = new ConversationItem(item.id, item.name, item.users);
  //     conversation.setOnClick((id, name, users) => {
  //       this.onConversationItemClick({
  //         id: id,
  //         name: name,
  //         users: users,
  //       });
  //       userMessages.innerHTML = name;
  //     });
      
  //     this.container.appendChild(conversation.container);
  //   });



  // }
}

export { ConversationList };
