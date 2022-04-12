import { ConversationItem } from "./conversationItem.js";

const userMessages = document.querySelector(".nameChat");
class ConversationList {
  container = document.createElement("div");
  onConversationItemClick;
  conversations = [];

  constructor() {}

  setOnConversationItemClick = (listener) => {
    // this.onConversationItemClick = () => {};
    this.onConversationItemClick = listener;
  };

  handleCreateConversationAdded = (id, name, users) => {
    const conversation = new ConversationItem(id, name, users);
    conversation.setOnClick((id, name, users) => {
      // Get conversation information
      console.log(id, name, users);

      this.onConversationItemClick({
        id: id,
        name: name,
        users: users,
      });

      userMessages.innerHTML = name;
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
    // Update array
    const index = this.conversations.findIndex((item) => item.id === id);
    const conversation = this.conversations.find((item) => item.id === id);
    this.conversations.splice(index, 1);

    // Update UI
    conversation.contentDiv.remove();
  };
}

export { ConversationList };