
class Modal{
    constructor(text) {
        this.text = text

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
        <div className="modal-dialog modal-dialog-centered" id="filmModal" tabIndex="-1">
            <div className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{`Изменить данные пленки \n ${mark} ${thick}мкм ${color}`} </h1>
                            <button type="button" className="btn-close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md">
                                <ControledInput type="text" 
                                    id="mark"
                                    text="Марка"
                                    value={mark} 
                                    setValue={(text) => changeMark(text)}/>
                            </div>
                            <div className="col-md">
                                <ControledInput type="text" 
                                    id="thick"
                                    text="Толщина"
                                    value={thick} 
                                    setValue={(text) => changeThick(text)}/>
                            </div>
                            <div className="col-md">
                                <ControledInput type="text" 
                                    id="color"
                                    text="Цвет"
                                    value={color} 
                                    setValue={(text) => changeColor(text)}/>
                            </div>
                            <div className="col-md">
                                <ControledInput type="number" 
                                    id="density"
                                    text="Плотность, г/см3"
                                    value={density} 
                                    setValue={(density) => changeDensity(density)}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-close" onClick={() => clearFilmContext()}>Закрыть</button>
                            <button type="button" className="btn btn-primary btn-close" onClick={() => {changeFilm(filmId, mark, thick, color, density); clearFilmContext()}}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}