```
# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 3.0613e-05
go_gc_duration_seconds{quantile="0.25"} 4.5224e-05
go_gc_duration_seconds{quantile="0.5"} 6.091e-05
go_gc_duration_seconds{quantile="0.75"} 9.0561e-05
go_gc_duration_seconds{quantile="1"} 0.002492718
go_gc_duration_seconds_sum 0.226049772
go_gc_duration_seconds_count 2787
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 21
# HELP go_info Information about the Go environment.
# TYPE go_info gauge
go_info{version="go1.16"} 1
# HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
# TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 4.405528e+06
# HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
# TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 5.307008552e+09
# HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
# TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 1.546909e+06
# HELP go_memstats_frees_total Total number of frees.
# TYPE go_memstats_frees_total counter
go_memstats_frees_total 5.3430742e+07
# HELP go_memstats_gc_cpu_fraction The fraction of this program's available CPU time used by the GC since the program started.
# TYPE go_memstats_gc_cpu_fraction gauge
go_memstats_gc_cpu_fraction 3.20653617101034e-06
# HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
# TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 5.040872e+06
# HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
# TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 4.405528e+06
# HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
# TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 6.0719104e+07
# HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
# TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 5.7344e+06
# HELP go_memstats_heap_objects Number of allocated objects.
# TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 21671
# HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
# TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 6.0104704e+07
# HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
# TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 6.6453504e+07
# HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
# TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 1.6315611928005865e+09
# HELP go_memstats_lookups_total Total number of pointer lookups.
# TYPE go_memstats_lookups_total counter
go_memstats_lookups_total 0
# HELP go_memstats_mallocs_total Total number of mallocs.
# TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 5.3452413e+07
# HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
# TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 4800
# HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
# TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 16384
# HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
# TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 85816
# HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
# TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 98304
# HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
# TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 5.336384e+06
# HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
# TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 982659
# HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
# TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 655360
# HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
# TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 655360
# HELP go_memstats_sys_bytes Number of bytes obtained from system.
# TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 7.4793992e+07
# HELP go_threads Number of OS threads created.
# TYPE go_threads gauge
go_threads 8
# HELP kafka_brokers Number of Brokers in the Kafka Cluster.
# TYPE kafka_brokers gauge
kafka_brokers 1
# HELP kafka_consumergroup_current_offset Current Offset of a ConsumerGroup at Topic/Partition
# TYPE kafka_consumergroup_current_offset gauge
kafka_consumergroup_current_offset{consumergroup="G1",partition="0",topic="songs"} 17
# HELP kafka_consumergroup_current_offset_sum Current Offset of a ConsumerGroup at Topic for all partitions
# TYPE kafka_consumergroup_current_offset_sum gauge
kafka_consumergroup_current_offset_sum{consumergroup="G1",topic="songs"} 17
# HELP kafka_consumergroup_lag Current Approximate Lag of a ConsumerGroup at Topic/Partition
# TYPE kafka_consumergroup_lag gauge
kafka_consumergroup_lag{consumergroup="G1",partition="0",topic="songs"} 0
# HELP kafka_consumergroup_lag_sum Current Approximate Lag of a ConsumerGroup at Topic for all partitions
# TYPE kafka_consumergroup_lag_sum gauge
kafka_consumergroup_lag_sum{consumergroup="G1",topic="songs"} 0
# HELP kafka_consumergroup_members Amount of members in a consumer group
# TYPE kafka_consumergroup_members gauge
kafka_consumergroup_members{consumergroup="G1"} 1
# HELP kafka_exporter_build_info A metric with a constant '1' value labeled by version, revision, branch, and goversion from which kafka_exporter was built.
# TYPE kafka_exporter_build_info gauge
kafka_exporter_build_info{branch="",goversion="go1.16",revision="",version=""} 1
# HELP kafka_topic_partition_current_offset Current Offset of a Broker at Topic/Partition
# TYPE kafka_topic_partition_current_offset gauge
kafka_topic_partition_current_offset{partition="0",topic="__consumer_offsets"} 13
kafka_topic_partition_current_offset{partition="0",topic="kafka-nc"} 0
kafka_topic_partition_current_offset{partition="0",topic="kafka-nc1"} 1
kafka_topic_partition_current_offset{partition="0",topic="kafka-nc2"} 0
kafka_topic_partition_current_offset{partition="0",topic="kafka-nc3"} 51
kafka_topic_partition_current_offset{partition="0",topic="songs"} 17
kafka_topic_partition_current_offset{partition="1",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="1",topic="kafka-nc3"} 19
kafka_topic_partition_current_offset{partition="10",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="11",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="12",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="13",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="14",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="15",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="16",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="17",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="18",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="19",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="2",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="2",topic="kafka-nc3"} 25
kafka_topic_partition_current_offset{partition="20",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="21",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="22",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="23",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="24",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="25",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="26",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="27",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="28",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="29",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="3",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="3",topic="kafka-nc3"} 39
kafka_topic_partition_current_offset{partition="30",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="31",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="32",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="33",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="34",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="35",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="36",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="37",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="38",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="39",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="4",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="4",topic="kafka-nc3"} 21
kafka_topic_partition_current_offset{partition="40",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="41",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="42",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="43",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="44",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="45",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="46",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="47",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="48",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="49",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="5",topic="__consumer_offsets"} 3
kafka_topic_partition_current_offset{partition="6",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="7",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="8",topic="__consumer_offsets"} 0
kafka_topic_partition_current_offset{partition="9",topic="__consumer_offsets"} 3
# HELP kafka_topic_partition_in_sync_replica Number of In-Sync Replicas for this Topic/Partition
# TYPE kafka_topic_partition_in_sync_replica gauge
kafka_topic_partition_in_sync_replica{partition="0",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="0",topic="kafka-nc"} 1
kafka_topic_partition_in_sync_replica{partition="0",topic="kafka-nc1"} 1
kafka_topic_partition_in_sync_replica{partition="0",topic="kafka-nc2"} 1
kafka_topic_partition_in_sync_replica{partition="0",topic="kafka-nc3"} 1
kafka_topic_partition_in_sync_replica{partition="0",topic="songs"} 1
kafka_topic_partition_in_sync_replica{partition="1",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="1",topic="kafka-nc3"} 1
kafka_topic_partition_in_sync_replica{partition="10",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="11",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="12",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="13",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="14",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="15",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="16",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="17",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="18",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="19",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="2",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="2",topic="kafka-nc3"} 1
kafka_topic_partition_in_sync_replica{partition="20",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="21",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="22",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="23",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="24",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="25",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="26",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="27",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="28",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="29",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="3",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="3",topic="kafka-nc3"} 1
kafka_topic_partition_in_sync_replica{partition="30",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="31",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="32",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="33",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="34",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="35",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="36",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="37",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="38",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="39",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="4",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="4",topic="kafka-nc3"} 1
kafka_topic_partition_in_sync_replica{partition="40",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="41",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="42",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="43",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="44",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="45",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="46",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="47",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="48",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="49",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="5",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="6",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="7",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="8",topic="__consumer_offsets"} 1
kafka_topic_partition_in_sync_replica{partition="9",topic="__consumer_offsets"} 1
# HELP kafka_topic_partition_leader Leader Broker ID of this Topic/Partition
# TYPE kafka_topic_partition_leader gauge
kafka_topic_partition_leader{partition="0",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="0",topic="kafka-nc"} 0
kafka_topic_partition_leader{partition="0",topic="kafka-nc1"} 0
kafka_topic_partition_leader{partition="0",topic="kafka-nc2"} 0
kafka_topic_partition_leader{partition="0",topic="kafka-nc3"} 0
kafka_topic_partition_leader{partition="0",topic="songs"} 0
kafka_topic_partition_leader{partition="1",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="1",topic="kafka-nc3"} 0
kafka_topic_partition_leader{partition="10",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="11",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="12",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="13",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="14",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="15",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="16",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="17",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="18",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="19",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="2",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="2",topic="kafka-nc3"} 0
kafka_topic_partition_leader{partition="20",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="21",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="22",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="23",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="24",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="25",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="26",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="27",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="28",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="29",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="3",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="3",topic="kafka-nc3"} 0
kafka_topic_partition_leader{partition="30",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="31",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="32",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="33",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="34",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="35",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="36",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="37",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="38",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="39",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="4",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="4",topic="kafka-nc3"} 0
kafka_topic_partition_leader{partition="40",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="41",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="42",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="43",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="44",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="45",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="46",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="47",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="48",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="49",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="5",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="6",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="7",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="8",topic="__consumer_offsets"} 0
kafka_topic_partition_leader{partition="9",topic="__consumer_offsets"} 0
# HELP kafka_topic_partition_leader_is_preferred 1 if Topic/Partition is using the Preferred Broker
# TYPE kafka_topic_partition_leader_is_preferred gauge
kafka_topic_partition_leader_is_preferred{partition="0",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="0",topic="kafka-nc"} 1
kafka_topic_partition_leader_is_preferred{partition="0",topic="kafka-nc1"} 1
kafka_topic_partition_leader_is_preferred{partition="0",topic="kafka-nc2"} 1
kafka_topic_partition_leader_is_preferred{partition="0",topic="kafka-nc3"} 1
kafka_topic_partition_leader_is_preferred{partition="0",topic="songs"} 1
kafka_topic_partition_leader_is_preferred{partition="1",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="1",topic="kafka-nc3"} 1
kafka_topic_partition_leader_is_preferred{partition="10",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="11",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="12",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="13",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="14",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="15",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="16",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="17",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="18",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="19",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="2",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="2",topic="kafka-nc3"} 1
kafka_topic_partition_leader_is_preferred{partition="20",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="21",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="22",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="23",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="24",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="25",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="26",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="27",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="28",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="29",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="3",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="3",topic="kafka-nc3"} 1
kafka_topic_partition_leader_is_preferred{partition="30",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="31",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="32",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="33",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="34",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="35",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="36",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="37",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="38",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="39",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="4",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="4",topic="kafka-nc3"} 1
kafka_topic_partition_leader_is_preferred{partition="40",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="41",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="42",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="43",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="44",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="45",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="46",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="47",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="48",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="49",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="5",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="6",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="7",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="8",topic="__consumer_offsets"} 1
kafka_topic_partition_leader_is_preferred{partition="9",topic="__consumer_offsets"} 1
# HELP kafka_topic_partition_oldest_offset Oldest Offset of a Broker at Topic/Partition
# TYPE kafka_topic_partition_oldest_offset gauge
kafka_topic_partition_oldest_offset{partition="0",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="0",topic="kafka-nc"} 0
kafka_topic_partition_oldest_offset{partition="0",topic="kafka-nc1"} 0
kafka_topic_partition_oldest_offset{partition="0",topic="kafka-nc2"} 0
kafka_topic_partition_oldest_offset{partition="0",topic="kafka-nc3"} 0
kafka_topic_partition_oldest_offset{partition="0",topic="songs"} 0
kafka_topic_partition_oldest_offset{partition="1",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="1",topic="kafka-nc3"} 0
kafka_topic_partition_oldest_offset{partition="10",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="11",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="12",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="13",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="14",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="15",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="16",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="17",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="18",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="19",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="2",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="2",topic="kafka-nc3"} 0
kafka_topic_partition_oldest_offset{partition="20",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="21",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="22",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="23",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="24",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="25",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="26",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="27",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="28",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="29",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="3",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="3",topic="kafka-nc3"} 0
kafka_topic_partition_oldest_offset{partition="30",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="31",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="32",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="33",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="34",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="35",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="36",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="37",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="38",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="39",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="4",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="4",topic="kafka-nc3"} 0
kafka_topic_partition_oldest_offset{partition="40",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="41",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="42",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="43",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="44",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="45",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="46",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="47",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="48",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="49",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="5",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="6",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="7",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="8",topic="__consumer_offsets"} 0
kafka_topic_partition_oldest_offset{partition="9",topic="__consumer_offsets"} 0
# HELP kafka_topic_partition_replicas Number of Replicas for this Topic/Partition
# TYPE kafka_topic_partition_replicas gauge
kafka_topic_partition_replicas{partition="0",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="0",topic="kafka-nc"} 1
kafka_topic_partition_replicas{partition="0",topic="kafka-nc1"} 1
kafka_topic_partition_replicas{partition="0",topic="kafka-nc2"} 1
kafka_topic_partition_replicas{partition="0",topic="kafka-nc3"} 1
kafka_topic_partition_replicas{partition="0",topic="songs"} 1
kafka_topic_partition_replicas{partition="1",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="1",topic="kafka-nc3"} 1
kafka_topic_partition_replicas{partition="10",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="11",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="12",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="13",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="14",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="15",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="16",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="17",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="18",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="19",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="2",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="2",topic="kafka-nc3"} 1
kafka_topic_partition_replicas{partition="20",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="21",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="22",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="23",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="24",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="25",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="26",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="27",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="28",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="29",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="3",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="3",topic="kafka-nc3"} 1
kafka_topic_partition_replicas{partition="30",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="31",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="32",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="33",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="34",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="35",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="36",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="37",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="38",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="39",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="4",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="4",topic="kafka-nc3"} 1
kafka_topic_partition_replicas{partition="40",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="41",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="42",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="43",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="44",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="45",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="46",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="47",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="48",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="49",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="5",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="6",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="7",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="8",topic="__consumer_offsets"} 1
kafka_topic_partition_replicas{partition="9",topic="__consumer_offsets"} 1
# HELP kafka_topic_partition_under_replicated_partition 1 if Topic/Partition is under Replicated
# TYPE kafka_topic_partition_under_replicated_partition gauge
kafka_topic_partition_under_replicated_partition{partition="0",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="0",topic="kafka-nc"} 0
kafka_topic_partition_under_replicated_partition{partition="0",topic="kafka-nc1"} 0
kafka_topic_partition_under_replicated_partition{partition="0",topic="kafka-nc2"} 0
kafka_topic_partition_under_replicated_partition{partition="0",topic="kafka-nc3"} 0
kafka_topic_partition_under_replicated_partition{partition="0",topic="songs"} 0
kafka_topic_partition_under_replicated_partition{partition="1",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="1",topic="kafka-nc3"} 0
kafka_topic_partition_under_replicated_partition{partition="10",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="11",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="12",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="13",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="14",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="15",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="16",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="17",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="18",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="19",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="2",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="2",topic="kafka-nc3"} 0
kafka_topic_partition_under_replicated_partition{partition="20",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="21",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="22",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="23",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="24",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="25",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="26",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="27",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="28",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="29",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="3",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="3",topic="kafka-nc3"} 0
kafka_topic_partition_under_replicated_partition{partition="30",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="31",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="32",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="33",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="34",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="35",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="36",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="37",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="38",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="39",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="4",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="4",topic="kafka-nc3"} 0
kafka_topic_partition_under_replicated_partition{partition="40",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="41",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="42",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="43",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="44",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="45",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="46",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="47",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="48",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="49",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="5",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="6",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="7",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="8",topic="__consumer_offsets"} 0
kafka_topic_partition_under_replicated_partition{partition="9",topic="__consumer_offsets"} 0
# HELP kafka_topic_partitions Number of partitions for this Topic
# TYPE kafka_topic_partitions gauge
kafka_topic_partitions{topic="__consumer_offsets"} 50
kafka_topic_partitions{topic="kafka-nc"} 1
kafka_topic_partitions{topic="kafka-nc1"} 1
kafka_topic_partitions{topic="kafka-nc2"} 1
kafka_topic_partitions{topic="kafka-nc3"} 5
kafka_topic_partitions{topic="songs"} 1
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 117.27
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 1.048576e+06
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 11
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 2.1282816e+07
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.63127738832e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 7.35645696e+08
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes 1.8446744073709552e+19
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.
# TYPE promhttp_metric_handler_requests_in_flight gauge
promhttp_metric_handler_requests_in_flight 1
# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.
# TYPE promhttp_metric_handler_requests_total counter
promhttp_metric_handler_requests_total{code="200"} 4743
promhttp_metric_handler_requests_total{code="500"} 0
promhttp_metric_handler_requests_total{code="503"} 0
```
