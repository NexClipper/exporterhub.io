# Consul

Consul is a service mesh solution providing a full featured control plane with service discovery, configuration, and 
segmentation functionality. Each of these features can be used individually as needed, or they can be used together 
to build a full service mesh.Consul requires a data plane and supports both a proxy and native integration model. 
Consul ships with a simple built-in proxy so that everything works out of the box.


The key features of Consul are:

Service Discovery: Clients of Consul can register a service, such as api or mysql, and other clients can use Consul to discover providers of a given service. Using either DNS or HTTP, applications can easily find the services they depend upon.

Health Checking: Consul clients can provide any number of health checks, either associated with a given service ("is the webserver returning 200 OK"), or with the local node ("is memory utilization below 90%"). This information can be used by an operator to monitor cluster health, and it is used by the service discovery components to route traffic away from unhealthy hosts.

KV Store: Applications can make use of Consul's hierarchical key/value store for any number of purposes, including dynamic configuration, feature flagging, coordination, leader election, and more. The simple HTTP API makes it easy to use.

Secure Service Communication: Consul can generate and distribute TLS certificates for services to establish mutual TLS connections. Intentions can be used to define which services are allowed to communicate. Service segmentation can be easily managed with intentions that can be changed in real time instead of using complex network topologies and static firewall rules.

Multi Datacenter: Consul supports multiple datacenters out of the box. This means users of Consul do not have to worry about building additional layers of abstraction to grow to multiple regions.

### Installation of Consul and Enabling metrics

For installing consul, use helm charts for ease. Which can be found on the official website of consul
https://www.consul.io/docs/k8s/installation/install.

Consul helm charts offer in built metrics exporter which can be used to export metrics to prometheus.
For enabling it , change the values in values.yaml for the helm chart.

To install a Consul without any changes
helm install consul hashicorp/consul

use this to export the values to a local file
helm show values hashicorp/consul > ./values.yaml

Make changes in the values file.

connectInject:
  metrics:
    defaultEnabled: true # by default, this inherits from the value global.metrics.enabled
    defaultEnableMerging: true
    defaultPrometheusScrapePort: 20200
    defaultPrometheusScrapePath: "/metrics"

metadata:
  annotations:
    prometheus.io/scrape: "true"
    prometheus.io/path: "/metrics"
    prometheus.io/port: "20200"

After making changes use this command to install consul

helm install consul hashicorp/consul --create-namespace -n consul -f values.yaml

For more information about changes in the values.yaml - https://www.consul.io/docs/k8s/connect/observability/metrics.

### 

Once the metrics are enabled, Prometheus will scrape the data source and can be viewed on the console under targets.


Metrics exported by the pods can be viewed by port-forwarding the port or you can check file ./consul_Sample_metrics.

# Importatn Metrics
Some of the important metrics exported are:

consul.kvs.apply	Measures the time it takes to complete an update to the KV store.	
consul.txn.apply	Measures the time spent applying a transaction operation.	
consul.raft.apply	Counts the number of Raft transactions applied during the interval. This metric is only reported on the leader.	raft transactions / interval
consul.raft.commitTime	Measures the time it takes to commit a new entry to the Raft log on the leader.

consul.raft.leader.lastContact	Measures the time since the leader was last able to contact the follower nodes when checking its leader lease.
consul.raft.state.candidate	Increments whenever a Consul server starts an election.	
consul.raft.state.leader	Increments whenever a Consul server becomes a leader.

More about important metrics can be found on https://www.consul.io/docs/agent/telemetry


Resouces:
https://www.consul.io
https://www.consul.io/docs/agent/telemetry