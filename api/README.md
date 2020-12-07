# exporterhub-be
Exporterhub Backend OpenSource.


# Kickstart
## Token Requires
* ___Create Token 1st before the App runs as below.___
   * https://github.com/settings/tokens/new
![Token Generator](assets/create_a_token_first_N.png)

* And Input the generated Token to docker-compose.yml as below
```
   api:
      image: nexclipper/exporterhub-be:0.1
        TOKEN: "TOKEN must be HERE!!!"
```

* Run the docker-compose as below
```
docker-compose up -d
```
