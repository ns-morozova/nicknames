// TODO: write your code here

export default class Validator {
    validateUsername(name) {
        return (/^[A-Za-z0-9_-]+$/.test(name) &&                //   проверка на допустимые символы
        /^[^0-9_-]/.test(name) &&                               //   проверка первого символа
        /[^0-9_-]$/.test(name) &&                               //   проверка последнего символа
        /^(?:(?!\d{4}).)*$/.test(name)                          //   условие не более 3 цифр подряд
        );
        
    }
}