# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 4.2838e-05
go_gc_duration_seconds{quantile="0.25"} 8.3176e-05
go_gc_duration_seconds{quantile="0.5"} 0.000115928
go_gc_duration_seconds{quantile="0.75"} 0.000173681
go_gc_duration_seconds{quantile="1"} 0.003778579
go_gc_duration_seconds_sum 1.370597858
go_gc_duration_seconds_count 6262
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 10
# HELP go_info Information about the Go environment.
# TYPE go_info gauge
go_info{version="go1.16.5"} 1
# HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
# TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 3.289296e+06
# HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
# TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 1.149197296e+10
# HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
# TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 1.591568e+06
# HELP go_memstats_frees_total Total number of frees.
# TYPE go_memstats_frees_total counter
go_memstats_frees_total 1.23842603e+08
# HELP go_memstats_gc_cpu_fraction The fraction of this program's available CPU time used by the GC since the program started.
# TYPE go_memstats_gc_cpu_fraction gauge
go_memstats_gc_cpu_fraction 5.776864230815766e-06
# HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
# TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 5.110648e+06
# HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
# TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 3.289296e+06
# HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
# TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 6.1538304e+07
# HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
# TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 4.882432e+06
# HELP go_memstats_heap_objects Number of allocated objects.
# TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 19499
# HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
# TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 6.053888e+07
# HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
# TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 6.6420736e+07
# HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
# TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 1.6336904660071342e+09
# HELP go_memstats_lookups_total Total number of pointer lookups.
# TYPE go_memstats_lookups_total counter
go_memstats_lookups_total 0
# HELP go_memstats_mallocs_total Total number of mallocs.
# TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 1.23862102e+08
# HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
# TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 4800
# HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
# TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 16384
# HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
# TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 85952
# HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
# TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 114688
# HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
# TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 5.120704e+06
# HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
# TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 851840
# HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
# TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 688128
# HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
# TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 688128
# HELP go_memstats_sys_bytes Number of bytes obtained from system.
# TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 7.4793992e+07
# HELP go_threads Number of OS threads created.
# TYPE go_threads gauge
go_threads 9
# HELP pg_database_size_bytes Disk space used by the database
# TYPE pg_database_size_bytes gauge
pg_database_size_bytes{datname="postgres",server="postgresql:5432"} 7.893663e+06
pg_database_size_bytes{datname="template0",server="postgresql:5432"} 7.750147e+06
pg_database_size_bytes{datname="template1",server="postgresql:5432"} 7.750147e+06
# HELP pg_exporter_last_scrape_duration_seconds Duration of the last scrape of metrics from PostgresSQL.
# TYPE pg_exporter_last_scrape_duration_seconds gauge
pg_exporter_last_scrape_duration_seconds 0.051536975
# HELP pg_exporter_last_scrape_error Whether the last scrape of metrics from PostgreSQL resulted in an error (1 for error, 0 for success).
# TYPE pg_exporter_last_scrape_error gauge
pg_exporter_last_scrape_error 1
# HELP pg_exporter_scrapes_total Total number of times PostgresSQL was scraped for metrics.
# TYPE pg_exporter_scrapes_total counter
pg_exporter_scrapes_total 10618
# HELP pg_exporter_user_queries_load_error Whether the user queries file was loaded and parsed successfully (1 for error, 0 for success).
# TYPE pg_exporter_user_queries_load_error gauge
pg_exporter_user_queries_load_error{filename="/etc/config.yaml",hashsum="d05d33e6f2eecfc6201a6586902f73a1ba84283a3833a2301a234f84fba27990"} 0
# HELP pg_locks_count Number of locks
# TYPE pg_locks_count gauge
pg_locks_count{datname="postgres",mode="accessexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="postgres",mode="accesssharelock",server="postgresql:5432"} 1
pg_locks_count{datname="postgres",mode="exclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="postgres",mode="rowexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="postgres",mode="rowsharelock",server="postgresql:5432"} 0
pg_locks_count{datname="postgres",mode="sharelock",server="postgresql:5432"} 0
pg_locks_count{datname="postgres",mode="sharerowexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="postgres",mode="shareupdateexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="postgres",mode="sireadlock",server="postgresql:5432"} 0
pg_locks_count{datname="template0",mode="accessexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="template0",mode="accesssharelock",server="postgresql:5432"} 0
pg_locks_count{datname="template0",mode="exclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="template0",mode="rowexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="template0",mode="rowsharelock",server="postgresql:5432"} 0
pg_locks_count{datname="template0",mode="sharelock",server="postgresql:5432"} 0
pg_locks_count{datname="template0",mode="sharerowexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="template0",mode="shareupdateexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="template0",mode="sireadlock",server="postgresql:5432"} 0
pg_locks_count{datname="template1",mode="accessexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="template1",mode="accesssharelock",server="postgresql:5432"} 0
pg_locks_count{datname="template1",mode="exclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="template1",mode="rowexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="template1",mode="rowsharelock",server="postgresql:5432"} 0
pg_locks_count{datname="template1",mode="sharelock",server="postgresql:5432"} 0
pg_locks_count{datname="template1",mode="sharerowexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="template1",mode="shareupdateexclusivelock",server="postgresql:5432"} 0
pg_locks_count{datname="template1",mode="sireadlock",server="postgresql:5432"} 0
# HELP pg_postmaster_start_time_seconds Time at which postmaster started
# TYPE pg_postmaster_start_time_seconds gauge
pg_postmaster_start_time_seconds{server="postgresql:5432"} 1.632833768e+09
# HELP pg_replication_lag Replication lag behind master in seconds
# TYPE pg_replication_lag gauge
pg_replication_lag{server="postgresql:5432"} 0
# HELP pg_settings_allow_system_table_mods Allows modifications of the structure of system tables.
# TYPE pg_settings_allow_system_table_mods gauge
pg_settings_allow_system_table_mods{server="postgresql:5432"} 0
# HELP pg_settings_archive_timeout_seconds Forces a switch to the next WAL file if a new file has not been started within N seconds. [Units converted to seconds.]
# TYPE pg_settings_archive_timeout_seconds gauge
pg_settings_archive_timeout_seconds{server="postgresql:5432"} 0
# HELP pg_settings_array_nulls Enable input of NULL elements in arrays.
# TYPE pg_settings_array_nulls gauge
pg_settings_array_nulls{server="postgresql:5432"} 1
# HELP pg_settings_authentication_timeout_seconds Sets the maximum allowed time to complete client authentication. [Units converted to seconds.]
# TYPE pg_settings_authentication_timeout_seconds gauge
pg_settings_authentication_timeout_seconds{server="postgresql:5432"} 60
# HELP pg_settings_autovacuum Starts the autovacuum subprocess.
# TYPE pg_settings_autovacuum gauge
pg_settings_autovacuum{server="postgresql:5432"} 1
# HELP pg_settings_autovacuum_analyze_scale_factor Number of tuple inserts, updates, or deletes prior to analyze as a fraction of reltuples.
# TYPE pg_settings_autovacuum_analyze_scale_factor gauge
pg_settings_autovacuum_analyze_scale_factor{server="postgresql:5432"} 0.1
# HELP pg_settings_autovacuum_analyze_threshold Minimum number of tuple inserts, updates, or deletes prior to analyze.
# TYPE pg_settings_autovacuum_analyze_threshold gauge
pg_settings_autovacuum_analyze_threshold{server="postgresql:5432"} 50
# HELP pg_settings_autovacuum_freeze_max_age Age at which to autovacuum a table to prevent transaction ID wraparound.
# TYPE pg_settings_autovacuum_freeze_max_age gauge
pg_settings_autovacuum_freeze_max_age{server="postgresql:5432"} 2e+08
# HELP pg_settings_autovacuum_max_workers Sets the maximum number of simultaneously running autovacuum worker processes.
# TYPE pg_settings_autovacuum_max_workers gauge
pg_settings_autovacuum_max_workers{server="postgresql:5432"} 3
# HELP pg_settings_autovacuum_multixact_freeze_max_age Multixact age at which to autovacuum a table to prevent multixact wraparound.
# TYPE pg_settings_autovacuum_multixact_freeze_max_age gauge
pg_settings_autovacuum_multixact_freeze_max_age{server="postgresql:5432"} 4e+08
# HELP pg_settings_autovacuum_naptime_seconds Time to sleep between autovacuum runs. [Units converted to seconds.]
# TYPE pg_settings_autovacuum_naptime_seconds gauge
pg_settings_autovacuum_naptime_seconds{server="postgresql:5432"} 60
# HELP pg_settings_autovacuum_vacuum_cost_delay_seconds Vacuum cost delay in milliseconds, for autovacuum. [Units converted to seconds.]
# TYPE pg_settings_autovacuum_vacuum_cost_delay_seconds gauge
pg_settings_autovacuum_vacuum_cost_delay_seconds{server="postgresql:5432"} 0.02
# HELP pg_settings_autovacuum_vacuum_cost_limit Vacuum cost amount available before napping, for autovacuum.
# TYPE pg_settings_autovacuum_vacuum_cost_limit gauge
pg_settings_autovacuum_vacuum_cost_limit{server="postgresql:5432"} -1
# HELP pg_settings_autovacuum_vacuum_scale_factor Number of tuple updates or deletes prior to vacuum as a fraction of reltuples.
# TYPE pg_settings_autovacuum_vacuum_scale_factor gauge
pg_settings_autovacuum_vacuum_scale_factor{server="postgresql:5432"} 0.2
# HELP pg_settings_autovacuum_vacuum_threshold Minimum number of tuple updates or deletes prior to vacuum.
# TYPE pg_settings_autovacuum_vacuum_threshold gauge
pg_settings_autovacuum_vacuum_threshold{server="postgresql:5432"} 50
# HELP pg_settings_autovacuum_work_mem_bytes Sets the maximum memory to be used by each autovacuum worker process. [Units converted to bytes.]
# TYPE pg_settings_autovacuum_work_mem_bytes gauge
pg_settings_autovacuum_work_mem_bytes{server="postgresql:5432"} -1
# HELP pg_settings_backend_flush_after_bytes Number of pages after which previously performed writes are flushed to disk. [Units converted to bytes.]
# TYPE pg_settings_backend_flush_after_bytes gauge
pg_settings_backend_flush_after_bytes{server="postgresql:5432"} 0
# HELP pg_settings_bgwriter_delay_seconds Background writer sleep time between rounds. [Units converted to seconds.]
# TYPE pg_settings_bgwriter_delay_seconds gauge
pg_settings_bgwriter_delay_seconds{server="postgresql:5432"} 0.2
# HELP pg_settings_bgwriter_flush_after_bytes Number of pages after which previously performed writes are flushed to disk. [Units converted to bytes.]
# TYPE pg_settings_bgwriter_flush_after_bytes gauge
pg_settings_bgwriter_flush_after_bytes{server="postgresql:5432"} 524288
# HELP pg_settings_bgwriter_lru_maxpages Background writer maximum number of LRU pages to flush per round.
# TYPE pg_settings_bgwriter_lru_maxpages gauge
pg_settings_bgwriter_lru_maxpages{server="postgresql:5432"} 100
# HELP pg_settings_bgwriter_lru_multiplier Multiple of the average buffer usage to free per round.
# TYPE pg_settings_bgwriter_lru_multiplier gauge
pg_settings_bgwriter_lru_multiplier{server="postgresql:5432"} 2
# HELP pg_settings_block_size Shows the size of a disk block.
# TYPE pg_settings_block_size gauge
pg_settings_block_size{server="postgresql:5432"} 8192
# HELP pg_settings_bonjour Enables advertising the server via Bonjour.
# TYPE pg_settings_bonjour gauge
pg_settings_bonjour{server="postgresql:5432"} 0
# HELP pg_settings_check_function_bodies Check function bodies during CREATE FUNCTION.
# TYPE pg_settings_check_function_bodies gauge
pg_settings_check_function_bodies{server="postgresql:5432"} 1
# HELP pg_settings_checkpoint_completion_target Time spent flushing dirty buffers during checkpoint, as fraction of checkpoint interval.
# TYPE pg_settings_checkpoint_completion_target gauge
pg_settings_checkpoint_completion_target{server="postgresql:5432"} 0.5
# HELP pg_settings_checkpoint_flush_after_bytes Number of pages after which previously performed writes are flushed to disk. [Units converted to bytes.]
# TYPE pg_settings_checkpoint_flush_after_bytes gauge
pg_settings_checkpoint_flush_after_bytes{server="postgresql:5432"} 262144
# HELP pg_settings_checkpoint_timeout_seconds Sets the maximum time between automatic WAL checkpoints. [Units converted to seconds.]
# TYPE pg_settings_checkpoint_timeout_seconds gauge
pg_settings_checkpoint_timeout_seconds{server="postgresql:5432"} 300
# HELP pg_settings_checkpoint_warning_seconds Enables warnings if checkpoint segments are filled more frequently than this. [Units converted to seconds.]
# TYPE pg_settings_checkpoint_warning_seconds gauge
pg_settings_checkpoint_warning_seconds{server="postgresql:5432"} 30
# HELP pg_settings_commit_delay Sets the delay in microseconds between transaction commit and flushing WAL to disk.
# TYPE pg_settings_commit_delay gauge
pg_settings_commit_delay{server="postgresql:5432"} 0
# HELP pg_settings_commit_siblings Sets the minimum concurrent open transactions before performing commit_delay.
# TYPE pg_settings_commit_siblings gauge
pg_settings_commit_siblings{server="postgresql:5432"} 5
# HELP pg_settings_cpu_index_tuple_cost Sets the planner's estimate of the cost of processing each index entry during an index scan.
# TYPE pg_settings_cpu_index_tuple_cost gauge
pg_settings_cpu_index_tuple_cost{server="postgresql:5432"} 0.005
# HELP pg_settings_cpu_operator_cost Sets the planner's estimate of the cost of processing each operator or function call.
# TYPE pg_settings_cpu_operator_cost gauge
pg_settings_cpu_operator_cost{server="postgresql:5432"} 0.0025
# HELP pg_settings_cpu_tuple_cost Sets the planner's estimate of the cost of processing each tuple (row).
# TYPE pg_settings_cpu_tuple_cost gauge
pg_settings_cpu_tuple_cost{server="postgresql:5432"} 0.01
# HELP pg_settings_cursor_tuple_fraction Sets the planner's estimate of the fraction of a cursor's rows that will be retrieved.
# TYPE pg_settings_cursor_tuple_fraction gauge
pg_settings_cursor_tuple_fraction{server="postgresql:5432"} 0.1
# HELP pg_settings_data_checksums Shows whether data checksums are turned on for this cluster.
# TYPE pg_settings_data_checksums gauge
pg_settings_data_checksums{server="postgresql:5432"} 0
# HELP pg_settings_data_directory_mode Mode of the data directory.
# TYPE pg_settings_data_directory_mode gauge
pg_settings_data_directory_mode{server="postgresql:5432"} 700
# HELP pg_settings_data_sync_retry Whether to continue running after a failure to sync data files.
# TYPE pg_settings_data_sync_retry gauge
pg_settings_data_sync_retry{server="postgresql:5432"} 0
# HELP pg_settings_db_user_namespace Enables per-database user names.
# TYPE pg_settings_db_user_namespace gauge
pg_settings_db_user_namespace{server="postgresql:5432"} 0
# HELP pg_settings_deadlock_timeout_seconds Sets the time to wait on a lock before checking for deadlock. [Units converted to seconds.]
# TYPE pg_settings_deadlock_timeout_seconds gauge
pg_settings_deadlock_timeout_seconds{server="postgresql:5432"} 1
# HELP pg_settings_debug_assertions Shows whether the running server has assertion checks enabled.
# TYPE pg_settings_debug_assertions gauge
pg_settings_debug_assertions{server="postgresql:5432"} 0
# HELP pg_settings_debug_pretty_print Indents parse and plan tree displays.
# TYPE pg_settings_debug_pretty_print gauge
pg_settings_debug_pretty_print{server="postgresql:5432"} 1
# HELP pg_settings_debug_print_parse Logs each query's parse tree.
# TYPE pg_settings_debug_print_parse gauge
pg_settings_debug_print_parse{server="postgresql:5432"} 0
# HELP pg_settings_debug_print_plan Logs each query's execution plan.
# TYPE pg_settings_debug_print_plan gauge
pg_settings_debug_print_plan{server="postgresql:5432"} 0
# HELP pg_settings_debug_print_rewritten Logs each query's rewritten parse tree.
# TYPE pg_settings_debug_print_rewritten gauge
pg_settings_debug_print_rewritten{server="postgresql:5432"} 0
# HELP pg_settings_default_statistics_target Sets the default statistics target.
# TYPE pg_settings_default_statistics_target gauge
pg_settings_default_statistics_target{server="postgresql:5432"} 100
# HELP pg_settings_default_transaction_deferrable Sets the default deferrable status of new transactions.
# TYPE pg_settings_default_transaction_deferrable gauge
pg_settings_default_transaction_deferrable{server="postgresql:5432"} 0
# HELP pg_settings_default_transaction_read_only Sets the default read-only status of new transactions.
# TYPE pg_settings_default_transaction_read_only gauge
pg_settings_default_transaction_read_only{server="postgresql:5432"} 0
# HELP pg_settings_default_with_oids Create new tables with OIDs by default.
# TYPE pg_settings_default_with_oids gauge
pg_settings_default_with_oids{server="postgresql:5432"} 0
# HELP pg_settings_effective_cache_size_bytes Sets the planner's assumption about the total size of the data caches. [Units converted to bytes.]
# TYPE pg_settings_effective_cache_size_bytes gauge
pg_settings_effective_cache_size_bytes{server="postgresql:5432"} 4.294967296e+09
# HELP pg_settings_effective_io_concurrency Number of simultaneous requests that can be handled efficiently by the disk subsystem.
# TYPE pg_settings_effective_io_concurrency gauge
pg_settings_effective_io_concurrency{server="postgresql:5432"} 1
# HELP pg_settings_enable_bitmapscan Enables the planner's use of bitmap-scan plans.
# TYPE pg_settings_enable_bitmapscan gauge
pg_settings_enable_bitmapscan{server="postgresql:5432"} 1
# HELP pg_settings_enable_gathermerge Enables the planner's use of gather merge plans.
# TYPE pg_settings_enable_gathermerge gauge
pg_settings_enable_gathermerge{server="postgresql:5432"} 1
# HELP pg_settings_enable_hashagg Enables the planner's use of hashed aggregation plans.
# TYPE pg_settings_enable_hashagg gauge
pg_settings_enable_hashagg{server="postgresql:5432"} 1
# HELP pg_settings_enable_hashjoin Enables the planner's use of hash join plans.
# TYPE pg_settings_enable_hashjoin gauge
pg_settings_enable_hashjoin{server="postgresql:5432"} 1
# HELP pg_settings_enable_indexonlyscan Enables the planner's use of index-only-scan plans.
# TYPE pg_settings_enable_indexonlyscan gauge
pg_settings_enable_indexonlyscan{server="postgresql:5432"} 1
# HELP pg_settings_enable_indexscan Enables the planner's use of index-scan plans.
# TYPE pg_settings_enable_indexscan gauge
pg_settings_enable_indexscan{server="postgresql:5432"} 1
# HELP pg_settings_enable_material Enables the planner's use of materialization.
# TYPE pg_settings_enable_material gauge
pg_settings_enable_material{server="postgresql:5432"} 1
# HELP pg_settings_enable_mergejoin Enables the planner's use of merge join plans.
# TYPE pg_settings_enable_mergejoin gauge
pg_settings_enable_mergejoin{server="postgresql:5432"} 1
# HELP pg_settings_enable_nestloop Enables the planner's use of nested-loop join plans.
# TYPE pg_settings_enable_nestloop gauge
pg_settings_enable_nestloop{server="postgresql:5432"} 1
# HELP pg_settings_enable_parallel_append Enables the planner's use of parallel append plans.
# TYPE pg_settings_enable_parallel_append gauge
pg_settings_enable_parallel_append{server="postgresql:5432"} 1
# HELP pg_settings_enable_parallel_hash Enables the planner's use of parallel hash plans.
# TYPE pg_settings_enable_parallel_hash gauge
pg_settings_enable_parallel_hash{server="postgresql:5432"} 1
# HELP pg_settings_enable_partition_pruning Enable plan-time and run-time partition pruning.
# TYPE pg_settings_enable_partition_pruning gauge
pg_settings_enable_partition_pruning{server="postgresql:5432"} 1
# HELP pg_settings_enable_partitionwise_aggregate Enables partitionwise aggregation and grouping.
# TYPE pg_settings_enable_partitionwise_aggregate gauge
pg_settings_enable_partitionwise_aggregate{server="postgresql:5432"} 0
# HELP pg_settings_enable_partitionwise_join Enables partitionwise join.
# TYPE pg_settings_enable_partitionwise_join gauge
pg_settings_enable_partitionwise_join{server="postgresql:5432"} 0
# HELP pg_settings_enable_seqscan Enables the planner's use of sequential-scan plans.
# TYPE pg_settings_enable_seqscan gauge
pg_settings_enable_seqscan{server="postgresql:5432"} 1
# HELP pg_settings_enable_sort Enables the planner's use of explicit sort steps.
# TYPE pg_settings_enable_sort gauge
pg_settings_enable_sort{server="postgresql:5432"} 1
# HELP pg_settings_enable_tidscan Enables the planner's use of TID scan plans.
# TYPE pg_settings_enable_tidscan gauge
pg_settings_enable_tidscan{server="postgresql:5432"} 1
# HELP pg_settings_escape_string_warning Warn about backslash escapes in ordinary string literals.
# TYPE pg_settings_escape_string_warning gauge
pg_settings_escape_string_warning{server="postgresql:5432"} 1
# HELP pg_settings_exit_on_error Terminate session on any error.
# TYPE pg_settings_exit_on_error gauge
pg_settings_exit_on_error{server="postgresql:5432"} 0
# HELP pg_settings_extra_float_digits Sets the number of digits displayed for floating-point values.
# TYPE pg_settings_extra_float_digits gauge
pg_settings_extra_float_digits{server="postgresql:5432"} 2
# HELP pg_settings_from_collapse_limit Sets the FROM-list size beyond which subqueries are not collapsed.
# TYPE pg_settings_from_collapse_limit gauge
pg_settings_from_collapse_limit{server="postgresql:5432"} 8
# HELP pg_settings_fsync Forces synchronization of updates to disk.
# TYPE pg_settings_fsync gauge
pg_settings_fsync{server="postgresql:5432"} 1
# HELP pg_settings_full_page_writes Writes full pages to WAL when first modified after a checkpoint.
# TYPE pg_settings_full_page_writes gauge
pg_settings_full_page_writes{server="postgresql:5432"} 1
# HELP pg_settings_geqo Enables genetic query optimization.
# TYPE pg_settings_geqo gauge
pg_settings_geqo{server="postgresql:5432"} 1
# HELP pg_settings_geqo_effort GEQO: effort is used to set the default for other GEQO parameters.
# TYPE pg_settings_geqo_effort gauge
pg_settings_geqo_effort{server="postgresql:5432"} 5
# HELP pg_settings_geqo_generations GEQO: number of iterations of the algorithm.
# TYPE pg_settings_geqo_generations gauge
pg_settings_geqo_generations{server="postgresql:5432"} 0
# HELP pg_settings_geqo_pool_size GEQO: number of individuals in the population.
# TYPE pg_settings_geqo_pool_size gauge
pg_settings_geqo_pool_size{server="postgresql:5432"} 0
# HELP pg_settings_geqo_seed GEQO: seed for random path selection.
# TYPE pg_settings_geqo_seed gauge
pg_settings_geqo_seed{server="postgresql:5432"} 0
# HELP pg_settings_geqo_selection_bias GEQO: selective pressure within the population.
# TYPE pg_settings_geqo_selection_bias gauge
pg_settings_geqo_selection_bias{server="postgresql:5432"} 2
# HELP pg_settings_geqo_threshold Sets the threshold of FROM items beyond which GEQO is used.
# TYPE pg_settings_geqo_threshold gauge
pg_settings_geqo_threshold{server="postgresql:5432"} 12
# HELP pg_settings_gin_fuzzy_search_limit Sets the maximum allowed result for exact search by GIN.
# TYPE pg_settings_gin_fuzzy_search_limit gauge
pg_settings_gin_fuzzy_search_limit{server="postgresql:5432"} 0
# HELP pg_settings_gin_pending_list_limit_bytes Sets the maximum size of the pending list for GIN index. [Units converted to bytes.]
# TYPE pg_settings_gin_pending_list_limit_bytes gauge
pg_settings_gin_pending_list_limit_bytes{server="postgresql:5432"} 4.194304e+06
# HELP pg_settings_hot_standby Allows connections and queries during recovery.
# TYPE pg_settings_hot_standby gauge
pg_settings_hot_standby{server="postgresql:5432"} 1
# HELP pg_settings_hot_standby_feedback Allows feedback from a hot standby to the primary that will avoid query conflicts.
# TYPE pg_settings_hot_standby_feedback gauge
pg_settings_hot_standby_feedback{server="postgresql:5432"} 0
# HELP pg_settings_idle_in_transaction_session_timeout_seconds Sets the maximum allowed duration of any idling transaction. [Units converted to seconds.]
# TYPE pg_settings_idle_in_transaction_session_timeout_seconds gauge
pg_settings_idle_in_transaction_session_timeout_seconds{server="postgresql:5432"} 0
# HELP pg_settings_ignore_checksum_failure Continues processing after a checksum failure.
# TYPE pg_settings_ignore_checksum_failure gauge
pg_settings_ignore_checksum_failure{server="postgresql:5432"} 0
# HELP pg_settings_ignore_system_indexes Disables reading from system indexes.
# TYPE pg_settings_ignore_system_indexes gauge
pg_settings_ignore_system_indexes{server="postgresql:5432"} 0
# HELP pg_settings_integer_datetimes Datetimes are integer based.
# TYPE pg_settings_integer_datetimes gauge
pg_settings_integer_datetimes{server="postgresql:5432"} 1
# HELP pg_settings_jit Allow JIT compilation.
# TYPE pg_settings_jit gauge
pg_settings_jit{server="postgresql:5432"} 0
# HELP pg_settings_jit_above_cost Perform JIT compilation if query is more expensive.
# TYPE pg_settings_jit_above_cost gauge
pg_settings_jit_above_cost{server="postgresql:5432"} 100000
# HELP pg_settings_jit_debugging_support Register JIT compiled function with debugger.
# TYPE pg_settings_jit_debugging_support gauge
pg_settings_jit_debugging_support{server="postgresql:5432"} 0
# HELP pg_settings_jit_dump_bitcode Write out LLVM bitcode to facilitate JIT debugging.
# TYPE pg_settings_jit_dump_bitcode gauge
pg_settings_jit_dump_bitcode{server="postgresql:5432"} 0
# HELP pg_settings_jit_expressions Allow JIT compilation of expressions.
# TYPE pg_settings_jit_expressions gauge
pg_settings_jit_expressions{server="postgresql:5432"} 1
# HELP pg_settings_jit_inline_above_cost Perform JIT inlining if query is more expensive.
# TYPE pg_settings_jit_inline_above_cost gauge
pg_settings_jit_inline_above_cost{server="postgresql:5432"} 500000
# HELP pg_settings_jit_optimize_above_cost Optimize JITed functions if query is more expensive.
# TYPE pg_settings_jit_optimize_above_cost gauge
pg_settings_jit_optimize_above_cost{server="postgresql:5432"} 500000
# HELP pg_settings_jit_profiling_support Register JIT compiled function with perf profiler.
# TYPE pg_settings_jit_profiling_support gauge
pg_settings_jit_profiling_support{server="postgresql:5432"} 0
# HELP pg_settings_jit_tuple_deforming Allow JIT compilation of tuple deforming.
# TYPE pg_settings_jit_tuple_deforming gauge
pg_settings_jit_tuple_deforming{server="postgresql:5432"} 1
# HELP pg_settings_join_collapse_limit Sets the FROM-list size beyond which JOIN constructs are not flattened.
# TYPE pg_settings_join_collapse_limit gauge
pg_settings_join_collapse_limit{server="postgresql:5432"} 8
# HELP pg_settings_krb_caseins_users Sets whether Kerberos and GSSAPI user names should be treated as case-insensitive.
# TYPE pg_settings_krb_caseins_users gauge
pg_settings_krb_caseins_users{server="postgresql:5432"} 0
# HELP pg_settings_lo_compat_privileges Enables backward compatibility mode for privilege checks on large objects.
# TYPE pg_settings_lo_compat_privileges gauge
pg_settings_lo_compat_privileges{server="postgresql:5432"} 0
# HELP pg_settings_lock_timeout_seconds Sets the maximum allowed duration of any wait for a lock. [Units converted to seconds.]
# TYPE pg_settings_lock_timeout_seconds gauge
pg_settings_lock_timeout_seconds{server="postgresql:5432"} 0
# HELP pg_settings_log_autovacuum_min_duration_seconds Sets the minimum execution time above which autovacuum actions will be logged. [Units converted to seconds.]
# TYPE pg_settings_log_autovacuum_min_duration_seconds gauge
pg_settings_log_autovacuum_min_duration_seconds{server="postgresql:5432"} -1
# HELP pg_settings_log_checkpoints Logs each checkpoint.
# TYPE pg_settings_log_checkpoints gauge
pg_settings_log_checkpoints{server="postgresql:5432"} 0
# HELP pg_settings_log_connections Logs each successful connection.
# TYPE pg_settings_log_connections gauge
pg_settings_log_connections{server="postgresql:5432"} 0
# HELP pg_settings_log_disconnections Logs end of a session, including duration.
# TYPE pg_settings_log_disconnections gauge
pg_settings_log_disconnections{server="postgresql:5432"} 0
# HELP pg_settings_log_duration Logs the duration of each completed SQL statement.
# TYPE pg_settings_log_duration gauge
pg_settings_log_duration{server="postgresql:5432"} 0
# HELP pg_settings_log_executor_stats Writes executor performance statistics to the server log.
# TYPE pg_settings_log_executor_stats gauge
pg_settings_log_executor_stats{server="postgresql:5432"} 0
# HELP pg_settings_log_file_mode Sets the file permissions for log files.
# TYPE pg_settings_log_file_mode gauge
pg_settings_log_file_mode{server="postgresql:5432"} 600
# HELP pg_settings_log_hostname Logs the host name in the connection logs.
# TYPE pg_settings_log_hostname gauge
pg_settings_log_hostname{server="postgresql:5432"} 0
# HELP pg_settings_log_lock_waits Logs long lock waits.
# TYPE pg_settings_log_lock_waits gauge
pg_settings_log_lock_waits{server="postgresql:5432"} 0
# HELP pg_settings_log_min_duration_statement_seconds Sets the minimum execution time above which statements will be logged. [Units converted to seconds.]
# TYPE pg_settings_log_min_duration_statement_seconds gauge
pg_settings_log_min_duration_statement_seconds{server="postgresql:5432"} -1
# HELP pg_settings_log_parser_stats Writes parser performance statistics to the server log.
# TYPE pg_settings_log_parser_stats gauge
pg_settings_log_parser_stats{server="postgresql:5432"} 0
# HELP pg_settings_log_planner_stats Writes planner performance statistics to the server log.
# TYPE pg_settings_log_planner_stats gauge
pg_settings_log_planner_stats{server="postgresql:5432"} 0
# HELP pg_settings_log_replication_commands Logs each replication command.
# TYPE pg_settings_log_replication_commands gauge
pg_settings_log_replication_commands{server="postgresql:5432"} 0
# HELP pg_settings_log_rotation_age_seconds Automatic log file rotation will occur after N minutes. [Units converted to seconds.]
# TYPE pg_settings_log_rotation_age_seconds gauge
pg_settings_log_rotation_age_seconds{server="postgresql:5432"} 86400
# HELP pg_settings_log_rotation_size_bytes Automatic log file rotation will occur after N kilobytes. [Units converted to bytes.]
# TYPE pg_settings_log_rotation_size_bytes gauge
pg_settings_log_rotation_size_bytes{server="postgresql:5432"} 1.048576e+07
# HELP pg_settings_log_statement_stats Writes cumulative performance statistics to the server log.
# TYPE pg_settings_log_statement_stats gauge
pg_settings_log_statement_stats{server="postgresql:5432"} 0
# HELP pg_settings_log_temp_files_bytes Log the use of temporary files larger than this number of kilobytes. [Units converted to bytes.]
# TYPE pg_settings_log_temp_files_bytes gauge
pg_settings_log_temp_files_bytes{server="postgresql:5432"} -1
# HELP pg_settings_log_truncate_on_rotation Truncate existing log files of same name during log rotation.
# TYPE pg_settings_log_truncate_on_rotation gauge
pg_settings_log_truncate_on_rotation{server="postgresql:5432"} 0
# HELP pg_settings_logging_collector Start a subprocess to capture stderr output and/or csvlogs into log files.
# TYPE pg_settings_logging_collector gauge
pg_settings_logging_collector{server="postgresql:5432"} 0
# HELP pg_settings_maintenance_work_mem_bytes Sets the maximum memory to be used for maintenance operations. [Units converted to bytes.]
# TYPE pg_settings_maintenance_work_mem_bytes gauge
pg_settings_maintenance_work_mem_bytes{server="postgresql:5432"} 6.7108864e+07
# HELP pg_settings_max_connections Sets the maximum number of concurrent connections.
# TYPE pg_settings_max_connections gauge
pg_settings_max_connections{server="postgresql:5432"} 100
# HELP pg_settings_max_files_per_process Sets the maximum number of simultaneously open files for each server process.
# TYPE pg_settings_max_files_per_process gauge
pg_settings_max_files_per_process{server="postgresql:5432"} 1000
# HELP pg_settings_max_function_args Shows the maximum number of function arguments.
# TYPE pg_settings_max_function_args gauge
pg_settings_max_function_args{server="postgresql:5432"} 100
# HELP pg_settings_max_identifier_length Shows the maximum identifier length.
# TYPE pg_settings_max_identifier_length gauge
pg_settings_max_identifier_length{server="postgresql:5432"} 63
# HELP pg_settings_max_index_keys Shows the maximum number of index keys.
# TYPE pg_settings_max_index_keys gauge
pg_settings_max_index_keys{server="postgresql:5432"} 32
# HELP pg_settings_max_locks_per_transaction Sets the maximum number of locks per transaction.
# TYPE pg_settings_max_locks_per_transaction gauge
pg_settings_max_locks_per_transaction{server="postgresql:5432"} 64
# HELP pg_settings_max_logical_replication_workers Maximum number of logical replication worker processes.
# TYPE pg_settings_max_logical_replication_workers gauge
pg_settings_max_logical_replication_workers{server="postgresql:5432"} 4
# HELP pg_settings_max_parallel_maintenance_workers Sets the maximum number of parallel processes per maintenance operation.
# TYPE pg_settings_max_parallel_maintenance_workers gauge
pg_settings_max_parallel_maintenance_workers{server="postgresql:5432"} 2
# HELP pg_settings_max_parallel_workers Sets the maximum number of parallel workers that can be active at one time.
# TYPE pg_settings_max_parallel_workers gauge
pg_settings_max_parallel_workers{server="postgresql:5432"} 8
# HELP pg_settings_max_parallel_workers_per_gather Sets the maximum number of parallel processes per executor node.
# TYPE pg_settings_max_parallel_workers_per_gather gauge
pg_settings_max_parallel_workers_per_gather{server="postgresql:5432"} 2
# HELP pg_settings_max_pred_locks_per_page Sets the maximum number of predicate-locked tuples per page.
# TYPE pg_settings_max_pred_locks_per_page gauge
pg_settings_max_pred_locks_per_page{server="postgresql:5432"} 2
# HELP pg_settings_max_pred_locks_per_relation Sets the maximum number of predicate-locked pages and tuples per relation.
# TYPE pg_settings_max_pred_locks_per_relation gauge
pg_settings_max_pred_locks_per_relation{server="postgresql:5432"} -2
# HELP pg_settings_max_pred_locks_per_transaction Sets the maximum number of predicate locks per transaction.
# TYPE pg_settings_max_pred_locks_per_transaction gauge
pg_settings_max_pred_locks_per_transaction{server="postgresql:5432"} 64
# HELP pg_settings_max_prepared_transactions Sets the maximum number of simultaneously prepared transactions.
# TYPE pg_settings_max_prepared_transactions gauge
pg_settings_max_prepared_transactions{server="postgresql:5432"} 0
# HELP pg_settings_max_replication_slots Sets the maximum number of simultaneously defined replication slots.
# TYPE pg_settings_max_replication_slots gauge
pg_settings_max_replication_slots{server="postgresql:5432"} 10
# HELP pg_settings_max_stack_depth_bytes Sets the maximum stack depth, in kilobytes. [Units converted to bytes.]
# TYPE pg_settings_max_stack_depth_bytes gauge
pg_settings_max_stack_depth_bytes{server="postgresql:5432"} 2.097152e+06
# HELP pg_settings_max_standby_archive_delay_seconds Sets the maximum delay before canceling queries when a hot standby server is processing archived WAL data. [Units converted to seconds.]
# TYPE pg_settings_max_standby_archive_delay_seconds gauge
pg_settings_max_standby_archive_delay_seconds{server="postgresql:5432"} 30
# HELP pg_settings_max_standby_streaming_delay_seconds Sets the maximum delay before canceling queries when a hot standby server is processing streamed WAL data. [Units converted to seconds.]
# TYPE pg_settings_max_standby_streaming_delay_seconds gauge
pg_settings_max_standby_streaming_delay_seconds{server="postgresql:5432"} 30
# HELP pg_settings_max_sync_workers_per_subscription Maximum number of table synchronization workers per subscription.
# TYPE pg_settings_max_sync_workers_per_subscription gauge
pg_settings_max_sync_workers_per_subscription{server="postgresql:5432"} 2
# HELP pg_settings_max_wal_senders Sets the maximum number of simultaneously running WAL sender processes.
# TYPE pg_settings_max_wal_senders gauge
pg_settings_max_wal_senders{server="postgresql:5432"} 16
# HELP pg_settings_max_wal_size_bytes Sets the WAL size that triggers a checkpoint. [Units converted to bytes.]
# TYPE pg_settings_max_wal_size_bytes gauge
pg_settings_max_wal_size_bytes{server="postgresql:5432"} 4.194304e+08
# HELP pg_settings_max_worker_processes Maximum number of concurrent worker processes.
# TYPE pg_settings_max_worker_processes gauge
pg_settings_max_worker_processes{server="postgresql:5432"} 8
# HELP pg_settings_min_parallel_index_scan_size_bytes Sets the minimum amount of index data for a parallel scan. [Units converted to bytes.]
# TYPE pg_settings_min_parallel_index_scan_size_bytes gauge
pg_settings_min_parallel_index_scan_size_bytes{server="postgresql:5432"} 524288
# HELP pg_settings_min_parallel_table_scan_size_bytes Sets the minimum amount of table data for a parallel scan. [Units converted to bytes.]
# TYPE pg_settings_min_parallel_table_scan_size_bytes gauge
pg_settings_min_parallel_table_scan_size_bytes{server="postgresql:5432"} 8.388608e+06
# HELP pg_settings_min_wal_size_bytes Sets the minimum size to shrink the WAL to. [Units converted to bytes.]
# TYPE pg_settings_min_wal_size_bytes gauge
pg_settings_min_wal_size_bytes{server="postgresql:5432"} 8.388608e+07
# HELP pg_settings_old_snapshot_threshold_seconds Time before a snapshot is too old to read pages changed after the snapshot was taken. [Units converted to seconds.]
# TYPE pg_settings_old_snapshot_threshold_seconds gauge
pg_settings_old_snapshot_threshold_seconds{server="postgresql:5432"} -1
# HELP pg_settings_operator_precedence_warning Emit a warning for constructs that changed meaning since PostgreSQL 9.4.
# TYPE pg_settings_operator_precedence_warning gauge
pg_settings_operator_precedence_warning{server="postgresql:5432"} 0
# HELP pg_settings_parallel_leader_participation Controls whether Gather and Gather Merge also run subplans.
# TYPE pg_settings_parallel_leader_participation gauge
pg_settings_parallel_leader_participation{server="postgresql:5432"} 1
# HELP pg_settings_parallel_setup_cost Sets the planner's estimate of the cost of starting up worker processes for parallel query.
# TYPE pg_settings_parallel_setup_cost gauge
pg_settings_parallel_setup_cost{server="postgresql:5432"} 1000
# HELP pg_settings_parallel_tuple_cost Sets the planner's estimate of the cost of passing each tuple (row) from worker to master backend.
# TYPE pg_settings_parallel_tuple_cost gauge
pg_settings_parallel_tuple_cost{server="postgresql:5432"} 0.1
# HELP pg_settings_pgaudit_log_catalog Specifies that session logging should be enabled in the case where all relations in a statement are in pg_catalog.  Disabling this setting will reduce noise in the log from tools like psql and PgAdmin that query the catalog heavily.
# TYPE pg_settings_pgaudit_log_catalog gauge
pg_settings_pgaudit_log_catalog{server="postgresql:5432"} 0
# HELP pg_settings_pgaudit_log_client Specifies whether audit messages should be visible to the client. This setting should generally be left disabled but may be useful for debugging or other purposes.
# TYPE pg_settings_pgaudit_log_client gauge
pg_settings_pgaudit_log_client{server="postgresql:5432"} 0
# HELP pg_settings_pgaudit_log_parameter Specifies that audit logging should include the parameters that were passed with the statement. When parameters are present they will be be included in CSV format after the statement text.
# TYPE pg_settings_pgaudit_log_parameter gauge
pg_settings_pgaudit_log_parameter{server="postgresql:5432"} 0
# HELP pg_settings_pgaudit_log_relation Specifies whether session audit logging should create a separate log entry for each relation referenced in a SELECT or DML statement. This is a useful shortcut for exhaustive logging without using object audit logging.
# TYPE pg_settings_pgaudit_log_relation gauge
pg_settings_pgaudit_log_relation{server="postgresql:5432"} 0
# HELP pg_settings_pgaudit_log_statement_once Specifies whether logging will include the statement text and parameters with the first log entry for a statement/substatement combination or with every entry.  Disabling this setting will result in less verbose logging but may make it more difficult to determine the statement that generated a log entry, though the statement/substatement pair along with the process id should suffice to identify the statement text logged with a previous entry.
# TYPE pg_settings_pgaudit_log_statement_once gauge
pg_settings_pgaudit_log_statement_once{server="postgresql:5432"} 0
# HELP pg_settings_port Sets the TCP port the server listens on.
# TYPE pg_settings_port gauge
pg_settings_port{server="postgresql:5432"} 5432
# HELP pg_settings_post_auth_delay_seconds Waits N seconds on connection startup after authentication. [Units converted to seconds.]
# TYPE pg_settings_post_auth_delay_seconds gauge
pg_settings_post_auth_delay_seconds{server="postgresql:5432"} 0
# HELP pg_settings_pre_auth_delay_seconds Waits N seconds on connection startup before authentication. [Units converted to seconds.]
# TYPE pg_settings_pre_auth_delay_seconds gauge
pg_settings_pre_auth_delay_seconds{server="postgresql:5432"} 0
# HELP pg_settings_quote_all_identifiers When generating SQL fragments, quote all identifiers.
# TYPE pg_settings_quote_all_identifiers gauge
pg_settings_quote_all_identifiers{server="postgresql:5432"} 0
# HELP pg_settings_random_page_cost Sets the planner's estimate of the cost of a nonsequentially fetched disk page.
# TYPE pg_settings_random_page_cost gauge
pg_settings_random_page_cost{server="postgresql:5432"} 4
# HELP pg_settings_restart_after_crash Reinitialize server after backend crash.
# TYPE pg_settings_restart_after_crash gauge
pg_settings_restart_after_crash{server="postgresql:5432"} 1
# HELP pg_settings_row_security Enable row security.
# TYPE pg_settings_row_security gauge
pg_settings_row_security{server="postgresql:5432"} 1
# HELP pg_settings_segment_size_bytes Shows the number of pages per disk file. [Units converted to bytes.]
# TYPE pg_settings_segment_size_bytes gauge
pg_settings_segment_size_bytes{server="postgresql:5432"} 1.073741824e+09
# HELP pg_settings_seq_page_cost Sets the planner's estimate of the cost of a sequentially fetched disk page.
# TYPE pg_settings_seq_page_cost gauge
pg_settings_seq_page_cost{server="postgresql:5432"} 1
# HELP pg_settings_server_version_num Shows the server version as an integer.
# TYPE pg_settings_server_version_num gauge
pg_settings_server_version_num{server="postgresql:5432"} 110013
# HELP pg_settings_shared_buffers_bytes Sets the number of shared memory buffers used by the server. [Units converted to bytes.]
# TYPE pg_settings_shared_buffers_bytes gauge
pg_settings_shared_buffers_bytes{server="postgresql:5432"} 8.388608e+06
# HELP pg_settings_ssl Enables SSL connections.
# TYPE pg_settings_ssl gauge
pg_settings_ssl{server="postgresql:5432"} 0
# HELP pg_settings_ssl_passphrase_command_supports_reload Also use ssl_passphrase_command during server reload.
# TYPE pg_settings_ssl_passphrase_command_supports_reload gauge
pg_settings_ssl_passphrase_command_supports_reload{server="postgresql:5432"} 0
# HELP pg_settings_ssl_prefer_server_ciphers Give priority to server ciphersuite order.
# TYPE pg_settings_ssl_prefer_server_ciphers gauge
pg_settings_ssl_prefer_server_ciphers{server="postgresql:5432"} 1
# HELP pg_settings_standard_conforming_strings Causes '...' strings to treat backslashes literally.
# TYPE pg_settings_standard_conforming_strings gauge
pg_settings_standard_conforming_strings{server="postgresql:5432"} 1
# HELP pg_settings_statement_timeout_seconds Sets the maximum allowed duration of any statement. [Units converted to seconds.]
# TYPE pg_settings_statement_timeout_seconds gauge
pg_settings_statement_timeout_seconds{server="postgresql:5432"} 0
# HELP pg_settings_superuser_reserved_connections Sets the number of connection slots reserved for superusers.
# TYPE pg_settings_superuser_reserved_connections gauge
pg_settings_superuser_reserved_connections{server="postgresql:5432"} 3
# HELP pg_settings_synchronize_seqscans Enable synchronized sequential scans.
# TYPE pg_settings_synchronize_seqscans gauge
pg_settings_synchronize_seqscans{server="postgresql:5432"} 1
# HELP pg_settings_syslog_sequence_numbers Add sequence number to syslog messages to avoid duplicate suppression.
# TYPE pg_settings_syslog_sequence_numbers gauge
pg_settings_syslog_sequence_numbers{server="postgresql:5432"} 1
# HELP pg_settings_syslog_split_messages Split messages sent to syslog by lines and to fit into 1024 bytes.
# TYPE pg_settings_syslog_split_messages gauge
pg_settings_syslog_split_messages{server="postgresql:5432"} 1
# HELP pg_settings_tcp_keepalives_count Maximum number of TCP keepalive retransmits.
# TYPE pg_settings_tcp_keepalives_count gauge
pg_settings_tcp_keepalives_count{server="postgresql:5432"} 9
# HELP pg_settings_tcp_keepalives_idle_seconds Time between issuing TCP keepalives. [Units converted to seconds.]
# TYPE pg_settings_tcp_keepalives_idle_seconds gauge
pg_settings_tcp_keepalives_idle_seconds{server="postgresql:5432"} 7200
# HELP pg_settings_tcp_keepalives_interval_seconds Time between TCP keepalive retransmits. [Units converted to seconds.]
# TYPE pg_settings_tcp_keepalives_interval_seconds gauge
pg_settings_tcp_keepalives_interval_seconds{server="postgresql:5432"} 75
# HELP pg_settings_temp_buffers_bytes Sets the maximum number of temporary buffers used by each session. [Units converted to bytes.]
# TYPE pg_settings_temp_buffers_bytes gauge
pg_settings_temp_buffers_bytes{server="postgresql:5432"} 8.388608e+06
# HELP pg_settings_temp_file_limit_bytes Limits the total size of all temporary files used by each process. [Units converted to bytes.]
# TYPE pg_settings_temp_file_limit_bytes gauge
pg_settings_temp_file_limit_bytes{server="postgresql:5432"} -1
# HELP pg_settings_trace_notify Generates debugging output for LISTEN and NOTIFY.
# TYPE pg_settings_trace_notify gauge
pg_settings_trace_notify{server="postgresql:5432"} 0
# HELP pg_settings_trace_sort Emit information about resource usage in sorting.
# TYPE pg_settings_trace_sort gauge
pg_settings_trace_sort{server="postgresql:5432"} 0
# HELP pg_settings_track_activities Collects information about executing commands.
# TYPE pg_settings_track_activities gauge
pg_settings_track_activities{server="postgresql:5432"} 1
# HELP pg_settings_track_activity_query_size_bytes Sets the size reserved for pg_stat_activity.query, in bytes. [Units converted to bytes.]
# TYPE pg_settings_track_activity_query_size_bytes gauge
pg_settings_track_activity_query_size_bytes{server="postgresql:5432"} 1024
# HELP pg_settings_track_commit_timestamp Collects transaction commit time.
# TYPE pg_settings_track_commit_timestamp gauge
pg_settings_track_commit_timestamp{server="postgresql:5432"} 0
# HELP pg_settings_track_counts Collects statistics on database activity.
# TYPE pg_settings_track_counts gauge
pg_settings_track_counts{server="postgresql:5432"} 1
# HELP pg_settings_track_io_timing Collects timing statistics for database I/O activity.
# TYPE pg_settings_track_io_timing gauge
pg_settings_track_io_timing{server="postgresql:5432"} 0
# HELP pg_settings_transaction_deferrable Whether to defer a read-only serializable transaction until it can be executed with no possible serialization failures.
# TYPE pg_settings_transaction_deferrable gauge
pg_settings_transaction_deferrable{server="postgresql:5432"} 0
# HELP pg_settings_transaction_read_only Sets the current transaction's read-only status.
# TYPE pg_settings_transaction_read_only gauge
pg_settings_transaction_read_only{server="postgresql:5432"} 0
# HELP pg_settings_transform_null_equals Treats "expr=NULL" as "expr IS NULL".
# TYPE pg_settings_transform_null_equals gauge
pg_settings_transform_null_equals{server="postgresql:5432"} 0
# HELP pg_settings_unix_socket_permissions Sets the access permissions of the Unix-domain socket.
# TYPE pg_settings_unix_socket_permissions gauge
pg_settings_unix_socket_permissions{server="postgresql:5432"} 777
# HELP pg_settings_update_process_title Updates the process title to show the active SQL command.
# TYPE pg_settings_update_process_title gauge
pg_settings_update_process_title{server="postgresql:5432"} 1
# HELP pg_settings_vacuum_cleanup_index_scale_factor Number of tuple inserts prior to index cleanup as a fraction of reltuples.
# TYPE pg_settings_vacuum_cleanup_index_scale_factor gauge
pg_settings_vacuum_cleanup_index_scale_factor{server="postgresql:5432"} 0.1
# HELP pg_settings_vacuum_cost_delay_seconds Vacuum cost delay in milliseconds. [Units converted to seconds.]
# TYPE pg_settings_vacuum_cost_delay_seconds gauge
pg_settings_vacuum_cost_delay_seconds{server="postgresql:5432"} 0
# HELP pg_settings_vacuum_cost_limit Vacuum cost amount available before napping.
# TYPE pg_settings_vacuum_cost_limit gauge
pg_settings_vacuum_cost_limit{server="postgresql:5432"} 200
# HELP pg_settings_vacuum_cost_page_dirty Vacuum cost for a page dirtied by vacuum.
# TYPE pg_settings_vacuum_cost_page_dirty gauge
pg_settings_vacuum_cost_page_dirty{server="postgresql:5432"} 20
# HELP pg_settings_vacuum_cost_page_hit Vacuum cost for a page found in the buffer cache.
# TYPE pg_settings_vacuum_cost_page_hit gauge
pg_settings_vacuum_cost_page_hit{server="postgresql:5432"} 1
# HELP pg_settings_vacuum_cost_page_miss Vacuum cost for a page not found in the buffer cache.
# TYPE pg_settings_vacuum_cost_page_miss gauge
pg_settings_vacuum_cost_page_miss{server="postgresql:5432"} 10
# HELP pg_settings_vacuum_defer_cleanup_age Number of transactions by which VACUUM and HOT cleanup should be deferred, if any.
# TYPE pg_settings_vacuum_defer_cleanup_age gauge
pg_settings_vacuum_defer_cleanup_age{server="postgresql:5432"} 0
# HELP pg_settings_vacuum_freeze_min_age Minimum age at which VACUUM should freeze a table row.
# TYPE pg_settings_vacuum_freeze_min_age gauge
pg_settings_vacuum_freeze_min_age{server="postgresql:5432"} 5e+07
# HELP pg_settings_vacuum_freeze_table_age Age at which VACUUM should scan whole table to freeze tuples.
# TYPE pg_settings_vacuum_freeze_table_age gauge
pg_settings_vacuum_freeze_table_age{server="postgresql:5432"} 1.5e+08
# HELP pg_settings_vacuum_multixact_freeze_min_age Minimum age at which VACUUM should freeze a MultiXactId in a table row.
# TYPE pg_settings_vacuum_multixact_freeze_min_age gauge
pg_settings_vacuum_multixact_freeze_min_age{server="postgresql:5432"} 5e+06
# HELP pg_settings_vacuum_multixact_freeze_table_age Multixact age at which VACUUM should scan whole table to freeze tuples.
# TYPE pg_settings_vacuum_multixact_freeze_table_age gauge
pg_settings_vacuum_multixact_freeze_table_age{server="postgresql:5432"} 1.5e+08
# HELP pg_settings_wal_block_size Shows the block size in the write ahead log.
# TYPE pg_settings_wal_block_size gauge
pg_settings_wal_block_size{server="postgresql:5432"} 8192
# HELP pg_settings_wal_buffers_bytes Sets the number of disk-page buffers in shared memory for WAL. [Units converted to bytes.]
# TYPE pg_settings_wal_buffers_bytes gauge
pg_settings_wal_buffers_bytes{server="postgresql:5432"} 262144
# HELP pg_settings_wal_compression Compresses full-page writes written in WAL file.
# TYPE pg_settings_wal_compression gauge
pg_settings_wal_compression{server="postgresql:5432"} 0
# HELP pg_settings_wal_keep_segments Sets the number of WAL files held for standby servers.
# TYPE pg_settings_wal_keep_segments gauge
pg_settings_wal_keep_segments{server="postgresql:5432"} 12
# HELP pg_settings_wal_log_hints Writes full pages to WAL when first modified after a checkpoint, even for a non-critical modification.
# TYPE pg_settings_wal_log_hints gauge
pg_settings_wal_log_hints{server="postgresql:5432"} 0
# HELP pg_settings_wal_receiver_status_interval_seconds Sets the maximum interval between WAL receiver status reports to the primary. [Units converted to seconds.]
# TYPE pg_settings_wal_receiver_status_interval_seconds gauge
pg_settings_wal_receiver_status_interval_seconds{server="postgresql:5432"} 10
# HELP pg_settings_wal_receiver_timeout_seconds Sets the maximum wait time to receive data from the primary. [Units converted to seconds.]
# TYPE pg_settings_wal_receiver_timeout_seconds gauge
pg_settings_wal_receiver_timeout_seconds{server="postgresql:5432"} 60
# HELP pg_settings_wal_retrieve_retry_interval_seconds Sets the time to wait before retrying to retrieve WAL after a failed attempt. [Units converted to seconds.]
# TYPE pg_settings_wal_retrieve_retry_interval_seconds gauge
pg_settings_wal_retrieve_retry_interval_seconds{server="postgresql:5432"} 5
# HELP pg_settings_wal_segment_size_bytes Shows the size of write ahead log segments. [Units converted to bytes.]
# TYPE pg_settings_wal_segment_size_bytes gauge
pg_settings_wal_segment_size_bytes{server="postgresql:5432"} 1.6777216e+07
# HELP pg_settings_wal_sender_timeout_seconds Sets the maximum time to wait for WAL replication. [Units converted to seconds.]
# TYPE pg_settings_wal_sender_timeout_seconds gauge
pg_settings_wal_sender_timeout_seconds{server="postgresql:5432"} 60
# HELP pg_settings_wal_writer_delay_seconds Time between WAL flushes performed in the WAL writer. [Units converted to seconds.]
# TYPE pg_settings_wal_writer_delay_seconds gauge
pg_settings_wal_writer_delay_seconds{server="postgresql:5432"} 0.2
# HELP pg_settings_wal_writer_flush_after_bytes Amount of WAL written out by WAL writer that triggers a flush. [Units converted to bytes.]
# TYPE pg_settings_wal_writer_flush_after_bytes gauge
pg_settings_wal_writer_flush_after_bytes{server="postgresql:5432"} 1.048576e+06
# HELP pg_settings_work_mem_bytes Sets the maximum memory to be used for query workspaces. [Units converted to bytes.]
# TYPE pg_settings_work_mem_bytes gauge
pg_settings_work_mem_bytes{server="postgresql:5432"} 4.194304e+06
# HELP pg_settings_zero_damaged_pages Continues processing past damaged page headers.
# TYPE pg_settings_zero_damaged_pages gauge
pg_settings_zero_damaged_pages{server="postgresql:5432"} 0
# HELP pg_stat_activity_count number of connections in this state
# TYPE pg_stat_activity_count gauge
pg_stat_activity_count{datname="postgres",server="postgresql:5432",state="active"} 1
pg_stat_activity_count{datname="postgres",server="postgresql:5432",state="disabled"} 0
pg_stat_activity_count{datname="postgres",server="postgresql:5432",state="fastpath function call"} 0
pg_stat_activity_count{datname="postgres",server="postgresql:5432",state="idle"} 0
pg_stat_activity_count{datname="postgres",server="postgresql:5432",state="idle in transaction"} 0
pg_stat_activity_count{datname="postgres",server="postgresql:5432",state="idle in transaction (aborted)"} 0
pg_stat_activity_count{datname="template0",server="postgresql:5432",state="active"} 0
pg_stat_activity_count{datname="template0",server="postgresql:5432",state="disabled"} 0
pg_stat_activity_count{datname="template0",server="postgresql:5432",state="fastpath function call"} 0
pg_stat_activity_count{datname="template0",server="postgresql:5432",state="idle"} 0
pg_stat_activity_count{datname="template0",server="postgresql:5432",state="idle in transaction"} 0
pg_stat_activity_count{datname="template0",server="postgresql:5432",state="idle in transaction (aborted)"} 0
pg_stat_activity_count{datname="template1",server="postgresql:5432",state="active"} 0
pg_stat_activity_count{datname="template1",server="postgresql:5432",state="disabled"} 0
pg_stat_activity_count{datname="template1",server="postgresql:5432",state="fastpath function call"} 0
pg_stat_activity_count{datname="template1",server="postgresql:5432",state="idle"} 0
pg_stat_activity_count{datname="template1",server="postgresql:5432",state="idle in transaction"} 0
pg_stat_activity_count{datname="template1",server="postgresql:5432",state="idle in transaction (aborted)"} 0
# HELP pg_stat_activity_max_tx_duration max duration in seconds any active transaction has been running
# TYPE pg_stat_activity_max_tx_duration gauge
pg_stat_activity_max_tx_duration{datname="postgres",server="postgresql:5432",state="active"} 0
pg_stat_activity_max_tx_duration{datname="postgres",server="postgresql:5432",state="disabled"} 0
pg_stat_activity_max_tx_duration{datname="postgres",server="postgresql:5432",state="fastpath function call"} 0
pg_stat_activity_max_tx_duration{datname="postgres",server="postgresql:5432",state="idle"} 0
pg_stat_activity_max_tx_duration{datname="postgres",server="postgresql:5432",state="idle in transaction"} 0
pg_stat_activity_max_tx_duration{datname="postgres",server="postgresql:5432",state="idle in transaction (aborted)"} 0
pg_stat_activity_max_tx_duration{datname="template0",server="postgresql:5432",state="active"} 0
pg_stat_activity_max_tx_duration{datname="template0",server="postgresql:5432",state="disabled"} 0
pg_stat_activity_max_tx_duration{datname="template0",server="postgresql:5432",state="fastpath function call"} 0
pg_stat_activity_max_tx_duration{datname="template0",server="postgresql:5432",state="idle"} 0
pg_stat_activity_max_tx_duration{datname="template0",server="postgresql:5432",state="idle in transaction"} 0
pg_stat_activity_max_tx_duration{datname="template0",server="postgresql:5432",state="idle in transaction (aborted)"} 0
pg_stat_activity_max_tx_duration{datname="template1",server="postgresql:5432",state="active"} 0
pg_stat_activity_max_tx_duration{datname="template1",server="postgresql:5432",state="disabled"} 0
pg_stat_activity_max_tx_duration{datname="template1",server="postgresql:5432",state="fastpath function call"} 0
pg_stat_activity_max_tx_duration{datname="template1",server="postgresql:5432",state="idle"} 0
pg_stat_activity_max_tx_duration{datname="template1",server="postgresql:5432",state="idle in transaction"} 0
pg_stat_activity_max_tx_duration{datname="template1",server="postgresql:5432",state="idle in transaction (aborted)"} 0
# HELP pg_stat_archiver_archived_count Number of WAL files that have been successfully archived
# TYPE pg_stat_archiver_archived_count counter
pg_stat_archiver_archived_count{server="postgresql:5432"} 0
# HELP pg_stat_archiver_failed_count Number of failed attempts for archiving WAL files
# TYPE pg_stat_archiver_failed_count counter
pg_stat_archiver_failed_count{server="postgresql:5432"} 0
# HELP pg_stat_archiver_last_archive_age Time in seconds since last WAL segment was successfully archived
# TYPE pg_stat_archiver_last_archive_age gauge
pg_stat_archiver_last_archive_age{server="postgresql:5432"} NaN
# HELP pg_stat_bgwriter_buffers_alloc Number of buffers allocated
# TYPE pg_stat_bgwriter_buffers_alloc counter
pg_stat_bgwriter_buffers_alloc{server="postgresql:5432"} 309
# HELP pg_stat_bgwriter_buffers_backend Number of buffers written directly by a backend
# TYPE pg_stat_bgwriter_buffers_backend counter
pg_stat_bgwriter_buffers_backend{server="postgresql:5432"} 0
# HELP pg_stat_bgwriter_buffers_backend_fsync Number of times a backend had to execute its own fsync call (normally the background writer handles those even when the backend does its own write)
# TYPE pg_stat_bgwriter_buffers_backend_fsync counter
pg_stat_bgwriter_buffers_backend_fsync{server="postgresql:5432"} 0
# HELP pg_stat_bgwriter_buffers_checkpoint Number of buffers written during checkpoints
# TYPE pg_stat_bgwriter_buffers_checkpoint counter
pg_stat_bgwriter_buffers_checkpoint{server="postgresql:5432"} 1
# HELP pg_stat_bgwriter_buffers_clean Number of buffers written by the background writer
# TYPE pg_stat_bgwriter_buffers_clean counter
pg_stat_bgwriter_buffers_clean{server="postgresql:5432"} 0
# HELP pg_stat_bgwriter_checkpoint_sync_time Total amount of time that has been spent in the portion of checkpoint processing where files are synchronized to disk, in milliseconds
# TYPE pg_stat_bgwriter_checkpoint_sync_time counter
pg_stat_bgwriter_checkpoint_sync_time{server="postgresql:5432"} 4
# HELP pg_stat_bgwriter_checkpoint_write_time Total amount of time that has been spent in the portion of checkpoint processing where files are written to disk, in milliseconds
# TYPE pg_stat_bgwriter_checkpoint_write_time counter
pg_stat_bgwriter_checkpoint_write_time{server="postgresql:5432"} 101
# HELP pg_stat_bgwriter_checkpoints_req Number of requested checkpoints that have been performed
# TYPE pg_stat_bgwriter_checkpoints_req counter
pg_stat_bgwriter_checkpoints_req{server="postgresql:5432"} 0
# HELP pg_stat_bgwriter_checkpoints_timed Number of scheduled checkpoints that have been performed
# TYPE pg_stat_bgwriter_checkpoints_timed counter
pg_stat_bgwriter_checkpoints_timed{server="postgresql:5432"} 2855
# HELP pg_stat_bgwriter_maxwritten_clean Number of times the background writer stopped a cleaning scan because it had written too many buffers
# TYPE pg_stat_bgwriter_maxwritten_clean counter
pg_stat_bgwriter_maxwritten_clean{server="postgresql:5432"} 0
# HELP pg_stat_bgwriter_stats_reset Time at which these statistics were last reset
# TYPE pg_stat_bgwriter_stats_reset counter
pg_stat_bgwriter_stats_reset{server="postgresql:5432"} 1.632833767e+09
# HELP pg_stat_database_blk_read_time Time spent reading data file blocks by backends in this database, in milliseconds
# TYPE pg_stat_database_blk_read_time counter
pg_stat_database_blk_read_time{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_blk_read_time{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_blk_read_time{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_blk_write_time Time spent writing data file blocks by backends in this database, in milliseconds
# TYPE pg_stat_database_blk_write_time counter
pg_stat_database_blk_write_time{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_blk_write_time{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_blk_write_time{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_blks_hit Number of times disk blocks were found already in the buffer cache, so that a read was not necessary (this only includes hits in the PostgreSQL buffer cache, not the operating system's file system cache)
# TYPE pg_stat_database_blks_hit counter
pg_stat_database_blks_hit{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_blks_hit{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_blks_hit{datid="13104",datname="postgres",server="postgresql:5432"} 1.384827e+06
# HELP pg_stat_database_blks_read Number of disk blocks read in this database
# TYPE pg_stat_database_blks_read counter
pg_stat_database_blks_read{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_blks_read{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_blks_read{datid="13104",datname="postgres",server="postgresql:5432"} 283
# HELP pg_stat_database_conflicts Number of queries canceled due to conflicts with recovery in this database. (Conflicts occur only on standby servers; see pg_stat_database_conflicts for details.)
# TYPE pg_stat_database_conflicts counter
pg_stat_database_conflicts{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_conflicts{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_conflicts{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_conflicts_confl_bufferpin Number of queries in this database that have been canceled due to pinned buffers
# TYPE pg_stat_database_conflicts_confl_bufferpin counter
pg_stat_database_conflicts_confl_bufferpin{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_conflicts_confl_bufferpin{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_conflicts_confl_bufferpin{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_conflicts_confl_deadlock Number of queries in this database that have been canceled due to deadlocks
# TYPE pg_stat_database_conflicts_confl_deadlock counter
pg_stat_database_conflicts_confl_deadlock{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_conflicts_confl_deadlock{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_conflicts_confl_deadlock{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_conflicts_confl_lock Number of queries in this database that have been canceled due to lock timeouts
# TYPE pg_stat_database_conflicts_confl_lock counter
pg_stat_database_conflicts_confl_lock{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_conflicts_confl_lock{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_conflicts_confl_lock{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_conflicts_confl_snapshot Number of queries in this database that have been canceled due to old snapshots
# TYPE pg_stat_database_conflicts_confl_snapshot counter
pg_stat_database_conflicts_confl_snapshot{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_conflicts_confl_snapshot{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_conflicts_confl_snapshot{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_conflicts_confl_tablespace Number of queries in this database that have been canceled due to dropped tablespaces
# TYPE pg_stat_database_conflicts_confl_tablespace counter
pg_stat_database_conflicts_confl_tablespace{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_conflicts_confl_tablespace{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_conflicts_confl_tablespace{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_deadlocks Number of deadlocks detected in this database
# TYPE pg_stat_database_deadlocks counter
pg_stat_database_deadlocks{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_deadlocks{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_deadlocks{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_numbackends Number of backends currently connected to this database. This is the only column in this view that returns a value reflecting current state; all other columns return the accumulated values since the last reset.
# TYPE pg_stat_database_numbackends gauge
pg_stat_database_numbackends{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_numbackends{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_numbackends{datid="13104",datname="postgres",server="postgresql:5432"} 1
# HELP pg_stat_database_stats_reset Time at which these statistics were last reset
# TYPE pg_stat_database_stats_reset counter
pg_stat_database_stats_reset{datid="1",datname="template1",server="postgresql:5432"} NaN
pg_stat_database_stats_reset{datid="13103",datname="template0",server="postgresql:5432"} NaN
pg_stat_database_stats_reset{datid="13104",datname="postgres",server="postgresql:5432"} 1.632833767e+09
# HELP pg_stat_database_temp_bytes Total amount of data written to temporary files by queries in this database. All temporary files are counted, regardless of why the temporary file was created, and regardless of the log_temp_files setting.
# TYPE pg_stat_database_temp_bytes counter
pg_stat_database_temp_bytes{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_temp_bytes{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_temp_bytes{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_temp_files Number of temporary files created by queries in this database. All temporary files are counted, regardless of why the temporary file was created (e.g., sorting or hashing), and regardless of the log_temp_files setting.
# TYPE pg_stat_database_temp_files counter
pg_stat_database_temp_files{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_temp_files{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_temp_files{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_tup_deleted Number of rows deleted by queries in this database
# TYPE pg_stat_database_tup_deleted counter
pg_stat_database_tup_deleted{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_tup_deleted{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_tup_deleted{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_tup_fetched Number of rows fetched by queries in this database
# TYPE pg_stat_database_tup_fetched counter
pg_stat_database_tup_fetched{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_tup_fetched{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_tup_fetched{datid="13104",datname="postgres",server="postgresql:5432"} 159458
# HELP pg_stat_database_tup_inserted Number of rows inserted by queries in this database
# TYPE pg_stat_database_tup_inserted counter
pg_stat_database_tup_inserted{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_tup_inserted{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_tup_inserted{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_tup_returned Number of rows returned by queries in this database
# TYPE pg_stat_database_tup_returned counter
pg_stat_database_tup_returned{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_tup_returned{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_tup_returned{datid="13104",datname="postgres",server="postgresql:5432"} 2.2489373e+07
# HELP pg_stat_database_tup_updated Number of rows updated by queries in this database
# TYPE pg_stat_database_tup_updated counter
pg_stat_database_tup_updated{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_tup_updated{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_tup_updated{datid="13104",datname="postgres",server="postgresql:5432"} 0
# HELP pg_stat_database_xact_commit Number of transactions in this database that have been committed
# TYPE pg_stat_database_xact_commit counter
pg_stat_database_xact_commit{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_xact_commit{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_xact_commit{datid="13104",datname="postgres",server="postgresql:5432"} 209017
# HELP pg_stat_database_xact_rollback Number of transactions in this database that have been rolled back
# TYPE pg_stat_database_xact_rollback counter
pg_stat_database_xact_rollback{datid="1",datname="template1",server="postgresql:5432"} 0
pg_stat_database_xact_rollback{datid="13103",datname="template0",server="postgresql:5432"} 0
pg_stat_database_xact_rollback{datid="13104",datname="postgres",server="postgresql:5432"} 10617
# HELP pg_static Version string as reported by postgres
# TYPE pg_static untyped
pg_static{server="postgresql:5432",short_version="11.13.0",version="PostgreSQL 11.13 on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit"} 1
# HELP pg_up Whether the last scrape of metrics from PostgreSQL was able to connect to the server (1 for yes, 0 for no).
# TYPE pg_up gauge
pg_up 1
# HELP postgres_exporter_build_info A metric with a constant '1' value labeled by version, revision, branch, and goversion from which postgres_exporter was built.
# TYPE postgres_exporter_build_info gauge
postgres_exporter_build_info{branch="HEAD",goversion="go1.16.5",revision="57719ba53cac428769aaf3c4c0bb742df3cfca98",version="0.10.0"} 1
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 273.67
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 1.048576e+06
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 11
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 2.310144e+07
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.6330536862e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 7.3302016e+08
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes 1.8446744073709552e+19
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.
# TYPE promhttp_metric_handler_requests_in_flight gauge
promhttp_metric_handler_requests_in_flight 1
# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.
# TYPE promhttp_metric_handler_requests_total counter
promhttp_metric_handler_requests_total{code="200"} 10617
promhttp_metric_handler_requests_total{code="500"} 0
promhttp_metric_handler_requests_total{code="503"} 0