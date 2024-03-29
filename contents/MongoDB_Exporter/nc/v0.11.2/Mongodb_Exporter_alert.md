```


# MongoDB Down: MongoDB instance is down
- alert: MongodbDown
  expr: mongodb_up == 0
  for: 0m
  labels:
    severity: critical
  annotations:
    summary: MongoDB Down (instance {{ $labels.instance }})
    description: "MongoDB instance is down\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

# MongoDB replication lag: Mongodb replication lag is more than 10s
- alert: MongodbReplicationLag
  expr: mongodb_mongod_replset_member_optime_date{state="PRIMARY"} - ON (set) mongodb_mongod_replset_member_optime_date{state="SECONDARY"} > 10
  for: 0m
  labels:
    severity: critical
  annotations:
    summary: MongoDB replication lag (instance {{ $labels.instance }})
    description: "Mongodb replication lag is more than 10s\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

# MongoDB replication headroom: MongoDB replication headroom is <= 0
- alert: MongodbReplicationHeadroom
  expr: (avg(mongodb_mongod_replset_oplog_tail_timestamp - mongodb_mongod_replset_oplog_head_timestamp) - (avg(mongodb_mongod_replset_member_optime_date{state="PRIMARY"}) - avg(mongodb_mongod_replset_member_optime_date{state="SECONDARY"}))) <= 0
  for: 0m
  labels:
    severity: critical
  annotations:
    summary: MongoDB replication headroom (instance {{ $labels.instance }})
    description: "MongoDB replication headroom is <= 0\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"


# MongoDB number cursors open: Too many cursors opened by MongoDB for clients (> 10k)
- alert: MongodbNumberCursorsOpen
  expr: mongodb_mongod_metrics_cursor_open{state="total"} > 10 * 1000
  for: 2m
  labels:
    severity: warning
  annotations:
    summary: MongoDB number cursors open (instance {{ $labels.instance }})
    description: "Too many cursors opened by MongoDB for clients (> 10k)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

# MongoDB cursors timeouts: Too many cursors are timing out
- alert: MongodbCursorsTimeouts
  expr: increase(mongodb_mongod_metrics_cursor_timed_out_total[1m]) > 100
  for: 2m
  labels:
    severity: warning
  annotations:
    summary: MongoDB cursors timeouts (instance {{ $labels.instance }})
    description: "Too many cursors are timing out\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

# MongoDB too many connections Too many connections (> 80%)
- alert: MongodbTooManyConnections
  expr: avg by(instance) (rate(mongodb_connections{state="current"}[1m])) / avg by(instance) (sum (mongodb_connections) by (instance)) * 100 > 80
  for: 2m
  labels:
    severity: warning
  annotations:
    summary: MongoDB too many connections (instance {{ $labels.instance }})
    description: "Too many connections (> 80%)\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"

# MongoDB virtual memory usage: High memory usage
- alert: MongodbVirtualMemoryUsage
  expr: (sum(mongodb_memory{type="virtual"}) BY (instance) / sum(mongodb_memory{type="mapped"}) BY (instance)) > 3
  for: 2m
  labels:
    severity: warning
  annotations:
    summary: MongoDB virtual memory usage (instance {{ $labels.instance }})
    description: "High memory usage\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"


# Note: if the metrics not showing any data, scraping interval might be different for you, either reduce it or replace [1m] with higher value
```
