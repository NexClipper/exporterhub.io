docker_version="latest"
front_tag="release-fe0.3.14"
api_tag="release-api0.3.4"

hello:
	#
	# You can use - build / build-fe / build-be / set / run / start / push / all
	#
set:
	sed -i "s/^front_tag=.*/front_tag=\"${front_tag}\"/" .env
	sed -i "s/^api_tag=.*/api_tag=\"${api_tag}\"/" .env
build-fe:
	sudo docker build -t nexclipper/exporterhub:${front_tag} ./ --no-cache
	sudo docker tag nexclipper/exporterhub:${front_tag} nexclipper/exporterhub:${docker_version}
build-be:
	cd api && sudo docker build -t nexclipper/exporterhub-api:${api_tag} ./ --no-cache && cd ..
	sudo docker tag nexclipper/exporterhub-api:${api_tag} nexclipper/exporterhub-api:${docker_version}
build: build-fe build-be
run: set
	sudo docker-compose up
login:
	sudo docker login
push: login build
	sudo docker push nexclipper/exporterhub:${front_tag}
	sudo docker push nexclipper/exporterhub:${docker_version}
	sudo docker push nexclipper/exporterhub-api:${api_tag}
	sudo docker push nexclipper/exporterhub-api:${docker_version}

start: set
	sudo docker-compose down
	sudo docker-compose -f ../docker-compose.yml up -d
all: build push run
