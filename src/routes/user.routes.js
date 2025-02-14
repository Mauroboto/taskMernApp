import { Router } from "express";
import {
  login,
  logout,
  register,
  profile,
} from "../controllers/user.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/user.Schema.js";
import { loginLimiter, registerLimiter } from "../middlewares/rateLimiter.js";
const router = Router();

router.post(
  "/register",
  registerLimiter,
  validateSchema(registerSchema),
  register
);
router.post("/login", loginLimiter, validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router;
