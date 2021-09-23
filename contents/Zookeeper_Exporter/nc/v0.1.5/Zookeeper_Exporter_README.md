# zookeeper Exporter

A Prometheus exporter for zookeeper.

### Usage:

Exports mntr zookeeper's stats in prometheus format. zk_followers, zk_synced_followers and zk_pending_syncs metrics are available only on cluster leader.


Note: starting from zookeeper v3.4.10 it's required to have mntr command whitelisted (details: 4lw.commands.whitelist).

### Installing Zookeeper Exporter Charts: 
1- If your zookeeper is not up and ready you can start zookeepeer cluster using helm:
```access transformers
$ helm repo add bitnami https://charts.bitnami.com/bitnami
```

2- Add zookeeper exporter helm repo 
```access transformers
$ helm repo add nexclipper [https://nexclipper.github.io/helm-charts]
$ helm repo update
``` 
3- install the chart 
```access transformers
$ helm install [RELEASE_NAME] nexclipper/zookeeper-exporter
```

Note: for helm v2 add `--name` before [RELEASE_NAME]. ex:  `helm install --name  [RELEASE_NAME] nexclipper/zookeeper-exporter`

4- To see the metrics run 
```access transformers
  kubectl port-forward service/[RELEASE_NAME]-prometheus-zookeeper-exporter 8080

```
Visit http://127.0.0.1:8080 to see the metrics

### Configuration 

#### Charts Configuration

To see all configurable options with detailed comments, visit the chart's values.yaml or run these configuration commands:

```console
# Helm 2
$ helm inspect values nexclipper/zookeeper-exporter

# Helm 3
$ helm show values nexclipper/zookeeper-exporter
```

Values.yaml file that specifies the values for the above parameters can be provided while installing the chart. For example,

```console
$ helm install my-release -f values.yaml nexclipper/zookeeper-exporter
```
#### exporter Configuration
The following exporter configurations can be added to `args:` in the values.yaml file to configure the exporter 
```access transformers

Usage of zookeeper-exporter:
  -listen string
    	address to listen on (default "0.0.0.0:8080")
  -location string
    	metrics location (default "/metrics")
  -timeout int
    	timeout for connection to zk servers, in seconds (default 30)
  -zk-host string
    	zookeeper host (default "127.0.0.1")
  -zk-list string
    	comma separated list of zk servers, i.e. '10.0.0.1:2181,10.0.0.2:2181,10.0.0.3:2181', this flag overrides --zk-host/port
  -zk-port string
    	zookeeper port (default "2181")

```

### Sample metrics ouput 

For sample metrics refer to this file <Path to the exporter metrices >


### References :
- https://github.com/dabealu/zookeeper-exporter
