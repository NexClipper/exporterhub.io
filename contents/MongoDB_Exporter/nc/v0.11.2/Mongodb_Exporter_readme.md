# MongoDB Exporter

A Prometheus exporter for MongoDB including sharding, replication and storage engines


### Usage:

The MongoDB Exporter collects and exports oplog, replica set, server status, sharding and storage engine metrics. It handles ALL metrics exposed by MongoDB monitoring commands. It loops over all the fields exposed in diagnostic commands and tries to get data from them. 


### Installing MongoDB Exporter Charts: 
1- If your mongodb is not up and ready you can start mongodb cluster using helm:
```access transformers
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm install my-release --set replicaCount=3   --set architecture=replicaset  bitnami/mongodb
```

2- Add mongodb exporter helm repo 
```access transformers
$ helm repo add nexclipper [https://nexclipper.github.io/helm-charts]
$ helm repo update
``` 
3- install the chart 
```access transformers
$ helm install [RELEASE_NAME] nexclipper/mongodb-exporter
```
you can pass mongodb uri by 
- Adding `--set mongodb.uri="<[mongodb[+srv]://][user:pass@]host1[:port1][,host2[:port2],...][/database][?options]>" `  ex: 
```access transformers
helm install [RELEASE_NAME] nexclipper/mongodb-exporter --set mongodb.uri="mongodb://root:4k0Z1wqMaW@my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017,my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017/admin?&authSource=admin"
```

- Or you can create secret (in the releases namespace) containing the key defined on existingSecret.key, with the URI is referred via existingSecret.name. If no secret key is defined, the default value is mongodb-uri.

Note: for helm v2 add `--name` before [RELEASE_NAME]. ex:  `helm install --name  [RELEASE_NAME] nexclipper/mongodb-exporter`

4- To see the metrics run 
```access transformers
  kubectl port-forward service/[RELEASE_NAME]-prometheus-mongodb-exporter 9216

```
Visit http://127.0.0.1:9216 to see the metrics

### Configuration 

#### Charts Configuration
The following table lists the configurable parameters of the Mongodb chart and their default values.

| Parameter | Description | Default |
|-----------|-------------|---------|
| `affinity` | Node/pod affinities | `{}` |
| `annotations` | Annotations to be added to the pods | `{}` |
| `existingSecret.name` | Refer to an existing secret name instead of using `mongodb.uri` | `` |
| `existingSecret.key` | Refer to an existing secret key | `mongodb-uri` |
| `extraArgs` | The extra command line arguments to pass to the MongoDB Exporter  | See values.yaml |
| `fullnameOverride` | Override the full chart name | `` |
| `image.pullPolicy` | MongoDB Exporter image pull policy | `IfNotPresent` |
| `image.repository` | MongoDB Exporter image name | `bitnami/mongodb-exporter` |
| `image.tag` | MongoDB Exporter image tag | `0.11.2` |
| `imagePullSecrets` | List of container registry secrets | `[]` |
| `mongodb.uri` | The [URI](https://docs.mongodb.com/manual/reference/connection-string) to connect to MongoDB | `` |
| `nameOverride` | Override the application name  | `` |
| `nodeSelector` | Node labels for pod assignment | `{}` |
| `podAnnotations` | Annotations to be added to all pods | `{}` |
| `port` | The container port to listen on | `9216` |
| `priorityClassName` | Pod priority class name | `` |
| `replicas` | Number of replicas in the replica set | `1` |
| `resources` | Pod resource requests and limits | `{}` |
| `env` | Extra environment variables passed to pod | `{}` |
| `securityContext` | Security context for the pod | See values.yaml |
| `service.labels` | Additional labels for the service definition | `{}` |
| `service.annotations` | Annotations to be added to the service | `{}` |
| `service.port` | The port to expose | `9216` |
| `service.type` | The type of service to expose | `ClusterIP` |
| `serviceAccount.create` | If `true`, create the service account | `true` |
| `serviceAccount.name` | Name of the service account | `` |
| `serviceMonitor.enabled` | Set to true if using the Prometheus Operator | `false` |
| `serviceMonitor.interval` | Interval at which metrics should be scraped | `30s` |
| `serviceMonitor.scrapeTimeout` | Interval at which metric scrapes should time out | `10s` |
| `serviceMonitor.namespace` | The namespace where the Prometheus Operator is deployed | `` |
| `serviceMonitor.additionalLabels` | Additional labels to add to the ServiceMonitor | `{}` |
| `serviceMonitor.targetLabels` | Set of labels to transfer on the Kubernetes Service onto the target. | `[]`
| `serviceMonitor.metricRelabelings` | MetricRelabelConfigs to apply to samples before ingestion. | `[]` |
| `tolerations` | List of node taints to tolerate  | `[]` |


Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example,

```console
$ helm install [RELEASE_NAME] --set mongodb.uri="<[mongodb[+srv]://][user:pass@]host1[:port1][,host2[:port2],...][/database][?options]>"  nexclipper/mongodb-exporter
```

Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,

```console
$ helm install my-release -f values.yaml nexclipper/mongodb-exporter
```

#### exporter Configuration

The following exporter configurations can be added to `extraArgs:` in the values.yaml file to configure the exporter 

|Flag|Description|Example|
|-----|-----|-----|
|-h, \-\-help|Show context-sensitive help||
|\-\-compatible-mode|Exposes new metrics in the new and old format at the same time||
|\-\-discovering-mode|Enable autodiscover collections from databases which set in collstats-colls and indexstats-colls||
|\-\-mongodb.collstats-colls|List of comma separated databases.collections to get stats|\-\-mongodb.collstats-colls=testdb.testcol1,testdb.testcol2|
|\-\-mongodb.direct-connect|Whether or not a direct connect should be made. Direct connections are not valid if multiple hosts are specified or an SRV URI is used|\-\-mongodb.direct-connect=false|
|\-\-mongodb.indexstats-colls|List of comma separated database.collections to get index stats|\-\-mongodb.indexstats-colls=db1.col1,db1.col2|
|\-\-mongodb.uri|MongoDB connection URI ($MONGODB_URI)|\-\-mongodb.uri=mongodb://user:pass@127.0.0.1:27017/admin?ssl=true|
|\-\-mongodb.global-conn-pool|Use global connection pool instead of creating new connection for each http request.||
|\-\-web.listen-address|Address to listen on for web interface and telemetry|\-\-web.listen-address=":9216"|
|\-\-web.telemetry-path|Metrics expose path|\-\-web.telemetry-path="/metrics"|
|\-\-log.level|Only log messages with the given severity or above. Valid levels: [debug, info, warn, error]|\-\-log.level="error"|
|\-\-disable.diagnosticdata|Disable collecting metrics from getDiagnosticData||
|\-\-disable.replicasetstatus|Disable collecting metrics from replSetGetStatus||
|\-\-disable.dbstats|Disable collecting metrics from dbStats||
|--version|Show version and exit|


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
- https://github.com/percona/mongodb_exporter
- https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-mongodb-exporter#configuration
- https://hub.docker.com/r/bitnami/mongodb-exporter/
