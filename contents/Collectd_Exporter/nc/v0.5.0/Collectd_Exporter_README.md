# Collectd Exporter

An exporter for collectd. 

### What is collectd?
Collectd is a daemon which collects system and application performance metrics periodically and provides mechanisms to store the values in a variety of ways.

Collectd gathers metrics from various sources, e.g. the operating system, applications, logfiles and external devices, and stores this information or makes it available over the network. Those statistics can be used to monitor systems, find performance bottlenecks (i.e. performance analysis) and predict future system load (i.e. capacity planning).

Collectd backbone is plugin and to get a data from the source. One needs to enable the plugins on the collectd to get them scrapped by the exporter.


### Usage:

It accepts collectd's binary network protocol as sent by collectd's network plugin and metrics in JSON format via HTTP POST as sent by collectd's write_http plugin, and transforms and exposes them for consumption by Prometheus.

This exporter exports metrics from existing collectd setups, mainly for metrics which are not covered by the core Prometheus exporters such as the Node Exporter.

### Installing Collectd Exporter Charts: 

1- Add collectd exporter helm repo 
```access transformers
$ helm repo add nexclipper [https://nexclipper.github.io/helm-charts]
$ helm repo update
``` 
3- install the chart 
```access transformers
$ helm install [RELEASE_NAME] nexclipper/collectd-exporter
```

Note: for helm v2 add `--name` before [RELEASE_NAME]. ex:  `helm install --name  [RELEASE_NAME] nexclipper/mongodb-exporter`

4- To see the metrics run 
```access transformers
  kubectl port-forward pod/[RELEASE_NAME]-prometheus-collectd-exporter 9308

```
Visit http://127.0.0.1:9103 to see the metrics

### Collectd Configuration 
One of the following configs need to be added to the collectd config to send the metrics to collectd exporter

1- Binary network protocol:

Collectd's network plugin uses a lightweight binary protocol to send metrics from one instance to another. To consume these packets with collectd_exporter, first configure collectd to send these metrics to the appropriate address:
```
LoadPlugin network
<Plugin network>
  Server "localhost" "25826"
</Plugin>
```

Collectd exporter run with `--collectd.listen-address=":25826"` by default and that port is mapped with the host port to be accessed with localhost or node ip.

2- JSON format:

collectd's write_http plugin is able to send metrics via HTTP POST requests. collectd_exporter serves an appropriate end-point which accepts, parses and exports the metrics. First, configure collectd to send these metrics to the HTTP end-point:
``` 
LoadPlugin write_http
<Plugin write_http>
  <Node "collectd_exporter">
    URL "http://localhost:9103/collectd-post"
    Format "JSON"
    StoreRates false
  </Node>
</Plugin>
```
To change the path of the end-point, use the --web.collectd-push-path command line option. To disable this functionality altogether, use --web.collectd-push-path="".

#### Charts Configuration

To see all configurable options with detailed comments, visit the chart's values.yaml or run these configuration commands:

```console
# Helm 2
$ helm inspect values nexclipper/collectd-exporter

# Helm 3
$ helm show values nexclipper/collectd-exporter
```
A YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,

```console
$ helm install my-release -f values.yaml nexclipper/collectd-exporter
```

### Sample metrics output 

For sample metrics refer to this file <path>

Note: Metrics in the sample might be different than yours depending on the plugins used by collectd.

The following plugins need to be enabled to get similar output: 

1. LoadPlugin cpu 
2. LoadPlugin load 
3. LoadPlugin memory  

### References :
- https://github.com/prometheus/collectd_exporter
