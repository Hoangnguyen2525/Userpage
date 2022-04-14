const inputMsg = document.querySelector(".type_msg")

class Composer {
    activeConversation = null;
    count = 1 ;
    container = document.createElement("div");
  
    constructor() {
      this.click()
    }
  
    setActiveConversation = (conversation) => {
      this.activeConversation = conversation;
    };
    click = () => {
        inputMsg.addEventListener("keypress", this.handleSendMessage);
    }
    handleSendMessage = (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        if (!firebase.auth().currentUser.email|| !this.activeConversation ) {
          alert("Select a chat first");
          return;
        } else {
          if(inputMsg.value.trim() === ""){
              //alert("Please enter your message")
          }
          else{        
              db.collection("messages").add({
            content: inputMsg.value,
            sender: firebase.auth().currentUser.email,
            conversationId: this.activeConversation.id,
            date : firebase.firestore.FieldValue.serverTimestamp(),
            count : this.count++,
          })
          db.collection("conversations").doc(this.activeConversation.id).update({
            updateDate : firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(() => {
              console.log("Document successfully updated!");
          });         
          ;
          inputMsg.value = ""}
  
          
        }
      }
    };
  
  }
  
  export { Composer };
  