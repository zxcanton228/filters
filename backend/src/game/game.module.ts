import { Module } from '@nestjs/common'
import { PaginationService } from 'src/pagination/pagination.service'
import { PrismaService } from 'src/prisma.service'
import { GameController } from './game.controller'
import { GameService } from './game.service'

@Module({
  controllers: [GameController],
  providers: [GameService, PrismaService, PaginationService],
})
export class GameModule {}
