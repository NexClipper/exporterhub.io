# Postgresql Exporter

A Prometheus exporter for Postgresql , get various insights of the database like CPU usage,Memory usage, transaction and many more.


### Usage:

The Postgresql Exporter collects and exports oplog, replica set, server status, sharding and storage engine metrics. It handles aLL metrics exposed by Postgresql monitoring commands. It loops over all the fields exposed in diagnostic commands and tries to get data from them. 

Alerts on this many metrics will help you to keep a close eye if any problem or warning is generated in your database.


### Installing Postgresql Exporter Charts: 
1- If your Postgresql is not up and ready you can start Postgresql cluster using helm:
```access transformers
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm install my-release --set replicaCount=3   --set architecture=replicaset  bitnami/Postgresql
```

2- Add Postgresql exporter helm repo 
```access transformers
$ helm repo add nexclipper [https://nexclipper.github.io/helm-charts]
$ helm repo update
``` 
3- install the chart 
```access transformers
$ helm install [RELEASE_NAME] nexclipper/Postgresql-exporter
```

helm install [RELEASE_NAME] nexclipper/Postgresql-exporter 
```

- Or you can create secret (in the releases namespace) containing the key defined on existingSecret.key, with the URI is referred via existingSecret.name. If no secret key is defined, the default value is Postgresql-uri.

Note: for helm v2 add `--name` before [RELEASE_NAME]. ex:  `helm install --name  [RELEASE_NAME] nexclipper/Postgresql-exporter`

4- To see the metrics run 
```access transformers
  kubectl port-forward service/[RELEASE_NAME]-prometheus-Postgresql-exporter 9187

```
Visit http://127.0.0.1:9187 to see the metrics

### Configuration 

#### Chart Values Configuration
The following table lists the configurable parameters of the Postgresql chart and their default values.

| Parameter | Description | Default |
|-----------|-------------|---------|
| `serviceMonitor.enabled` | When set true then use a ServiceMonitor to configure scraping | `false` |
| `prometheusRule.enabled` | Various rules which can be used | `false` |
| `prometheusRule.additionallabel` | Refer to an existing secret name instead of using `Postgresql.uri` | `{}` |
| `prometheusRule.namespace` | Refer to an existing secret key | `''` |
| `prometheusRule.rules` | The extra command line arguments to pass to the Postgresql Exporter  | `[]` |
| `prometheusRule.resource` | Override the full chart name | `{}` |
| `rbac.create` | Postgresql Exporter image pull policy | `IfNotPresent` |
| `rbac.pspEnabled` | Postgresql Exporter image name | `bitnami/Postgresql-exporter` |
| `ServiceAccount.create` | Postgresql Exporter image tag | `0.11.2` |
| `ServiceAccount.name` | List of container registry secrets | `[]` |
| `ServiceAccount.annonation` | The [URI](https://docs.Postgresql.com/manual/reference/connection-string) to connect to Postgresql | `` |
| `securityContext` | Override the application name  | `` |
| `config.datasource.host` | Node labels for pod assignment | `{}` |
| `config.datasource.user` | Annotations to be added to all pods | `{}` |
| `config.datasource.password` | The container port to listen on | `9187` |
| `config.datasource.passwordSecret` | Pod priority class name | `` |
| `config.datasource.port` | Number of replicas in the replica set | `1` |
| `config.datasource.database` | Pod resource requests and limits | `{}` |
| `config.datasource.sslmode` | Extra environment variables passed to pod | `{}` |
| `config.datasourceSecret` | Security context for the pod | See values.yaml |
| `config.disableDefaultMetrics` | Additional labels for the service definition | `{}` |
| `config.disableSettingsMetrics` | Annotations to be added to the service | `{}` |
| `config.autoDiscoverDatabases` | The port to expose | `9187` |
| `config.excludeDatabases` | The type of service to expose | `ClusterIP` |
| `config.includeDatabases` | If `true`, create the service account | `true` |
| `config.constantLabels` | Name of the service account | `` |
| `config.logLevel` | Set to true if using the Prometheus Operator | `false` |
| `config.queries` | Interval at which metrics should be scraped | `30s` |
| `nodeSelector` | Interval at which metric scrapes should time out | `10s` |
| `tolerations` | The namespace where the Prometheus Operator is deployed | `` |
| `affinity` | Additional labels to add to the ServiceMonitor | `{}` |
| `annotations` | Set of labels to transfer on the Kubernetes Service onto the target. | `[]`
| `podLabels` | MetricRelabelConfigs to apply to samples before ingestion. | `[]` |
| `livenessProbe.initialDelaySeconds` | List of node taints to tolerate  | `[]` |
| `livenessProbe.timeoutSeconds` | List of node taints to tolerate  | `[]` |
| `readinessProbe.initialDelaySeconds` | List of node taints to tolerate  | `[]` |
| `readinessProbe.timeoutSeconds` | List of node taints to tolerate  | `[]` |
| `initContainers` | List of node taints to tolerate  | `[]` |
| `extraContainers` | List of node taints to tolerate  | `[]` |
| `extraVolumes` | List of node taints to tolerate  | `[]` |
| `extraVolumeMounts` | List of node taints to tolerate  | `[]` |
| `livenessProbe.initialDelaySeconds` | List of node taints to tolerate  | `[]` |


Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example,

```console
$ helm install [RELEASE_NAME] --set Postgresql.uri="<[Postgresql[+srv]://][user:pass@]host1[:port1][,host2[:port2],...][/database][?options]>"  nexclipper/Postgresql-exporter
```

Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,

```console
$ helm install my-release -f values.yaml nexclipper/Postgresql-exporter
```

### Sample metrics ouput 

For sample metrics refer to this file Postgresql_exporter_sample_metrics.md


#### Why use Bitnami Images?

- Bitnami closely tracks upstream source changes and promptly publishes new versions of this image using our automated systems.
- With Bitnami images the latest bug fixes and features are available as soon as possible.
- Bitnami containers, virtual machines and cloud images use the same components and configuration approach - making it easy to switch between formats based on your project needs.
- All our images are based on minideb a minimalist Debian based container image which gives you a small base container image and the familiarity of a leading Linux distribution.
- All Bitnami images available in Docker Hub are signed with Docker Content Trust (DCT). You can use DOCKER_CONTENT_TRUST=1 to verify the integrity of the images.
- Bitnami container images are released daily with the latest distribution packages available.
- This CVE scan report contains a security report with all open CVEs. To get the list of actionable security issues, find the "latest" tag, click the vulnerability report link under the corresponding "Security scan" field and then select the "Only show fixable" filter on the next page.



### References :
- https://github.com/percona/Postgresql_exporter
- https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-Postgresql-exporter#configuration
- https://hub.docker.com/r/bitnami/Postgresql-exporter/