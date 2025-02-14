import rateLimit from "express-rate-limit";

export const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 6,
  message: "Demasiados intentos de registro. Intenta más tarde.",
  standardHeaders: true,
  legacyHeaders: false,
});

export const loginLimiter = rateLimit({
  windowMs: 20 * 60 * 1000,
  max: 6,
  message: "Demasiados intentos de inicio de sesión. Intenta más tarde.",
  standardHeaders: true,
  legacyHeaders: false,
});
