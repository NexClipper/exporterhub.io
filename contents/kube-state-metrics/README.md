# README

## Prerequisites

- Kubernetes 1.12+
- Helm 3.1.0

## How to use

### Method 01

1. Download kube-prometheus-stack and kube-state-metrics by [exporterhub.io](http://exporterhub.io/)

2. Execute helm charts

```bash
cd ./helm-chart/kube-prometheus-stack
helm install [release_name] .
```

```bash
cd ./helm-chart/kube-state-metrics
helm install [release_name] .
```

### Method 02

1. Download kube-prometheus-stack and kube-state-metrics
   by [artifacthub.io](https://artifacthub.io/)

- [kube-prometheus-stack](https://artifacthub.io/packages/helm/prometheus-community/kube-prometheus-stack)
- [kube-state-metrics](https://artifacthub.io/packages/helm/bitnami/kube-state-metrics)

2. Execute helm charts

## How to see

1. Download dashboard about kube-state-metrics by [exporterhub.io](http://exporterhub.io/)
2. Check grafana dashboard
![image](https://user-images.githubusercontent.com/52230415/136691956-3fe755a5-fd8a-4d6f-ab83-a359ac1b7581.png)
