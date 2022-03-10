"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putItemHandler = exports.getByIdHandler = exports.getAllItemsHandler = void 0;
const aws_sdk_1 = require("aws-sdk");
const core_1 = __importDefault(require("@middy/core"));
const handlers_1 = require("./handlers");
const middleware_1 = require("./middleware");
const docClient = new aws_sdk_1.DynamoDB.DocumentClient();
exports.getAllItemsHandler = (0, handlers_1.getAllItemsHandler)(docClient);
exports.getByIdHandler = (0, core_1.default)((0, handlers_1.getByIdHandler)(docClient)).use((0, middleware_1.postProcessor)());
exports.putItemHandler = (0, handlers_1.putItemHandler)(docClient);
