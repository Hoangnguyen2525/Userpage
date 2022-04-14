import {
    ConversationList
} from "./conversationList.js";
import {
    Composer
} from "./composer.js";
import {
    MessageList
} from "./messageList.js";
import {
    UserList
} from "./UserList.js";
const chatAreaPrint = document.querySelector(".chat-area ")
const userList = document.querySelector(".chat_right ")
let reconvID = "";
let convID = "";
class ChatUser {
    nameArr = []
    userArr = []
    activeConversation;
    subcribeConversationMessages = null;

    container = document.createElement("div")
    conversationList = new ConversationList()

    composer = new Composer();
    messageList = new MessageList();
    userList = new UserList();
    constructor() {
        this.container.appendChild(this.conversationList.container);
        this.conversationList.setOnConversationItemClick(
            this.setActiveConversation
        );


        this.printChatArea();
        userList.appendChild(this.userList.container)
        this.subcribeConversation();
    }

    printChatArea = () => {
        chatAreaPrint.appendChild(this.messageList.container)
    }
    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;
        this.composer.setActiveConversation(conversation);
        this.conversationList.setStyleActiveConversation(conversation);
        this.messageList.clearMessage();
        this.userList.setActiveConversation(conversation)
        this.subcribeConversationMessageList();
    };
    subcribeConversation = () => {
        db.collection("conversations").orderBy("updateDate", "desc").onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    change.doc.data().users.forEach((userArr) => {
                        firebaseApp.auth().onAuthStateChanged((user) => {
                            if (user.email == userArr) {
                                var uid = user.uid;
                                // console.log(user.email);
                                // console.log(userArr);
                                // console.log(change.doc.data().users);
                                this.conversationList.handleCreateConversationAdded(
                                    change.doc.id,
                                    change.doc.data().name,
                                    change.doc.data().users
                                );

                            } else {

                            }
                        });
                    });

                }
                // if (change.type === "modified") {
                //     convID = change.doc.id;
                //     if (convID !== reconvID) {
                //         this.conversationList.removedItem(change.doc.id);
                //         this.conversationList.container.innerHTML = ""
                //         this.conversationList.reranking(
                //             change.doc.id,
                //             change.doc.data().name,
                //             change.doc.data().users
                //         );
                //         reconvID = convID;
                //         console.log("reranking");
                //     }
                //     this.userList.setActiveConversation({
                //         id: change.doc.id,
                //         name: change.doc.data().name,
                //         users: change.doc.data().users,
                //     });

                // }
                if (change.type === "removed") {
                    console.log("Removed conversation: ", change.doc.data());
                    this.conversationList.removedItem(change.doc.id);
                }
            });
        });
    };


    subcribeConversationMessageList = () => {
        if (this.subcribeConversationMessages !== null) {
            this.subcribeConversationMessages();
        }
        this.subcribeConversationMessages = db
            .collection("messages")
            .where("conversationId", "==", this.activeConversation.id).orderBy("date")
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if ((change.type) === "added") {
                        this.messageList.addMessage(change.doc.data());
                    }
                });
            });
    };

}

export {
    ChatUser
}