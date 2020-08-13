# Github
https://github.com/prometheus/mysqld_exporter

# Resource

## Using Docker

You can deploy this exporter using the [prom/mysqld-exporter](https://registry.hub.docker.com/u/prom/mysqld-exporter/) Docker image.

For example:

```bash
docker network create my-mysql-network
docker pull prom/mysqld-exporter

docker run -d \
  -p 9104:9104 \
  --network my-mysql-network  \
  -e DATA_SOURCE_NAME="user:password@(hostname:3306)/" \
  prom/mysqld-exporter
```

## Kubernetes

[https://github.com/helm/charts/tree/master/stable/prometheus-mysql-exporter](https://github.com/helm/charts/tree/master/stable/prometheus-mysql-exporter)

# Collector Flags

Name                                                         | MySQL Version | Description
-------------------------------------------------------------|---------------|------------------------------------------------------------------------------------
collect.auto_increment.columns                               | 5.1           | Collect auto_increment columns and max values from information_schema.
collect.binlog_size                                          | 5.1           | Collect the current size of all registered binlog files
collect.engine_innodb_status                                 | 5.1           | Collect from SHOW ENGINE INNODB STATUS.
collect.engine_tokudb_status                                 | 5.6           | Collect from SHOW ENGINE TOKUDB STATUS.
collect.global_status                                        | 5.1           | Collect from SHOW GLOBAL STATUS (Enabled by default)
collect.global_variables                                     | 5.1           | Collect from SHOW GLOBAL VARIABLES (Enabled by default)
collect.info_schema.clientstats                              | 5.5           | If running with userstat=1, set to true to collect client statistics.
collect.info_schema.innodb_metrics                           | 5.6           | Collect metrics from information_schema.innodb_metrics.
collect.info_schema.innodb_tablespaces                       | 5.7           | Collect metrics from information_schema.innodb_sys_tablespaces.
collect.info_schema.innodb_cmp                               | 5.5           | Collect InnoDB compressed tables metrics from information_schema.innodb_cmp.
collect.info_schema.innodb_cmpmem                            | 5.5           | Collect InnoDB buffer pool compression metrics from information_schema.innodb_cmpmem.
collect.info_schema.processlist                              | 5.1           | Collect thread state counts from information_schema.processlist.
collect.info_schema.processlist.min_time                     | 5.1           | Minimum time a thread must be in each state to be counted. (default: 0)
collect.info_schema.query_response_time                      | 5.5           | Collect query response time distribution if query_response_time_stats is ON.
collect.info_schema.replica_host                             | 5.6           | Collect metrics from information_schema.replica_host_status.
collect.info_schema.tables                                   | 5.1           | Collect metrics from information_schema.tables.
collect.info_schema.tables.databases                         | 5.1           | The list of databases to collect table stats for, or '`*`' for all.
collect.info_schema.tablestats                               | 5.1           | If running with userstat=1, set to true to collect table statistics.
collect.info_schema.schemastats                              | 5.1           | If running with userstat=1, set to true to collect schema statistics
collect.info_schema.userstats                                | 5.1           | If running with userstat=1, set to true to collect user statistics.
collect.perf_schema.eventsstatements                         | 5.6           | Collect metrics from performance_schema.events_statements_summary_by_digest.
collect.perf_schema.eventsstatements.digest_text_limit       | 5.6           | Maximum length of the normalized statement text. (default: 120)
collect.perf_schema.eventsstatements.limit                   | 5.6           | Limit the number of events statements digests by response time. (default: 250)
collect.perf_schema.eventsstatements.timelimit               | 5.6           | Limit how old the 'last_seen' events statements can be, in seconds. (default: 86400)
collect.perf_schema.eventsstatementssum                      | 5.7           | Collect metrics from performance_schema.events_statements_summary_by_digest summed.
collect.perf_schema.eventswaits                              | 5.5           | Collect metrics from performance_schema.events_waits_summary_global_by_event_name.
collect.perf_schema.file_events                              | 5.6           | Collect metrics from performance_schema.file_summary_by_event_name.
collect.perf_schema.file_instances                           | 5.5           | Collect metrics from performance_schema.file_summary_by_instance.
collect.perf_schema.indexiowaits                             | 5.6           | Collect metrics from performance_schema.table_io_waits_summary_by_index_usage.
collect.perf_schema.tableiowaits                             | 5.6           | Collect metrics from performance_schema.table_io_waits_summary_by_table.
collect.perf_schema.tablelocks                               | 5.6           | Collect metrics from performance_schema.table_lock_waits_summary_by_table.
collect.perf_schema.replication_group_members                | 5.7           | Collect metrics from performance_schema.replication_group_members.
collect.perf_schema.replication_group_member_stats           | 5.7           | Collect metrics from performance_schema.replication_group_member_stats.
collect.perf_schema.replication_applier_status_by_worker     | 5.7           | Collect metrics from performance_schema.replication_applier_status_by_worker.
collect.slave_status                                         | 5.1           | Collect from SHOW SLAVE STATUS (Enabled by default)
collect.slave_hosts                                          | 5.1           | Collect from SHOW SLAVE HOSTS
collect.heartbeat                                            | 5.1           | Collect from [heartbeat](#heartbeat).
collect.heartbeat.database                                   | 5.1           | Database from where to collect heartbeat data. (default: heartbeat)
collect.heartbeat.table                                      | 5.1           | Table from where to collect heartbeat data. (default: heartbeat)
collect.heartbeat.utc                                        | 5.1           | Use UTC for timestamps of the current server (`pt-heartbeat` is called with `--utc`). (default: false)


# Recommend Alert-Rule

[https://awesome-prometheus-alerts.grep.to/rules#mysql](https://awesome-prometheus-alerts.grep.to/rules#mysql)

### MySQL down
```yaml
  - alert: MysqlDown
    expr: mysql_up == 0
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "MySQL down (instance {{ $labels.instance }})"
      description: "MySQL instance is down on {{ $labels.instance }}\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```
### MySQL too many connections
```yaml
  - alert: MysqlTooManyConnections
    expr: avg by (instance) (max_over_time(mysql_global_status_threads_connected[5m])) / avg by (instance) (mysql_global_variables_max_connections) * 100 > 80
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "MySQL too many connections (instance {{ $labels.instance }})"
      description: "More than 80% of MySQL connections are in use on {{ $labels.instance }}\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

### MySQL high threads running
```yaml
  - alert: MysqlHighThreadsRunning
    expr: avg by (instance) (max_over_time(mysql_global_status_threads_running[5m])) / avg by (instance) (mysql_global_variables_max_connections) * 100 > 60
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "MySQL high threads running (instance {{ $labels.instance }})"
      description: "More than 60% of MySQL connections are in running state on {{ $labels.instance }}\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

### MySQL Slave IO thread not running
```yaml
  - alert: MysqlSlaveIoThreadNotRunning
    expr: mysql_slave_status_master_server_id > 0 and ON (instance) mysql_slave_status_slave_io_running == 0
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "MySQL Slave IO thread not running (instance {{ $labels.instance }})"
      description: "MySQL Slave IO thread not running on {{ $labels.instance }}\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

### MySQL Slave SQL thread not running
```yaml
  - alert: MysqlSlaveSqlThreadNotRunning
    expr: mysql_slave_status_master_server_id > 0 and ON (instance) mysql_slave_status_slave_sql_running == 0
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "MySQL Slave SQL thread not running (instance {{ $labels.instance }})"
      description: "MySQL Slave SQL thread not running on {{ $labels.instance }}\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

### MySQL Slave replication lag

```yaml
  - alert: MysqlSlaveReplicationLag
    expr: mysql_slave_status_master_server_id > 0 and ON (instance) (mysql_slave_status_seconds_behind_master - mysql_slave_status_sql_delay) > 300
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "MySQL Slave replication lag (instance {{ $labels.instance }})"
      description: "MysqL replication lag on {{ $labels.instance }}\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

### MySQL slow queries

```yaml
  - alert: MysqlSlowQueries
    expr: mysql_global_status_slow_queries > 0
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "MySQL slow queries (instance {{ $labels.instance }})"
      description: "MySQL server is having some slow queries.\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

### MySQL restarted
```yaml
  - alert: MysqlRestarted
    expr: mysql_global_status_uptime < 60
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "MySQL restarted (instance {{ $labels.instance }})"
      description: "MySQL has just been restarted, less than one minute ago on {{ $labels.instance }}.\n  VALUE = {{ $value }}\n  LABELS: {{ $labels }}"
```

# Dashboard

![mysql](https://grafana.com/api/dashboards/6239/images/3986/image)
[https://grafana.com/grafana/dashboards/6239](https://grafana.com/grafana/dashboards/6239)