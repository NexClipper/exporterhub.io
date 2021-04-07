<!--lint disable awesome-heading--> <!--lint disable awesome-git-repo-age-->
<!--lint disable awesome-license--> 
<!--lint disable double-link-->

# [Exporterhub.io](https://exporterhub.io/) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) 
<!--lint disable awesome-badge-->
<!--lint disable awesome-heading-->
 > ### A Curated List of Prometheus Exporters
 > #### Powered by <a href="https://nexclipper.io"><img src="https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/NexCloud_en.png" width= 120></a>
 



<!--lint disable awesome-github-->
<!--lint disable awesome-toc-->
## Contents
* [Definition of ExporterHub.io](https://github.com/NexClipper/exporterhub.io#Definition-of-exporterhubio)
* [Demo Video](https://github.com/NexClipper/exporterhub.io#Demo)
* [Diagram Overview](https://github.com/NexClipper/exporterhub.io#diagram-overview)
* [Kick-start](https://github.com/NexClipper/exporterhub.io#kickstart)
* [Contribute](https://github.com/NexClipper/exporterhub.io#contribute)
* [References](https://github.com/NexClipper/exporterhub.io#references)
* [License](https://github.com/NexClipper/exporterhub.io#license)



## Definition of [ExporterHub.io](https://exporterhub.io/)


### ExporterHub.io is an application for the Prometheus Exporters community.
ExporterHub.io is not just a curated list, but also provides exporter installation guide, alert rule configuration, and dashboard configuration.
Each exporter's page contains the followings:
* Official GitHub (Origin Repository)
* Resource (Install, Exported Metrics)
* Alert-rule (Recommended)
* Dashboard (Grafana)
* Star (linked to Github Origin Repository)
* Fork to bucket (linked to personal Github Repository)
* Edit Dashboard and Alert-rule by Admin

ExporterHub.io recommends the best-fit exporter(s) to support Prometheus monitoring needs in enterprise environments with complex and closed network security settings.

To help and ease you with best-practice Prometheus, ExporterHub.io discovers and recommends the best-fit exporter(s) available to expose metrics data from your specific systems and services being monitored.
### The features that distinguish Exporterhub.io from other applications are:



<!--lint disable no-undefined-references-->
* [x] Installation Guide, Metric Collection Flags, Recommended Alert-rule
* [x] Card Style GitHub Page
* [x] Admin Authorizaion(linked to organization of Github)
* [x] Register exporters, edit Dashboard and Alert by Admin(linked to Github organization Repository)
* [x] Easy search of Exporters
* [x] Personalization(fork/delete the exporter linked to Github personal Repository)
* [ ] NexClipper Cloud Integration (coming soon)
  * [ ] Install exporters automatically
  * [ ] Generate Alert Rules
  * [ ] Recommend best-fit exporter(s)
* [ ] Dev's Choice(coming soon)
  * [ ] Share my bucket
  * [ ] Search bar

## Demo Video
* Image click to Youtube for the full examples and guides:  
  [![Demo](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/demo_01.png)](https://youtu.be/wa4dknZk7Kk)





  

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
* ___1) Click developer settings tab of organization. While you create OAuth Apps, please take note of redirect url of authentication.___

![](https://images.velog.io/images/dvkim202550/post/a81cec66-cfba-424e-bc07-c54052deb22b/image.png)
![image](https://user-images.githubusercontent.com/65844723/113794594-80a5fc80-977d-11eb-9f70-9030ad2c193b.png)


* ___2) Client ID, Client Secrets, and callback url(Service URL) are required for authentication.___



![](https://images.velog.io/images/dvkim202550/post/168d8232-2951-4a77-ab8f-881fdb85b457/image.png)


### 4. Write docker-compose.yml accordingly.
* ___"NEED_TO_SET_UP" parts are to be revised in   ```./.env```file, with the reference ```.env.SAMPLE``` file at ```/exporterhub.io```:___
```yml
REACT_APP_API_URL="NEED_TO_SET_UP"
REACT_APP_API_STATUS="y"

CLIENT_ID="NEED_TO_SET_UP"
CLIENT_SECRETS="NEED_TO_SET_UP"
SECRET_KEY="NEED_TO_SET_UP"
ALGORITHM="NEED_TO_SET_UP"
ORGANIZATION="NEED_TO_SET_UP"
```
* ___"NEED_TO_SET_UP" parts are to be linked to docker-compose.yml as below:___
<img src="https://images.velog.io/images/dvkim202550/post/1033e78b-1800-4a01-9614-e24cc569b64f/image.png" width="300">


### 5. build image before running
*  run the command `make build` at `/exporterhub.io` 


### 6. Run by default(in localhost)

*  run the command `make run` at `/exporterhub.io` 

### 7. Or, Run for external network
* If you want to run the server in extenal server or instance, please make sure the `SERVICE_URL` for API server IP or URL as below
```
services:
  expoterhub:
    image: nexclipper/exporterhub:latest
    ports:
      - "8080:3000"
    environment:
       SERVICE_PUBLIC: "n"
       # You can add and modify below setup to './.env' file for externel configuration without security issue.
       SERVICE_URL: ${REACT_APP_API_URL}
       CLIENT_ID: ${CLIENT_ID}
       CLIENT_SECRETS: ${CLIENT_SECRETS}
```   
* then, run the command `make run` at `/exporterhub.io` 
      
### 8. Initial Check & Set
<!--lint disable awesome-list-item-->
* At the begining, input the generated Token to landing page as below. (http://localhost:8080)

![](https://images.velog.io/images/dvkim202550/post/b584e1ee-78ad-460f-8380-9e3af9c96b3a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-06%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.11.58.png)

* Inintial settings are done if you get landing page with exporter cards as below.

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


## References
* [Official Exporters AND Integrations](https://prometheus.io/docs/instrumenting/exporters/)
* [Awesome Prometheus alerts](https://awesome-prometheus-alerts.grep.to/)
* [SLOs with Prometheus](https://promtools.dev/)
* [Awesome Prometheus](https://github.com/roaldnefs/awesome-prometheus)
* [Promcat](https://promcat.io/)
* [Github Documentation](https://docs.github.com/en)

## Contribute
Contributions are welcome!
If you have Specific exporter to contribute to [ExporterHub.io](https://exporterhub.io/), 
feel free to [send issues](https://github.com/NexClipper/exporterhub.io/issues) or [pull requests](https://github.com/NexClipper/exporterhub.io/pulls).
<br> Please join us!: https://app.slack.com/client/TC3DP3HPG/C01RTA59G66

## Service Map
![servicemap](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/exporterhub_v3.png)



## License
Exporterhub.io is licensed under the MIT License. See [LICENSE](https://github.com/NexClipper/exporterhub.io/blob/master/LICENSE) for the full license text.


## logging
* Main branch has been changed from master



<p align="right"> Supported by <a href="https://wecode.co.kr/"><img src="https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/wecode_logo.jpg" width= 120></a></p>
