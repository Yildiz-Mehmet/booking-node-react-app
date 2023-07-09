import express from "express";
import { register } from "../controllers/auth.js";

const router = express.Router();

router.get("/register", (req, res) => register);

export default router;
