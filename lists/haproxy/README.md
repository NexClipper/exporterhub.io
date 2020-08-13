# HAProxy Exporter Exporter Github
https://github.com/prometheus/haproxy_exporter

# Table of contents
- [Resource](https://github.com/NexClipper/exporterhub.io/tree/master/lists/haproxy#resource)
- [Collector Flags](https://github.com/NexClipper/exporterhub.io/tree/master/lists/haproxy#collector-flags)
- [Recommend Alert-Rule](https://github.com/NexClipper/exporterhub.io/tree/master/lists/haproxy#recommend-alert-rule)
- [Grafana Dashboard](https://github.com/NexClipper/exporterhub.io/tree/master/lists/haproxy#grafana-dashboard)


# Resource

## Docker

To run the haproxy exporter as a Docker container, run:

```bash
docker run -p 9101:9101 quay.io/prometheus/haproxy-exporter:v0.9.0 --haproxy.scrape-uri="http://user:pass@haproxy.example.com/haproxy?stats;csv"
```

[hub]: https://hub.docker.com/r/prom/haproxy-exporter/
[quay]: https://quay.io/repository/prometheus/haproxy-exporter

## Alternatives

### Official Prometheus exporter

As of 2.0.0, HAProxy includes a Prometheus exporter module that can be built into your binary during build time.

To build with the official Prometheus exporter module, `make` with the following `EXTRA_OBJS` flag:

```bash
make TARGET=linux-glibc EXTRA_OBJS="contrib/prometheus-exporter/service-prometheus.o"
```

Once built, you can enable and configure the Prometheus endpoint from your `haproxy.cfg` file as a typical frontend:

```haproxy
frontend stats
    bind *:8404
    http-request use-service prometheus-exporter if { path /metrics }
    stats enable
    stats uri /stats
    stats refresh 10s
```

For more information, see [this official blog post](https://www.haproxy.com/blog/haproxy-exposes-a-prometheus-metrics-endpoint/).

## Installing HAProxy Kubernetes Ingress Controller
[https://github.com/haproxytech/kubernetes-ingress](https://github.com/haproxytech/kubernetes-ingress)

## HAProxy Helm Charts
[https://github.com/haproxytech/helm-charts](https://github.com/haproxytech/helm-charts)

# Collector Flags

HAProxy Stats
[https://www.haproxy.com/blog/exploring-the-haproxy-stats-page/](https://www.haproxy.com/blog/exploring-the-haproxy-stats-page/)

Exported metrics
[https://github.com/haproxy/haproxy/blob/master/contrib/prometheus-exporter/README](https://github.com/haproxy/haproxy/blob/master/contrib/prometheus-exporter/README)

# Recommend Alert-Rule

[https://awesome-prometheus-alerts.grep.to/rules#haproxy](https://awesome-prometheus-alerts.grep.to/rules#haproxy)

### HAProxy down
```yaml
  - alert: HaproxyDown
    expr: haproxy_up = 0
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "HAProxy down (instance {{ $labels.instance }})"
      description: "HAProxy down\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

### HAProxy HTTP slowing down (Average request time is increasing)
```yaml
  - alert: HaproxyHttpSlowingDown
    expr: avg by (backend) (haproxy_backend_http_total_time_average_seconds) > 2
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "HAProxy HTTP slowing down (instance {{ $labels.instance }})"
      description: "Average request time is increasing\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

# Grafana Dashboard

![haproxy](https://grafana.com/api/dashboards/12693/images/8600/image)

[https://grafana.com/grafana/dashboards/2428](https://grafana.com/grafana/dashboards/2428)