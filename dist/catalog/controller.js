"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const axios_1 = __importDefault(require("axios"));
class Controller {
    static getMovie(id) {
        return axios_1.default.get(`http://localhost:8001/sessions/${id}`);
    }
    static getJeux(id) {
        return axios_1.default.get(`http://localhost:8001/sessions/${id}`);
    }
}
exports.Controller = Controller;
