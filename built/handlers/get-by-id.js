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
exports.getByIdHandler = void 0;
// Create clients and set shared const values outside of the handler.
// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;
/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
const getByIdHandler = (docClient) => (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (event.httpMethod !== "GET") {
        throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info("received:", event);
    // Get id from pathParameters from APIGateway because of `/{id}` at template.yaml
    const id = (_b = (_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "";
    // Get the item from the table
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property
    var params = {
        TableName: tableName,
        Key: { id: id },
    };
    console.time("first query");
    const data = yield docClient.get(params).promise();
    const item = data.Item;
    console.timeEnd("first query");
    yield new Promise((resolve) => {
        setTimeout(() => {
            resolve("ok");
        }, 100);
    });
    console.time("second query");
    const dataScan = yield docClient.scan(params).promise();
    console.timeEnd("second query");
    const response = {
        statusCode: 200,
        body: JSON.stringify(item),
        data: ["Foo", "Bar", "FooBar"],
    };
    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
});
exports.getByIdHandler = getByIdHandler;
