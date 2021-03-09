<!--lint disable awesome-heading--> <!--lint disable awesome-git-repo-age-->
<!--lint disable awesome-license--> 
<!--lint disable double-link-->

# [Exporterhub.io](https://exporterhub.io/) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) 
<!--lint disable awesome-badge-->
<!--lint disable awesome-heading-->
 > ### A Curated List of Prometheus Exporters 
 > #### (powered by [nexclipper](https://nexclipper.io))
![exporterhub](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/ExporterHub_Logo_H.png)
<!--lint disable awesome-github-->
<!--lint disable awesome-toc-->
## Contents
* [What is ExporterHub.io](https://github.com/NexClipper/exporterhub.io#what-is-exporterhubio)
* [Roadmap](https://github.com/NexClipper/exporterhub.io#roadmap)
* [Diagram Overview](https://github.com/NexClipper/exporterhub.io#diagram-overview)
* [Kickstart](https://github.com/NexClipper/exporterhub.io#kickstart)
* [Contribute](https://github.com/NexClipper/exporterhub.io#contribute)
* [References](https://github.com/NexClipper/exporterhub.io#references)
* [License](https://github.com/NexClipper/exporterhub.io#license)

## See Demo
* Image click to Youtube:  
  [![Demo](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/demo_01.png)](https://youtu.be/wa4dknZk7Kk)

## What is [ExporterHub.io](https://exporterhub.io/)
![landingpage](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/screen_02.png)

### ExporterHub.io is a front-end(React) & API(python) application for the Prometheus Exporters community
ExporterHub.io is not just a curated list, but also provides exporter installation guide, alert rule configuration, and dashboard configuration.
Each exporter's page contains the followings:
* Official GitHub (Origin Repository)
* Resource (Install, Exported Metrics)
* Alert-rule (Recommended)
* Dashboard (Grafana)

## Roadmap
To help and ease you with best-practice Prometheus, ExporterHub.io discovers and recommends the best-fit exporter(s) available to expose metrics data from your specific systems and services being monitored.

Using the best-fit exporter(s) helps standardizing metrics data exposition practices, maximizing monitoring experience with minimal manual inputs.

ExporterHub.io recommends the best-fit exporter(s) to support Prometheus monitoring needs in enterprise environments with complex and closed network security settings.

<!--lint disable no-undefined-references-->
* [x] Installation Guide, Metric Collection Flags, Recommended Alert-rule
* [x] Card Style GitHub Page
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
### Ready: Token Requires for GitHub infomation crawling
<!--lint disable awesome-list-item-->
* ___Create Token 1st before the App runs as below.___
   * https://github.com/settings/tokens/new
![Token Generator](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/create_a_token_first_N.png)

### Run by default(in localhost)
* Run the docker-compose as below
```
docker-compose up -d
```

### Or, Run for external network
* If youn want to run the server in extenal server or instance. Please make sure the `SERVICE_URL` for API server IP or URL as below
```
services:
  expoterhub:
    image: nexclipper/exporterhub:latest
    ports:
      - "8080:3000"
    environment:
#      SERVICE_URL: "http://localhost"
       SERVICE_URL: "http://192.168.10.11"
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

## Contribute
Contributions are welcome!
If you have Specific exporter to contribute to [ExporterHub.io](https://exporterhub.io/), 
feel free to [send issues](https://github.com/NexClipper/exporterhub.io/issues) or [pull requests](https://github.com/NexClipper/exporterhub.io/pulls).  


## License
Exporterhub.io is licensed under the MIT License. See [LICENSE](https://github.com/NexClipper/exporterhub.io/blob/master/LICENSE) for the full license text.


## logging
* Main branch has been changed from master



Support by <a href="https://wecode.co.kr/"><img src="https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/wecode_logo.jpg" width= 120></a>



