import express from "express";
const router = express.Router();
import * as authController from "../../controllers/auth.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

router.post("/", authController.auth);

export const authRouter = router;
