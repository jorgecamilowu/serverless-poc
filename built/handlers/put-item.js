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
exports.putItemHandler = void 0;
// Create clients and set shared const values outside of the handler.
// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;
/**
 * A simple example includes a HTTP post method to add one item to a DynamoDB table.
 */
const putItemHandler = (docClient) => (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (event.httpMethod !== "POST") {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }
    // All log statements are written to CloudWatch
    console.info("received:", event);
    // Get id and name from the body of the request
    const body = JSON.parse((_a = event.body) !== null && _a !== void 0 ? _a : "");
    const { id, name } = body;
    // Creates a new item, or replaces an old item with a new item
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#put-property
    var params = {
        TableName: tableName,
        Item: { id: id, name: name },
    };
    const result = yield docClient.put(params).promise();
    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
    };
    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
});
exports.putItemHandler = putItemHandler;
