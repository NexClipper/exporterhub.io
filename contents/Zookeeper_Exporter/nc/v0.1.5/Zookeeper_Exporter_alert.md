```access transformers
# Zookeeper Down: Zookeeper down on instance {{ $labels.instance }}
- alert: ZookeeperDown
  expr: zk_up == 0
  for: 0m
  labels:
    severity: critical
  annotations:
    summary: Zookeeper Down (instance {{ $labels.instance }})
    description: "Zookeeper down on instance {{ $labels.instance }}\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

# Zookeeper missing leader: Zookeeper cluster has no node marked as leader
- alert: ZookeeperMissingLeader
  expr: sum(zk_server_leader) == 0
  for: 0m
  labels:
    severity: critical
  annotations:
    summary: Zookeeper missing leader (instance {{ $labels.instance }})
    description: "Zookeeper cluster has no node marked as leader\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

# Zookeeper Too Many Leaders: Zookeeper cluster has too many nodes marked as leader
- alert: ZookeeperTooManyLeaders
  expr: sum(zk_server_leader) > 1
  for: 0m
  labels:
    severity: critical
  annotations:
    summary: Zookeeper Too Many Leaders (instance {{ $labels.instance }})
    description: "Zookeeper cluster has too many nodes marked as leader\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"


```
