# Kafka Exporter

A Prometheus exporter for [Apacher Kafka](https://kafka.apache.org/) metrics.

This chart bootstraps a [Kafka Exporter](https://github.com/danielqsj/kafka_exporter) deployment on a [Kubernetes](http://kubernetes.io) cluster using the [Helm](https://helm.sh) package manager.

### Usage:

The Kafka Exporter collects and exports kafka metrics such as consumer group lags, partitions and replications. 


### Installing Kafka Exporter Charts: 
1- If your kafka is not up and ready you can start kafka cluster using helm:
```access transformers
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm install my-release bitnami/kafka
```

2- Add kafka exporter helm repo 
```access transformers
$ helm repo add nexclipper [https://nexclipper.github.io/helm-charts]
$ helm repo update
``` 
3- install the chart 
```access transformers
$ helm install [RELEASE_NAME] nexclipper/kafka-exporter
```

Note: for helm v2 add `--name` before [RELEASE_NAME]. ex:  `helm install --name  [RELEASE_NAME] nexclipper/kafka-exporter`

4- To see the metrics run 
```access transformers
  kubectl port-forward service/[RELEASE_NAME]-prometheus-kafka-exporter 9308

```
Visit http://127.0.0.1:9308 to see the metrics

### Configuration 

#### Charts Configuration

To see all configurable options with detailed comments, visit the chart's values.yaml or run these configuration commands:

```console
# Helm 2
$ helm inspect values nexclipper/kafka-exporter

# Helm 3
$ helm show values nexclipper/kafka-exporter
```

Values.yaml file that specifies the values for the above parameters can be provided while installing the chart. For example,

```console
$ helm install my-release -f values.yaml nexclipper/kafka-exporter
```


### Test your setup

If you do not have a readymade application to test the stack you can use the sample application below:

Kafka needs a producer and consumer

To deploy a porducer run the follwing command:

```console
kubectl run kafka-producer --image=quay.io/rhdevelopers/kafka-tutorial-song-app:springboot -n kafka

```

Port-forward the producer

```console
kubectl port-forward pod/kafka-producer 8080 -n kafka
```

Publish the message to get the data

```console
http POST localhost:8080/test id=1000111 name=Portals author='Alan Silvestri'
```

To deploy a consumer run the folling command:

```console
kubectl run kafka-consumer --image=quay.io/rhdevelopers/kafka-tutorial-song-indexer-app:springboot -n kafka
```


### Sample metrics ouput 

For sample metrics refer to this file <path to the sample file>


### References :
- https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-kafka-exporter

