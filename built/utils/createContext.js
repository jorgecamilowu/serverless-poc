"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
function createContext(overrides) {
    return Object.assign({ awsRequestId: "", callbackWaitsForEmptyEventLoop: true, functionName: "", functionVersion: "", invokedFunctionArn: "", logGroupName: "", logStreamName: "", memoryLimitInMB: "", done: {}, fail: {}, getRemainingTimeInMillis: {}, succeed: {} }, (overrides !== null && overrides !== void 0 ? overrides : {}));
}
exports.createContext = createContext;
