# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 3.3494e-05
go_gc_duration_seconds{quantile="0.25"} 7.1772e-05
go_gc_duration_seconds{quantile="0.5"} 0.000101573
go_gc_duration_seconds{quantile="0.75"} 0.000147036
go_gc_duration_seconds{quantile="1"} 0.000829635
go_gc_duration_seconds_sum 0.467698279
go_gc_duration_seconds_count 3112
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 11
# HELP go_info Information about the Go environment.
# TYPE go_info gauge
go_info{version="go1.17"} 1
# HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
# TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 5.049048e+06
# HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
# TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 6.2416248e+09
# HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
# TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 4216
# HELP go_memstats_frees_total Total number of frees.
# TYPE go_memstats_frees_total counter
go_memstats_frees_total 4.6186735e+07
# HELP go_memstats_gc_cpu_fraction The fraction of this program's available CPU time used by the GC since the program started.
# TYPE go_memstats_gc_cpu_fraction gauge
go_memstats_gc_cpu_fraction 5.6119491160862875e-06
# HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
# TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 4.979168e+06
# HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
# TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 5.049048e+06
# HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
# TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 5.742592e+06
# HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
# TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 6.152192e+06
# HELP go_memstats_heap_objects Number of allocated objects.
# TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 17513
# HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
# TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 5.111808e+06
# HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
# TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 1.1894784e+07
# HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
# TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 1.6336867302502043e+09
# HELP go_memstats_lookups_total Total number of pointer lookups.
# TYPE go_memstats_lookups_total counter
go_memstats_lookups_total 0
# HELP go_memstats_mallocs_total Total number of mallocs.
# TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 4.6204248e+07
# HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
# TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 4800
# HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
# TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 16384
# HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
# TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 84320
# HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
# TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 98304
# HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
# TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 6.402192e+06
# HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
# TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 884920
# HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
# TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 688128
# HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
# TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 688128
# HELP go_memstats_sys_bytes Number of bytes obtained from system.
# TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 1.8565904e+07
# HELP go_threads Number of OS threads created.
# TYPE go_threads gauge
go_threads 9
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 132.93
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 1.048576e+06
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 13
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 2.0844544e+07
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.63343805567e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 7.2869888e+08
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes 1.8446744073709552e+19
# HELP redis_active_defrag_running active_defrag_running metric
# TYPE redis_active_defrag_running gauge
redis_active_defrag_running 0
# HELP redis_allocator_active_bytes allocator_active_bytes metric
# TYPE redis_allocator_active_bytes gauge
redis_allocator_active_bytes 2.351104e+06
# HELP redis_allocator_allocated_bytes allocator_allocated_bytes metric
# TYPE redis_allocator_allocated_bytes gauge
redis_allocator_allocated_bytes 2.016696e+06
# HELP redis_allocator_frag_bytes allocator_frag_bytes metric
# TYPE redis_allocator_frag_bytes gauge
redis_allocator_frag_bytes 334408
# HELP redis_allocator_frag_ratio allocator_frag_ratio metric
# TYPE redis_allocator_frag_ratio gauge
redis_allocator_frag_ratio 1.17
# HELP redis_allocator_resident_bytes allocator_resident_bytes metric
# TYPE redis_allocator_resident_bytes gauge
redis_allocator_resident_bytes 5.001216e+06
# HELP redis_allocator_rss_bytes allocator_rss_bytes metric
# TYPE redis_allocator_rss_bytes gauge
redis_allocator_rss_bytes 2.650112e+06
# HELP redis_allocator_rss_ratio allocator_rss_ratio metric
# TYPE redis_allocator_rss_ratio gauge
redis_allocator_rss_ratio 2.13
# HELP redis_aof_base_size_bytes aof_base_size_bytes metric
# TYPE redis_aof_base_size_bytes gauge
redis_aof_base_size_bytes 0
# HELP redis_aof_buffer_length aof_buffer_length metric
# TYPE redis_aof_buffer_length gauge
redis_aof_buffer_length 0
# HELP redis_aof_current_rewrite_duration_sec aof_current_rewrite_duration_sec metric
# TYPE redis_aof_current_rewrite_duration_sec gauge
redis_aof_current_rewrite_duration_sec -1
# HELP redis_aof_current_size_bytes aof_current_size_bytes metric
# TYPE redis_aof_current_size_bytes gauge
redis_aof_current_size_bytes 0
# HELP redis_aof_delayed_fsync aof_delayed_fsync metric
# TYPE redis_aof_delayed_fsync gauge
redis_aof_delayed_fsync 0
# HELP redis_aof_enabled aof_enabled metric
# TYPE redis_aof_enabled gauge
redis_aof_enabled 1
# HELP redis_aof_last_bgrewrite_status aof_last_bgrewrite_status metric
# TYPE redis_aof_last_bgrewrite_status gauge
redis_aof_last_bgrewrite_status 1
# HELP redis_aof_last_cow_size_bytes aof_last_cow_size_bytes metric
# TYPE redis_aof_last_cow_size_bytes gauge
redis_aof_last_cow_size_bytes 0
# HELP redis_aof_last_rewrite_duration_sec aof_last_rewrite_duration_sec metric
# TYPE redis_aof_last_rewrite_duration_sec gauge
redis_aof_last_rewrite_duration_sec -1
# HELP redis_aof_last_write_status aof_last_write_status metric
# TYPE redis_aof_last_write_status gauge
redis_aof_last_write_status 1
# HELP redis_aof_pending_bio_fsync aof_pending_bio_fsync metric
# TYPE redis_aof_pending_bio_fsync gauge
redis_aof_pending_bio_fsync 0
# HELP redis_aof_pending_rewrite aof_pending_rewrite metric
# TYPE redis_aof_pending_rewrite gauge
redis_aof_pending_rewrite 0
# HELP redis_aof_rewrite_buffer_length aof_rewrite_buffer_length metric
# TYPE redis_aof_rewrite_buffer_length gauge
redis_aof_rewrite_buffer_length 0
# HELP redis_aof_rewrite_in_progress aof_rewrite_in_progress metric
# TYPE redis_aof_rewrite_in_progress gauge
redis_aof_rewrite_in_progress 0
# HELP redis_aof_rewrite_scheduled aof_rewrite_scheduled metric
# TYPE redis_aof_rewrite_scheduled gauge
redis_aof_rewrite_scheduled 0
# HELP redis_blocked_clients blocked_clients metric
# TYPE redis_blocked_clients gauge
redis_blocked_clients 0
# HELP redis_client_recent_max_input_buffer_bytes client_recent_max_input_buffer_bytes metric
# TYPE redis_client_recent_max_input_buffer_bytes gauge
redis_client_recent_max_input_buffer_bytes 32
# HELP redis_client_recent_max_output_buffer_bytes client_recent_max_output_buffer_bytes metric
# TYPE redis_client_recent_max_output_buffer_bytes gauge
redis_client_recent_max_output_buffer_bytes 0
# HELP redis_cluster_connections cluster_connections metric
# TYPE redis_cluster_connections gauge
redis_cluster_connections 0
# HELP redis_cluster_enabled cluster_enabled metric
# TYPE redis_cluster_enabled gauge
redis_cluster_enabled 0
# HELP redis_commands_duration_seconds_total Total amount of time in seconds spent per command
# TYPE redis_commands_duration_seconds_total counter
redis_commands_duration_seconds_total{cmd="auth"} 2.252176
redis_commands_duration_seconds_total{cmd="client"} 0.016699
redis_commands_duration_seconds_total{cmd="config"} 0.615038
redis_commands_duration_seconds_total{cmd="info"} 0.925604
redis_commands_duration_seconds_total{cmd="latency"} 0.018506
redis_commands_duration_seconds_total{cmd="ping"} 0.415984
redis_commands_duration_seconds_total{cmd="psync"} 0.004258
redis_commands_duration_seconds_total{cmd="replconf"} 1.326569
redis_commands_duration_seconds_total{cmd="slowlog"} 0.043785
# HELP redis_commands_processed_total commands_processed_total metric
# TYPE redis_commands_processed_total counter
redis_commands_processed_total 1.61128e+06
# HELP redis_commands_total Total number of calls per command
# TYPE redis_commands_total counter
redis_commands_total{cmd="auth"} 410065
redis_commands_total{cmd="client"} 8294
redis_commands_total{cmd="config"} 8294
redis_commands_total{cmd="info"} 8293
redis_commands_total{cmd="latency"} 8293
redis_commands_total{cmd="ping"} 401768
redis_commands_total{cmd="psync"} 3
redis_commands_total{cmd="replconf"} 749684
redis_commands_total{cmd="slowlog"} 16586
# HELP redis_config_maxclients config_maxclients metric
# TYPE redis_config_maxclients gauge
redis_config_maxclients 10000
# HELP redis_config_maxmemory config_maxmemory metric
# TYPE redis_config_maxmemory gauge
redis_config_maxmemory 0
# HELP redis_connected_clients connected_clients metric
# TYPE redis_connected_clients gauge
redis_connected_clients 1
# HELP redis_connected_slave_lag_seconds Lag of connected slave
# TYPE redis_connected_slave_lag_seconds gauge
redis_connected_slave_lag_seconds{slave_ip="10.244.0.210",slave_port="6379",slave_state="online"} 1
redis_connected_slave_lag_seconds{slave_ip="10.244.1.202",slave_port="6379",slave_state="online"} 1
redis_connected_slave_lag_seconds{slave_ip="10.244.1.25",slave_port="6379",slave_state="online"} 0
# HELP redis_connected_slave_offset_bytes Offset of connected slave
# TYPE redis_connected_slave_offset_bytes gauge
redis_connected_slave_offset_bytes{slave_ip="10.244.0.210",slave_port="6379",slave_state="online"} 349734
redis_connected_slave_offset_bytes{slave_ip="10.244.1.202",slave_port="6379",slave_state="online"} 349734
redis_connected_slave_offset_bytes{slave_ip="10.244.1.25",slave_port="6379",slave_state="online"} 349734
# HELP redis_connected_slaves connected_slaves metric
# TYPE redis_connected_slaves gauge
redis_connected_slaves 3
# HELP redis_connections_received_total connections_received_total metric
# TYPE redis_connections_received_total counter
redis_connections_received_total 410065
# HELP redis_cpu_sys_children_seconds_total cpu_sys_children_seconds_total metric
# TYPE redis_cpu_sys_children_seconds_total counter
redis_cpu_sys_children_seconds_total 0.005901
# HELP redis_cpu_sys_seconds_total cpu_sys_seconds_total metric
# TYPE redis_cpu_sys_seconds_total counter
redis_cpu_sys_seconds_total 353.673976
# HELP redis_cpu_user_children_seconds_total cpu_user_children_seconds_total metric
# TYPE redis_cpu_user_children_seconds_total counter
redis_cpu_user_children_seconds_total 0.005977
# HELP redis_cpu_user_seconds_total cpu_user_seconds_total metric
# TYPE redis_cpu_user_seconds_total counter
redis_cpu_user_seconds_total 304.81507
# HELP redis_db_keys Total number of keys by DB
# TYPE redis_db_keys gauge
redis_db_keys{db="db0"} 0
redis_db_keys{db="db1"} 0
redis_db_keys{db="db10"} 0
redis_db_keys{db="db11"} 0
redis_db_keys{db="db12"} 0
redis_db_keys{db="db13"} 0
redis_db_keys{db="db14"} 0
redis_db_keys{db="db15"} 0
redis_db_keys{db="db2"} 0
redis_db_keys{db="db3"} 0
redis_db_keys{db="db4"} 0
redis_db_keys{db="db5"} 0
redis_db_keys{db="db6"} 0
redis_db_keys{db="db7"} 0
redis_db_keys{db="db8"} 0
redis_db_keys{db="db9"} 0
# HELP redis_db_keys_expiring Total number of expiring keys by DB
# TYPE redis_db_keys_expiring gauge
redis_db_keys_expiring{db="db0"} 0
redis_db_keys_expiring{db="db1"} 0
redis_db_keys_expiring{db="db10"} 0
redis_db_keys_expiring{db="db11"} 0
redis_db_keys_expiring{db="db12"} 0
redis_db_keys_expiring{db="db13"} 0
redis_db_keys_expiring{db="db14"} 0
redis_db_keys_expiring{db="db15"} 0
redis_db_keys_expiring{db="db2"} 0
redis_db_keys_expiring{db="db3"} 0
redis_db_keys_expiring{db="db4"} 0
redis_db_keys_expiring{db="db5"} 0
redis_db_keys_expiring{db="db6"} 0
redis_db_keys_expiring{db="db7"} 0
redis_db_keys_expiring{db="db8"} 0
redis_db_keys_expiring{db="db9"} 0
# HELP redis_defrag_hits defrag_hits metric
# TYPE redis_defrag_hits gauge
redis_defrag_hits 0
# HELP redis_defrag_key_hits defrag_key_hits metric
# TYPE redis_defrag_key_hits gauge
redis_defrag_key_hits 0
# HELP redis_defrag_key_misses defrag_key_misses metric
# TYPE redis_defrag_key_misses gauge
redis_defrag_key_misses 0
# HELP redis_defrag_misses defrag_misses metric
# TYPE redis_defrag_misses gauge
redis_defrag_misses 0
# HELP redis_evicted_keys_total evicted_keys_total metric
# TYPE redis_evicted_keys_total counter
redis_evicted_keys_total 0
# HELP redis_expired_keys_total expired_keys_total metric
# TYPE redis_expired_keys_total counter
redis_expired_keys_total 0
# HELP redis_expired_stale_percentage expired_stale_percentage metric
# TYPE redis_expired_stale_percentage gauge
redis_expired_stale_percentage 0
# HELP redis_expired_time_cap_reached_total expired_time_cap_reached_total metric
# TYPE redis_expired_time_cap_reached_total gauge
redis_expired_time_cap_reached_total 0
# HELP redis_exporter_build_info redis exporter build_info
# TYPE redis_exporter_build_info gauge
redis_exporter_build_info{build_date="2021-08-30-23:40:42",commit_sha="ef05f8642cd71d632ca14d728c9c7534835d3674",golang_version="go1.17",version="v1.27.0"} 1
# HELP redis_exporter_last_scrape_connect_time_seconds exporter_last_scrape_connect_time_seconds metric
# TYPE redis_exporter_last_scrape_connect_time_seconds gauge
redis_exporter_last_scrape_connect_time_seconds 0.002840703
# HELP redis_exporter_last_scrape_duration_seconds exporter_last_scrape_duration_seconds metric
# TYPE redis_exporter_last_scrape_duration_seconds gauge
redis_exporter_last_scrape_duration_seconds 0.004466774
# HELP redis_exporter_last_scrape_error The last scrape error status.
# TYPE redis_exporter_last_scrape_error gauge
redis_exporter_last_scrape_error{err=""} 0
# HELP redis_exporter_scrape_duration_seconds Durations of scrapes by the exporter
# TYPE redis_exporter_scrape_duration_seconds summary
redis_exporter_scrape_duration_seconds_sum 50.41281589200018
redis_exporter_scrape_duration_seconds_count 8294
# HELP redis_exporter_scrapes_total Current total redis scrapes.
# TYPE redis_exporter_scrapes_total counter
redis_exporter_scrapes_total 8294
# HELP redis_instance_info Information about the Redis instance
# TYPE redis_instance_info gauge
redis_instance_info{maxmemory_policy="noeviction",os="Linux 4.19.0-17-cloud-amd64 x86_64",process_id="1",redis_build_id="caf18c781a142a72",redis_mode="standalone",redis_version="6.2.5",role="master",run_id="5acbd3fc0dbbfd647b743d79ac428183a89abd99",tcp_port="6379"} 1
# HELP redis_keyspace_hits_total keyspace_hits_total metric
# TYPE redis_keyspace_hits_total counter
redis_keyspace_hits_total 0
# HELP redis_keyspace_misses_total keyspace_misses_total metric
# TYPE redis_keyspace_misses_total counter
redis_keyspace_misses_total 0
# HELP redis_last_key_groups_scrape_duration_milliseconds Duration of the last key group metrics scrape in milliseconds
# TYPE redis_last_key_groups_scrape_duration_milliseconds gauge
redis_last_key_groups_scrape_duration_milliseconds 0
# HELP redis_last_slow_execution_duration_seconds The amount of time needed for last slow execution, in seconds
# TYPE redis_last_slow_execution_duration_seconds gauge
redis_last_slow_execution_duration_seconds 0
# HELP redis_latest_fork_seconds latest_fork_seconds metric
# TYPE redis_latest_fork_seconds gauge
redis_latest_fork_seconds 0.000565
# HELP redis_lazyfree_pending_objects lazyfree_pending_objects metric
# TYPE redis_lazyfree_pending_objects gauge
redis_lazyfree_pending_objects 0
# HELP redis_loading_dump_file loading_dump_file metric
# TYPE redis_loading_dump_file gauge
redis_loading_dump_file 0
# HELP redis_master_repl_offset master_repl_offset metric
# TYPE redis_master_repl_offset gauge
redis_master_repl_offset 349734
# HELP redis_mem_clients_normal mem_clients_normal metric
# TYPE redis_mem_clients_normal gauge
redis_mem_clients_normal 0
# HELP redis_mem_clients_slaves mem_clients_slaves metric
# TYPE redis_mem_clients_slaves gauge
redis_mem_clients_slaves 61536
# HELP redis_mem_fragmentation_bytes mem_fragmentation_bytes metric
# TYPE redis_mem_fragmentation_bytes gauge
redis_mem_fragmentation_bytes 1.1619608e+07
# HELP redis_mem_fragmentation_ratio mem_fragmentation_ratio metric
# TYPE redis_mem_fragmentation_ratio gauge
redis_mem_fragmentation_ratio 7.05
# HELP redis_mem_not_counted_for_eviction_bytes mem_not_counted_for_eviction_bytes metric
# TYPE redis_mem_not_counted_for_eviction_bytes gauge
redis_mem_not_counted_for_eviction_bytes 4
# HELP redis_memory_max_bytes memory_max_bytes metric
# TYPE redis_memory_max_bytes gauge
redis_memory_max_bytes 0
# HELP redis_memory_used_bytes memory_used_bytes metric
# TYPE redis_memory_used_bytes gauge
redis_memory_used_bytes 2.02656e+06
# HELP redis_memory_used_dataset_bytes memory_used_dataset_bytes metric
# TYPE redis_memory_used_dataset_bytes gauge
redis_memory_used_dataset_bytes 106288
# HELP redis_memory_used_lua_bytes memory_used_lua_bytes metric
# TYPE redis_memory_used_lua_bytes gauge
redis_memory_used_lua_bytes 37888
# HELP redis_memory_used_overhead_bytes memory_used_overhead_bytes metric
# TYPE redis_memory_used_overhead_bytes gauge
redis_memory_used_overhead_bytes 1.920272e+06
# HELP redis_memory_used_peak_bytes memory_used_peak_bytes metric
# TYPE redis_memory_used_peak_bytes gauge
redis_memory_used_peak_bytes 2.12724e+06
# HELP redis_memory_used_rss_bytes memory_used_rss_bytes metric
# TYPE redis_memory_used_rss_bytes gauge
redis_memory_used_rss_bytes 1.3541376e+07
# HELP redis_memory_used_scripts_bytes memory_used_scripts_bytes metric
# TYPE redis_memory_used_scripts_bytes gauge
redis_memory_used_scripts_bytes 0
# HELP redis_memory_used_startup_bytes memory_used_startup_bytes metric
# TYPE redis_memory_used_startup_bytes gauge
redis_memory_used_startup_bytes 810152
# HELP redis_migrate_cached_sockets_total migrate_cached_sockets_total metric
# TYPE redis_migrate_cached_sockets_total gauge
redis_migrate_cached_sockets_total 0
# HELP redis_module_fork_in_progress module_fork_in_progress metric
# TYPE redis_module_fork_in_progress gauge
redis_module_fork_in_progress 0
# HELP redis_module_fork_last_cow_size module_fork_last_cow_size metric
# TYPE redis_module_fork_last_cow_size gauge
redis_module_fork_last_cow_size 0
# HELP redis_net_input_bytes_total net_input_bytes_total metric
# TYPE redis_net_input_bytes_total counter
redis_net_input_bytes_total 4.8937398e+07
# HELP redis_net_output_bytes_total net_output_bytes_total metric
# TYPE redis_net_output_bytes_total counter
redis_net_output_bytes_total 9.749199e+07
# HELP redis_process_id process_id metric
# TYPE redis_process_id gauge
redis_process_id 1
# HELP redis_pubsub_channels pubsub_channels metric
# TYPE redis_pubsub_channels gauge
redis_pubsub_channels 0
# HELP redis_pubsub_patterns pubsub_patterns metric
# TYPE redis_pubsub_patterns gauge
redis_pubsub_patterns 0
# HELP redis_rdb_bgsave_in_progress rdb_bgsave_in_progress metric
# TYPE redis_rdb_bgsave_in_progress gauge
redis_rdb_bgsave_in_progress 0
# HELP redis_rdb_changes_since_last_save rdb_changes_since_last_save metric
# TYPE redis_rdb_changes_since_last_save gauge
redis_rdb_changes_since_last_save 0
# HELP redis_rdb_current_bgsave_duration_sec rdb_current_bgsave_duration_sec metric
# TYPE redis_rdb_current_bgsave_duration_sec gauge
redis_rdb_current_bgsave_duration_sec -1
# HELP redis_rdb_last_bgsave_duration_sec rdb_last_bgsave_duration_sec metric
# TYPE redis_rdb_last_bgsave_duration_sec gauge
redis_rdb_last_bgsave_duration_sec 0
# HELP redis_rdb_last_bgsave_status rdb_last_bgsave_status metric
# TYPE redis_rdb_last_bgsave_status gauge
redis_rdb_last_bgsave_status 1
# HELP redis_rdb_last_cow_size_bytes rdb_last_cow_size_bytes metric
# TYPE redis_rdb_last_cow_size_bytes gauge
redis_rdb_last_cow_size_bytes 294912
# HELP redis_rdb_last_save_timestamp_seconds rdb_last_save_timestamp_seconds metric
# TYPE redis_rdb_last_save_timestamp_seconds gauge
redis_rdb_last_save_timestamp_seconds 1.633435752e+09
# HELP redis_rejected_connections_total rejected_connections_total metric
# TYPE redis_rejected_connections_total counter
redis_rejected_connections_total 0
# HELP redis_repl_backlog_first_byte_offset repl_backlog_first_byte_offset metric
# TYPE redis_repl_backlog_first_byte_offset gauge
redis_repl_backlog_first_byte_offset 1
# HELP redis_repl_backlog_history_bytes repl_backlog_history_bytes metric
# TYPE redis_repl_backlog_history_bytes gauge
redis_repl_backlog_history_bytes 349734
# HELP redis_repl_backlog_is_active repl_backlog_is_active metric
# TYPE redis_repl_backlog_is_active gauge
redis_repl_backlog_is_active 1
# HELP redis_replica_partial_resync_accepted replica_partial_resync_accepted metric
# TYPE redis_replica_partial_resync_accepted gauge
redis_replica_partial_resync_accepted 0
# HELP redis_replica_partial_resync_denied replica_partial_resync_denied metric
# TYPE redis_replica_partial_resync_denied gauge
redis_replica_partial_resync_denied 0
# HELP redis_replica_resyncs_full replica_resyncs_full metric
# TYPE redis_replica_resyncs_full gauge
redis_replica_resyncs_full 3
# HELP redis_replication_backlog_bytes replication_backlog_bytes metric
# TYPE redis_replication_backlog_bytes gauge
redis_replication_backlog_bytes 1.048576e+06
# HELP redis_second_repl_offset second_repl_offset metric
# TYPE redis_second_repl_offset gauge
redis_second_repl_offset -1
# HELP redis_slave_expires_tracked_keys slave_expires_tracked_keys metric
# TYPE redis_slave_expires_tracked_keys gauge
redis_slave_expires_tracked_keys 0
# HELP redis_slowlog_last_id Last id of slowlog
# TYPE redis_slowlog_last_id gauge
redis_slowlog_last_id 0
# HELP redis_slowlog_length Total slowlog
# TYPE redis_slowlog_length gauge
redis_slowlog_length 0
# HELP redis_start_time_seconds Start time of the Redis instance since unix epoch in seconds.
# TYPE redis_start_time_seconds gauge
redis_start_time_seconds 1.633435662e+09
# HELP redis_target_scrape_request_errors_total Errors in requests to the exporter
# TYPE redis_target_scrape_request_errors_total counter
redis_target_scrape_request_errors_total 0
# HELP redis_tracking_clients tracking_clients metric
# TYPE redis_tracking_clients gauge
redis_tracking_clients 0
# HELP redis_up Information about the Redis instance
# TYPE redis_up gauge
redis_up 1
# HELP redis_uptime_in_seconds uptime_in_seconds metric
# TYPE redis_uptime_in_seconds gauge
redis_uptime_in_seconds 251160