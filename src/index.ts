import { DynamoDB } from "aws-sdk";
import {
  getAllItemsHandler as getAll,
  getByIdHandler as getId,
  putItemHandler as putItem,
} from "./handlers";

const docClient = new DynamoDB.DocumentClient();
export const getAllItemsHandler = getAll(docClient);
export const getByIdHandler = getId(docClient);
export const putItemHandler = putItem(docClient);
