import greetingRoutes from './routes/example.route.js'
// import TU-ARCHIVO-DE-RUTAS from 'RUTA-DE-ARCHIVO-DE-RUTAS'     <--- Importa tus rutas de usuario

// Import the framework and instantiate it
import Fastify from 'fastify'
import userRoutes from './routes/user.route.js'
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.register( greetingRoutes )
// fastify.register( TU-ARCHIVO-DE-RUTAS )     <--- Declara tus rutas de usuario

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}