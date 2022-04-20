install:
	@docker-compose build --pull --no-cache --stage dev
	@docker-compose run -d --rm -v /src/node_modules --name tmp_app_install --entrypoint "sleep infinity" app
	@docker cp tmp_app_install:/src/node_modules/. ./src/node_modules/
	@docker stop tmp_app_install
	@docker-compose build

start: # Install must be run before start.
	@docker-compose run --service-ports --use-aliases app

logs:
	@docker-compose logs -f appa

clean:
	@rm -rf ./src/node_modules
	@docker-compose down -v --remove-orphans

and:
	# Syntactic sugar
