- Установить pg admin (postgresql на пк)
- Создать БД через pg admin и запомнить ее название
- Получать username, password postgresql
- Обновить данные в env
  DATABASE_URL=postgresql://postgres:123456@localhost:5432/auth-mk?schema=public

postgres - твой юзернейм postgresql
123456 - твой пароль postgresql
localhost - не меняется
5432 - дефолтный порт, иногда может меняться
auth-mk - название твое базы

Не забыть сделать (заменить на свой пакетный менеджер)
npm install
npm prisma db push

Для наполнения npm run seed
