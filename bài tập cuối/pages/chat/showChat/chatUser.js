import {
    ConversationList
} from "./conversationList.js";
import {
    Composer
} from "./composer.js";
import {
    MessageList
} from "./messageList.js";
const chatAreaPrint = document.querySelector(".chat-area ")
class ChatUser {
    nameArr = []
    activeConversation;
    subcribeConversationMessages = null;

    container = document.createElement("div")
    conversationList = new ConversationList()

    composer = new Composer();
    messageList = new MessageList();
    constructor() {
        this.container.appendChild(this.conversationList.container);
        this.conversationList.setOnConversationItemClick(
            this.setActiveConversation
        );


        this.printChatArea();
        this.subcribeConversation();
        // this.clearChat();


    }

    printChatArea = () => {
        chatAreaPrint.appendChild(this.messageList.container)
    }
    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;
        // this.conversationInfor.setName(conversation.name);
        this.composer.setActiveConversation(conversation);
        this.conversationList.setStyleActiveConversation(conversation);
        this.messageList.clearMessage();
        this.subcribeConversationMessageList();
    };
    subcribeConversation = () => {
        db.collection("conversations").onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    firebaseApp.auth().onAuthStateChanged((user) => {
                        if (user.email == change.doc.data().users) {
                            // User is signed in, see docs for a list of available properties
                            // https://firebase.google.com/docs/reference/js/firebase.User
                            var uid = user.uid;
                            console.log(user.email);
                            console.log(change.doc.data().users);
                            this.conversationList.handleCreateConversationAdded(
                                change.doc.id,
                                change.doc.data().name,
                                change.doc.data().users
                            );

                        } else {
                            // User is signed out
                            // Set default screen

                        }
                    });
            
                }
                if (change.type === "modified") {
                    console.log("Modified conversation: ", change.doc.data());
                }
                if (change.type === "removed") {
                    console.log("Removed conversation: ", change.doc.data());
                    this.conversationList.removedItem(change.doc.id);
                }
            });
        });
    };
    // clearChat = () => {
    //     this.container.innerHTML = "";
    //   };

    subcribeConversationMessageList = () => {
        if (this.subcribeConversationMessages !== null) {
            this.subcribeConversationMessages();
        }

        // Connect to listen
        this.subcribeConversationMessages = db
            .collection("messages")
            .where("conversationId", "==", this.activeConversation.id).orderBy("date")
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if ((change.type) === "added" ){
                        this.messageList.addMessage(change.doc.data());
                    }
                });
            });
        // => Function()
    };

}

export {
    ChatUser
}