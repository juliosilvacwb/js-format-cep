import { formatCEP } from './index';

describe("Test for Format CEP", () => {

    test("Test cep without mask", () => {
        expect(formatCEP("83828000")).toBe("83.828-000")
    })
    
    test("Test cep with mask", () => {
        expect(formatCEP("83.828-000")).toBe("83.828-000")
    })
    
    test("Test cep with wrong mask 1", () => {
        expect(formatCEP("83828-000")).toBe("83.828-000")
    })
    
    test("Test cep with wrong mask 2", () => {
        expect(formatCEP("83(828)+000x")).toBe("83.828-000")
    })
    
    test("Test cep with mask", () => {
        expect(formatCEP("567")).toBe("567")
    })

    test("Test cep with mask", () => {
        expect(formatCEP("")).toBe("")
    })

}) 