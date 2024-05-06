import client from "./redisClient.js";

const generateUUID = () => {
  let UUID = crypto.randomUUID();
  while (!client.exists(UUID)) {
    UUID = crypto.randomUUID();
  }

  return UUID;
};

console.log(generateUUID());
