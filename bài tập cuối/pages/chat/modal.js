class Modal {
    container = document.createElement("div");
    modalContainer = document.createElement("div");

    modalBody =document.createElement("div");
    modalContent = document.createElement("div");

    header = document.createElement("div");
    body = document.createElement("div");
    footer = document.createElement("div");


    closeBtn = document.createElement("button")
    createBtn = document.createElement("button")

    // btnCreate = document.createElement("button");
    // btnCancel = document.createElement("button");

    constructor() {

        this.container.appendChild(this.modalContainer);

        // this.modalContainer.appendChild(this.header);
        // this.modalContainer.appendChild(this.body);
        // this.modalContainer.appendChild(this.footer);

        this.modalContainer.setAttribute("class", "modal fade")
        this.modalContainer.setAttribute("id", "modalCenter")
        this.modalContainer.setAttribute("tabindex", "-1")
        this.modalContainer.setAttribute("role", "dialog")
    

        this.modalContainer.appendChild(this.modalBody)
        this.modalBody.setAttribute("class", "modal-dialog modal-dialog-centered")
        this.modalBody.setAttribute("role", "document")
        this.modalBody.appendChild(this.modalContent)
        this.modalContent.setAttribute("class", "modal-content")

        this.modalContent.appendChild(this.header)
        this.modalContent.appendChild(this.body)
        this.modalContent.appendChild(this.footer)

        this.header.setAttribute("class", "modal-header")
        this.body.setAttribute("class", "modal-body")
        this.footer.setAttribute("class", "modal-footer")

        this.header.innerHTML = `  
        <h5 class="modal-title" id="exampleModalLongTitle">Add new conversation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`
        
        this.body.innerHTML =`
        ...
        `

        this.footer.appendChild(this.closeBtn)

        this.closeBtn.innerHTML="Close"
        this.closeBtn.setAttribute("class", "btn btn-secondary")
        this.closeBtn.setAttribute("data-dismiss", "modal")
        this.closeBtn.setAttribute("type", "button")

        this.footer.appendChild(this.createBtn)

        this.createBtn.innerHTML="Create conversation"
        this.createBtn.setAttribute("class", "btn btn-primary")
        this.createBtn.setAttribute("data-dismiss", "modal")
        this.createBtn.setAttribute("type", "button")


        // this.btnCreate.innerHTML = "Create";
        // this.btnCancel.innerHTML = "Cancel";
        // this.modalContainer.appendChild(this.btnCancel);
        // this.modalContainer.appendChild(this.btnCreate);

        // this.btnCancel.setAttribute("class", "btn btn-primary ")
        // this.btnCreate.setAttribute("class", "btn btn-primary ")
    }

    // setHeader = (title) => {
    //     this.header.innerHTML = title;
    // };

    setBody = (component) => {
        this.body.innerHTML = "";
        this.body.appendChild(component);
    };

    // setOnclickCancel = (listener) => {
    //     this.btnCancel.onclick = listener;
    // };

    setOnclickCreate = (listener) => {
        this.createBtn.onclick = listener;
  
    };
}

export {
    Modal
};