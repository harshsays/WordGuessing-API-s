import express from "express";
import { wordController } from "./word.controller.js";

const wordControl=new wordController();
const wordRouter=express.Router();

wordRouter.get("/random",wordControl.givingword);



export {wordRouter};