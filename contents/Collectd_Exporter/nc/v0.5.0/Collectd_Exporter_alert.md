```
# Host out of memory : Node memory is filling up (< 10% left)
- alert: HostHighMemoryUsage
  expr: sum(collectd_memory{memory="used"}) / sum(collectd_memory{memory=~"..*"}) * 100 > 80
  for: 2m
  labels:
    severity: warning
  annotations:
    summary: Host out of memory (instance {{ $labels.instance }})
    description: "Node used memory VALUE = {{ $value }}\n  LABELS = {{ $labels }}"


# Host high CPU load: CPU load is > 80%
- alert: HostHighCpuLoad
  expr: avg by (instance) (collectd_load_midterm) > count(count(collectd_cpu_total ) by(cpu, instance)) by( instance)
  for: 2m
  labels:
    severity: warning
  annotations:
    summary: Host high CPU load (instance {{ $labels.instance }})
    description: "CPU load is greater than number of cores \n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

```
