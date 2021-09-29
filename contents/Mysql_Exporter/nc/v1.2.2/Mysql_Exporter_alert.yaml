  # MySQL instance is down on
  - alert: MysqlDown
    expr: mysql_up == 0
    for: 0m
    labels:
      severity: critical
    annotations:
      summary: MySQL down (instance {{ $labels.instance }})
      description: "MySQL instance is down on {{ $labels.instance }}\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"
# MySQL too many connections
  - alert: MysqlTooManyConnections(>80%)
    expr: avg by (instance) (rate(mysql_global_status_threads_connected[1m])) / avg by (instance) (mysql_global_variables_max_connections) * 100 > 80
    for: 2m
    labels:
      severity: warning
    annotations:
      summary: MySQL too many connections (> 80%) (instance {{ $labels.instance }})
      description: "More than 80% of MySQL connections are in use on {{ $labels.instance }}\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"
# MySQL high threads running
  - alert: MysqlHighThreadsRunning
    expr: avg by (instance) (rate(mysql_global_status_threads_running[1m])) / avg by (instance) (mysql_global_variables_max_connections) * 100 > 60
    for: 2m
    labels:
      severity: warning
    annotations:
      summary: MySQL high threads running (instance {{ $labels.instance }})
      description: "More than 60% of MySQL connections are in running state on {{ $labels.instance }}\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"
# MySQL server mysql has some new slow query
  - alert: MysqlSlowQueries
    expr: increase(mysql_global_status_slow_queries[1m]) > 0
    for: 2m
    labels:
      severity: warning
    annotations:
      summary: MySQL slow queries (instance {{ $labels.instance }})
      description: "MySQL server mysql has some new slow query.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"
# MySQL innodb log writes stalling
  - alert: MysqlInnodbLogWaits
    expr: rate(mysql_global_status_innodb_log_waits[15m]) > 10
    for: 0m
    labels:
      severity: warning
    annotations:
      summary: MySQL InnoDB log waits (instance {{ $labels.instance }})
      description: "MySQL innodb log writes stalling\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"
# MySQL has just been restarted, less than one minute ago on
  - alert: MysqlRestarted
    expr: mysql_global_status_uptime < 60
    for: 0m
    labels:
      severity: info
    annotations:
      summary: MySQL restarted (instance {{ $labels.instance }})
      description: "MySQL has just been restarted, less than one minute ago on {{ $labels.instance }}.\n  VALUE = {{ $value }}\n  LABELS = {{ $labels }}"
