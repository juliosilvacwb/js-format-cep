"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCEP = void 0;
function formatCEP(cep) {
    if (!cep)
        return cep;
    let formattedCep = cep.replace(/\D/g, '');
    if (formattedCep.length !== 8)
        return cep;
    return `${formattedCep.substring(0, 2)}.${formattedCep.substring(2, 5)}-${formattedCep.substring(5, 8)}`;
}
exports.formatCEP = formatCEP;
