// const fastify = require('fastify')({ logger: true });

// // NO CORS CONFIG HERE (IMPORTANT)

// fastify.get('/data', async (request, reply) => {
//   return { message: "Hello from Fastify 🚀" };
// });

// fastify.listen({ port: 3000 }, (err) => {
//   if (err) throw err;
//   console.log("Server running on http://localhost:3000");
// });


const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');

// 👇 ADD THIS
fastify.register(cors, {
  origin: 'http://127.0.0.1:5500', // allow all origins (for testing)
});

fastify.get('/data', async (request, reply) => {
  return { message: "Hello from Fastify 🚀" };
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
});