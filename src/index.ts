import { DynamoDB } from "aws-sdk";
import middy from "@middy/core";
import {
  getAllItemsHandler as getAll,
  getByIdHandler as getId,
  putItemHandler as putItem,
} from "./handlers";
import { postProcessor } from "./middleware";

const docClient = new DynamoDB.DocumentClient();
export const getAllItemsHandler = getAll(docClient);
export const getByIdHandler = middy(getId(docClient)).use(postProcessor());
export const putItemHandler = putItem(docClient);
