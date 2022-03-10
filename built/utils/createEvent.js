"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = void 0;
function createEvent(overrides) {
    return Object.assign({ headers: {}, body: "", isBase64Encoded: false, multiValueHeaders: {}, multiValueQueryStringParameters: null, path: "", pathParameters: null, queryStringParameters: null, requestContext: {}, resource: "", stageVariables: null, httpMethod: "GET" }, overrides);
}
exports.createEvent = createEvent;
