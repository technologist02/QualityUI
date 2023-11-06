export function validateInput (inputType, inputValue){
    let regex;
    let message;
    switch (inputType){
        case "text": {
            regex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/
            message = "Поле должно содержать от 2 до 20 символов a-Z, 0-9"
            break;
            //return regex.exec(inputType) ? true : false;
        }
        case "number": {
            regex = /[0-9]*[.,]?[0-9]+/
            message = "Число должно быть больше нуля"
            break;
        }
        case "password": {
            regex = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
            message = "Пароль должен содержать строчную и заглавную буквы, цифру"
            break;
        }
        case "email": {
            regex = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
            message = "некорректный email"
            break;
        }
        default: break;
    }
    return !regex ? NaN : (regex.exec(inputValue) ? NaN : message);
}