import Fastify from 'fastify'

const app = Fastify({
  logger: true,
})

app.get('/api/health', async () => {
  return {
    status: 'ok',
    service: 'api',
  }
})

const port = Number(process.env.PORT ?? 3000)
const host = process.env.HOST ?? '0.0.0.0'

async function start() {
  try {
    await app.listen({
      port,
      host,
    })
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

void start()