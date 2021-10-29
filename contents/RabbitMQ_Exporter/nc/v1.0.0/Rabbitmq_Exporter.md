# Rabbitmq Exporter

A Prometheus exporter for Rabbitmq, which provides various performance monitoring metrics.


### Usage:

Rabbitmq is a message broker which is a very important tools for various applications, many transactional systems rely on RabbitMQ. Losing just one message sometimes can become a huge loss for your business. Monitoring will help you to narrow down the causes to such behaviour.

RabbitMQ exporter exports various insights, which will help you to keep an eye on your cluster.


### Installing Rabbitmq Exporter Charts: 
1- If your Rabbitmq is not up and ready you can start Rabbitmq cluster using helm:
```access transformers
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm install my-release --set replicaCount=3   --set architecture=replicaset  bitnami/Rabbitmq
```

2- Add Rabbitmq exporter helm repo 
```access transformers
$ helm repo add nexclipper [https://nexclipper.github.io/helm-charts]
$ helm repo update
``` 
3- install the chart 
```access transformers
$ helm install [RELEASE_NAME] nexclipper/Rabbitmq-exporter
```
you can pass various Rabbitmq parameters by 
- Adding `--set rabbitnq.url="" --set rabbitnq.user=""  --set rabbitnq.password=""`  ex: 
```access transformers
helm install [RELEASE_NAME] nexclipper/Rabbitmq-exporter --set rabbitnq.url="http://rabbitmq:15672" --set rabbitnq.user="user"  --set rabbitnq.password="helloworld"
```

- Or you can create secret (in the releases namespace) containing the key defined on existingSecret.key, with the URI is referred via existingSecret.name. If no secret key is defined, the default value is Rabbitmq-uri.

Note: for helm v2 add `--name` before [RELEASE_NAME]. ex:  `helm install --name  [RELEASE_NAME] nexclipper/Rabbitmq-exporter`

4- To see the metrics run 
```access transformers
  kubectl port-forward service/[RELEASE_NAME]-prometheus-Rabbitmq-exporter 9419

```
Visit http://localhost:9419 to see the metrics

### Configuration 

#### Exporter Configuration
The following table lists the configurable parameters of the Rabbitmq Exporter chart and their default values.

| Parameter | Description | Default |
|-----------|-------------|---------|
| `service.type` | Node/pod affinities | ClusterIP |
| `service.externalPort` | port | 9419 |
| `service.internalPort` | internal port | `9419` |
| `resources` | for limiting resources | `{}` |
| `priorityClassName` | The extra command line arguments to pass to the Rabbitmq Exporter  | See values.yaml |
| `nodeSelector` | Override the full chart name | `` |
| `tolerations` | Rabbitmq Exporter image pull policy | `{}` |
| `affinity` | Rabbitmq Exporter image name | `{}` |
| `loglevel` | Rabbitmq Exporter image tag | `info` |
| `rabbitmq.url` | List of container registry secrets | `http://myrabbit:15672` |
| `rabbitmq.user` | The [URI](https://docs.Rabbitmq.com/manual/reference/connection-string) to connect to Rabbitmq | `guest` |
| `rabbitmq.password` | Override the application name  | `guest` |
| `rabbitmq.existingPasswordSecret` | Node labels for pod assignment | `~` |
| `rabbitmq.existingPasswordSecretKey` | Annotations to be added to all pods | `password` |
| `rabbitmq.capabilities` | The container port to listen on | `berth.nosort` |
| `rabbitmq.include_queues` | Pod priority class name | `.*` |
| `rabbitmq.include_vhost` | Number of replicas in the replica set | `.*` |
| `rabbitmq.skip_queues` | Pod resource requests and limits | `^$` |
| `rabbitmq.skip_verify` | Extra environment variables passed to pod | `false` |
| `rabbitmq.skip_vhost` | Security context for the pod | See values.yaml |
| `rabbitmq.exporters` | Additional labels for the service definition | `exchange,node,overview,queue` |
| `rabbitmq.output_format` | Annotations to be added to the service | `TTY` |
| `rabbitmq.timeout` | The port to expose | `30` |



Specify parameters using the `--set key=value[,key=value]` argument to `helm install`. For example,

```console
$ helm install [RELEASE_NAME] nexclipper/Rabbitmq-exporter --set rabbitnq.url="http://rabbitmq:15672" --set rabbitnq.user="user"  --set rabbitnq.password="helloworld"
```

Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,


``` export values
$ helm show values nexclipper/Rabbitmq-exporter > values.yaml 
```

```console
$ helm install my-release -f values.yaml nexclipper/Rabbitmq-exporter
```
#### Rabbit MQ Service Configuration
 

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
- https://github.com/percona/Rabbitmq_exporter
- https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-Rabbitmq-exporter#configuration
- https://hub.docker.com/r/bitnami/Rabbitmq-exporter/
