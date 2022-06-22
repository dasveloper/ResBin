import redis from "../lib/redis";

const expiration = 60 * 60 * 24 * 90; // 90 days

export async function createBin(binId, data) {
  const bin = await redis.set(
    binId,
    JSON.stringify(data),
    "NX",
    "EX",
    expiration
  );
  return bin;
}

export async function getBinById(binId) {
  const bin = await redis.get(binId);
  return JSON.parse(bin);
}
