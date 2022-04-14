import { MessageItem } from "./messageItem.js";

const userMessages = document.querySelector(".nameChat");

class MessageList {
  container = document.createElement("div");

  constructor() {}

  addMessage = (message) => {
    this.container.setAttribute("class", "row mt-2 mb-4  chat-right-site")
    const messageItem = new MessageItem(message.content , message.sender);
    this.container.appendChild(messageItem.container);
  };

  clearMessage = () => {
    userMessages.innerHTML = ""
    this.container.innerHTML = "";
  };
}

export { MessageList };
