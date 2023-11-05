
export class Modal{
    constructor(error) {
        this.error = error
        // this.text = text
        // this.status = status
        // this.data = data
        this.init();
    }

    init(){
        this.createMarkup();
        this.modal = document.getElementById("modal-film");
        this.closeBtn = this.modal.querySelector('.btn-close');
        this.attachEvents();
    }

    attachEvents(){
        this.closeFn =this.closeFn.bind(this);
        this.closeBtn.addEventListener("click", this.closeFn)
    }
    detachEvents(){
        this.closeBtn.removeEventListener('click', this.closeFn)
    }
    closeFn(){
        this.detachEvents();
        this.modal.remove();
        this.modal = null;
    }
    
    createMarkup(){
        document.body.insertAdjacentHTML('beforeend', `
        <div id="modal-film" class="modal-dialog modal-dialog-centered">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" >
                        <h4>${this.error.message} </h4>
                        <button
                            type="button"
                            class="btn-close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="col-md error-item">
                            <h6>Status Code: ${this.error.response.status}</h6>
                        </div>
                        <div class="col-md error-item">
                            <h6>Text: ${this.error.response.data}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        )
    }
}