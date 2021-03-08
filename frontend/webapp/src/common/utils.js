const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexInteger = /^[0-9]+$/;
const regexBrazilCellPhone = /^\+55[- ]{0,1}\d{2}[- ]{0,1}\d{5}[- ]{0,1}\d{4}$/;
export function isPreenchido(obj) {
    if (obj && obj.length > 0)
        return null;
    return `Este campo é obrigatório`
}
export function isWhatsappPhone(text) {
    return regexBrazilCellPhone.test(text);
}
export function hasMinimoLength(obj, size) {
    if (!obj || obj.length >= size)
        return null;

    return `Este campo é deve ter pelo menos ${size} caracteres`
}

export function hasMaxLength(obj, size) {
    if (!obj || obj.length <= size)
        return null;

    return `Este campo é deve ter no maximo ${size} caracteres`
}

export function hasLength(obj, size) {
    if (!obj || obj.length === size)
        return null;

    return `Este campo é deve ter ${size} caracteres`
}

export function hasCPFValid(obj) {
    if (!obj || cpfValido(obj))
        return null;

    return 'CPF Inválido'
}

export function hasEmailValid(obj) {
    if (!obj || emailValido(obj))
        return null;

    return 'E-mail inválido'
}


export function isStringValid(obj, obrigatorio, min, max) {
    if (!obrigatorio && !obj)
        return null;
    return isPreenchido(obj) || hasMinimoLength(obj, min) || hasMaxLength(obj, max)
}

export function isInteger(obj) {

    if (!obj)
        return null;
    if (regexInteger.test(obj)) {
        return null;
    }
    return `Este campo é deve conter apenas numeros`
}


export function emailValido(texto) {
    return regexEmail.test(texto)
}

export function cpfValido(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length !== 11 ||
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999")
        return false;
    // Valida 1o digito	
    let add = 0;
    for (let i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito	
    add = 0;
    for (let i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(10)))
        return false;
    return true;
}

function cnpjValido(cnpj) {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj === '') return false;

    if (cnpj.length !== 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj === "00000000000000" ||
        cnpj === "11111111111111" ||
        cnpj === "22222222222222" ||
        cnpj === "33333333333333" ||
        cnpj === "44444444444444" ||
        cnpj === "55555555555555" ||
        cnpj === "66666666666666" ||
        cnpj === "77777777777777" ||
        cnpj === "88888888888888" ||
        cnpj === "99999999999999")
        return false;

    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== digitos.charAt(1))
        return false;

    return true;

}