import jwt from "jsonwebtoken";

export function accessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_TOKEN,
      { expiresIn: "24h" },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
