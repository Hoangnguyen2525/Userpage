
import { Chat } from "./chat.js";

const userChat = document.querySelector(".chat_box_left")
const createConversation = document.querySelector(".createConversation")

const setScreenUserChat = (container) => {
    userChat.innerHTML = ""
    userChat.appendChild(container)
}


const setScreenCreateConversation = (container) => {
    createConversation.appendChild(container)
}


const newUserChat = new Chat();

setScreenCreateConversation(newUserChat.container)




export { setScreenCreateConversation }