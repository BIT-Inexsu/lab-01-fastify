import fastify from "fastify"

import { getGreeting } from "../controllers/example.controller.js"

async function greetingRoutes(fastify, options) {
  fastify.get( '/', getGreeting )
}

export default greetingRoutes;
