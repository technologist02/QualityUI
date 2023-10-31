
class Modal{
    constructor(text, mark, thick, color, density) {
        this.text = text
        this.mark = mark
        this.thick = thick
        this.color = color
        this.density = density
        this.init();
    }

    init(){
        this.createMarkup();
        this.modal = document.getElementById("filmModal");
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
        document.body.insertAdjacentHTML('beforeend',
        <div>
  
        </div>
        )
    }
}