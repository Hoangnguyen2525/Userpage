import { CreateConversationForm } from "./createConversationForm.js";

class ConversationList {
  container = document.createElement("div");
  btnCreateConversation = document.createElement("button");
  createConversationForm = new CreateConversationForm();


  constructor() {
    this.btnCreateConversation.innerHTML = `<i class="fa fa-plus " aria-hidden="true"></i>`;
    this.btnCreateConversation.addEventListener("click", this.handleVisible);

    this.btnCreateConversation.setAttribute("class", "btn btn-primary mr-3 btnAdd")
    this.btnCreateConversation.setAttribute("data-toggle", "modal")
    this.btnCreateConversation.setAttribute("data-target", "#modalCenter")
  

    this.container.appendChild(this.btnCreateConversation);
    this.container.appendChild(this.createConversationForm.container);
  }



  handleVisible = () => {
    this.createConversationForm.setVisible(true)

  };
  
}

export { ConversationList };