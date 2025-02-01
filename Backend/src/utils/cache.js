const redis = require('redis');

// Create Redis client
const client = redis.createClient({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || undefined,
});

// Error and connection handling
client.on('connect', () => {
    console.log('Connected to Redis');
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

// Middleware for checking cache
const cache = (req, res, next) => {
    const lang = req.query.lang || 'en';
    client.get(`faqs:${lang}`, (err, data) => {
        if (err) {
            console.error('Redis GET error:', err);
            return next();
        }
        if (data) {
            return res.json(JSON.parse(data));
        }
        next();
    });
};

// Set cache with a key and data
const setCache = (key, data) => {
    client.setex(key, 3600, JSON.stringify(data), (err) => {
        if (err) {
            console.error('Redis SETEX error:', err);
        } else {
            console.log(`Cache set for ${key}`);
        }
    });
};
process.on('SIGINT', () => {
    client.quit(() => {
        console.log('Redis connection closed');
        process.exit(0);
    });
});

module.exports = { cache, setCache };
