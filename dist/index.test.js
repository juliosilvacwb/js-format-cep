"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("Test for Format CEP", () => {
    test("Test cep without mask", () => {
        expect((0, index_1.formatCEP)("83828000")).toBe("83.828-000");
    });
    test("Test cep with mask", () => {
        expect((0, index_1.formatCEP)("83.828-000")).toBe("83.828-000");
    });
    test("Test cep with wrong mask 1", () => {
        expect((0, index_1.formatCEP)("83828-000")).toBe("83.828-000");
    });
    test("Test cep with wrong mask 2", () => {
        expect((0, index_1.formatCEP)("83(828)+000x")).toBe("83.828-000");
    });
    test("Test cep with mask", () => {
        expect((0, index_1.formatCEP)("567")).toBe("567");
    });
    test("Test cep with mask", () => {
        expect((0, index_1.formatCEP)("")).toBe("");
    });
});
