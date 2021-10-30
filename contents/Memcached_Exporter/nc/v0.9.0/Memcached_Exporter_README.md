# Memcached Exporter

A Prometheus exporter for Memcached , Memcached is a caching service which is used above DB level to improve performance. Memcached Exporter will export various insights of Memcached service such as hit,miss,Connections,Items in cache etc.

###Exporter:

Exporter used in the helm chart is official prometheus exporter which can be found on https://github.com/prometheus/memcached_exporter. One can checkout all the metrics it exports on the same page or ./Memcached_Exporter_Sample_metrics.txt.

### Usage:

Using an exporter will get you various insights of the memcached service, which will export data to prometheus and can be easily visualized in grafana dashboards. These insights will help you to filter out the bottlenecks in your system which could lead to even bigger problems in your architecture. 

### Installing Memcached Exporter Charts: 
1- If your Memcached is not up and ready you can start Memcached cluster using helm:
```access transformers
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm install my-release  bitnami/Memcached
```

2- Add Memcached exporter helm repo 
```access transformers
$ helm repo add nexclipper [https://nexclipper.github.io/helm-charts]
$ helm repo update
``` 
3- install the chart 
```access transformers
$ helm install [RELEASE_NAME] nexclipper/Memcached-exporter
```

helm install [RELEASE_NAME] nexclipper/Memcached-exporter 
```


Note: for helm v2 add `--name` before [RELEASE_NAME]. ex:  `helm install --name  [RELEASE_NAME] nexclipper/Memcached-exporter`

4- To see the metrics run 
```access transformers
  kubectl port-forward service/[RELEASE_NAME]-nc-prometheus-memcached-exporter 9150

```
Visit http://127.0.0.1:9150 to see the metrics

### Configuration 

#### Exporter Chart Configuration
The following table lists the configurable parameters of the Memcached chart and their default values.

| Parameter | Description | Default |
|-----------|-------------|---------|
| `rbac.create` | Specifies whether RBAC resources should be created | `true` |
| `rbac.pspEnabled` | # Specifies whether a PodSecurityPolicy should be created | `true` |
| `serviceAccount.create` |   Specifies whether a ServiceAccount should be created | `true` |
| `serviceAccount.name` | If not set and create is true, a name is generated using the fullname template | `''` |
| `extraArgs` | Pass any extra arguments  | `{}` |
| `customLabels` | For passing more labels | `{}` |
| `securityContext | For adding security context | `{}` |
| `env` | For passing more environment variables | `{}` |
| `service.type` | Type of Service | `ClusterIP` |
| `service.port` | Port on which exporter service runs | `9150` |
| `service.annotation.prometheus.io/path` | Url to access in prometheus | `/metrics` |
| `service.annotation.prometheus.io/port` | Port on which prometheus discovers exporter | `9150` |
| `service.annotation.prometheus.io/scrape` | Needs to be enabled so that it can scrape data | `true` |
| `service.labels` | Add labels for service if needed  | `{}` |
| `resources` | If there are any custom resources you want to define for the deployment to run | `{}` |
| `nodeSelector` | Add nodeSelector if needed | `{}` |
| `tolerations` | The container port to listen on | `[]` |
| `affinity` |  | `{}` |
| `memcachedAddress` | Pass the service and port on which memcached is running ex. my-release:11211 | `memcached:11211` |
| `annotations` | For adding extra annotation | `{}` |
| `labels` | Add Label | `{}` |
| `serviceMonitor.enabled` | When set true then use a ServiceMonitor to configure scrapin | `false` |
| `prometheusRule.enabled` | Custom PrometheusRules to be defined | `{}` |
| `prometheusRule.additionalLabels` | To provide additional Labels | `{}` |
| `prometheusRule.namespace` | adding namespace | `""` |
| `prometheusRule.rules` | To add more rules in prometheus| `[]` |


Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example,

```console
$ helm install [RELEASE_NAME] --set Memcached.uri="<[Memcached[+srv]://][user:pass@]host1[:port1][,host2[:port2],...][/database][?options]>"  nexclipper/Memcached-exporter
```

Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,

```console
$ helm install my-release -f values.yaml nexclipper/Memcached-exporter
```

#### Why use Bitnami Images?

- Bitnami closely tracks upstream source changes and promptly publishes new versions of this image using our automated systems.
- With Bitnami images the latest bug fixes and features are available as soon as possible.
- Bitnami containers, virtual machines and cloud images use the same components and configuration approach - making it easy to switch between formats based on your project needs.
- All our images are based on minideb a minimalist Debian based container image which gives you a small base container image and the familiarity of a leading Linux distribution.
- All Bitnami images available in Docker Hub are signed with Docker Content Trust (DCT). You can use DOCKER_CONTENT_TRUST=1 to verify the integrity of the images.
- Bitnami container images are released daily with the latest distribution packages available.
- This CVE scan report contains a security report with all open CVEs. To get the list of actionable security issues, find the "latest" tag, click the vulnerability report link under the corresponding "Security scan" field and then select the "Only show fixable" filter on the next page.



### References :
- https://github.com/prometheus/memcached_exporter
- https://hub.docker.com/r/bitnami/Memcached-exporter/