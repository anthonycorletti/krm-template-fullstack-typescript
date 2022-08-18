import express from "express";
import logger from "../logger";
import { version } from "../../package.json";
import { HealthcheckResponse } from "../types/health";

const router = express.Router();

router.get("/healthz", (_req, res) => {
    const message = "We're on the air";
    const timestamp = new Date().toISOString();
    const response: HealthcheckResponse = { message, version, timestamp };
    logger.info({ message, version, timestamp });
    res.json(response);
});

export default router;
