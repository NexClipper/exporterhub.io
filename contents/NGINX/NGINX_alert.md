## NginxInstanceDown
```
  - alert: NginxInstanceDown
    expr: nginx_up{instance=~".*:9113"}
    for: 1m
    labels:
      severity: critical
    annotations:
      summary: Nginx instance {{ $labels.instance }} is down
      description: "Nginx instance {{ $labels.instance }} is down"
```