import greetingRoutes from './routes/example.route.js'

// Import the framework and instantiate it
import Fastify from 'fastify'
import userRoutes from './routes/user.route.js'
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.register( greetingRoutes )

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}