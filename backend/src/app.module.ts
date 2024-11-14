import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { path } from 'app-root-path'
import { GameModule } from './game/game.module'
import { PaginationModule } from './pagination/pagination.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads',
    }),
    GameModule,
    PaginationModule,
  ],
})
export class AppModule {}
