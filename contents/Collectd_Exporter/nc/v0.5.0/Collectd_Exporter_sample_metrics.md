```access transformers
# HELP collectd_aggregation_cpu_total Collectd exporter: 'aggregation' Type: 'cpu' Dstype: 'api.Derive' Dsname: 'value'
# TYPE collectd_aggregation_cpu_total counter
collectd_aggregation_cpu_total{aggregation="cpu-average",instance="collectdt-6vb9b",type="idle"} 1.327989e+06
collectd_aggregation_cpu_total{aggregation="cpu-average",instance="collectdt-6vb9b",type="interrupt"} 0
collectd_aggregation_cpu_total{aggregation="cpu-average",instance="collectdt-6vb9b",type="nice"} 2375
collectd_aggregation_cpu_total{aggregation="cpu-average",instance="collectdt-6vb9b",type="softirq"} 5169
collectd_aggregation_cpu_total{aggregation="cpu-average",instance="collectdt-6vb9b",type="steal"} 124
collectd_aggregation_cpu_total{aggregation="cpu-average",instance="collectdt-6vb9b",type="system"} 85860
collectd_aggregation_cpu_total{aggregation="cpu-average",instance="collectdt-6vb9b",type="user"} 270893
collectd_aggregation_cpu_total{aggregation="cpu-average",instance="collectdt-6vb9b",type="wait"} 14036
# HELP collectd_cpu_total Collectd exporter: 'cpu' Type: 'cpu' Dstype: 'api.Derive' Dsname: 'value'
# TYPE collectd_cpu_total counter
collectd_cpu_total{cpu="0",instance="collectdt-6vb9b",type="idle"} 3.248486e+07
collectd_cpu_total{cpu="0",instance="collectdt-6vb9b",type="interrupt"} 0
collectd_cpu_total{cpu="0",instance="collectdt-6vb9b",type="nice"} 42512
collectd_cpu_total{cpu="0",instance="collectdt-6vb9b",type="softirq"} 82083
collectd_cpu_total{cpu="0",instance="collectdt-6vb9b",type="steal"} 3777
collectd_cpu_total{cpu="0",instance="collectdt-6vb9b",type="system"} 1.539253e+06
collectd_cpu_total{cpu="0",instance="collectdt-6vb9b",type="user"} 3.860247e+06
collectd_cpu_total{cpu="0",instance="collectdt-6vb9b",type="wait"} 302001
collectd_cpu_total{cpu="1",instance="collectdt-6vb9b",type="idle"} 3.2030895e+07
collectd_cpu_total{cpu="1",instance="collectdt-6vb9b",type="interrupt"} 0
collectd_cpu_total{cpu="1",instance="collectdt-6vb9b",type="nice"} 42732
collectd_cpu_total{cpu="1",instance="collectdt-6vb9b",type="softirq"} 80145
collectd_cpu_total{cpu="1",instance="collectdt-6vb9b",type="steal"} 3836
collectd_cpu_total{cpu="1",instance="collectdt-6vb9b",type="system"} 1.533193e+06
collectd_cpu_total{cpu="1",instance="collectdt-6vb9b",type="user"} 4.303757e+06
collectd_cpu_total{cpu="1",instance="collectdt-6vb9b",type="wait"} 304167
collectd_cpu_total{cpu="2",instance="collectdt-6vb9b",type="idle"} 3.1999358e+07
collectd_cpu_total{cpu="2",instance="collectdt-6vb9b",type="interrupt"} 0
collectd_cpu_total{cpu="2",instance="collectdt-6vb9b",type="nice"} 42855
collectd_cpu_total{cpu="2",instance="collectdt-6vb9b",type="softirq"} 102363
collectd_cpu_total{cpu="2",instance="collectdt-6vb9b",type="steal"} 3884
collectd_cpu_total{cpu="2",instance="collectdt-6vb9b",type="system"} 1.532671e+06
collectd_cpu_total{cpu="2",instance="collectdt-6vb9b",type="user"} 4.299677e+06
collectd_cpu_total{cpu="2",instance="collectdt-6vb9b",type="wait"} 301487
collectd_cpu_total{cpu="3",instance="collectdt-6vb9b",type="idle"} 3.1993278e+07
collectd_cpu_total{cpu="3",instance="collectdt-6vb9b",type="interrupt"} 0
collectd_cpu_total{cpu="3",instance="collectdt-6vb9b",type="nice"} 42670
collectd_cpu_total{cpu="3",instance="collectdt-6vb9b",type="softirq"} 62365
collectd_cpu_total{cpu="3",instance="collectdt-6vb9b",type="steal"} 3937
collectd_cpu_total{cpu="3",instance="collectdt-6vb9b",type="system"} 1.5378e+06
collectd_cpu_total{cpu="3",instance="collectdt-6vb9b",type="user"} 4.336922e+06
collectd_cpu_total{cpu="3",instance="collectdt-6vb9b",type="wait"} 295043
# HELP collectd_exporter_build_info A metric with a constant '1' value labeled by version, revision, branch, and goversion from which collectd_exporter was built.
# TYPE collectd_exporter_build_info gauge
collectd_exporter_build_info{branch="",goversion="go1.14.2",revision="",version=""} 1
# HELP collectd_interface_if_errors_rx_total Collectd exporter: 'interface' Type: 'if_errors' Dstype: 'api.Derive' Dsname: 'rx'
# TYPE collectd_interface_if_errors_rx_total counter
collectd_interface_if_errors_rx_total{instance="collectdt-6vb9b",interface="eth0"} 0
collectd_interface_if_errors_rx_total{instance="collectdt-6vb9b",interface="lo"} 0
# HELP collectd_interface_if_errors_tx_total Collectd exporter: 'interface' Type: 'if_errors' Dstype: 'api.Derive' Dsname: 'tx'
# TYPE collectd_interface_if_errors_tx_total counter
collectd_interface_if_errors_tx_total{instance="collectdt-6vb9b",interface="eth0"} 0
collectd_interface_if_errors_tx_total{instance="collectdt-6vb9b",interface="lo"} 0
# HELP collectd_interface_if_octets_rx_total Collectd exporter: 'interface' Type: 'if_octets' Dstype: 'api.Derive' Dsname: 'rx'
# TYPE collectd_interface_if_octets_rx_total counter
collectd_interface_if_octets_rx_total{instance="collectdt-6vb9b",interface="eth0"} 1.004647e+06
collectd_interface_if_octets_rx_total{instance="collectdt-6vb9b",interface="lo"} 0
# HELP collectd_interface_if_octets_tx_total Collectd exporter: 'interface' Type: 'if_octets' Dstype: 'api.Derive' Dsname: 'tx'
# TYPE collectd_interface_if_octets_tx_total counter
collectd_interface_if_octets_tx_total{instance="collectdt-6vb9b",interface="eth0"} 2.0762557e+07
collectd_interface_if_octets_tx_total{instance="collectdt-6vb9b",interface="lo"} 0
# HELP collectd_interface_if_packets_rx_total Collectd exporter: 'interface' Type: 'if_packets' Dstype: 'api.Derive' Dsname: 'rx'
# TYPE collectd_interface_if_packets_rx_total counter
collectd_interface_if_packets_rx_total{instance="collectdt-6vb9b",interface="eth0"} 9708
collectd_interface_if_packets_rx_total{instance="collectdt-6vb9b",interface="lo"} 0
# HELP collectd_interface_if_packets_tx_total Collectd exporter: 'interface' Type: 'if_packets' Dstype: 'api.Derive' Dsname: 'tx'
# TYPE collectd_interface_if_packets_tx_total counter
collectd_interface_if_packets_tx_total{instance="collectdt-6vb9b",interface="eth0"} 9705
collectd_interface_if_packets_tx_total{instance="collectdt-6vb9b",interface="lo"} 0
# HELP collectd_last_push_timestamp_seconds Unix timestamp of the last received collectd metrics push in seconds.
# TYPE collectd_last_push_timestamp_seconds gauge
collectd_last_push_timestamp_seconds 1.6327412251012151e+09
# HELP collectd_load_longterm Collectd exporter: 'load' Type: 'load' Dstype: 'api.Gauge' Dsname: 'longterm'
# TYPE collectd_load_longterm gauge
collectd_load_longterm{instance="collectdt-6vb9b"} 0.83
# HELP collectd_load_midterm Collectd exporter: 'load' Type: 'load' Dstype: 'api.Gauge' Dsname: 'midterm'
# TYPE collectd_load_midterm gauge
collectd_load_midterm{instance="collectdt-6vb9b"} 0.51
# HELP collectd_load_shortterm Collectd exporter: 'load' Type: 'load' Dstype: 'api.Gauge' Dsname: 'shortterm'
# TYPE collectd_load_shortterm gauge
collectd_load_shortterm{instance="collectdt-6vb9b"} 0.74
# HELP collectd_memory Collectd exporter: 'memory' Type: 'memory' Dstype: 'api.Gauge' Dsname: 'value'
# TYPE collectd_memory gauge
collectd_memory{instance="collectdt-6vb9b",memory="buffered"} 1.1280384e+08
collectd_memory{instance="collectdt-6vb9b",memory="cached"} 4.085047296e+09
collectd_memory{instance="collectdt-6vb9b",memory="free"} 2.33951232e+08
collectd_memory{instance="collectdt-6vb9b",memory="slab_recl"} 5.0116608e+08
collectd_memory{instance="collectdt-6vb9b",memory="slab_unrecl"} 2.27033088e+08
collectd_memory{instance="collectdt-6vb9b",memory="used"} 3.186921472e+09
# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 8.163e-06
go_gc_duration_seconds{quantile="0.25"} 2.1981e-05
go_gc_duration_seconds{quantile="0.5"} 5.4676e-05
go_gc_duration_seconds{quantile="0.75"} 9.798e-05
go_gc_duration_seconds{quantile="1"} 0.003622812
go_gc_duration_seconds_sum 1.515576538
go_gc_duration_seconds_count 8626
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 12
# HELP go_info Information about the Go environment.
# TYPE go_info gauge
go_info{version="go1.14.2"} 1
# HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
# TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 3.794072e+06
# HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
# TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 2.266747172e+10
# HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
# TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 1.574689e+06
# HELP go_memstats_frees_total Total number of frees.
# TYPE go_memstats_frees_total counter
go_memstats_frees_total 2.74664238e+08
# HELP go_memstats_gc_cpu_fraction The fraction of this program's available CPU time used by the GC since the program started.
# TYPE go_memstats_gc_cpu_fraction gauge
go_memstats_gc_cpu_fraction 1.5009730594696403e-05
# HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
# TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 3.574024e+06
# HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
# TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 3.794072e+06
# HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
# TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 6.1620224e+07
# HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
# TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 4.767744e+06
# HELP go_memstats_heap_objects Number of allocated objects.
# TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 29533
# HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
# TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 6.1308928e+07
# HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
# TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 6.6387968e+07
# HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
# TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 1.6327411948901503e+09
# HELP go_memstats_lookups_total Total number of pointer lookups.
# TYPE go_memstats_lookups_total counter
go_memstats_lookups_total 0
# HELP go_memstats_mallocs_total Total number of mallocs.
# TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 2.74693771e+08
# HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
# TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 6944
# HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
# TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 16384
# HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
# TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 85272
# HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
# TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 114688
# HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
# TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 4.194304e+06
# HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
# TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 1.093847e+06
# HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
# TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 720896
# HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
# TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 720896
# HELP go_memstats_sys_bytes Number of bytes obtained from system.
# TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 7.3482496e+07
# HELP go_threads Number of OS threads created.
# TYPE go_threads gauge
go_threads 9
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 254.08
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 65536
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 12
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 1.1403264e+07
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.63248387697e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 7.31471872e+08
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes -1
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.
# TYPE promhttp_metric_handler_requests_in_flight gauge
promhttp_metric_handler_requests_in_flight 1
# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.
# TYPE promhttp_metric_handler_requests_total counter
promhttp_metric_handler_requests_total{code="200"} 55761
promhttp_metric_handler_requests_total{code="500"} 0
promhttp_metric_handler_requests_total{code="503"} 0
```
