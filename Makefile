db:
	docker-compose up -d filters-db 
	cd ./backend && bun install && bun prisma db push
up:
	docker-compose up -d
down:
	docker-compose down 
build:
	docker-compose up -d --build
rebuild:
	docker-compose down && docker-compose up -d --build