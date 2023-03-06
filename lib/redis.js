import Redis from "ioredis";

class ClientRedis {
  constructor() {
    throw new Error("Use Singleton.getInstance()");
  }

  static getInstance() {
    if (!ClientRedis.instance) {
      ClientRedis.instance = new Redis(process.env.REDIS_URL);
    }
    return ClientRedis.instance;
  }
}

const redis = ClientRedis.getInstance();

export default redis;
