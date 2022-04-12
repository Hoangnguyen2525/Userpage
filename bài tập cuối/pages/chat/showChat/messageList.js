import { MessageItem } from "./messageItem.js";

class MessageList {
  container = document.createElement("div");

  constructor() {}

  addMessage = (message) => {
    this.container.setAttribute("class", "row mt-2 mb-4  chat-right-site")
    const messageItem = new MessageItem(message.content);
    this.container.appendChild(messageItem.container);
  };

  clearMessage = () => {
    this.container.innerHTML = "";
  };
}

export { MessageList };