# Kickstart
## Token Requires for Github infomation crawling
* ___Create Token 1st before the App runs as below.___
   * https://github.com/settings/tokens/new
![Token Generator](assets/create_a_token_first_N.png)

* And Input the generated Token to landing page as below
 * /Image here/ 
 
* Run the docker-compose as below
```
docker-compose up -d
```


## Manual run
* Start from Docker
```
docker run -d -p 8080:3000 nexclipper/exporterhub:0.1
```
* Check the service normal in CLI or ___You can type exact url in your web browser___
```
curl http://localhost:8080
```

# Details
## Docker image
### Registry
- nexclipper/exporterhub: https://hub.docker.com/repository/docker/nexclipper/exporterhub
- nexclipper/exporterhub-api: https://hub.docker.com/repository/docker/nexclipper/exporterhub-api


# Maintenance
## Tag rule for Build in the hub.docker.com
### exporterhub Frontend build tag
* Source pattern of Tag: `/^fe([0-9.]+)$/` 
   * ex) `fe0.2.0` -> `nexclipper/exporterhub:release-fe0.2.0`
### exporterhub API server build tag
* Source pattern of Tag: `/^api([0-9.]+)$/` 
   * ex) `api0.3` -> `nexclipper/exporterhub-api:release-api0.3`
