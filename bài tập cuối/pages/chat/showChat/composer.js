const inputMsg = document.querySelector(".type_msg")

class Composer {
    activeConversation = null;
    count = 1 ;
    container = document.createElement("div");
    // form = document.createElement("form");
    // input = document.createElement("input");
    // btnEmotion = document.createElement("button");
  
    constructor() {
    //   this.input.type = "text";
    //   this.input.placeholder = "Type a message ...";
    //   this.btnEmotion.innerHTML = "💖";
  
    //   this.container.appendChild(this.form);
    //   this.form.appendChild(this.input);
    //   this.form.appendChild(this.btnEmotion);
  
      // Catching event enter press
      this.click()
    //   this.btnEmotion.addEventListener("click", this.handleSendEmotion);
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
        // Check authentication
        /*
          - User is login
          - Active conversation not equal null
      */
        if (!firebase.auth().currentUser.email|| !this.activeConversation ) {
          // Alert
          /*
                ...
            */
          alert("Select a chat first");
          return;
        } else {
          // Send message
          if(inputMsg.value.keyCode === 32){
              alert("Please enter your message")
          }
          else{        
              db.collection("messages").add({
            content: inputMsg.value,
            sender: firebase.auth().currentUser.email,
            conversationId: this.activeConversation.id,
            date : firebase.firestore.FieldValue.serverTimestamp(),
            count : this.count ++
          });
          inputMsg.value = ""}
  
          
        }
      }
    };
  
    // handleSendEmotion = (event) => {
    //   event.preventDefault();
    //   if (!firebase.auth().currentUser.email || !this.activeConversation) {
    //     // Alert
    //     /*
    //             ...
    //         */
    //     alert("Chọn hội thoại đi cu!!!!!👌");
    //     return;
    //   } else {
    //     db.collection("messages").add({
    //       content: this.btnEmotion.innerHTML,
    //       sender: firebase.auth().currentUser.email,
    //       conversationId: this.activeConversation.id,
    //     });
    //   }
    // };
  }
  
  export { Composer };