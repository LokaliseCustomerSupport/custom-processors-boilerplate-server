'use strict'

module.exports = async function (fastify) {
  fastify.post('/preprocess', async function (request, reply) {
    if (!request.body) {
      return { error: 'Invalid request: Missing body' }
    }
    // Get the payload from the request and return it, no pre-processing required at all
    const payload = request.body
    await reply.send(payload)
  })
}
