build:
	docker-compose up -d --build
db: 
	docker-compose exec filters-backend bun prisma db push
	docker-compose exec filters-backend bun seed
start:
	make build
	make db

up:
	docker-compose up -d
stop:
	docker-compose stop
down:
	docker-compose down -v