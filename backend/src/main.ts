import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import helmet from 'helmet'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(helmet())

  const config = app.get(ConfigService)
  const port = config.get<number>('PORT') || 4200

  app.setGlobalPrefix('api')
  app.enableCors()

  await app.listen(port, () =>
    console.log(`🚀 Server is starting on ${port} port`),
  )
}
bootstrap()
