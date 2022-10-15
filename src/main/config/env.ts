export default {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/marketing-api',
  redisUrl: process.env.REDIS_URL || 'redis://localhost',
  redisPort: parseInt(process.env.PORT) || 6379,
  baseUrlMatomoAnalytics: process.env.BASE_URL_MATOMO_ANALYTICS,
  baseUrlAccon: process.env.BASE_URL_ACCON
}
