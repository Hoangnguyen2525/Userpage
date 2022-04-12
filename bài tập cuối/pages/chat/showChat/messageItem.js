class MessageItem {
    container = document.createElement("div");
    content = document.createElement("div");
    avatar = document.createElement("div");
    imgDiv = document.createElement("div");
    img = document.createElement("img");
    contentP = document.createElement("p")
    // sender = document.createElement("div");

    constructor(content) {
        this.container.setAttribute("class", "col-lg-12 chat-container-right")
        this.content.setAttribute("class", "col-lg-11  chat-content-area-right")
        this.img.setAttribute("src","https://vcdn1-giaitri.vnecdn.net/2013/09/09/Big-Moon-Above-River-1378713411.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=wV3BzDufSDkPN8rM8fpyWg")
        this.img.setAttribute("class","rounded-circle mx-auto d-block")
        this.img.setAttribute("alt","Cinque Terre")
        this.img.setAttribute("width","30")
        this.img.setAttribute("height","30")
        this.avatar.setAttribute("class", "col-lg-1 d-flex align-items-center avatar_chat_area")

        this.contentP.innerHTML = content;



        this.container.appendChild(this.content);
        this.container.appendChild(this.avatar);

        this.content.appendChild(this.contentP);
        this.imgDiv.appendChild(this.img)
        this.avatar.appendChild(this.imgDiv)
    }
}
export {
    MessageItem
};