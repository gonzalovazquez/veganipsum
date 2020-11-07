/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* istanbul ignore file */
const fastify = require('fastify')({ logger: true })
const Next = require('next')

const { version } = require('./package.json')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

fastify.register((fastify, opts, next) => {
  const app = Next({ dev })
  app
    .prepare()
    .then(() => {
      if (dev) {
        fastify.get('/_next/*', async (req, reply) => {
          await app.handleRequest(req.req, reply.res)
          reply.sent = true
        })
      }

      fastify.get('/version', (req, reply) => {
        reply.send({ version })
      })

      fastify.get('/*', async (req, reply) => {
        await app.handleRequest(req.req, reply.res)
        reply.sent = true
      })

      fastify.setNotFoundHandler(async (req, reply) => {
        await app.render404(req.req, reply.res)
        reply.sent = true
      })

      next()
    })
    .catch((err) => next(err))
})

// We have to specify 0.0.0.0 to be available IPv4 interfaces eg. Docker
fastify.listen(port, '0.0.0.0', (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
