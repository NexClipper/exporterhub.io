# Prometheus Nginx Exporter

A Prometheus exporter for [Nginx](https://github.com/nginxinc/nginx-prometheus-exporter) basic metrics.

https://github.com/NexClipper/honeycomb/tree/main/prometheus/exporters/nginx-exporter


This chart creates a [nginx-prometheus-exporter](https://github.com/nginxinc/nginx-prometheus-exporter) deployment on a [Kubernetes](http://kubernetes.io) cluster using the [Helm](https://helm.sh) package manager.

## Prerequisites

- Kubernetes 1.8+ with Beta APIs enabled

## Get Repo Info

```console
helm repo add nexclipper https://nexclipper.github.io/helm-charts
helm repo update
```

_See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation._

## Install Chart

```console
# Helm 3
$ helm install [RELEASE_NAME] nexclipper/nginx-exporter

# Helm 2
$ helm install --name [RELEASE_NAME] nexclipper/nginx-exporter
```

_See [configuration](#configuration) below._

_See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation._

## Uninstall Chart

```console
# Helm 3
$ helm uninstall [RELEASE_NAME]

# Helm 2
# helm delete --purge [RELEASE_NAME]
```

This removes all the Kubernetes components associated with the chart and deletes the release.

_See [helm uninstall](https://helm.sh/docs/helm/helm_uninstall/) for command documentation._

## Upgrading Chart

```console
# Helm 3 or 2
$ helm upgrade [RELEASE_NAME] [CHART] --install
```

_See [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/) for command documentation._

## Configuration

See [Customizing the Chart Before Installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). To see all configurable options with detailed comments, visit the chart's [values.yaml](./values.yaml), or run these configuration commands:

```console
# Helm 2
$ helm inspect values nexclipper/nginx-exporter

# Helm 3
$ helm show values nexclipper/nginx-exporter
```

### NGINX Server URI

Set `nginxServer` to `http://<nginx-server>.<namespace>.svc.cluster.local:8080/stub_status`.

### Flags

Check the [Arguments](https://github.com/nginxinc/nginx-prometheus-exporter#command-line-arguments) list and add to the `options` block in your value overrides.