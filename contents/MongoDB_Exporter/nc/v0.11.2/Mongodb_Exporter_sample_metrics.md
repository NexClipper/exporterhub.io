```access transformers
# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 0
go_gc_duration_seconds{quantile="0.25"} 0
go_gc_duration_seconds{quantile="0.5"} 0
go_gc_duration_seconds{quantile="0.75"} 0
go_gc_duration_seconds{quantile="1"} 0
go_gc_duration_seconds_sum 0
go_gc_duration_seconds_count 0
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 9
# HELP go_info Information about the Go environment.
# TYPE go_info gauge
go_info{version="go1.15.2"} 1
# HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
# TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 2.055152e+06
# HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
# TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 2.055152e+06
# HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
# TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 1.445078e+06
# HELP go_memstats_frees_total Total number of frees.
# TYPE go_memstats_frees_total counter
go_memstats_frees_total 3374
# HELP go_memstats_gc_cpu_fraction The fraction of this program's available CPU time used by the GC since the program started.
# TYPE go_memstats_gc_cpu_fraction gauge
go_memstats_gc_cpu_fraction 0
# HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
# TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 4.159512e+06
# HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
# TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 2.055152e+06
# HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
# TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 6.295552e+07
# HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
# TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 3.661824e+06
# HELP go_memstats_heap_objects Number of allocated objects.
# TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 19715
# HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
# TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 6.2889984e+07
# HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
# TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 6.6617344e+07
# HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
# TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 0
# HELP go_memstats_lookups_total Total number of pointer lookups.
# TYPE go_memstats_lookups_total counter
go_memstats_lookups_total 0
# HELP go_memstats_mallocs_total Total number of mallocs.
# TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 23089
# HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
# TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 6944
# HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
# TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 16384
# HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
# TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 63240
# HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
# TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 65536
# HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
# TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 4.473924e+06
# HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
# TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 1.081362e+06
# HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
# TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 491520
# HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
# TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 491520
# HELP go_memstats_sys_bytes Number of bytes obtained from system.
# TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 7.3876736e+07
# HELP go_threads Number of OS threads created.
# TYPE go_threads gauge
go_threads 6
# HELP mongodb_asserts_total The asserts document reports the number of asserts on the database. While assert errors are typically uncommon, if there are non-zero values for the asserts, you should check the log file for the mongod process for more information. In many cases these errors are trivial, but are worth investigating.
# TYPE mongodb_asserts_total counter
mongodb_asserts_total{type="msg"} 0
mongodb_asserts_total{type="regular"} 0
mongodb_asserts_total{type="rollovers"} 0
mongodb_asserts_total{type="user"} 31
mongodb_asserts_total{type="warning"} 0
# HELP mongodb_connections The connections sub document data regarding the current status of incoming connections and availability of the database server. Use these values to assess the current load and capacity requirements of the server
# TYPE mongodb_connections gauge
mongodb_connections{state="active"} 5
mongodb_connections{state="available"} 838841
mongodb_connections{state="current"} 19
# HELP mongodb_connections_metrics_created_total totalCreated provides a count of all incoming connections created to the server. This number includes connections that have since closed
# TYPE mongodb_connections_metrics_created_total counter
mongodb_connections_metrics_created_total 1504
# HELP mongodb_connpoolstats_connection_sync Corresponds to the total number of client connections to mongo.
# TYPE mongodb_connpoolstats_connection_sync gauge
mongodb_connpoolstats_connection_sync 2
# HELP mongodb_connpoolstats_connections_available Corresponds to the total number of client connections to mongo that are currently available.
# TYPE mongodb_connpoolstats_connections_available gauge
mongodb_connpoolstats_connections_available 5
# HELP mongodb_connpoolstats_connections_created_total Corresponds to the total number of client connections to mongo created since instance start
# TYPE mongodb_connpoolstats_connections_created_total counter
mongodb_connpoolstats_connections_created_total 19
# HELP mongodb_connpoolstats_connections_in_use Corresponds to the total number of client connections to mongo currently in use.
# TYPE mongodb_connpoolstats_connections_in_use gauge
mongodb_connpoolstats_connections_in_use 0
# HELP mongodb_connpoolstats_connections_scoped_sync Corresponds to the number of active and stored outgoing scoped synchronous connections from the current instance to other members of the sharded cluster or replica set.
# TYPE mongodb_connpoolstats_connections_scoped_sync gauge
mongodb_connpoolstats_connections_scoped_sync 0
# HELP mongodb_exporter_build_info A metric with a constant '1' value labeled by version, revision, branch, and goversion from which mongodb_exporter was built.
# TYPE mongodb_exporter_build_info gauge
mongodb_exporter_build_info{branch="",goversion="go1.15.2",revision="",version=""} 1
# HELP mongodb_exporter_last_scrape_duration_seconds Duration of the last scrape of metrics from MongoDB.
# TYPE mongodb_exporter_last_scrape_duration_seconds gauge
mongodb_exporter_last_scrape_duration_seconds 0.0064671
# HELP mongodb_exporter_last_scrape_error Whether the last scrape of metrics from MongoDB resulted in an error (1 for error, 0 for success).
# TYPE mongodb_exporter_last_scrape_error gauge
mongodb_exporter_last_scrape_error 0
# HELP mongodb_exporter_scrape_errors_total Total number of times an error occurred scraping a MongoDB.
# TYPE mongodb_exporter_scrape_errors_total counter
mongodb_exporter_scrape_errors_total 0
# HELP mongodb_exporter_scrapes_total Total number of times MongoDB was scraped for metrics.
# TYPE mongodb_exporter_scrapes_total counter
mongodb_exporter_scrapes_total 2
# HELP mongodb_extra_info_heap_usage_bytes The heap_usage_bytes field is only available on Unix/Linux systems, and reports the total size in bytes of heap space used by the database process
# TYPE mongodb_extra_info_heap_usage_bytes gauge
mongodb_extra_info_heap_usage_bytes 0
# HELP mongodb_extra_info_page_faults_total The page_faults Reports the total number of page faults that require disk operations. Page faults refer to operations that require the database server to access data which isn’t available in active memory. The page_faults counter may increase dramatically during moments of poor performance and may correlate with limited memory environments and larger data sets. Limited and sporadic page faults do not necessarily indicate an issue
# TYPE mongodb_extra_info_page_faults_total gauge
mongodb_extra_info_page_faults_total 0
# HELP mongodb_instance_local_time The localTime value is the current time, according to the server, in UTC specified in an ISODate format.
# TYPE mongodb_instance_local_time gauge
mongodb_instance_local_time 1.631274013e+09
# HELP mongodb_instance_uptime_estimate_seconds uptimeEstimate provides the uptime as calculated from MongoDB's internal course-grained time keeping system.
# TYPE mongodb_instance_uptime_estimate_seconds counter
mongodb_instance_uptime_estimate_seconds 7182
# HELP mongodb_instance_uptime_seconds The value of the uptime field corresponds to the number of seconds that the mongos or mongod process has been active.
# TYPE mongodb_instance_uptime_seconds counter
mongodb_instance_uptime_seconds 7182
# HELP mongodb_memory The mem data structure holds information regarding the target system architecture of mongod and current memory use
# TYPE mongodb_memory gauge
mongodb_memory{type="mapped"} 0
mongodb_memory{type="mapped_with_journal"} 0
mongodb_memory{type="resident"} 110
mongodb_memory{type="virtual"} 1910
# HELP mongodb_mongod_db_collections_total Contains a count of the number of collections in that database
# TYPE mongodb_mongod_db_collections_total gauge
mongodb_mongod_db_collections_total{db="admin"} 3
mongodb_mongod_db_collections_total{db="config"} 5
mongodb_mongod_db_collections_total{db="local"} 8
# HELP mongodb_mongod_db_data_size_bytes The total size in bytes of the uncompressed data held in this database
# TYPE mongodb_mongod_db_data_size_bytes gauge
mongodb_mongod_db_data_size_bytes{db="admin"} 796
mongodb_mongod_db_data_size_bytes{db="config"} 146
mongodb_mongod_db_data_size_bytes{db="local"} 85850
# HELP mongodb_mongod_db_index_size_bytes The total size in bytes of all indexes created on this database
# TYPE mongodb_mongod_db_index_size_bytes gauge
mongodb_mongod_db_index_size_bytes{db="admin"} 98304
mongodb_mongod_db_index_size_bytes{db="config"} 40960
mongodb_mongod_db_index_size_bytes{db="local"} 159744
# HELP mongodb_mongod_db_indexes_total Contains a count of the total number of indexes across all collections in the database
# TYPE mongodb_mongod_db_indexes_total gauge
mongodb_mongod_db_indexes_total{db="admin"} 4
mongodb_mongod_db_indexes_total{db="config"} 6
mongodb_mongod_db_indexes_total{db="local"} 7
# HELP mongodb_mongod_db_objects_total Contains a count of the number of objects (i.e. documents) in the database across all collections
# TYPE mongodb_mongod_db_objects_total gauge
mongodb_mongod_db_objects_total{db="admin"} 5
mongodb_mongod_db_objects_total{db="config"} 1
mongodb_mongod_db_objects_total{db="local"} 740
# HELP mongodb_mongod_global_lock_client The activeClients data structure provides more granular information about the number of connected clients and the operation types (e.g. read or write) performed by these clients
# TYPE mongodb_mongod_global_lock_client gauge
mongodb_mongod_global_lock_client{type="reader"} 0
mongodb_mongod_global_lock_client{type="writer"} 0
# HELP mongodb_mongod_global_lock_current_queue The currentQueue data structure value provides more granular information concerning the number of operations queued because of a lock
# TYPE mongodb_mongod_global_lock_current_queue gauge
mongodb_mongod_global_lock_current_queue{type="reader"} 0
mongodb_mongod_global_lock_current_queue{type="writer"} 0
# HELP mongodb_mongod_global_lock_ratio The value of ratio displays the relationship between lockTime and totalTime. Low values indicate that operations have held the globalLock frequently for shorter periods of time. High values indicate that operations have held globalLock infrequently for longer periods of time
# TYPE mongodb_mongod_global_lock_ratio gauge
mongodb_mongod_global_lock_ratio 0
# HELP mongodb_mongod_global_lock_total The value of totalTime represents the time, in microseconds, since the database last started and creation of the globalLock. This is roughly equivalent to total server uptime
# TYPE mongodb_mongod_global_lock_total counter
mongodb_mongod_global_lock_total 0
# HELP mongodb_mongod_locks_time_acquiring_global_microseconds_total amount of time in microseconds that any database has spent waiting for the global lock
# TYPE mongodb_mongod_locks_time_acquiring_global_microseconds_total counter
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="Collection",type="read"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="Collection",type="write"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="Database",type="read"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="Database",type="write"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="Global",type="read"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="Global",type="write"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="Mutex",type="read"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="Mutex",type="write"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="ParallelBatchWriterMode",type="read"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="ParallelBatchWriterMode",type="write"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="ReplicationStateTransition",type="read"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="ReplicationStateTransition",type="write"} 2270
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="oplog",type="read"} 0
mongodb_mongod_locks_time_acquiring_global_microseconds_total{database="oplog",type="write"} 0
# HELP mongodb_mongod_locks_time_locked_global_microseconds_total amount of time in microseconds that any database has held the global lock
# TYPE mongodb_mongod_locks_time_locked_global_microseconds_total counter
mongodb_mongod_locks_time_locked_global_microseconds_total{database="Collection",type="read"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="Collection",type="write"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="Database",type="read"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="Database",type="write"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="Global",type="read"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="Global",type="write"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="Mutex",type="read"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="Mutex",type="write"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="ParallelBatchWriterMode",type="read"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="ParallelBatchWriterMode",type="write"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="ReplicationStateTransition",type="read"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="ReplicationStateTransition",type="write"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="oplog",type="read"} 0
mongodb_mongod_locks_time_locked_global_microseconds_total{database="oplog",type="write"} 0
# HELP mongodb_mongod_locks_time_locked_local_microseconds_total amount of time in microseconds that any database has held the local lock
# TYPE mongodb_mongod_locks_time_locked_local_microseconds_total counter
mongodb_mongod_locks_time_locked_local_microseconds_total{database="Collection",type="read"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="Collection",type="write"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="Database",type="read"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="Database",type="write"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="Global",type="read"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="Global",type="write"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="Mutex",type="read"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="Mutex",type="write"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="ParallelBatchWriterMode",type="read"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="ParallelBatchWriterMode",type="write"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="ReplicationStateTransition",type="read"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="ReplicationStateTransition",type="write"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="oplog",type="read"} 0
mongodb_mongod_locks_time_locked_local_microseconds_total{database="oplog",type="write"} 0
# HELP mongodb_mongod_metrics_cursor_open The open is an embedded document that contains data regarding open cursors
# TYPE mongodb_mongod_metrics_cursor_open gauge
mongodb_mongod_metrics_cursor_open{state="noTimeout"} 0
mongodb_mongod_metrics_cursor_open{state="pinned"} 1
mongodb_mongod_metrics_cursor_open{state="total"} 1
# HELP mongodb_mongod_metrics_cursor_timed_out_total timedOut provides the total number of cursors that have timed out since the server process started. If this number is large or growing at a regular rate, this may indicate an application error
# TYPE mongodb_mongod_metrics_cursor_timed_out_total counter
mongodb_mongod_metrics_cursor_timed_out_total 2
# HELP mongodb_mongod_metrics_document_total The document holds a document of that reflect document access and modification patterns and data use. Compare these values to the data in the opcounters document, which track total number of operations
# TYPE mongodb_mongod_metrics_document_total counter
mongodb_mongod_metrics_document_total{state="deleted"} 0
mongodb_mongod_metrics_document_total{state="inserted"} 0
mongodb_mongod_metrics_document_total{state="returned"} 760
mongodb_mongod_metrics_document_total{state="updated"} 2
# HELP mongodb_mongod_metrics_get_last_error_wtime_num_total num reports the total number of getLastError operations with a specified write concern (i.e. w) that wait for one or more members of a replica set to acknowledge the write operation (i.e. a w value greater than 1.)
# TYPE mongodb_mongod_metrics_get_last_error_wtime_num_total gauge
mongodb_mongod_metrics_get_last_error_wtime_num_total 5
# HELP mongodb_mongod_metrics_get_last_error_wtime_total_milliseconds total_millis reports the total amount of time in milliseconds that the mongod has spent performing getLastError operations with write concern (i.e. w) that wait for one or more members of a replica set to acknowledge the write operation (i.e. a w value greater than 1.)
# TYPE mongodb_mongod_metrics_get_last_error_wtime_total_milliseconds counter
mongodb_mongod_metrics_get_last_error_wtime_total_milliseconds 0
# HELP mongodb_mongod_metrics_get_last_error_wtimeouts_total wtimeouts reports the number of times that write concern operations have timed out as a result of the wtimeout threshold to getLastError.
# TYPE mongodb_mongod_metrics_get_last_error_wtimeouts_total counter
mongodb_mongod_metrics_get_last_error_wtimeouts_total 0
# HELP mongodb_mongod_metrics_operation_total operation is a sub-document that holds counters for several types of update and query operations that MongoDB handles using special operation types
# TYPE mongodb_mongod_metrics_operation_total counter
mongodb_mongod_metrics_operation_total{type="fastmod"} 0
mongodb_mongod_metrics_operation_total{type="idhack"} 0
mongodb_mongod_metrics_operation_total{type="scan_and_order"} 5
# HELP mongodb_mongod_metrics_query_executor_total queryExecutor is a document that reports data from the query execution system
# TYPE mongodb_mongod_metrics_query_executor_total counter
mongodb_mongod_metrics_query_executor_total{state="scanned"} 10
mongodb_mongod_metrics_query_executor_total{state="scanned_objects"} 762
# HELP mongodb_mongod_metrics_record_moves_total moves reports the total number of times documents move within the on-disk representation of the MongoDB data set. Documents move as a result of operations that increase the size of the document beyond their allocated record size
# TYPE mongodb_mongod_metrics_record_moves_total counter
mongodb_mongod_metrics_record_moves_total 0
# HELP mongodb_mongod_metrics_repl_apply_batches_num_total num reports the total number of batches applied across all databases
# TYPE mongodb_mongod_metrics_repl_apply_batches_num_total counter
mongodb_mongod_metrics_repl_apply_batches_num_total 0
# HELP mongodb_mongod_metrics_repl_apply_batches_total_milliseconds total_millis reports the total amount of time the mongod has spent applying operations from the oplog
# TYPE mongodb_mongod_metrics_repl_apply_batches_total_milliseconds counter
mongodb_mongod_metrics_repl_apply_batches_total_milliseconds 0
# HELP mongodb_mongod_metrics_repl_apply_ops_total ops reports the total number of oplog operations applied
# TYPE mongodb_mongod_metrics_repl_apply_ops_total counter
mongodb_mongod_metrics_repl_apply_ops_total 0
# HELP mongodb_mongod_metrics_repl_buffer_count count reports the current number of operations in the oplog buffer
# TYPE mongodb_mongod_metrics_repl_buffer_count gauge
mongodb_mongod_metrics_repl_buffer_count 0
# HELP mongodb_mongod_metrics_repl_buffer_max_size_bytes maxSizeBytes reports the maximum size of the buffer. This value is a constant setting in the mongod, and is not configurable
# TYPE mongodb_mongod_metrics_repl_buffer_max_size_bytes counter
mongodb_mongod_metrics_repl_buffer_max_size_bytes 2.68435456e+08
# HELP mongodb_mongod_metrics_repl_buffer_size_bytes sizeBytes reports the current size of the contents of the oplog buffer
# TYPE mongodb_mongod_metrics_repl_buffer_size_bytes gauge
mongodb_mongod_metrics_repl_buffer_size_bytes 0
# HELP mongodb_mongod_metrics_repl_executor_event_waiters number of event waiters in the replication executor
# TYPE mongodb_mongod_metrics_repl_executor_event_waiters gauge
mongodb_mongod_metrics_repl_executor_event_waiters 0
# HELP mongodb_mongod_metrics_repl_executor_queue number of queued operations in the replication executor
# TYPE mongodb_mongod_metrics_repl_executor_queue gauge
mongodb_mongod_metrics_repl_executor_queue{type="networkInProgress"} 0
mongodb_mongod_metrics_repl_executor_queue{type="sleepers"} 4
# HELP mongodb_mongod_metrics_repl_executor_unsignaled_events number of unsignaled events in the replication executor
# TYPE mongodb_mongod_metrics_repl_executor_unsignaled_events gauge
mongodb_mongod_metrics_repl_executor_unsignaled_events 0
# HELP mongodb_mongod_metrics_repl_network_bytes_total bytes reports the total amount of data read from the replication sync source
# TYPE mongodb_mongod_metrics_repl_network_bytes_total counter
mongodb_mongod_metrics_repl_network_bytes_total 0
# HELP mongodb_mongod_metrics_repl_network_getmores_num_total num reports the total number of getmore operations, which are operations that request an additional set of operations from the replication sync source.
# TYPE mongodb_mongod_metrics_repl_network_getmores_num_total counter
mongodb_mongod_metrics_repl_network_getmores_num_total 0
# HELP mongodb_mongod_metrics_repl_network_getmores_total_milliseconds total_millis reports the total amount of time required to collect data from getmore operations
# TYPE mongodb_mongod_metrics_repl_network_getmores_total_milliseconds counter
mongodb_mongod_metrics_repl_network_getmores_total_milliseconds 0
# HELP mongodb_mongod_metrics_repl_network_ops_total ops reports the total number of operations read from the replication source.
# TYPE mongodb_mongod_metrics_repl_network_ops_total counter
mongodb_mongod_metrics_repl_network_ops_total 0
# HELP mongodb_mongod_metrics_repl_network_readers_created_total readersCreated reports the total number of oplog query processes created. MongoDB will create a new oplog query any time an error occurs in the connection, including a timeout, or a network operation. Furthermore, readersCreated will increment every time MongoDB selects a new source fore replication.
# TYPE mongodb_mongod_metrics_repl_network_readers_created_total counter
mongodb_mongod_metrics_repl_network_readers_created_total 0
# HELP mongodb_mongod_metrics_repl_oplog_insert_bytes_total insertBytes the total size of documents inserted into the oplog.
# TYPE mongodb_mongod_metrics_repl_oplog_insert_bytes_total counter
mongodb_mongod_metrics_repl_oplog_insert_bytes_total 0
# HELP mongodb_mongod_metrics_repl_oplog_insert_num_total num reports the total number of items inserted into the oplog.
# TYPE mongodb_mongod_metrics_repl_oplog_insert_num_total counter
mongodb_mongod_metrics_repl_oplog_insert_num_total 0
# HELP mongodb_mongod_metrics_repl_oplog_insert_total_milliseconds total_millis reports the total amount of time spent for the mongod to insert data into the oplog.
# TYPE mongodb_mongod_metrics_repl_oplog_insert_total_milliseconds counter
mongodb_mongod_metrics_repl_oplog_insert_total_milliseconds 0
# HELP mongodb_mongod_metrics_ttl_deleted_documents_total deletedDocuments reports the total number of documents deleted from collections with a ttl index.
# TYPE mongodb_mongod_metrics_ttl_deleted_documents_total counter
mongodb_mongod_metrics_ttl_deleted_documents_total 0
# HELP mongodb_mongod_metrics_ttl_passes_total passes reports the number of times the background process removes documents from collections with a ttl index
# TYPE mongodb_mongod_metrics_ttl_passes_total counter
mongodb_mongod_metrics_ttl_passes_total 119
# HELP mongodb_mongod_op_latencies_histogram op latencies histogram statistics of mongod
# TYPE mongodb_mongod_op_latencies_histogram gauge
mongodb_mongod_op_latencies_histogram{micros="1024",type="command"} 20
mongodb_mongod_op_latencies_histogram{micros="1024",type="read"} 1
mongodb_mongod_op_latencies_histogram{micros="12288",type="command"} 1
mongodb_mongod_op_latencies_histogram{micros="128",type="command"} 1379
mongodb_mongod_op_latencies_histogram{micros="128",type="read"} 289
mongodb_mongod_op_latencies_histogram{micros="1572864",type="command"} 2
mongodb_mongod_op_latencies_histogram{micros="16",type="command"} 12472
mongodb_mongod_op_latencies_histogram{micros="16",type="read"} 5
mongodb_mongod_op_latencies_histogram{micros="2048",type="command"} 10
mongodb_mongod_op_latencies_histogram{micros="2097152",type="command"} 1
mongodb_mongod_op_latencies_histogram{micros="256",type="command"} 55
mongodb_mongod_op_latencies_histogram{micros="256",type="read"} 5
mongodb_mongod_op_latencies_histogram{micros="3072",type="command"} 3
mongodb_mongod_op_latencies_histogram{micros="32",type="command"} 5476
mongodb_mongod_op_latencies_histogram{micros="32",type="read"} 20
mongodb_mongod_op_latencies_histogram{micros="4",type="command"} 6
mongodb_mongod_op_latencies_histogram{micros="4096",type="command"} 1
mongodb_mongod_op_latencies_histogram{micros="512",type="command"} 14
mongodb_mongod_op_latencies_histogram{micros="6144",type="command"} 1
mongodb_mongod_op_latencies_histogram{micros="64",type="command"} 3071
mongodb_mongod_op_latencies_histogram{micros="64",type="read"} 1889
mongodb_mongod_op_latencies_histogram{micros="8",type="command"} 3471
# HELP mongodb_mongod_op_latencies_latency_total op latencies statistics in microseconds of mongod
# TYPE mongodb_mongod_op_latencies_latency_total gauge
mongodb_mongod_op_latencies_latency_total{type="command"} 7.439256e+06
mongodb_mongod_op_latencies_latency_total{type="read"} 248249
mongodb_mongod_op_latencies_latency_total{type="write"} 0
# HELP mongodb_mongod_op_latencies_ops_total op latencies ops total statistics of mongod
# TYPE mongodb_mongod_op_latencies_ops_total gauge
mongodb_mongod_op_latencies_ops_total{type="command"} 25983
mongodb_mongod_op_latencies_ops_total{type="read"} 2209
mongodb_mongod_op_latencies_ops_total{type="write"} 0
# HELP mongodb_mongod_replset_date The value of the date field is an ISODate of the current time, according to the current server.
# TYPE mongodb_mongod_replset_date gauge
mongodb_mongod_replset_date{set="rs0"} 1.631274013e+09
# HELP mongodb_mongod_replset_heatbeat_interval_millis The frequency in milliseconds of the heartbeats
# TYPE mongodb_mongod_replset_heatbeat_interval_millis gauge
mongodb_mongod_replset_heatbeat_interval_millis{set="rs0"} 2000
# HELP mongodb_mongod_replset_member_arbiter This field conveys if the member is an arbiter (1) or not (0).
# TYPE mongodb_mongod_replset_member_arbiter gauge
mongodb_mongod_replset_member_arbiter{host="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 0
mongodb_mongod_replset_member_arbiter{host="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 0
mongodb_mongod_replset_member_arbiter{host="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 0
mongodb_mongod_replset_member_arbiter{host="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",id="rs0"} 1
# HELP mongodb_mongod_replset_member_build_indexes This field conveys if the member is  builds indexes (1) or not (0).
# TYPE mongodb_mongod_replset_member_build_indexes gauge
mongodb_mongod_replset_member_build_indexes{host="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 1
mongodb_mongod_replset_member_build_indexes{host="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 1
mongodb_mongod_replset_member_build_indexes{host="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 1
mongodb_mongod_replset_member_build_indexes{host="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",id="rs0"} 1
# HELP mongodb_mongod_replset_member_config_version The configVersion value is the replica set configuration version.
# TYPE mongodb_mongod_replset_member_config_version gauge
mongodb_mongod_replset_member_config_version{name="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="PRIMARY"} 4
mongodb_mongod_replset_member_config_version{name="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 4
mongodb_mongod_replset_member_config_version{name="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 4
mongodb_mongod_replset_member_config_version{name="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",set="rs0",state="ARBITER"} 4
# HELP mongodb_mongod_replset_member_election_date The timestamp the node was elected as replica leader
# TYPE mongodb_mongod_replset_member_election_date gauge
mongodb_mongod_replset_member_election_date{name="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="PRIMARY"} 1.631266831e+09
# HELP mongodb_mongod_replset_member_health This field conveys if the member is up (1) or down (0).
# TYPE mongodb_mongod_replset_member_health gauge
mongodb_mongod_replset_member_health{name="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="PRIMARY"} 1
mongodb_mongod_replset_member_health{name="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 1
mongodb_mongod_replset_member_health{name="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 1
mongodb_mongod_replset_member_health{name="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",set="rs0",state="ARBITER"} 1
# HELP mongodb_mongod_replset_member_hidden This field conveys if the member is hidden (1) or not-hidden (0).
# TYPE mongodb_mongod_replset_member_hidden gauge
mongodb_mongod_replset_member_hidden{host="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 0
mongodb_mongod_replset_member_hidden{host="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 0
mongodb_mongod_replset_member_hidden{host="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 0
mongodb_mongod_replset_member_hidden{host="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",id="rs0"} 0
# HELP mongodb_mongod_replset_member_last_heartbeat The lastHeartbeat value provides an ISODate formatted date and time of the transmission time of last heartbeat received from this member
# TYPE mongodb_mongod_replset_member_last_heartbeat gauge
mongodb_mongod_replset_member_last_heartbeat{name="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 1.631274012e+09
mongodb_mongod_replset_member_last_heartbeat{name="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 1.631274012e+09
mongodb_mongod_replset_member_last_heartbeat{name="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",set="rs0",state="ARBITER"} 1.631274012e+09
# HELP mongodb_mongod_replset_member_last_heartbeat_recv The lastHeartbeatRecv value provides an ISODate formatted date and time that the last heartbeat was received from this member
# TYPE mongodb_mongod_replset_member_last_heartbeat_recv gauge
mongodb_mongod_replset_member_last_heartbeat_recv{name="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 1.631274013e+09
mongodb_mongod_replset_member_last_heartbeat_recv{name="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 1.631274013e+09
mongodb_mongod_replset_member_last_heartbeat_recv{name="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",set="rs0",state="ARBITER"} 1.631274012e+09
# HELP mongodb_mongod_replset_member_operational_lag The operationl lag - or staleness of the oplog timestamp - for this member.
# TYPE mongodb_mongod_replset_member_operational_lag gauge
mongodb_mongod_replset_member_operational_lag{name="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 1.631274013e+09
mongodb_mongod_replset_member_operational_lag{name="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 1.631274013e+09
# HELP mongodb_mongod_replset_member_optime_date The timestamp of the last oplog entry that this member applied.
# TYPE mongodb_mongod_replset_member_optime_date gauge
mongodb_mongod_replset_member_optime_date{name="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="PRIMARY"} 1.631274012e+09
mongodb_mongod_replset_member_optime_date{name="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 1.631274012e+09
mongodb_mongod_replset_member_optime_date{name="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 1.631274012e+09
mongodb_mongod_replset_member_optime_date{name="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",set="rs0",state="ARBITER"} -6.21355968e+10
# HELP mongodb_mongod_replset_member_ping_ms The pingMs represents the number of milliseconds (ms) that a round-trip packet takes to travel between the remote member and the local instance.
# TYPE mongodb_mongod_replset_member_ping_ms gauge
mongodb_mongod_replset_member_ping_ms{name="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 0
mongodb_mongod_replset_member_ping_ms{name="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 0
mongodb_mongod_replset_member_ping_ms{name="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",set="rs0",state="ARBITER"} 0
# HELP mongodb_mongod_replset_member_priority This field conveys the priority of a given member
# TYPE mongodb_mongod_replset_member_priority gauge
mongodb_mongod_replset_member_priority{host="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 5
mongodb_mongod_replset_member_priority{host="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 1
mongodb_mongod_replset_member_priority{host="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 1
mongodb_mongod_replset_member_priority{host="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",id="rs0"} 0
# HELP mongodb_mongod_replset_member_replication_lag The replication lag that this member has with the primary.
# TYPE mongodb_mongod_replset_member_replication_lag gauge
mongodb_mongod_replset_member_replication_lag{name="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 0
mongodb_mongod_replset_member_replication_lag{name="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 0
# HELP mongodb_mongod_replset_member_state The value of state is an integer between 0 and 10 that represents the replica state of the member.
# TYPE mongodb_mongod_replset_member_state gauge
mongodb_mongod_replset_member_state{name="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="PRIMARY"} 1
mongodb_mongod_replset_member_state{name="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 2
mongodb_mongod_replset_member_state{name="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 2
mongodb_mongod_replset_member_state{name="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",set="rs0",state="ARBITER"} 7
# HELP mongodb_mongod_replset_member_uptime The uptime field holds a value that reflects the number of seconds that this member has been online.
# TYPE mongodb_mongod_replset_member_uptime counter
mongodb_mongod_replset_member_uptime{name="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="PRIMARY"} 7182
mongodb_mongod_replset_member_uptime{name="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 7159
mongodb_mongod_replset_member_uptime{name="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0",state="SECONDARY"} 7122
mongodb_mongod_replset_member_uptime{name="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",set="rs0",state="ARBITER"} 7172
# HELP mongodb_mongod_replset_member_votes This field conveys the number of votes of a given member
# TYPE mongodb_mongod_replset_member_votes gauge
mongodb_mongod_replset_member_votes{host="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 1
mongodb_mongod_replset_member_votes{host="my-release-mongodb-1.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 1
mongodb_mongod_replset_member_votes{host="my-release-mongodb-2.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",id="rs0"} 1
mongodb_mongod_replset_member_votes{host="my-release-mongodb-arbiter-0.my-release-mongodb-arbiter-headless.mongodb.svc.cluster.local:27017",id="rs0"} 1
# HELP mongodb_mongod_replset_my_name The replica state name of the current member
# TYPE mongodb_mongod_replset_my_name gauge
mongodb_mongod_replset_my_name{name="my-release-mongodb-0.my-release-mongodb-headless.mongodb.svc.cluster.local:27017",set="rs0"} 1
# HELP mongodb_mongod_replset_my_state An integer between 0 and 10 that represents the replica state of the current member
# TYPE mongodb_mongod_replset_my_state gauge
mongodb_mongod_replset_my_state{set="rs0"} 1
# HELP mongodb_mongod_replset_number_of_members The number of replica set mebers
# TYPE mongodb_mongod_replset_number_of_members gauge
mongodb_mongod_replset_number_of_members{set="rs0"} 4
# HELP mongodb_mongod_replset_oplog_head_timestamp The timestamp of the newest change in the oplog
# TYPE mongodb_mongod_replset_oplog_head_timestamp gauge
mongodb_mongod_replset_oplog_head_timestamp 1.631274012e+09
# HELP mongodb_mongod_replset_oplog_items_total The total number of changes in the oplog
# TYPE mongodb_mongod_replset_oplog_items_total gauge
mongodb_mongod_replset_oplog_items_total 731
# HELP mongodb_mongod_replset_oplog_size_bytes Size of oplog in bytes
# TYPE mongodb_mongod_replset_oplog_size_bytes gauge
mongodb_mongod_replset_oplog_size_bytes{type="current"} 76542
mongodb_mongod_replset_oplog_size_bytes{type="storage"} 61440
# HELP mongodb_mongod_replset_oplog_tail_timestamp The timestamp of the oldest change in the oplog
# TYPE mongodb_mongod_replset_oplog_tail_timestamp gauge
mongodb_mongod_replset_oplog_tail_timestamp 1.631266828e+09
# HELP mongodb_mongod_replset_term The election count for the replica set, as known to this replica set member
# TYPE mongodb_mongod_replset_term gauge
mongodb_mongod_replset_term{set="rs0"} 2
# HELP mongodb_mongod_storage_engine The storage engine used by the MongoDB instance
# TYPE mongodb_mongod_storage_engine counter
mongodb_mongod_storage_engine{engine="wiredTiger"} 1
# HELP mongodb_mongod_top_count_total The top command provides operation count for each database collection
# TYPE mongodb_mongod_top_count_total counter
mongodb_mongod_top_count_total{collection="image_collection",database="config",type="Commands"} 6
mongodb_mongod_top_count_total{collection="image_collection",database="config",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="image_collection",database="config",type="Insert"} 0
mongodb_mongod_top_count_total{collection="image_collection",database="config",type="Queries"} 2
mongodb_mongod_top_count_total{collection="image_collection",database="config",type="ReadLock"} 8
mongodb_mongod_top_count_total{collection="image_collection",database="config",type="Remove"} 0
mongodb_mongod_top_count_total{collection="image_collection",database="config",type="Total"} 8
mongodb_mongod_top_count_total{collection="image_collection",database="config",type="Update"} 0
mongodb_mongod_top_count_total{collection="image_collection",database="config",type="WriteLock"} 0
mongodb_mongod_top_count_total{collection="oplog.rs",database="local",type="Commands"} 3
mongodb_mongod_top_count_total{collection="oplog.rs",database="local",type="GetMore"} 2151
mongodb_mongod_top_count_total{collection="oplog.rs",database="local",type="Insert"} 0
mongodb_mongod_top_count_total{collection="oplog.rs",database="local",type="Queries"} 12
mongodb_mongod_top_count_total{collection="oplog.rs",database="local",type="ReadLock"} 16531
mongodb_mongod_top_count_total{collection="oplog.rs",database="local",type="Remove"} 0
mongodb_mongod_top_count_total{collection="oplog.rs",database="local",type="Total"} 16531
mongodb_mongod_top_count_total{collection="oplog.rs",database="local",type="Update"} 0
mongodb_mongod_top_count_total{collection="oplog.rs",database="local",type="WriteLock"} 0
mongodb_mongod_top_count_total{collection="replset.election",database="local",type="Commands"} 0
mongodb_mongod_top_count_total{collection="replset.election",database="local",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="replset.election",database="local",type="Insert"} 0
mongodb_mongod_top_count_total{collection="replset.election",database="local",type="Queries"} 0
mongodb_mongod_top_count_total{collection="replset.election",database="local",type="ReadLock"} 3
mongodb_mongod_top_count_total{collection="replset.election",database="local",type="Remove"} 0
mongodb_mongod_top_count_total{collection="replset.election",database="local",type="Total"} 4
mongodb_mongod_top_count_total{collection="replset.election",database="local",type="Update"} 0
mongodb_mongod_top_count_total{collection="replset.election",database="local",type="WriteLock"} 1
mongodb_mongod_top_count_total{collection="replset.initialSyncId",database="local",type="Commands"} 0
mongodb_mongod_top_count_total{collection="replset.initialSyncId",database="local",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="replset.initialSyncId",database="local",type="Insert"} 0
mongodb_mongod_top_count_total{collection="replset.initialSyncId",database="local",type="Queries"} 2
mongodb_mongod_top_count_total{collection="replset.initialSyncId",database="local",type="ReadLock"} 2
mongodb_mongod_top_count_total{collection="replset.initialSyncId",database="local",type="Remove"} 0
mongodb_mongod_top_count_total{collection="replset.initialSyncId",database="local",type="Total"} 2
mongodb_mongod_top_count_total{collection="replset.initialSyncId",database="local",type="Update"} 0
mongodb_mongod_top_count_total{collection="replset.initialSyncId",database="local",type="WriteLock"} 0
mongodb_mongod_top_count_total{collection="settings",database="config",type="Commands"} 6
mongodb_mongod_top_count_total{collection="settings",database="config",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="settings",database="config",type="Insert"} 0
mongodb_mongod_top_count_total{collection="settings",database="config",type="Queries"} 7
mongodb_mongod_top_count_total{collection="settings",database="config",type="ReadLock"} 13
mongodb_mongod_top_count_total{collection="settings",database="config",type="Remove"} 0
mongodb_mongod_top_count_total{collection="settings",database="config",type="Total"} 16
mongodb_mongod_top_count_total{collection="settings",database="config",type="Update"} 3
mongodb_mongod_top_count_total{collection="settings",database="config",type="WriteLock"} 3
mongodb_mongod_top_count_total{collection="system.indexBuilds",database="config",type="Commands"} 6
mongodb_mongod_top_count_total{collection="system.indexBuilds",database="config",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="system.indexBuilds",database="config",type="Insert"} 0
mongodb_mongod_top_count_total{collection="system.indexBuilds",database="config",type="Queries"} 2
mongodb_mongod_top_count_total{collection="system.indexBuilds",database="config",type="ReadLock"} 8
mongodb_mongod_top_count_total{collection="system.indexBuilds",database="config",type="Remove"} 0
mongodb_mongod_top_count_total{collection="system.indexBuilds",database="config",type="Total"} 8
mongodb_mongod_top_count_total{collection="system.indexBuilds",database="config",type="Update"} 0
mongodb_mongod_top_count_total{collection="system.indexBuilds",database="config",type="WriteLock"} 0
mongodb_mongod_top_count_total{collection="system.keys",database="admin",type="Commands"} 6
mongodb_mongod_top_count_total{collection="system.keys",database="admin",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="system.keys",database="admin",type="Insert"} 0
mongodb_mongod_top_count_total{collection="system.keys",database="admin",type="Queries"} 5
mongodb_mongod_top_count_total{collection="system.keys",database="admin",type="ReadLock"} 11
mongodb_mongod_top_count_total{collection="system.keys",database="admin",type="Remove"} 0
mongodb_mongod_top_count_total{collection="system.keys",database="admin",type="Total"} 11
mongodb_mongod_top_count_total{collection="system.keys",database="admin",type="Update"} 0
mongodb_mongod_top_count_total{collection="system.keys",database="admin",type="WriteLock"} 0
mongodb_mongod_top_count_total{collection="system.replset",database="local",type="Commands"} 8
mongodb_mongod_top_count_total{collection="system.replset",database="local",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="system.replset",database="local",type="Insert"} 0
mongodb_mongod_top_count_total{collection="system.replset",database="local",type="Queries"} 3
mongodb_mongod_top_count_total{collection="system.replset",database="local",type="ReadLock"} 10
mongodb_mongod_top_count_total{collection="system.replset",database="local",type="Remove"} 0
mongodb_mongod_top_count_total{collection="system.replset",database="local",type="Total"} 14
mongodb_mongod_top_count_total{collection="system.replset",database="local",type="Update"} 0
mongodb_mongod_top_count_total{collection="system.replset",database="local",type="WriteLock"} 4
mongodb_mongod_top_count_total{collection="system.roles",database="admin",type="Commands"} 0
mongodb_mongod_top_count_total{collection="system.roles",database="admin",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="system.roles",database="admin",type="Insert"} 0
mongodb_mongod_top_count_total{collection="system.roles",database="admin",type="Queries"} 1
mongodb_mongod_top_count_total{collection="system.roles",database="admin",type="ReadLock"} 1
mongodb_mongod_top_count_total{collection="system.roles",database="admin",type="Remove"} 0
mongodb_mongod_top_count_total{collection="system.roles",database="admin",type="Total"} 1
mongodb_mongod_top_count_total{collection="system.roles",database="admin",type="Update"} 0
mongodb_mongod_top_count_total{collection="system.roles",database="admin",type="WriteLock"} 0
mongodb_mongod_top_count_total{collection="system.sessions",database="config",type="Commands"} 54
mongodb_mongod_top_count_total{collection="system.sessions",database="config",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="system.sessions",database="config",type="Insert"} 0
mongodb_mongod_top_count_total{collection="system.sessions",database="config",type="Queries"} 2
mongodb_mongod_top_count_total{collection="system.sessions",database="config",type="ReadLock"} 56
mongodb_mongod_top_count_total{collection="system.sessions",database="config",type="Remove"} 20
mongodb_mongod_top_count_total{collection="system.sessions",database="config",type="Total"} 76
mongodb_mongod_top_count_total{collection="system.sessions",database="config",type="Update"} 0
mongodb_mongod_top_count_total{collection="system.sessions",database="config",type="WriteLock"} 20
mongodb_mongod_top_count_total{collection="system.users",database="admin",type="Commands"} 9
mongodb_mongod_top_count_total{collection="system.users",database="admin",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="system.users",database="admin",type="Insert"} 0
mongodb_mongod_top_count_total{collection="system.users",database="admin",type="Queries"} 2
mongodb_mongod_top_count_total{collection="system.users",database="admin",type="ReadLock"} 12
mongodb_mongod_top_count_total{collection="system.users",database="admin",type="Remove"} 0
mongodb_mongod_top_count_total{collection="system.users",database="admin",type="Total"} 12
mongodb_mongod_top_count_total{collection="system.users",database="admin",type="Update"} 0
mongodb_mongod_top_count_total{collection="system.users",database="admin",type="WriteLock"} 0
mongodb_mongod_top_count_total{collection="system.version",database="admin",type="Commands"} 6
mongodb_mongod_top_count_total{collection="system.version",database="admin",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="system.version",database="admin",type="Insert"} 0
mongodb_mongod_top_count_total{collection="system.version",database="admin",type="Queries"} 4
mongodb_mongod_top_count_total{collection="system.version",database="admin",type="ReadLock"} 11
mongodb_mongod_top_count_total{collection="system.version",database="admin",type="Remove"} 0
mongodb_mongod_top_count_total{collection="system.version",database="admin",type="Total"} 11
mongodb_mongod_top_count_total{collection="system.version",database="admin",type="Update"} 0
mongodb_mongod_top_count_total{collection="system.version",database="admin",type="WriteLock"} 0
mongodb_mongod_top_count_total{collection="transactions",database="config",type="Commands"} 6
mongodb_mongod_top_count_total{collection="transactions",database="config",type="GetMore"} 0
mongodb_mongod_top_count_total{collection="transactions",database="config",type="Insert"} 0
mongodb_mongod_top_count_total{collection="transactions",database="config",type="Queries"} 30
mongodb_mongod_top_count_total{collection="transactions",database="config",type="ReadLock"} 36
mongodb_mongod_top_count_total{collection="transactions",database="config",type="Remove"} 0
mongodb_mongod_top_count_total{collection="transactions",database="config",type="Total"} 36
mongodb_mongod_top_count_total{collection="transactions",database="config",type="Update"} 0
mongodb_mongod_top_count_total{collection="transactions",database="config",type="WriteLock"} 0
# HELP mongodb_mongod_top_time_seconds_total The top command provides operation time, in seconds, for each database collection
# TYPE mongodb_mongod_top_time_seconds_total counter
mongodb_mongod_top_time_seconds_total{collection="image_collection",database="config",type="Commands"} 0.004119
mongodb_mongod_top_time_seconds_total{collection="image_collection",database="config",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="image_collection",database="config",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="image_collection",database="config",type="Queries"} 0.000128
mongodb_mongod_top_time_seconds_total{collection="image_collection",database="config",type="ReadLock"} 0.004247
mongodb_mongod_top_time_seconds_total{collection="image_collection",database="config",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="image_collection",database="config",type="Total"} 0.004247
mongodb_mongod_top_time_seconds_total{collection="image_collection",database="config",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="image_collection",database="config",type="WriteLock"} 0
mongodb_mongod_top_time_seconds_total{collection="oplog.rs",database="local",type="Commands"} 0.001384
mongodb_mongod_top_time_seconds_total{collection="oplog.rs",database="local",type="GetMore"} 0.191181
mongodb_mongod_top_time_seconds_total{collection="oplog.rs",database="local",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="oplog.rs",database="local",type="Queries"} 0.001131
mongodb_mongod_top_time_seconds_total{collection="oplog.rs",database="local",type="ReadLock"} 7.733756
mongodb_mongod_top_time_seconds_total{collection="oplog.rs",database="local",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="oplog.rs",database="local",type="Total"} 7.733756
mongodb_mongod_top_time_seconds_total{collection="oplog.rs",database="local",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="oplog.rs",database="local",type="WriteLock"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.election",database="local",type="Commands"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.election",database="local",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.election",database="local",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.election",database="local",type="Queries"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.election",database="local",type="ReadLock"} 0.014322
mongodb_mongod_top_time_seconds_total{collection="replset.election",database="local",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.election",database="local",type="Total"} 0.014414
mongodb_mongod_top_time_seconds_total{collection="replset.election",database="local",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.election",database="local",type="WriteLock"} 9.2e-05
mongodb_mongod_top_time_seconds_total{collection="replset.initialSyncId",database="local",type="Commands"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.initialSyncId",database="local",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.initialSyncId",database="local",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.initialSyncId",database="local",type="Queries"} 0.000168
mongodb_mongod_top_time_seconds_total{collection="replset.initialSyncId",database="local",type="ReadLock"} 0.000168
mongodb_mongod_top_time_seconds_total{collection="replset.initialSyncId",database="local",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.initialSyncId",database="local",type="Total"} 0.000168
mongodb_mongod_top_time_seconds_total{collection="replset.initialSyncId",database="local",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="replset.initialSyncId",database="local",type="WriteLock"} 0
mongodb_mongod_top_time_seconds_total{collection="settings",database="config",type="Commands"} 0.002824
mongodb_mongod_top_time_seconds_total{collection="settings",database="config",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="settings",database="config",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="settings",database="config",type="Queries"} 0.000442
mongodb_mongod_top_time_seconds_total{collection="settings",database="config",type="ReadLock"} 0.003266
mongodb_mongod_top_time_seconds_total{collection="settings",database="config",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="settings",database="config",type="Total"} 0.018472
mongodb_mongod_top_time_seconds_total{collection="settings",database="config",type="Update"} 0.015206
mongodb_mongod_top_time_seconds_total{collection="settings",database="config",type="WriteLock"} 0.015206
mongodb_mongod_top_time_seconds_total{collection="system.indexBuilds",database="config",type="Commands"} 0.00415
mongodb_mongod_top_time_seconds_total{collection="system.indexBuilds",database="config",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="system.indexBuilds",database="config",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="system.indexBuilds",database="config",type="Queries"} 0.000113
mongodb_mongod_top_time_seconds_total{collection="system.indexBuilds",database="config",type="ReadLock"} 0.004263
mongodb_mongod_top_time_seconds_total{collection="system.indexBuilds",database="config",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="system.indexBuilds",database="config",type="Total"} 0.004263
mongodb_mongod_top_time_seconds_total{collection="system.indexBuilds",database="config",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="system.indexBuilds",database="config",type="WriteLock"} 0
mongodb_mongod_top_time_seconds_total{collection="system.keys",database="admin",type="Commands"} 0.003709
mongodb_mongod_top_time_seconds_total{collection="system.keys",database="admin",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="system.keys",database="admin",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="system.keys",database="admin",type="Queries"} 0.001283
mongodb_mongod_top_time_seconds_total{collection="system.keys",database="admin",type="ReadLock"} 0.004992
mongodb_mongod_top_time_seconds_total{collection="system.keys",database="admin",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="system.keys",database="admin",type="Total"} 0.004992
mongodb_mongod_top_time_seconds_total{collection="system.keys",database="admin",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="system.keys",database="admin",type="WriteLock"} 0
mongodb_mongod_top_time_seconds_total{collection="system.replset",database="local",type="Commands"} 0.00094
mongodb_mongod_top_time_seconds_total{collection="system.replset",database="local",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="system.replset",database="local",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="system.replset",database="local",type="Queries"} 0.000235
mongodb_mongod_top_time_seconds_total{collection="system.replset",database="local",type="ReadLock"} 0.009445
mongodb_mongod_top_time_seconds_total{collection="system.replset",database="local",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="system.replset",database="local",type="Total"} 0.010244
mongodb_mongod_top_time_seconds_total{collection="system.replset",database="local",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="system.replset",database="local",type="WriteLock"} 0.000799
mongodb_mongod_top_time_seconds_total{collection="system.roles",database="admin",type="Commands"} 0
mongodb_mongod_top_time_seconds_total{collection="system.roles",database="admin",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="system.roles",database="admin",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="system.roles",database="admin",type="Queries"} 4.9e-05
mongodb_mongod_top_time_seconds_total{collection="system.roles",database="admin",type="ReadLock"} 4.9e-05
mongodb_mongod_top_time_seconds_total{collection="system.roles",database="admin",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="system.roles",database="admin",type="Total"} 4.9e-05
mongodb_mongod_top_time_seconds_total{collection="system.roles",database="admin",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="system.roles",database="admin",type="WriteLock"} 0
mongodb_mongod_top_time_seconds_total{collection="system.sessions",database="config",type="Commands"} 0.008836
mongodb_mongod_top_time_seconds_total{collection="system.sessions",database="config",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="system.sessions",database="config",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="system.sessions",database="config",type="Queries"} 0.000115
mongodb_mongod_top_time_seconds_total{collection="system.sessions",database="config",type="ReadLock"} 0.008951
mongodb_mongod_top_time_seconds_total{collection="system.sessions",database="config",type="Remove"} 0.00034
mongodb_mongod_top_time_seconds_total{collection="system.sessions",database="config",type="Total"} 0.009291
mongodb_mongod_top_time_seconds_total{collection="system.sessions",database="config",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="system.sessions",database="config",type="WriteLock"} 0.00034
mongodb_mongod_top_time_seconds_total{collection="system.users",database="admin",type="Commands"} 0.00564
mongodb_mongod_top_time_seconds_total{collection="system.users",database="admin",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="system.users",database="admin",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="system.users",database="admin",type="Queries"} 0.000128
mongodb_mongod_top_time_seconds_total{collection="system.users",database="admin",type="ReadLock"} 0.007568
mongodb_mongod_top_time_seconds_total{collection="system.users",database="admin",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="system.users",database="admin",type="Total"} 0.007568
mongodb_mongod_top_time_seconds_total{collection="system.users",database="admin",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="system.users",database="admin",type="WriteLock"} 0
mongodb_mongod_top_time_seconds_total{collection="system.version",database="admin",type="Commands"} 0.002986
mongodb_mongod_top_time_seconds_total{collection="system.version",database="admin",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="system.version",database="admin",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="system.version",database="admin",type="Queries"} 0.000283
mongodb_mongod_top_time_seconds_total{collection="system.version",database="admin",type="ReadLock"} 0.00341
mongodb_mongod_top_time_seconds_total{collection="system.version",database="admin",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="system.version",database="admin",type="Total"} 0.00341
mongodb_mongod_top_time_seconds_total{collection="system.version",database="admin",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="system.version",database="admin",type="WriteLock"} 0
mongodb_mongod_top_time_seconds_total{collection="transactions",database="config",type="Commands"} 0.002993
mongodb_mongod_top_time_seconds_total{collection="transactions",database="config",type="GetMore"} 0
mongodb_mongod_top_time_seconds_total{collection="transactions",database="config",type="Insert"} 0
mongodb_mongod_top_time_seconds_total{collection="transactions",database="config",type="Queries"} 0.004548
mongodb_mongod_top_time_seconds_total{collection="transactions",database="config",type="ReadLock"} 0.007541
mongodb_mongod_top_time_seconds_total{collection="transactions",database="config",type="Remove"} 0
mongodb_mongod_top_time_seconds_total{collection="transactions",database="config",type="Total"} 0.007541
mongodb_mongod_top_time_seconds_total{collection="transactions",database="config",type="Update"} 0
mongodb_mongod_top_time_seconds_total{collection="transactions",database="config",type="WriteLock"} 0
# HELP mongodb_mongod_wiredtiger_blockmanager_blocks_total The total number of blocks read by the WiredTiger BlockManager
# TYPE mongodb_mongod_wiredtiger_blockmanager_blocks_total counter
mongodb_mongod_wiredtiger_blockmanager_blocks_total{type="pre_loaded"} 23
mongodb_mongod_wiredtiger_blockmanager_blocks_total{type="read"} 547
mongodb_mongod_wiredtiger_blockmanager_blocks_total{type="read_mapped"} 0
mongodb_mongod_wiredtiger_blockmanager_blocks_total{type="written"} 2184
# HELP mongodb_mongod_wiredtiger_blockmanager_bytes_total The total number of bytes read by the WiredTiger BlockManager
# TYPE mongodb_mongod_wiredtiger_blockmanager_bytes_total counter
mongodb_mongod_wiredtiger_blockmanager_bytes_total{type="read"} 2.297856e+06
mongodb_mongod_wiredtiger_blockmanager_bytes_total{type="read_mapped"} 0
mongodb_mongod_wiredtiger_blockmanager_bytes_total{type="written"} 1.7408e+07
# HELP mongodb_mongod_wiredtiger_cache_bytes The current size of data in the WiredTiger Cache in bytes
# TYPE mongodb_mongod_wiredtiger_cache_bytes gauge
mongodb_mongod_wiredtiger_cache_bytes{type="dirty"} 158531
mongodb_mongod_wiredtiger_cache_bytes{type="internal_pages"} 10752
mongodb_mongod_wiredtiger_cache_bytes{type="leaf_pages"} 303693
mongodb_mongod_wiredtiger_cache_bytes{type="total"} 314445
# HELP mongodb_mongod_wiredtiger_cache_bytes_total The total number of bytes read into/from the WiredTiger Cache
# TYPE mongodb_mongod_wiredtiger_cache_bytes_total counter
mongodb_mongod_wiredtiger_cache_bytes_total{type="read"} 83069
mongodb_mongod_wiredtiger_cache_bytes_total{type="written"} 1.372848e+07
# HELP mongodb_mongod_wiredtiger_cache_evicted_total The total number of pages evicted from the WiredTiger Cache
# TYPE mongodb_mongod_wiredtiger_cache_evicted_total counter
mongodb_mongod_wiredtiger_cache_evicted_total{type="modified"} 1
mongodb_mongod_wiredtiger_cache_evicted_total{type="unmodified"} 0
# HELP mongodb_mongod_wiredtiger_cache_max_bytes The maximum size of data in the WiredTiger Cache in bytes
# TYPE mongodb_mongod_wiredtiger_cache_max_bytes gauge
mongodb_mongod_wiredtiger_cache_max_bytes 7.702839296e+09
# HELP mongodb_mongod_wiredtiger_cache_overhead_percent The percentage overhead of the WiredTiger Cache
# TYPE mongodb_mongod_wiredtiger_cache_overhead_percent gauge
mongodb_mongod_wiredtiger_cache_overhead_percent 8
# HELP mongodb_mongod_wiredtiger_cache_pages The current number of pages in the WiredTiger Cache
# TYPE mongodb_mongod_wiredtiger_cache_pages gauge
mongodb_mongod_wiredtiger_cache_pages{type="dirty"} 5
mongodb_mongod_wiredtiger_cache_pages{type="total"} 59
# HELP mongodb_mongod_wiredtiger_cache_pages_total The total number of pages read into/from the WiredTiger Cache
# TYPE mongodb_mongod_wiredtiger_cache_pages_total counter
mongodb_mongod_wiredtiger_cache_pages_total{type="read"} 42
mongodb_mongod_wiredtiger_cache_pages_total{type="written"} 1211
# HELP mongodb_mongod_wiredtiger_concurrent_transactions_available_tickets The number of tickets that are available in WiredTiger
# TYPE mongodb_mongod_wiredtiger_concurrent_transactions_available_tickets gauge
mongodb_mongod_wiredtiger_concurrent_transactions_available_tickets{type="read"} 127
mongodb_mongod_wiredtiger_concurrent_transactions_available_tickets{type="write"} 128
# HELP mongodb_mongod_wiredtiger_concurrent_transactions_out_tickets The number of tickets that are currently in use (out) in WiredTiger
# TYPE mongodb_mongod_wiredtiger_concurrent_transactions_out_tickets gauge
mongodb_mongod_wiredtiger_concurrent_transactions_out_tickets{type="read"} 1
mongodb_mongod_wiredtiger_concurrent_transactions_out_tickets{type="write"} 0
# HELP mongodb_mongod_wiredtiger_concurrent_transactions_total_tickets The total number of tickets that are available in WiredTiger
# TYPE mongodb_mongod_wiredtiger_concurrent_transactions_total_tickets gauge
mongodb_mongod_wiredtiger_concurrent_transactions_total_tickets{type="read"} 128
mongodb_mongod_wiredtiger_concurrent_transactions_total_tickets{type="write"} 128
# HELP mongodb_mongod_wiredtiger_log_bytes_total The total number of bytes written to the WiredTiger log
# TYPE mongodb_mongod_wiredtiger_log_bytes_total counter
mongodb_mongod_wiredtiger_log_bytes_total{type="payload"} 413772
mongodb_mongod_wiredtiger_log_bytes_total{type="written"} 592896
# HELP mongodb_mongod_wiredtiger_log_operations_total The total number of WiredTiger log operations
# TYPE mongodb_mongod_wiredtiger_log_operations_total counter
mongodb_mongod_wiredtiger_log_operations_total{type="flush"} 71805
mongodb_mongod_wiredtiger_log_operations_total{type="read"} 0
mongodb_mongod_wiredtiger_log_operations_total{type="scan"} 4
mongodb_mongod_wiredtiger_log_operations_total{type="scan_double"} 3
mongodb_mongod_wiredtiger_log_operations_total{type="sync"} 865
mongodb_mongod_wiredtiger_log_operations_total{type="sync_dir"} 1
mongodb_mongod_wiredtiger_log_operations_total{type="write"} 2180
# HELP mongodb_mongod_wiredtiger_log_records_scanned_total The total number of records scanned by log scan in the WiredTiger log
# TYPE mongodb_mongod_wiredtiger_log_records_scanned_total counter
mongodb_mongod_wiredtiger_log_records_scanned_total 18
# HELP mongodb_mongod_wiredtiger_log_records_total The total number of compressed/uncompressed records written to the WiredTiger log
# TYPE mongodb_mongod_wiredtiger_log_records_total counter
mongodb_mongod_wiredtiger_log_records_total{type="compressed"} 130
mongodb_mongod_wiredtiger_log_records_total{type="uncompressed"} 721
# HELP mongodb_mongod_wiredtiger_session_open_cursors_total The total number of cursors opened in WiredTiger
# TYPE mongodb_mongod_wiredtiger_session_open_cursors_total gauge
mongodb_mongod_wiredtiger_session_open_cursors_total 0
# HELP mongodb_mongod_wiredtiger_session_open_sessions_total The total number of sessions opened in WiredTiger
# TYPE mongodb_mongod_wiredtiger_session_open_sessions_total gauge
mongodb_mongod_wiredtiger_session_open_sessions_total 17
# HELP mongodb_mongod_wiredtiger_transactions_checkpoint_milliseconds The time in milliseconds transactions have checkpointed in WiredTiger
# TYPE mongodb_mongod_wiredtiger_transactions_checkpoint_milliseconds gauge
mongodb_mongod_wiredtiger_transactions_checkpoint_milliseconds{type="max"} 35
mongodb_mongod_wiredtiger_transactions_checkpoint_milliseconds{type="min"} 7
# HELP mongodb_mongod_wiredtiger_transactions_checkpoint_milliseconds_total The total time in milliseconds transactions have checkpointed in WiredTiger
# TYPE mongodb_mongod_wiredtiger_transactions_checkpoint_milliseconds_total counter
mongodb_mongod_wiredtiger_transactions_checkpoint_milliseconds_total 1595
# HELP mongodb_mongod_wiredtiger_transactions_running_checkpoints The number of currently running checkpoints in WiredTiger
# TYPE mongodb_mongod_wiredtiger_transactions_running_checkpoints gauge
mongodb_mongod_wiredtiger_transactions_running_checkpoints 0
# HELP mongodb_mongod_wiredtiger_transactions_total The total number of transactions WiredTiger has handled
# TYPE mongodb_mongod_wiredtiger_transactions_total counter
mongodb_mongod_wiredtiger_transactions_total{type="begins"} 17278
mongodb_mongod_wiredtiger_transactions_total{type="checkpoints"} 120
mongodb_mongod_wiredtiger_transactions_total{type="committed"} 1570
mongodb_mongod_wiredtiger_transactions_total{type="rolledback"} 15708
# HELP mongodb_network_bytes_total The network data structure contains data regarding MongoDB’s network use
# TYPE mongodb_network_bytes_total counter
mongodb_network_bytes_total{state="in_bytes"} 1.067293e+07
mongodb_network_bytes_total{state="out_bytes"} 2.0655492e+07
# HELP mongodb_network_metrics_num_requests_total The numRequests field is a counter of the total number of distinct requests that the server has received. Use this value to provide context for the bytesIn and bytesOut values to ensure that MongoDB’s network utilization is consistent with expectations and application use
# TYPE mongodb_network_metrics_num_requests_total counter
mongodb_network_metrics_num_requests_total 28197
# HELP mongodb_op_counters_repl_total The opcountersRepl data structure, similar to the opcounters data structure, provides an overview of database replication operations by type and makes it possible to analyze the load on the replica in more granular manner. These values only appear when the current host has replication enabled
# TYPE mongodb_op_counters_repl_total counter
mongodb_op_counters_repl_total{type="command"} 0
mongodb_op_counters_repl_total{type="delete"} 0
mongodb_op_counters_repl_total{type="getmore"} 0
mongodb_op_counters_repl_total{type="insert"} 0
mongodb_op_counters_repl_total{type="query"} 0
mongodb_op_counters_repl_total{type="update"} 0
# HELP mongodb_op_counters_total The opcounters data structure provides an overview of database operations by type and makes it possible to analyze the load on the database in more granular manner. These numbers will grow over time and in response to database use. Analyze these values over time to track database utilization
# TYPE mongodb_op_counters_total counter
mongodb_op_counters_total{type="command"} 26056
mongodb_op_counters_total{type="delete"} 20
mongodb_op_counters_total{mongodb_connectionstype="getmore"} 2152
mongodb_op_counters_total{type="insert"} 0
mongodb_op_counters_total{type="query"} 72
mongodb_op_counters_total{type="update"} 3
# HELP mongodb_tcmalloc_aggressive_memory_decommit Whether aggressive_memory_decommit is on
# TYPE mongodb_tcmalloc_aggressive_memory_decommit counter
mongodb_tcmalloc_aggressive_memory_decommit 0
# HELP mongodb_tcmalloc_cache_bytes Sizes for tcpmalloc caches in bytes
# TYPE mongodb_tcmalloc_cache_bytes gauge
mongodb_tcmalloc_cache_bytes{cache="central_cache",type="free"} 787928
mongodb_tcmalloc_cache_bytes{cache="thread_cache",type="current_total"} 2.307384e+06
mongodb_tcmalloc_cache_bytes{cache="thread_cache",type="free"} 2.307384e+06
mongodb_tcmalloc_cache_bytes{cache="thread_cache",type="max_total"} 1.073741824e+09
mongodb_tcmalloc_cache_bytes{cache="transfer_cache",type="free"} 2.903552e+06
# HELP mongodb_tcmalloc_free_bytes Total free bytes of tcmalloc
# TYPE mongodb_tcmalloc_free_bytes counter
mongodb_tcmalloc_free_bytes 5.998864e+06
# HELP mongodb_tcmalloc_generic_heap High-level summary metricsInternal metrics from tcmalloc
# TYPE mongodb_tcmalloc_generic_heap gauge
mongodb_tcmalloc_generic_heap{type="allocated"} 1.3840152e+08
mongodb_tcmalloc_generic_heap{type="total"} 1.74215168e+08
# HELP mongodb_tcmalloc_pageheap_bytes Sizes for tcpmalloc pageheaps
# TYPE mongodb_tcmalloc_pageheap_bytes gauge
mongodb_tcmalloc_pageheap_bytes{type="comitted"} 1.49905408e+08
mongodb_tcmalloc_pageheap_bytes{type="free"} 5.505024e+06
mongodb_tcmalloc_pageheap_bytes{type="total_commit"} 3.04140288e+08
mongodb_tcmalloc_pageheap_bytes{type="total_decommit"} 1.5423488e+08
mongodb_tcmalloc_pageheap_bytes{type="total_reserve"} 1.74215168e+08
mongodb_tcmalloc_pageheap_bytes{type="unmapped"} 2.430976e+07
# HELP mongodb_tcmalloc_pageheap_count Sizes for tcpmalloc pageheaps
# TYPE mongodb_tcmalloc_pageheap_count gauge
mongodb_tcmalloc_pageheap_count{type="commit"} 457
mongodb_tcmalloc_pageheap_count{type="decommit"} 187
mongodb_tcmalloc_pageheap_count{type="reserve"} 61
mongodb_tcmalloc_pageheap_count{type="scavenge"} 187
# HELP mongodb_up Whether MongoDB is up.
# TYPE mongodb_up gauge
mongodb_up 1
# HELP mongodb_version_info Software version information for mongodb process.
# TYPE mongodb_version_info gauge
mongodb_version_info{mongodb="4.4.8"} 1
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 0.04
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 1.048576e+06
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 11
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 1.4655488e+07
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.63127397709e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 7.34298112e+08
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes -1
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.
# TYPE promhttp_metric_handler_requests_in_flight gauge
promhttp_metric_handler_requests_in_flight 1
# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.
# TYPE promhttp_metric_handler_requests_total counter
promhttp_metric_handler_requests_total{code="200"} 0
promhttp_metric_handler_requests_total{code="500"} 0
promhttp_metric_handler_requests_total{code="503"} 0
```
