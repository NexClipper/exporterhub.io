# prometheus-memcached-exporter

Prometheus exporter for [memcached](https://memcached.io/) metrics.

This chart bootstraps a [memcached exporter](https://github.com/oliver006/memcached_exporter) deployment on a [Kubernetes](http://kubernetes.io) cluster using the [Helm](https://helm.sh) package manager.

## Prerequisites

- Kubernetes 1.10+ with Beta APIs enabled
- Helm 3+

## Get Repo Info

```console
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add stable https://charts.helm.sh/stable
helm repo update
```

_See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation._

## Install Chart

```console
# Helm
$ helm install [RELEASE_NAME] prometheus-community/prometheus-memcached-exporter
```

_See [configuration](#configuration) below._

_See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation._

## Uninstall Chart

```console
# Helm
$ helm uninstall [RELEASE_NAME]
```

This removes all the Kubernetes components associated with the chart and deletes the release.

_See [helm uninstall](https://helm.sh/docs/helm/helm_uninstall/) for command documentation._

## Upgrading Chart

```console
# Helm
$ helm upgrade [RELEASE_NAME] [CHART] --install
```

_See [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/) for command documentation._

### To 3.0.1

 The default tag for the exporter image is now `v1.x.x`. This major release includes changes to the names of various metrics and no longer directly supports the configuration (and scraping) of multiple memcached instances; that is now the Prometheus server's responsibility. You'll want to use [this dashboard](https://github.com/oliver006/memcached_exporter/blob/master/contrib/grafana_prometheus_memcached_dashboard.json) now. Please see the [memcached_exporter github page](https://github.com/oliver006/memcached_exporter#upgrading-from-0x-to-1x) for more details.

## Configuring

See [Customizing the Chart Before Installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). To see all configurable options with detailed comments, visit the chart's [values.yaml](./values.yaml), or run these configuration commands:

```console
# Helm
$ helm show values prometheus-community/prometheus-memcached-exporter
```

For more information please refer to the [memcached_exporter](https://github.com/oliver006/memcached_exporter) documentation.

### memcached Connection

- To configure memcached connection by value set `memcachedAddress` string (example format: `memcached://mymemcached:6379`)
- To configure memcached connection by configmap set `memcachedAddressConfig.enabled` to `true`, set `memcachedAddressConfig.configmap.name` and `memcachedAddressConfig.configmap.key` values
- To configure auth by value, set `auth.enabled` to `true`, and `auth.memcachedPassword` value
- To configure auth by secret, set `auth.secret.name` and `auth.secret.key` values

### Using a custom LUA-Script

First, you need to deploy the script with a configmap. This is an example script from mentioned in the [memcached_exporter-image repository](https://github.com/oliver006/memcached_exporter/blob/master/contrib/sample_collect_script.lua)

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-memcached-exporter-script
data:
  script: |-
    -- Example collect script for -script option
    -- This returns a Lua table with alternating keys and values.
    -- Both keys and values must be strings, similar to a HGETALL result.
    -- More info about memcached Lua scripting: https://memcached.io/commands/eval

    local result = {}

    -- Add all keys and values from some hash in db 5
    memcached.call("SELECT", 5)
    local r = memcached.call("HGETALL", "some-hash-with-stats")
    if r ~= nil then
        for _,v in ipairs(r) do
            table.insert(result, v) -- alternating keys and values
        end
    end

    -- Set foo to 42
    table.insert(result, "foo")
    table.insert(result, "42") -- note the string, use tostring() if needed

    return result
```

If you want to use this script for collecting metrics, you could do this by just set `script.configmap` to the name of the configmap (e.g. `prometheus-memcached-exporter-script`) and `script.keyname` to the configmap-key holding the script (eg. `script`). The required variables inside the container will be set automatically.
