docker_version="latest"
front_tag="release-fe0.3.3"
api_tag="release-api0.2.9"


hello:
	#
	# You can use - build / run / push / all 
	#
build:
	sudo docker build -t nexclipper/exporterhub:${front_tag} ./ --no-cache
	sudo docker tag nexclipper/exporterhub:${front_tag} nexclipper/exporterhub:${docker_version}
	cd api && sudo docker build -t nexclipper/exporterhub-api:${api_tag} ./ --no-cache && cd ..
	sudo docker tag nexclipper/exporterhub-api:${api_tag} nexclipper/exporterhub-api:${docker_version}
run:
	sudo docker-compose up
login:
	sudo docker login
push: login build
	sudo docker push nexclipper/exporterhub:${front_tag}
	sudo docker push nexclipper/exporterhub:${docker_version}
	sudo docker push nexclipper/exporterhub-api:${api_tag}
	sudo docker push nexclipper/exporterhub-api:${docker_version}

start:
	sudo docker-compose down
	sudo docker-compose -f ../docker-compose.yml up -d
all: build push run
