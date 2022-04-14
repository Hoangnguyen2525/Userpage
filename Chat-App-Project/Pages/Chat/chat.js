

import { ConversationList } from "./conversationList.js";

class Chat {
  container = document.createElement("div");

  conversationList = new ConversationList();

  constructor() {
    this.container.appendChild(this.conversationList.container);
    this.container.setAttribute("class", "col-lg-2")
    this.subscribeConversation()
  }
    subscribeConversation = () => {
      db.collection("conversations").orderBy("updateDate").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            // console.log("new conversation: ", change.doc.data());
          }
          if (change.type === "modified") {
            // console.log("Modified conversation: ", change.doc.data());
          }
          if (change.type === "removed") {
            console.log("Removed conversation: ", change.doc.data());
          }
        });
      });
    }

}

export { Chat };


