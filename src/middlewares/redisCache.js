/* import Redis from "ioredis";

const redis = new Redis();

export const cacheMiddleware = async (req, res, next) => {
  const key = req.originalUrl;
  const cachedData = await redis.get(key);

  if (cachedData) {
    return res.json(JSON.parse(cachedData));
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    redis.setex(key, 60, JSON.stringify(body)); // one min cache
    res.sendResponse(body);
  };

  next();
};
 */