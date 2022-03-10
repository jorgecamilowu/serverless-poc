"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProcessor = void 0;
const postProcessor = () => {
    const after = (request) => __awaiter(void 0, void 0, void 0, function* () {
        console.time("query");
        // Your middleware logic
        if (request.response === null ||
            [null, undefined].includes(request.response.body)) {
            return;
        }
        const salutations = request.response.body.data.map((name) => `Hello ${name}!`);
        console.timeEnd("query");
        request.response.body = JSON.stringify(Object.assign(Object.assign({}, request.response.body), { data: salutations }));
    });
    return {
        after,
    };
};
exports.postProcessor = postProcessor;
