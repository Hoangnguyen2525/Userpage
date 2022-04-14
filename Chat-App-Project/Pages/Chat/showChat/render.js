
import { ChatUser } from "./chatUser.js";

const userChat = document.querySelector(".chat_box_left")

const setScreen = (container) => {
    userChat.innerHTML = ""
    userChat.appendChild(container)
}



      const chat = new ChatUser();

      setScreen(chat.container)




export { setScreen }