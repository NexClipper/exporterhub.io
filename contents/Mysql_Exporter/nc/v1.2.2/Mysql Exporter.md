# Mysql Exporter

Prometheus exporter for MySQL server metrics.


### Usage:

The Mysql Exporter collects and exports oplog, replica set, server status, sharding and storage engine metrics. It handles ALL metrics exposed by Mysql monitoring commands. It loops over all the fields exposed in diagnostic commands and tries to get data from them. 


### Installing Mysql Exporter Charts: 
1- If your Mysql is not up and ready you can start Mysql cluster using helm:
```access transformers
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm install my-release  bitnami/Mysql
```

2- Add Mysql exporter helm repo 
```access transformers
$ helm repo add nexclipper [https://nexclipper.github.io/helm-charts]
$ helm repo update
``` 
3- install the chart 
```access transformers
$ helm install [RELEASE_NAME] nexclipper/Mysql-exporter
```
To configure direct MySQL connection by value, set mysql.user, mysql.pass, mysql.host and mysql.port

- Adding `--set mysql.user="[any user in your mysql]" ` 
ex: 
```access transformers

helm install [RELEASE_NAME] nexclipper/Mysql-exporter --set mysql.host="" --set mysql.user="" --set mysql.pass="" --set mysql.port=""
```

- To configure direct MySQL connnetion by secret, you must store a connection string in a secret, and set mysql.existingSecret to [SECRET_NAME]

Note: for helm v2 add `--name` before [RELEASE_NAME]. ex:  `helm install --name  [RELEASE_NAME] nexclipper/Mysql-exporter`

4- To see the metrics run 
```access transformers
  kubectl port-forward service/[RELEASE_NAME]-prometheus-Mysql-exporter 9104

```
Visit http://127.0.0.1:9104 to see the metrics

### Configuration 

#### Charts Configuration
The following table lists the configurable parameters of the Mysql chart and their default values.

| Parameter | Description | Default |
|-----------|-------------|---------|
| `image.repository` | Node/pod affinities | `prom/mysqld-exporter` |
| `image.tag` | Annotations to be added to the pods | `v0.12.1` |
| `image.pullPolicy` | Refer to an existing secret name instead of using `IfNotPresent` | `` |
| `service.labels` | The extra command line arguments to pass to the Mysql Exporter  | `{}` |
| `service.annotations` | Override the full chart name | `{}` |
| `service.name` | Mysql Exporter image pull policy | `mysql-exporter` |
| `service.type` | Mysql Exporter image name | `ClusterIP` |
| `service.externalPort` | Mysql Exporter image tag | `9104` |
| `service.internalPort` | List of container registry secrets | `9104` |
| `serviceMonitor.enabled` | The [URI](https://docs.Mysql.com/manual/reference/connection-string) to connect to Mysql | `false` |
| `serviceMonitor.additionalLabels` | Override the application name  | `{}` |
| `serviceMonitor.jobLabel` | Node labels for pod assignment | `` |
| `serviceMonitor.targetLabels` | Annotations to be added to all pods | `[]` |
| `serviceMonitor.podTargetLabels` | The container port to listen on | `[]` |
| `serviceMonitor.metricRelabelings` | Pod priority class name | `[]` |
| `serviceAccount.create` | Number of replicas in the replica set | `false` |
| `serviceAccount.name` | Pod resource requests and limits | `` |
| `resources` | Extra environment variables passed to pod | `{}` |
| `nodeSelector` | Security context for the pod | `[]` |
| `tolerations` | Additional labels for the service definition | `{}` |
| `affinity` | Annotations to be added to the service | `{}` |
| `podLabels` | The port to expose | `{}` |
| `podSecurityContext` | The type of service to expose | `{}` |
| `securityContext` | If `true`, create the service account | `{}` |
| `annotations.prometheus.io/scrape` | Name of the service account | `true` |
| `annotations.prometheus.io/path` | Set to true if using the Prometheus Operator | `/metrics` |
| `annotations.prometheus.io/port` | Interval at which metrics should be scraped | `9104` |
| `collectors` | Interval at which metric scrapes should time out | `{}` |
| `mysql.db` | The namespace where the Prometheus Operator is deployed | `` |
| `mysql.host` | Additional labels to add to the ServiceMonitor | `localhost` |
| `mysql.param` | Set of labels to transfer on the Kubernetes Service onto the target. | ``
| `mysql.pass` | MetricRelabelConfigs to apply to samples before ingestion. | `password` |
| `mysql.port` | List of node taints to tolerate  | `3306` |
| `mysql.protocol` | List of node taints to tolerate  | `""` |
| `mysql.user` | List of node taints to tolerate  | `exporter` |
| `mysql.existingSecret.name` | List of node taints to tolerate  | `""` |
| `mysql.existingPasswordSecret.key` | List of node taints to tolerate  | `""` |

| `cloudsqlproxy.enabled` | List of node taints to tolerate  | `false` |
| `cloudsqlproxy.image.repo` | List of node taints to tolerate  | `gcr.io/cloudsql-docker/gce-proxy` |
| `cloudsqlproxy.image.tag` | List of node taints to tolerate  | `1.19.1-alpine` |
| `cloudsqlproxy.image.pullPolicy` | List of node taints to tolerate  | `IfNotPresent` |
| `cloudsqlproxy.instanceConnectionName` | List of node taints to tolerate  | `[]` |
| `cloudsqlproxy.port` | List of node taints to tolerate  | `3306` |
| `cloudsqlproxy.credentials` | List of node taints to tolerate  | `"` |




Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example,

```console
$ helm install [RELEASE_NAME] --set mysql.host="" --set mysql.user="" --set mysql.pass=""  --set mysql.port=""  nexclipper/Mysql-exporter
```

Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,

```console
$ helm install my-release -f values.yaml nexclipper/Mysql-exporter
```
### Sample metrics ouput 

For sample metrics refer to this file <path>


#### Why use Bitnami Images?

- Bitnami closely tracks upstream source changes and promptly publishes new versions of this image using our automated systems.
- With Bitnami images the latest bug fixes and features are available as soon as possible.
- Bitnami containers, virtual machines and cloud images use the same components and configuration approach - making it easy to switch between formats based on your project needs.
- All our images are based on minideb a minimalist Debian based container image which gives you a small base container image and the familiarity of a leading Linux distribution.
- All Bitnami images available in Docker Hub are signed with Docker Content Trust (DCT). You can use DOCKER_CONTENT_TRUST=1 to verify the integrity of the images.
- Bitnami container images are released daily with the latest distribution packages available.
- This CVE scan report contains a security report with all open CVEs. To get the list of actionable security issues, find the "latest" tag, click the vulnerability report link under the corresponding "Security scan" field and then select the "Only show fixable" filter on the next page.



### References :
- https://bitnami.com/stack/mysql/helm
- https://github.com/prometheus-community/helm-charts/tree/main/charts/       prometheus-mysql-exporter
- https://hub.docker.com/r/bitnami/Mysql-exporter/