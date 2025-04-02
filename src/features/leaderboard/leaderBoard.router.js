import express from "express";
import { LeaderBoardController } from "./leaderBoard.controller.js";
const leaderBoardRouter=express.Router();

leaderBoardRouter.get("/",LeaderBoardController.getLeaders);

export {leaderBoardRouter};