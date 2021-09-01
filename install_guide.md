## Diagram Overview
<!--lint disable awesome-list-item-->
* Image click to Youtube:
  * [![Diagram Overview](https://img.youtube.com/vi/pPZfNi6qms4/0.jpg)](https://youtu.be/pPZfNi6qms4)

## Kick-start
### 0. Ready: Token is required for GitHub information crawling
<!--lint disable awesome-list-item-->
* ___Create Token before the App runs as below.___
   * https://github.com/settings/tokens/new
![Token Generator](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/create_a_token_first_N.png)

### ※ Github env settings below must be done under   _<u>organization account settings</u>_, not in personal.

### 1. Create organization
* ___This must be done before authorizing and managing admins.___
* ___Github link:___
   * https://github.com/settings/organizations
![](https://images.velog.io/images/dvkim202550/post/6b5b5bfd-b757-4c8e-89af-f06dcfc0df4c/image.png)

### 2. `Fork` NexClipper/exporterhub.io to organization, not to personal account.
![](https://images.velog.io/images/dvkim202550/post/836ab379-2d34-4669-b884-fd912709d460/image.png)

### 3. Create and register an OAuth app under your organization.
* ___1) Click developer settings tab of organization. While you create OAuth Apps, please take note of `redirect url` of authentication.___

![](https://images.velog.io/images/dvkim202550/post/a81cec66-cfba-424e-bc07-c54052deb22b/image.png)
![image](https://user-images.githubusercontent.com/65844723/113794594-80a5fc80-977d-11eb-9f70-9030ad2c193b.png)


* ___2) `Client ID`, `Client Secrets`, and `callback url`(Service URL) are required for authentication.___



![](https://images.velog.io/images/dvkim202550/post/168d8232-2951-4a77-ab8f-881fdb85b457/image.png)


### 4. Write docker-compose.yml accordingly.
* ___"NEED_TO_SET_UP" parts are to be revised in   ```./.env```file, with the reference ```.env.SAMPLE``` file at ```/exporterhub.io```:___
```yml
## Variables for Frontend(ReactJS) server
SERVICE_URL="http://[YOUR SERVICE URL HERE WITH PORT NUMBER, IF YOU HAVE THE SPECIPIC PORT]"

### Port number check by docker-compose
SERVICE_PORT="80"
API_SERVER="http://[YOUR API SERVER URL HERE]:8000"
CLIENT_ID="[NEED_TO_SET_UP]"
CLIENT_SECRETS="[NEED_TO_SET_UP]"


## Variables for API(Python) Server
ORGANIZATION="Exporterhubv3"
SECRET_KEY="[NEED_TO_SET_UP]"
ALGORITHM="HS256"

## Docker image name tag(It would be replaced automatically by Makefile)
front_tag="release-fe0.3.14"
api_tag="release-api0.3.4"


```
* ___"NEED_TO_SET_UP" parts are to be linked to docker-compose.yml as below:___
<img src="https://images.velog.io/images/dvkim202550/post/1033e78b-1800-4a01-9614-e24cc569b64f/image.png" width="300">


### 5. build image before running
*  run the command `make build` at `./exporterhub.io` 


### 6. Run by default(in localhost)
*  run the command `make run` at `./exporterhub.io` 



### 7. Or, Run for external network
* If you want to run the server in external server or instance, please make sure to input `SERVICE_URL` as same as below
```      
version: "3.1"
services:
  expoterhub:
    image: nexclipper/exporterhub:${front_tag}
    ports:
      - "${SERVICE_PORT}:3000"
    environment:
      # You can add and modify below setup to './.env' file for externel configuration without security issue.
      # and you can check src/config.js .env.production entrypoint.sh
      SERVICE_URL: ${SERVICE_URL}
      API_SERVER: ${API_SERVER}
      SERVICE_PUBLIC: "n"
      CLIENT_ID: ${CLIENT_ID}
      CLIENT_SECRETS: ${CLIENT_SECRETS}
```   
* then, run the command `make run` at `./exporterhub.io` 
      
### 8. Initial Check & Set
<!--lint disable awesome-list-item-->
* At the beginning, input the generated Token to landing page as below. (http://localhost:8080)

![](https://images.velog.io/images/dvkim202550/post/b584e1ee-78ad-460f-8380-9e3af9c96b3a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-06%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.11.58.png)

* Initial settings are done if you get landing page with exporter cards as below.

![](https://images.velog.io/images/dvkim202550/post/36725e5c-19f9-4c17-874c-74fffbb9ac42/image.png)

## Maintenance
### Easy to Update a list of exporters by Pull Request as below
* https://github.com/NexClipper/exporterhub.io/blob/main/api/exporter_list.csv

### Tag rule for Build in the hub.docker.com
#### exporterhub Frontend build tag
* Source pattern of Tag: `/^fe([0-9.]+)$/` 
   * ex) `fe0.2.0` -> `nexclipper/exporterhub:release-fe0.2.0`
#### exporterhub API server build tag
* Source pattern of Tag: `/^api([0-9.]+)$/` 
   * ex) `api0.3` -> `nexclipper/exporterhub-api:release-api0.3`

### Docker image registry
* nexclipper/exporterhub: https://hub.docker.com/repository/docker/nexclipper/exporterhub
* nexclipper/exporterhub-api: https://hub.docker.com/repository/docker/nexclipper/exporterhub-api
