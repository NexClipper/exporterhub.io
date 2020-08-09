# Github
https://github.com/prometheus/consul_exporter

# Resource

## Docker

You can deploy this exporter using the [prom/consul-exporter](https://registry.hub.docker.com/r/prom/consul-exporter) Docker image.

For example:

```bash
docker pull prom/consul-exporter

docker run -d -p 9107:9107 prom/consul-exporter --consul.server=172.17.0.1:8500
```

Keep in mind that your container needs to be able to communicate with the Consul server or agent. Use an IP accessible from the container or set the `--dns` and `--dns-search` options of the `docker run` command:

```bash
docker run -d -p 9107:9107 --dns=172.17.0.1 --dns-search=service.consul \
        prom/consul-exporter --consul.server=consul:8500
```

[circleci]: https://circleci.com/gh/prometheus/consul_exporter
[hub]: https://hub.docker.com/r/prom/consul-exporter/
[quay]: https://quay.io/repository/prometheus/consul-exporter


## Kubernetes

[https://github.com/helm/charts/blob/master/stable/prometheus-consul-exporter/README.md](https://github.com/helm/charts/blob/master/stable/prometheus-consul-exporter/README.md)

## Exported Metrics

| Metric                              | Meaning                                                                                              | Labels                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| consul_up                           | Was the last query of Consul successful                                                              |                                               |
| consul_raft_peers                   | How many peers (servers) are in the Raft cluster                                                     |                                               |
| consul_serf_lan_members             | How many members are in the cluster                                                                  |                                               |
| consul_serf_lan_member_status       | Status of member in the cluster. 1=Alive, 2=Leaving, 3=Left, 4=Failed.                               | member                                        |
| consul_catalog_services             | How many services are in the cluster                                                                 |                                               |
| consul_catalog_service_node_healthy | Is this service healthy on this node                                                                 | service, node                                 |
| consul_health_node_status           | Status of health checks associated with a node                                                       | check, node, status                           |
| consul_health_service_status        | Status of health checks associated with a service                                                    | check, node, service, status                  |
| consul_catalog_kv                   | The values for selected keys in Consul's key/value catalog. Keys with non-numeric values are omitted | key                                           |
| consul_service_checks               | Link the Consul service ID with check name if available                                              | service_id,service_name, check_id, check_name, node |

# Recommend Alert-Rule

Consul service healthcheck failed

```yaml
  - alert: ConsulServiceHealthcheckFailed
    expr: consul_catalog_service_node_healthy == 0
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "Consul service healthcheck failed (instance {{ $labels.instance }})"
      description: "Service: `{{ $labels.service_name }}` Healthcheck: `{{ $labels.service_id }}`\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

Consul missing master node

```yaml
  - alert: ConsulMissingMasterNode
    expr: consul_raft_peers < 3
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "Consul missing master node (instance {{ $labels.instance }})"
      description: "Numbers of consul raft peers should be 3, in order to preserve quorum.\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

Consul agent unhealthy

```yaml
  - alert: ConsulAgentUnhealthy
    expr: consul_health_node_status{status="critical"} == 1
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "Consul agent unhealthy (instance {{ $labels.instance }})"
      description: "A Consul agent is down\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```


# Dashboard

[https://grafana.com/grafana/dashboards/12049](https://grafana.com/grafana/dashboards/12049)

[Download JSON](https://grafana.com/api/dashboards/12049/revisions/2/download)

Grafana Dashboard ID : 12049