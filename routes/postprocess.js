'use strict'

module.exports = async function (fastify) {
  fastify.post('/postprocess', async function (request, reply) {
    if (!request.body) {
      return { error: 'Invalid request: Missing body' }
    }

    // Get the payload from the request:
    const payload = request.body

    //@todo define a platofrm specific url link pattern. For example, ZD Guide URL
    const urlPattern = '(http|https):\/\/[^ "]+$';

    // @todo: validation

    // @todo: introduce timeout

    // Iterate over the keys in the collection:
    for (const [keyId, keyValue] of Object.entries(payload.collection.keys)) {
      // Iterate over the translations in the key:
      for (const [lang, v] of Object.entries(keyValue.translations)) {
        // Process the value of the translation:
        payload.collection.keys[keyId].translations[lang].translation = v.translation.replace(
         // @todo
         // 1- Parse the value of the translation object to see if you found a URL pattern
         // 2 - Check if the URL contains the base language iso code
         // 3 - If so, replace the base language iso code with the value of [lang]
        )
      }
    }

    // @todo: validate processed values

    await reply.send(payload)
  })
}
