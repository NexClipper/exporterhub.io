# Redis Exporter

A Prometheus exporter for Redis, which provides various performance monitoring metrics.


### Usage:

Redis is an in-memory data structure store, used as a distributed, in-memory key–value database, cache and message broker, with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indices.

Redis exporter exports various insights, which will help you to keep an eye on your cluster.


### Installing Redis Exporter Charts: 
1- If your Redis is not up and ready you can start Redis cluster using helm:
```access transformers
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm install my-release --set replicaCount=3   --set architecture=replicaset  bitnami/Redis
```

2- Add Redis exporter helm repo 
```access transformers
$ helm repo add nexclipper [https://nexclipper.github.io/helm-charts]
$ helm repo update
``` 
3- install the chart 
```access transformers
$ helm install [RELEASE_NAME] nexclipper/Redis-exporter
```
```access transformers
helm install [RELEASE_NAME] nexclipper/Redis-exporter
```

- Or you can create secret (in the releases namespace) containing the key defined on existingSecret.key, with the URI is referred via existingSecret.name. If no secret key is defined, the default value is Redis-uri.

Note: for helm v2 add `--name` before [RELEASE_NAME]. ex:  `helm install --name  [RELEASE_NAME] nexclipper/Redis-exporter`

4- To see the metrics run 
```access transformers
  kubectl port-forward service/[RELEASE_NAME]-prometheus-Redis-exporter 9419

```
Visit http://localhost:9419 to see the metrics

### Configuration 

#### helm Chart Values Configuration
The following table lists the configurable parameters of the Redis Exporter chart and their default values.

| Parameter | Description | Default |
|-----------|-------------|---------|
| `service.type` | Node/pod affinities | ClusterIP |
| `service.Port` |  port | `9121` |
| `resources` | for limiting resources | `{}` |
| `priorityClassName` | The extra command line arguments to pass to the Redis Exporter  | See values.yaml |
| `nodeSelector` | Override the full chart name | `` |
| `tolerations` | Redis Exporter image pull policy | `{}` |
| `affinity` | Redis Exporter image name | `{}` |
| `redisAddress` | List of container registry secrets | `redis-master:6379` 
| `labels` | labels | `{}` |
| `auth.enabled` | Override the application name  | `false` |
| `redisPassword` | Node labels for pod assignment | `` |




Specify parameters using the `--set key=value[,key=value]` argument to `helm install`. For example,

```console
$ helm install [RELEASE_NAME] nexclipper/Redis-exporter --set rabbitnq.url="http://Redis:9121" --set rabbitnq.user="user"  --set rabbitnq.password="helloworld"
```

Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,


``` export values
$ helm show values nexclipper/Redis-exporter > values.yaml 
```

```console
$ helm install my-release -f values.yaml nexclipper/Redis-exporter
```
#### Rabbit MQ Service Configuration
replicaCount	|desired number of prometheus-rabbitmq-exporter pods	1
image.repository|	prometheus-rabbitmq-exporter image repository	kbudde/rabbitmq-exporter
image.tag|	prometheus-rabbitmq-exporter image tag	v0.29.0
image.pullPolicy	|image pull policy	IfNotPresent
service.type|	desired service type	ClusterIP
service.internalport|	service listening port	9419
service.externalPort|	public service port	9419
resources	|cpu/memory resource requests/limits	{}
loglevel	|exporter log level	{}
rabbitmq.url|	rabbitmq management url	http://myrabbit:15672
rabbitmq.user|	rabbitmq user login	guest
rabbitmq.password|	rabbitmq password login	guest
rabbitmq.existingPasswordSecret|	existing secret name containing password key	~
rabbitmq.capabilities|	comma-separated list of capabilities supported by the RabbitMQ server	bert,no_sort
rabbitmq.include_queues|	regex queue filter. just matching names are exported	.*
rabbitmq.skip_queues|	regex, matching queue names are not exported	^$
rabbitmq.include_vhost|	regex vhost filter. Only queues in matching vhosts are exported	.*
rabbitmq.skip_vhost	|regex, matching vhost names are not exported. First performs include_vhost, then skip_vhost	^$
rabbitmq.skip_verify|	true/0 will ignore certificate errors of the management plugin	false
rabbitmq.exporters	|List of enabled modules. Just "connections" is not enabled by default	exchange,node,overview,queue
rabbitmq.output_format|	Log ouput format. TTY and JSON are suported	TTY
rabbitmq.timeout	|timeout in seconds for retrieving data from management plugin	30
rabbitmq.max_queues	|max number of queues before we drop metrics (disabled if set to 0)	0
annotations	|pod annotations for easier discovery	{}
prometheus.monitor.enabled|	Set this to true to create ServiceMonitor for Prometheus operator	false
prometheus.monitor.additionalLabels|	Additional labels that can be used so ServiceMonitor will be discovered by Prometheus	{}
prometheus.monitor.interval|	Interval at which Prometheus Operator scrapes exporter	15s
prometheus.monitor.namespace|	Selector to select which namespaces the Endpoints objects are discovered from.	[]

global.imageRegistry Global Docker image registry	""
global.imagePullSecrets	Global Docker registry secret names as an array	[]
global.storageClass	Global StorageClass for Persistent Volume(s)	""


#### Why use Bitnami Images?

- Bitnami closely tracks upstream source changes and promptly publishes new versions of this image using our automated systems.
- With Bitnami images the latest bug fixes and features are available as soon as possible.
- Bitnami containers, virtual machines and cloud images use the same components and configuration approach - making it easy to switch between formats based on your project needs.
- All our images are based on minideb a minimalist Debian based container image which gives you a small base container image and the familiarity of a leading Linux distribution.
- All Bitnami images available in Docker Hub are signed with Docker Content Trust (DCT). You can use DOCKER_CONTENT_TRUST=1 to verify the integrity of the images.
- Bitnami container images are released daily with the latest distribution packages available.
- This CVE scan report contains a security report with all open CVEs. To get the list of actionable security issues, find the "latest" tag, click the vulnerability report link under the corresponding "Security scan" field and then select the "Only show fixable" filter on the next page.



### References :
- https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-Redis-exporter#configuration
- https://hub.docker.com/r/bitnami/Redis-exporter/
