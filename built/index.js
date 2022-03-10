"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putItemHandler = exports.getByIdHandler = exports.getAllItemsHandler = void 0;
const aws_sdk_1 = require("aws-sdk");
const handlers_1 = require("./handlers");
const docClient = new aws_sdk_1.DynamoDB.DocumentClient();
exports.getAllItemsHandler = (0, handlers_1.getAllItemsHandler)(docClient);
exports.getByIdHandler = (0, handlers_1.getByIdHandler)(docClient);
exports.putItemHandler = (0, handlers_1.putItemHandler)(docClient);
