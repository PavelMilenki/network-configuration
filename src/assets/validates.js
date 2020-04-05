const regIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const regMask  =/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/;


export function validateIP(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!regIp.test(value)) {
        error = 'Invalid IP';
    }
    return error;
}

export function validateMask(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!regMask.test(value)) {
        error = 'Invalid Subnet Mask'
    }
    return error;
}

export function validateGateway(value) {
    let error;
    if (!value) {
        error = null;
    }
    else if (!regIp.test(value)) {
        error = 'Invalid Gateway';
    }
    return error;
}

export function validateDNSPreferred(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!regIp.test(value)) {
        error = 'Invalid DNS';
    }
    return error;
}

export function validateDNSAlternative(value) {
    let error;
    if (!value) {
        error = null;
    }
    else if (!regIp.test(value)) {
        error = 'Invalid DNS';
    }
    return error;
}

export function validateKey(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length < 8) {
        error = 'Must be at least 8 symbols';
    }
    return error;
}

export function validateNetworkName(value) {
    let error;
    if (!value) {
        error = 'Select name';
    }
    return error;
}






