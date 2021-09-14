# Node Exporter



### Usage:

Prometheus Node exporter is used to exposes a wide variety of hardware and kernel-related metrics. It is written in Go with pluggable metric collectors.
NOTE: Prometheus Node Exporter is for *nix systems.

### Installing Node Exporter Charts: 

1- Add helm repo 
```access transformers
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
``` 
2- install the chart 
```access transformers
helm install [RELEASE_NAME] prometheus-community/prometheus-node-exporter
```
Note: for helm v2 add `--name` before [RELEASE_NAME]. ex:  `helm install --name  [RELEASE_NAME] prometheus-community/prometheus-node-exporter`

3- To see the metrics run 
```access transformers
  export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus-node-exporter,release=tst" -o jsonpath="{.items[0].metadata.name}")
  kubectl port-forward --namespace default $POD_NAME 9100
```
Visit http://127.0.0.1:9100 to see the metrics

### Configuration 


The following table lists the configurable parameters of the Node Exporter chart and their default values.

|             Parameter                 |                                                          Description                                                          |                 Default                          |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `image.repository`                    | Image repository                                                                                                              | `quay.io/prometheus/node-exporter`               |
| `image.tag`                           | Image tag                                                                                                                     | `v1.0.1`                                         |
| `image.pullPolicy`                    | Image pull policy                                                                                                             | `IfNotPresent`                                   |
| `extraArgs`                           | Additional container arguments                                                                                                | `[]`                                             |
| `extraHostVolumeMounts`               | Additional host volume mounts                                                                                                 | `[]`                                             |
| `podAnnotations`                      | Annotations to be added to node exporter pods                                                                                 | `{}`                                             |
| `podLabels`                           | Additional labels to be added to pods                                                                                         | `{}`                                             |
| `rbac.create`                         | If true, create & use RBAC resources                                                                                          | `true`                                           |
| `rbac.pspEnabled`                     | Specifies whether a PodSecurityPolicy should be created.                                                                      | `true`                                           |
| `resources`                           | CPU/Memory resource requests/limits                                                                                           | `{}`                                             |
| `service.type`                        | Service type                                                                                                                  | `ClusterIP`                                      |
| `service.port`                        | The service port                                                                                                              | `9100`                                           |
| `service.targetPort`                  | The target port of the container                                                                                              | `9100`                                           |
| `service.nodePort`                    | The node port of the service                                                                                                  |                                                  |
| `service.listenOnAllInterfaces`       | If true, listen on all interfaces using IP `0.0.0.0`. Else listen on the IP address pod has been assigned by Kubernetes.      | `true`                                           |
| `service.annotations`                 | Kubernetes service annotations                                                                                                | `{prometheus.io/scrape: "true"}`                 |
| `serviceAccount.create`               | Specifies whether a service account should be created.                                                                        | `true`                                           |
| `serviceAccount.name`                 | Service account to be used. If not set and `serviceAccount.create` is `true`, a name is generated using the fullname template |                                                  |
| `serviceAccount.imagePullSecrets`     | Specify image pull secrets                                                                                                    | `[]`                                             |
| `securityContext`                     | SecurityContext                                                                                                               | See values.yaml                                  |
| `affinity`                            | A group of affinity scheduling rules for pod assignment                                                                       | `{}`                                             |
| `nodeSelector`                        | Node labels for pod assignment                                                                                                | `{}`                                             |
| `tolerations`                         | List of node taints to tolerate                                                                                               | `- effect: NoSchedule operator: Exists`          |
| `priorityClassName`                   | Name of Priority Class to assign pods                                                                                         | `nil`                                            |
| `endpoints`                           | list of addresses that have node exporter deployed outside of the cluster                                                     | `[]`                                             |
| `hostNetwork`                         | Whether to expose the service to the host network                                                                             | `true`                                           |
| `prometheus.monitor.enabled`          | Set this to `true` to create ServiceMonitor for Prometheus operator                                                           | `false`                                          |
| `prometheus.monitor.additionalLabels` | Additional labels that can be used so ServiceMonitor will be discovered by Prometheus                                         | `{}`                                             |
| `prometheus.monitor.namespace`        | namespace where servicemonitor resource should be created                                                                     | `the same namespace as prometheus node exporter` |
| `prometheus.monitor.relabelings`      | Relabelings that should be applied on the ServerMonitor                                                                       | `{}` |
| `prometheus.monitor.scrapeTimeout`    | Timeout after which the scrape is ended                                                                                       | `10s`                                            |
| `configmaps`                          | Allow mounting additional configmaps.                                                                                         | `[]`                                             |
| `namespaceOverride`                   | Override the deployment namespace                                                                                             | `""` (`Release.Namespace`)                       |
| `updateStrategy`                      | Configure a custom update strategy for the daemonset                                                                          | `Rolling update with 1 max unavailable`          |
| `sidecars`               | Additional containers for export metrics to text file     | `[]`           |  |
| `sidecarVolumeMount`               | Volume for sidecar containers     | `[]`           |  |

Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example,

```console
$ helm install my-release \
  --set serviceAccount.name=node-exporter  \
    prometheus-community/prometheus-node-exporter
```

Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,

```console
$ helm install my-release -f values.yaml prometheus-community/prometheus-node-exporter
```

### Sample metrics ouput 

For sample metrics reffer to this file <path>


### Available collectors
By default the build (docker iamge) will include the native collectors that expose information from /proc.

Which collectors are used is controlled by the --collectors.enabled flag.

#### Enabled by default
- attributes:	Exposes attributes from the configuration file. Deprecated, use textfile module instead.
- diskstats:	Exposes disk I/O statistics from /proc/diskstats.
- filesystem:	Exposes filesystem statistics, such as disk space used.
- loadavg:	Exposes load average.
- meminfo:	Exposes memory statistics from /proc/meminfo.
- netdev:	Exposes network interface statistics from /proc/netstat, such as bytes transferred.
- netstat:	Exposes network statistics from /proc/net/netstat. This is the same information as netstat -s.
- stat:	Exposes various statistics from /proc/stat. This includes CPU usage, boot time, forks and interrupts.
- textfile:	Exposes statistics read from local disk. The --collector.textfile.directory flag must be set.
- time:	Exposes the current system time.
#### Disabled by default

- bonding:	Exposes the number of configured and active slaves of Linux bonding interfaces.
- gmond:	Exposes statistics from Ganglia.
- interrupts:	Exposes detailed interrupts statistics from /proc/interrupts.
- lastlogin:	Exposes the last time there was a login.
- megacli:	Exposes RAID statistics from MegaCLI.
- ntp:	Exposes time drift from an NTP server.
- runit:	Exposes service status from runit.
