  - alert: Memcached Down
    expr: memcached_up == 0
    for: 1m
    labels:
      severity: critical
    annotations:
      summary: Memcached down 
      description: "Memcached instance is down"

- alert: Too Many Connections
    expr: memcached_current_connections > memcached_max_connections
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: Too Many Connections
      description: "Too many clients are connected to memcached"   

- alert: High Miss Percentage
    expr: (memcached_commands_total{status="miss",command="get"}/memcached_commands_total{command="get"}) * 100 > 90
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: Too Many Misses
      description: "Miss ratio is high"  

- alert: Items Evicted before expiration
    expr: (memcached_slab_items_evicted_total{slab="1"} / memcached_items_total) * 100> 90
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: High Number of Items Evicted
      description: "Items evicted from the cache ,before expiration time"

- alert: High Memory Usage
    expr: (memcached_current_bytes / memcached_limit_bytes) * 100> 90
    for: 1m
    labels:
      severity: critical
    annotations:
      summary: High Memory Usage
      description: "Memcached is running out of configured maxmemory"      