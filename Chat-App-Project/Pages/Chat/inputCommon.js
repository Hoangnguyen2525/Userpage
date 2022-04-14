class InputCommon {
    container = document.createElement("div")
 
    label = document.createElement("span")
    input = document.createElement("input")
    errMessage = document.createElement("div")
    icon = document.createElement("i")

    constructor( inputType, placeholder, name  ) {
        this.input.type = inputType
        this.input.placeholder = placeholder
        this.input.name = name

        this.container.setAttribute("class","text-box")
        
        if(this.input.type == "checkbox"){
            this.input.setAttribute("class","form-check-input")
            this.container.setAttribute("id","inputCheckbox")
        }
        else{
            this.input.setAttribute("class","form-control")
        }
        this.label.setAttribute("class","icon-log")

        this.container.setAttribute("class","inputArea")

        this.label.appendChild(this.icon)
        this.container.appendChild(this.label)
        this.container.appendChild(this.input)
        this.container.appendChild(this.errMessage)
        this.errMessage.setAttribute("class","errMs")
    }

    getValue = () => {
        return this.input.value;
    }

    setErrorMessage = (errMessage) => {
        this.errMessage.innerHTML = errMessage
    }
}

export { InputCommon }