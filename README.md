<!--lint disable awesome-heading--> <!--lint disable awesome-git-repo-age-->
<!--lint disable awesome-license--> 
<!--lint disable double-link-->

# [Exporterhub.io](https://exporterhub.io/) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) 
<!--lint disable awesome-badge-->
<!--lint disable awesome-heading-->
 > ### A Curated List of Prometheus Exporters
 > #### Powered by <a href="https://nexclipper.io"><img src="https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/NexCloud_en.png" width= 120></a>
 > Come and join us!: https://app.slack.com/client/TC3DP3HPG/C01RTA59G66
 



![exporterhub](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/ExporterHub_Logo_H.png)
<!--lint disable awesome-github-->
<!--lint disable awesome-toc-->
## Contents
* [Definition of ExporterHub.io](https://github.com/NexClipper/exporterhub.io#Definition-of-exporterhubio)
* [Roadmap](https://github.com/NexClipper/exporterhub.io#roadmap)
* [See Demo](https://github.com/NexClipper/exporterhub.io#Demo)
* [Diagram Overview](https://github.com/NexClipper/exporterhub.io#diagram-overview)
* [Kickstart](https://github.com/NexClipper/exporterhub.io#kickstart)
* [Contribute](https://github.com/NexClipper/exporterhub.io#contribute)
* [References](https://github.com/NexClipper/exporterhub.io#references)
* [License](https://github.com/NexClipper/exporterhub.io#license)



## Definition of [ExporterHub.io](https://exporterhub.io/)
![](https://images.velog.io/images/dvkim202550/post/795be79c-80c6-4b62-96ff-17247885b00c/image.png)

### ExporterHub.io is an application for the Prometheus Exporters community.
ExporterHub.io is not just a curated list, but also provides exporter installation guide, alert rule configuration, and dashboard configuration.
Each exporter's page contains the followings:
* Official GitHub (Origin Repository)
* Resource (Install, Exported Metrics)
* Alert-rule (Recommended)
* Dashboard (Grafana)
* Star (linked to Github Origin Repository)
* Bucket (able to manage personal Github Repository as well)
* Edit Dashboard and Alert-rule by Admin

## See Demo
* Image click to Youtube for the full examples and guides:  
  [![Demo](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/demo_01.png)](https://youtu.be/wa4dknZk7Kk)

## Roadmap
To help and ease you with best-practice Prometheus, ExporterHub.io discovers and recommends the best-fit exporter(s) available to expose metrics data from your specific systems and services being monitored.

Using the best-fit exporter(s) helps standardizing metrics data exposition practices, maximizing monitoring experience with minimal manual inputs.

ExporterHub.io recommends the best-fit exporter(s) to support Prometheus monitoring needs in enterprise environments with complex and closed network security settings.

<!--lint disable no-undefined-references-->
* [x] Installation Guide, Metric Collection Flags, Recommended Alert-rule
* [x] Card Style GitHub Page
* [x] Admin Authorizaion
* [x] Register exporters, edit Dashboard and Alert by Admin
* [x] Easy search of Exporters
* [x] Personalization (Add, Delete)
* [ ] NexClipper Cloud Integration (coming soon)
  * [ ] Install exporters automatically
  * [ ] Generate Alert Rules
  * [ ] Recommend best-fit exporter(s)
  

## Diagram Overview
<!--lint disable awesome-list-item-->
* Image click to Youtube:
  * [![Diagram Overview](https://img.youtube.com/vi/pPZfNi6qms4/0.jpg)](https://youtu.be/pPZfNi6qms4)

## Kickstart
### Ready: Token is required for GitHub infomation crawling
<!--lint disable awesome-list-item-->
* ___Create Token before the App runs as below.___
   * https://github.com/settings/tokens/new
![Token Generator](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/create_a_token_first_N.png)

### ※ Github env settings below must be done under   _<u>organization account settings</u>_, not in personal.

### 1. Create organization
* ___This must be done before authorizing and managing admins.___
* ___Github docs reference:___
   * https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch



### 2. Create and register an OAuth app under your organization.
* ___Client ID, Client Secrets, and callback url(Service URL) are required for authentication.___
* ___Github docs:___
https://docs.github.com/en/rest/guides/basics-of-authentication


![](https://images.velog.io/images/dvkim202550/post/a29c1acf-f14f-446e-9b54-170c40bda50b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.49.50.png)


### 3. Write docker-compose.yaml accordingly.
* ___"NEED_TO_SET_UP" parts are to be revised.___ in `./.env` file
```sh
REACT_APP_API_URL="http://NEED_TO_SET_UP"
REACT_APP_API_STATUS="y"

CLIENT_ID="NEED_TO_SET_UP"
CLIENT_SECRETS="NEED_TO_SET_UP"
ORGANIZATION="NEED_TO_SET_UP"
SECRET_KEY="NEED_TO_SET_UP"
```

### Run by default(in localhost)
* Run the docker-compose as below
```
docker-compose up -d 
```

### Or, Run for external network
* If youn want to run the server in extenal server or instance. Please make sure the `SERVICE_URL` for API server IP or URL as below
```
SERVICE_URL="http://192.168.10.11"
```   

      
### Check & Set
<!--lint disable awesome-list-item-->
* And Input the generated Token to landing page as below. (http://localhost:8080)
   * ![Token input](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/token.png)


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

## Service Map
![servicemap](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/exporterhub_v3.png)



## License
Exporterhub.io is licensed under the MIT License. See [LICENSE](https://github.com/NexClipper/exporterhub.io/blob/master/LICENSE) for the full license text.


## logging
* Main branch has been changed from master



<p align="right"> Supported by <a href="https://wecode.co.kr/"><img src="https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/wecode_logo.jpg" width= 120></a></p>
