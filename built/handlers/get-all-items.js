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
exports.getAllItemsHandler = void 0;
// Create clients and set shared const values outside of the handler.
// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;
/**
 * A simple example includes a HTTP get method to get all items from a DynamoDB table.
 */
const getAllItemsHandler = (docClient) => (event) => __awaiter(void 0, void 0, void 0, function* () {
    if (event.httpMethod !== "GET") {
        throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info("received:", event);
    // get all items from the table (only first 1MB data, you can use `LastEvaluatedKey` to get the rest of data)
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property
    // https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
    var params = {
        TableName: tableName,
    };
    const data = yield docClient.scan(params).promise();
    const items = data.Items;
    const response = {
        statusCode: 200,
        body: JSON.stringify(items),
    };
    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
});
exports.getAllItemsHandler = getAllItemsHandler;
