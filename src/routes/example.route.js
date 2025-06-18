import fastify from "fastify"

import { getGreeting } from "../controllers/example.controller.js"

async function greetingRoute(fastify, options) {
  fastify.get( '/', getGreeting )
}

export default greetingRoute;
