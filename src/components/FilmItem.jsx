export const Film = ({film}) => {
    const {id, mark, thickness, color} = film;

    return(
        <>
        <tr id={id}>
            <td>{mark}</td>
            <td>{thickness}</td>
            <td>{color}</td>
            <td>
                <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Изменить</button>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                <div className="modal-body">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" id="mark" className="form-control border border-primary" placeholder="Введите марку" />
                                            <label htmlFor="mark">Марка</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="number" id="thick" className="form-control border border-primary" placeholder="Введите толщину" />
                                            <label htmlFor="thick">Толщина</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" id="color" className="form-control border border-primary" placeholder="Введите цвет" />
                                            <label htmlFor="color">Цвет</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        </>
    )
}