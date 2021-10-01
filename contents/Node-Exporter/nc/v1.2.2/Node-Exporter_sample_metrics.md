```access transformers
# HELP go_gc_duration_seconds A summary of the GC invocation durations.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 1.198e-05
go_gc_duration_seconds{quantile="0.25"} 1.8882e-05
go_gc_duration_seconds{quantile="0.5"} 2.4575e-05
go_gc_duration_seconds{quantile="0.75"} 2.7977e-05
go_gc_duration_seconds{quantile="1"} 0.000127274
go_gc_duration_seconds_sum 3.299112478
go_gc_duration_seconds_count 23057
  # HELP go_goroutines Number of goroutines that currently exist.
  # TYPE go_goroutines gauge
go_goroutines 7
  # HELP go_info Information about the Go environment.
  # TYPE go_info gauge
go_info{version="go1.11.2"} 1
  # HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
  # TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 804272
  # HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
  # TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 4.3860445896e+10
  # HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
  # TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 2.077124e+06
  # HELP go_memstats_frees_total Total number of frees.
  # TYPE go_memstats_frees_total counter
go_memstats_frees_total 4.04451795e+08
  # HELP go_memstats_gc_cpu_fraction The fraction of this program's available CPU time used by the GC since the program started.
  # TYPE go_memstats_gc_cpu_fraction gauge
go_memstats_gc_cpu_fraction 1.1705816951821317e-05
  # HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
  # TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 2.371584e+06
  # HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
  # TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 804272
  # HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
  # TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 6.4413696e+07
  # HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
  # TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 2.039808e+06
  # HELP go_memstats_heap_objects Number of allocated objects.
  # TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 3977
  # HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
  # TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 6.2496768e+07
  # HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
  # TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 6.6453504e+07
  # HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
  # TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 1.6306071391509461e+09
  # HELP go_memstats_lookups_total Total number of pointer lookups.
  # TYPE go_memstats_lookups_total counter
go_memstats_lookups_total 0
  # HELP go_memstats_mallocs_total Total number of mallocs.
  # TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 4.04455772e+08
  # HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
  # TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 3456
  # HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
  # TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 16384
  # HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
  # TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 36632
  # HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
  # TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 81920
  # HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
  # TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 4.194304e+06
  # HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
  # TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 628532
  # HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
  # TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 655360
  # HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
  # TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 655360
  # HELP go_memstats_sys_bytes Number of bytes obtained from system.
  # TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 7.2284408e+07
  # HELP go_threads Number of OS threads created.
  # TYPE go_threads gauge
go_threads 10
  # HELP node_arp_entries ARP entries by device
  # TYPE node_arp_entries gauge
node_arp_entries{device="eth0"} 5
  # HELP node_boot_time_seconds Node boot time, in unixtime.
  # TYPE node_boot_time_seconds gauge
node_boot_time_seconds 1.629375177e+09
  # HELP node_context_switches_total Total number of context switches.
  # TYPE node_context_switches_total counter
node_context_switches_total 3.274471659e+09
  # HELP node_cpu_guest_seconds_total Seconds the cpus spent in guests (VMs) for each mode.
  # TYPE node_cpu_guest_seconds_total counter
node_cpu_guest_seconds_total{cpu="0",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="0",mode="user"} 0
node_cpu_guest_seconds_total{cpu="1",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="1",mode="user"} 0
  # HELP node_cpu_seconds_total Seconds the cpus spent in each mode.
  # TYPE node_cpu_seconds_total counter
node_cpu_seconds_total{cpu="0",mode="idle"} 1.18623754e+06
node_cpu_seconds_total{cpu="0",mode="iowait"} 555.8
node_cpu_seconds_total{cpu="0",mode="irq"} 0
node_cpu_seconds_total{cpu="0",mode="nice"} 22.05
node_cpu_seconds_total{cpu="0",mode="softirq"} 176.85
node_cpu_seconds_total{cpu="0",mode="steal"} 57.23
node_cpu_seconds_total{cpu="0",mode="system"} 13213.23
node_cpu_seconds_total{cpu="0",mode="user"} 27880.96
node_cpu_seconds_total{cpu="1",mode="idle"} 1.18619338e+06
node_cpu_seconds_total{cpu="1",mode="iowait"} 534.59
node_cpu_seconds_total{cpu="1",mode="irq"} 0
node_cpu_seconds_total{cpu="1",mode="nice"} 21.17
node_cpu_seconds_total{cpu="1",mode="softirq"} 283.35
node_cpu_seconds_total{cpu="1",mode="steal"} 2.57
node_cpu_seconds_total{cpu="1",mode="system"} 13197.28
node_cpu_seconds_total{cpu="1",mode="user"} 27763.15
  # HELP node_disk_discard_time_seconds_total This is the total number of seconds spent by all discards.
  # TYPE node_disk_discard_time_seconds_total counter
node_disk_discard_time_seconds_total{device="nvme0n1"} 0
  # HELP node_disk_discarded_sectors_total The total number of sectors discarded successfully.
  # TYPE node_disk_discarded_sectors_total counter
node_disk_discarded_sectors_total{device="nvme0n1"} 0
  # HELP node_disk_discards_completed_total The total number of discards completed successfully.
  # TYPE node_disk_discards_completed_total counter
node_disk_discards_completed_total{device="nvme0n1"} 0
  # HELP node_disk_discards_merged_total The total number of discards merged.
  # TYPE node_disk_discards_merged_total counter
node_disk_discards_merged_total{device="nvme0n1"} 0
  # HELP node_disk_io_now The number of I/Os currently in progress.
  # TYPE node_disk_io_now gauge
node_disk_io_now{device="nvme0n1"} 0
  # HELP node_disk_io_time_seconds_total Total seconds spent doing I/Os.
  # TYPE node_disk_io_time_seconds_total counter
node_disk_io_time_seconds_total{device="nvme0n1"} 2216.14
  # HELP node_disk_io_time_weighted_seconds_total The weighted # of seconds spent doing I/Os.
  # TYPE node_disk_io_time_weighted_seconds_total counter
node_disk_io_time_weighted_seconds_total{device="nvme0n1"} 584.872
  # HELP node_disk_read_bytes_total The total number of bytes read successfully.
  # TYPE node_disk_read_bytes_total counter
node_disk_read_bytes_total{device="nvme0n1"} 6.86216192e+08
  # HELP node_disk_read_time_seconds_total The total number of seconds spent by all reads.
  # TYPE node_disk_read_time_seconds_total counter
node_disk_read_time_seconds_total{device="nvme0n1"} 82.516
  # HELP node_disk_reads_completed_total The total number of reads completed successfully.
  # TYPE node_disk_reads_completed_total counter
node_disk_reads_completed_total{device="nvme0n1"} 17534
  # HELP node_disk_reads_merged_total The total number of reads merged.
  # TYPE node_disk_reads_merged_total counter
node_disk_reads_merged_total{device="nvme0n1"} 9
  # HELP node_disk_write_time_seconds_total This is the total number of seconds spent by all writes.
  # TYPE node_disk_write_time_seconds_total counter
node_disk_write_time_seconds_total{device="nvme0n1"} 5251.953
  # HELP node_disk_writes_completed_total The total number of writes completed successfully.
  # TYPE node_disk_writes_completed_total counter
node_disk_writes_completed_total{device="nvme0n1"} 4.987693e+06
  # HELP node_disk_writes_merged_total The number of writes merged.
  # TYPE node_disk_writes_merged_total counter
node_disk_writes_merged_total{device="nvme0n1"} 672151
  # HELP node_disk_written_bytes_total The total number of bytes written successfully.
  # TYPE node_disk_written_bytes_total counter
node_disk_written_bytes_total{device="nvme0n1"} 6.1822058496e+10
  # HELP node_entropy_available_bits Bits of available entropy.
  # TYPE node_entropy_available_bits gauge
node_entropy_available_bits 3344
  # HELP node_exporter_build_info A metric with a constant '1' value labeled by version, revision, branch, and goversion from which node_exporter was built.
  # TYPE node_exporter_build_info gauge
node_exporter_build_info{branch="HEAD",goversion="go1.11.2",revision="f6f6194a436b9a63d0439abc585c76b19a206b21",version="0.17.0"} 1
  # HELP node_filefd_allocated File descriptor statistics: allocated.
  # TYPE node_filefd_allocated gauge
node_filefd_allocated 1504
  # HELP node_filefd_maximum File descriptor statistics: maximum.
  # TYPE node_filefd_maximum gauge
node_filefd_maximum 782192
  # HELP node_filesystem_avail_bytes Filesystem space available to non-root users in bytes.
  # TYPE node_filesystem_avail_bytes gauge
node_filesystem_avail_bytes{device="/dev/nvme0n1p1",fstype="xfs",mountpoint="/"} 5.431126016e+10
node_filesystem_avail_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 4.017901568e+09
  # HELP node_filesystem_device_error Whether an error occurred while getting statistics for the given device.
  # TYPE node_filesystem_device_error gauge
node_filesystem_device_error{device="/dev/nvme0n1p1",fstype="xfs",mountpoint="/"} 0
node_filesystem_device_error{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 0
node_filesystem_device_error{device="tmpfs",fstype="tmpfs",mountpoint="/var/lib/kubelet/pods/57a3099b-df1c-4113-a354-8eb3c1955101/volumes/kubernetes.io~secret/kube-proxy-token-9zq5l"} 1
node_filesystem_device_error{device="tmpfs",fstype="tmpfs",mountpoint="/var/lib/kubelet/pods/b0bd3128-a561-4dbf-8127-fbf3c05721f3/volumes/kubernetes.io~secret/aws-node-token-q29cv"} 1
  # HELP node_filesystem_files Filesystem total file nodes.
  # TYPE node_filesystem_files gauge
node_filesystem_files{device="/dev/nvme0n1p1",fstype="xfs",mountpoint="/"} 3.145624e+07
node_filesystem_files{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 981110
  # HELP node_filesystem_files_free Filesystem total free file nodes.
  # TYPE node_filesystem_files_free gauge
node_filesystem_files_free{device="/dev/nvme0n1p1",fstype="xfs",mountpoint="/"} 3.1217905e+07
node_filesystem_files_free{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 980647
  # HELP node_filesystem_free_bytes Filesystem free space in bytes.
  # TYPE node_filesystem_free_bytes gauge
node_filesystem_free_bytes{device="/dev/nvme0n1p1",fstype="xfs",mountpoint="/"} 5.431126016e+10
node_filesystem_free_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 4.017901568e+09
  # HELP node_filesystem_readonly Filesystem read-only status.
  # TYPE node_filesystem_readonly gauge
node_filesystem_readonly{device="/dev/nvme0n1p1",fstype="xfs",mountpoint="/"} 0
node_filesystem_readonly{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 0
  # HELP node_filesystem_size_bytes Filesystem size in bytes.
  # TYPE node_filesystem_size_bytes gauge
node_filesystem_size_bytes{device="/dev/nvme0n1p1",fstype="xfs",mountpoint="/"} 6.4411906048e+10
node_filesystem_size_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 4.01862656e+09
  # HELP node_forks_total Total number of forks.
  # TYPE node_forks_total counter
node_forks_total 1.6432341e+07
  # HELP node_intr_total Total number of interrupts serviced.
  # TYPE node_intr_total counter
node_intr_total 1.656839157e+09
  # HELP node_ipvs_connections_total The total number of connections made.
  # TYPE node_ipvs_connections_total counter
node_ipvs_connections_total 0
  # HELP node_ipvs_incoming_bytes_total The total amount of incoming data.
  # TYPE node_ipvs_incoming_bytes_total counter
node_ipvs_incoming_bytes_total 0
  # HELP node_ipvs_incoming_packets_total The total number of incoming packets.
  # TYPE node_ipvs_incoming_packets_total counter
node_ipvs_incoming_packets_total 0
  # HELP node_ipvs_outgoing_bytes_total The total amount of outgoing data.
  # TYPE node_ipvs_outgoing_bytes_total counter
node_ipvs_outgoing_bytes_total 0
  # HELP node_ipvs_outgoing_packets_total The total number of outgoing packets.
  # TYPE node_ipvs_outgoing_packets_total counter
node_ipvs_outgoing_packets_total 0
  # HELP node_load1 1m load average.
  # TYPE node_load1 gauge
node_load1 0.1
  # HELP node_load15 15m load average.
  # TYPE node_load15 gauge
node_load15 0.05
  # HELP node_load5 5m load average.
  # TYPE node_load5 gauge
node_load5 0.04
  # HELP node_memory_Active_anon_bytes Memory information field Active_anon_bytes.
  # TYPE node_memory_Active_anon_bytes gauge
node_memory_Active_anon_bytes 2.96697856e+08
  # HELP node_memory_Active_bytes Memory information field Active_bytes.
  # TYPE node_memory_Active_bytes gauge
node_memory_Active_bytes 1.83764992e+09
  # HELP node_memory_Active_file_bytes Memory information field Active_file_bytes.
  # TYPE node_memory_Active_file_bytes gauge
node_memory_Active_file_bytes 1.540952064e+09
  # HELP node_memory_AnonHugePages_bytes Memory information field AnonHugePages_bytes.
  # TYPE node_memory_AnonHugePages_bytes gauge
node_memory_AnonHugePages_bytes 2.097152e+06
  # HELP node_memory_AnonPages_bytes Memory information field AnonPages_bytes.
  # TYPE node_memory_AnonPages_bytes gauge
node_memory_AnonPages_bytes 3.70188288e+08
  # HELP node_memory_Bounce_bytes Memory information field Bounce_bytes.
  # TYPE node_memory_Bounce_bytes gauge
node_memory_Bounce_bytes 0
  # HELP node_memory_Buffers_bytes Memory information field Buffers_bytes.
  # TYPE node_memory_Buffers_bytes gauge
node_memory_Buffers_bytes 1.900544e+06
  # HELP node_memory_Cached_bytes Memory information field Cached_bytes.
  # TYPE node_memory_Cached_bytes gauge
node_memory_Cached_bytes 3.399622656e+09
  # HELP node_memory_CommitLimit_bytes Memory information field CommitLimit_bytes.
  # TYPE node_memory_CommitLimit_bytes gauge
node_memory_CommitLimit_bytes 4.01862656e+09
  # HELP node_memory_Committed_AS_bytes Memory information field Committed_AS_bytes.
  # TYPE node_memory_Committed_AS_bytes gauge
node_memory_Committed_AS_bytes 3.090608128e+09
  # HELP node_memory_DirectMap1G_bytes Memory information field DirectMap1G_bytes.
  # TYPE node_memory_DirectMap1G_bytes gauge
node_memory_DirectMap1G_bytes 0
  # HELP node_memory_DirectMap2M_bytes Memory information field DirectMap2M_bytes.
  # TYPE node_memory_DirectMap2M_bytes gauge
node_memory_DirectMap2M_bytes 7.82237696e+09
  # HELP node_memory_DirectMap4k_bytes Memory information field DirectMap4k_bytes.
  # TYPE node_memory_DirectMap4k_bytes gauge
node_memory_DirectMap4k_bytes 4.5289472e+08
  # HELP node_memory_Dirty_bytes Memory information field Dirty_bytes.
  # TYPE node_memory_Dirty_bytes gauge
node_memory_Dirty_bytes 208896
  # HELP node_memory_FileHugePages_bytes Memory information field FileHugePages_bytes.
  # TYPE node_memory_FileHugePages_bytes gauge
node_memory_FileHugePages_bytes 0
  # HELP node_memory_FilePmdMapped_bytes Memory information field FilePmdMapped_bytes.
  # TYPE node_memory_FilePmdMapped_bytes gauge
node_memory_FilePmdMapped_bytes 0
  # HELP node_memory_HardwareCorrupted_bytes Memory information field HardwareCorrupted_bytes.
  # TYPE node_memory_HardwareCorrupted_bytes gauge
node_memory_HardwareCorrupted_bytes 0
  # HELP node_memory_HugePages_Free Memory information field HugePages_Free.
  # TYPE node_memory_HugePages_Free gauge
node_memory_HugePages_Free 0
  # HELP node_memory_HugePages_Rsvd Memory information field HugePages_Rsvd.
  # TYPE node_memory_HugePages_Rsvd gauge
node_memory_HugePages_Rsvd 0
  # HELP node_memory_HugePages_Surp Memory information field HugePages_Surp.
  # TYPE node_memory_HugePages_Surp gauge
node_memory_HugePages_Surp 0
  # HELP node_memory_HugePages_Total Memory information field HugePages_Total.
  # TYPE node_memory_HugePages_Total gauge
node_memory_HugePages_Total 0
  # HELP node_memory_Hugepagesize_bytes Memory information field Hugepagesize_bytes.
  # TYPE node_memory_Hugepagesize_bytes gauge
node_memory_Hugepagesize_bytes 2.097152e+06
  # HELP node_memory_Hugetlb_bytes Memory information field Hugetlb_bytes.
  # TYPE node_memory_Hugetlb_bytes gauge
node_memory_Hugetlb_bytes 0
  # HELP node_memory_Inactive_anon_bytes Memory information field Inactive_anon_bytes.
  # TYPE node_memory_Inactive_anon_bytes gauge
node_memory_Inactive_anon_bytes 565248
  # HELP node_memory_Inactive_bytes Memory information field Inactive_bytes.
  # TYPE node_memory_Inactive_bytes gauge
node_memory_Inactive_bytes 1.934082048e+09
  # HELP node_memory_Inactive_file_bytes Memory information field Inactive_file_bytes.
  # TYPE node_memory_Inactive_file_bytes gauge
node_memory_Inactive_file_bytes 1.9335168e+09
  # HELP node_memory_KReclaimable_bytes Memory information field KReclaimable_bytes.
  # TYPE node_memory_KReclaimable_bytes gauge
node_memory_KReclaimable_bytes 2.58879488e+08
  # HELP node_memory_KernelStack_bytes Memory information field KernelStack_bytes.
  # TYPE node_memory_KernelStack_bytes gauge
node_memory_KernelStack_bytes 5.062656e+06
  # HELP node_memory_Mapped_bytes Memory information field Mapped_bytes.
  # TYPE node_memory_Mapped_bytes gauge
node_memory_Mapped_bytes 3.66186496e+08
  # HELP node_memory_MemAvailable_bytes Memory information field MemAvailable_bytes.
  # TYPE node_memory_MemAvailable_bytes gauge
node_memory_MemAvailable_bytes 7.102263296e+09
  # HELP node_memory_MemFree_bytes Memory information field MemFree_bytes.
  # TYPE node_memory_MemFree_bytes gauge
node_memory_MemFree_bytes 3.701948416e+09
  # HELP node_memory_MemTotal_bytes Memory information field MemTotal_bytes.
  # TYPE node_memory_MemTotal_bytes gauge
node_memory_MemTotal_bytes 8.03725312e+09
  # HELP node_memory_Mlocked_bytes Memory information field Mlocked_bytes.
  # TYPE node_memory_Mlocked_bytes gauge
node_memory_Mlocked_bytes 0
  # HELP node_memory_NFS_Unstable_bytes Memory information field NFS_Unstable_bytes.
  # TYPE node_memory_NFS_Unstable_bytes gauge
node_memory_NFS_Unstable_bytes 0
  # HELP node_memory_PageTables_bytes Memory information field PageTables_bytes.
  # TYPE node_memory_PageTables_bytes gauge
node_memory_PageTables_bytes 8.761344e+06
  # HELP node_memory_Percpu_bytes Memory information field Percpu_bytes.
  # TYPE node_memory_Percpu_bytes gauge
node_memory_Percpu_bytes 2.768896e+06
  # HELP node_memory_SReclaimable_bytes Memory information field SReclaimable_bytes.
  # TYPE node_memory_SReclaimable_bytes gauge
node_memory_SReclaimable_bytes 2.58879488e+08
  # HELP node_memory_SUnreclaim_bytes Memory information field SUnreclaim_bytes.
  # TYPE node_memory_SUnreclaim_bytes gauge
node_memory_SUnreclaim_bytes 2.19136e+08
  # HELP node_memory_ShmemHugePages_bytes Memory information field ShmemHugePages_bytes.
  # TYPE node_memory_ShmemHugePages_bytes gauge
node_memory_ShmemHugePages_bytes 0
  # HELP node_memory_ShmemPmdMapped_bytes Memory information field ShmemPmdMapped_bytes.
  # TYPE node_memory_ShmemPmdMapped_bytes gauge
node_memory_ShmemPmdMapped_bytes 0
  # HELP node_memory_Shmem_bytes Memory information field Shmem_bytes.
  # TYPE node_memory_Shmem_bytes gauge
node_memory_Shmem_bytes 1.028096e+06
  # HELP node_memory_Slab_bytes Memory information field Slab_bytes.
  # TYPE node_memory_Slab_bytes gauge
node_memory_Slab_bytes 4.78015488e+08
  # HELP node_memory_SwapCached_bytes Memory information field SwapCached_bytes.
  # TYPE node_memory_SwapCached_bytes gauge
node_memory_SwapCached_bytes 0
  # HELP node_memory_SwapFree_bytes Memory information field SwapFree_bytes.
  # TYPE node_memory_SwapFree_bytes gauge
node_memory_SwapFree_bytes 0
  # HELP node_memory_SwapTotal_bytes Memory information field SwapTotal_bytes.
  # TYPE node_memory_SwapTotal_bytes gauge
node_memory_SwapTotal_bytes 0
  # HELP node_memory_Unevictable_bytes Memory information field Unevictable_bytes.
  # TYPE node_memory_Unevictable_bytes gauge
node_memory_Unevictable_bytes 0
  # HELP node_memory_VmallocChunk_bytes Memory information field VmallocChunk_bytes.
  # TYPE node_memory_VmallocChunk_bytes gauge
node_memory_VmallocChunk_bytes 0
  # HELP node_memory_VmallocTotal_bytes Memory information field VmallocTotal_bytes.
  # TYPE node_memory_VmallocTotal_bytes gauge
node_memory_VmallocTotal_bytes 3.5184372087808e+13
  # HELP node_memory_VmallocUsed_bytes Memory information field VmallocUsed_bytes.
  # TYPE node_memory_VmallocUsed_bytes gauge
node_memory_VmallocUsed_bytes 1.2316672e+07
  # HELP node_memory_WritebackTmp_bytes Memory information field WritebackTmp_bytes.
  # TYPE node_memory_WritebackTmp_bytes gauge
node_memory_WritebackTmp_bytes 0
  # HELP node_memory_Writeback_bytes Memory information field Writeback_bytes.
  # TYPE node_memory_Writeback_bytes gauge
node_memory_Writeback_bytes 0
  # HELP node_netstat_Icmp6_InErrors Statistic Icmp6InErrors.
  # TYPE node_netstat_Icmp6_InErrors untyped
node_netstat_Icmp6_InErrors 0
  # HELP node_netstat_Icmp6_InMsgs Statistic Icmp6InMsgs.
  # TYPE node_netstat_Icmp6_InMsgs untyped
node_netstat_Icmp6_InMsgs 0
  # HELP node_netstat_Icmp6_OutMsgs Statistic Icmp6OutMsgs.
  # TYPE node_netstat_Icmp6_OutMsgs untyped
node_netstat_Icmp6_OutMsgs 2325
  # HELP node_netstat_Icmp_InErrors Statistic IcmpInErrors.
  # TYPE node_netstat_Icmp_InErrors untyped
node_netstat_Icmp_InErrors 13
  # HELP node_netstat_Icmp_InMsgs Statistic IcmpInMsgs.
  # TYPE node_netstat_Icmp_InMsgs untyped
node_netstat_Icmp_InMsgs 17
  # HELP node_netstat_Icmp_OutMsgs Statistic IcmpOutMsgs.
  # TYPE node_netstat_Icmp_OutMsgs untyped
node_netstat_Icmp_OutMsgs 56648
  # HELP node_netstat_Ip6_InOctets Statistic Ip6InOctets.
  # TYPE node_netstat_Ip6_InOctets untyped
node_netstat_Ip6_InOctets 0
  # HELP node_netstat_Ip6_OutOctets Statistic Ip6OutOctets.
  # TYPE node_netstat_Ip6_OutOctets untyped
node_netstat_Ip6_OutOctets 1.18868e+06
  # HELP node_netstat_IpExt_InOctets Statistic IpExtInOctets.
  # TYPE node_netstat_IpExt_InOctets untyped
node_netstat_IpExt_InOctets 9.2304221726e+10
  # HELP node_netstat_IpExt_OutOctets Statistic IpExtOutOctets.
  # TYPE node_netstat_IpExt_OutOctets untyped
node_netstat_IpExt_OutOctets 1.7211053189e+11
  # HELP node_netstat_Ip_Forwarding Statistic IpForwarding.
  # TYPE node_netstat_Ip_Forwarding untyped
node_netstat_Ip_Forwarding 1
  # HELP node_netstat_TcpExt_ListenDrops Statistic TcpExtListenDrops.
  # TYPE node_netstat_TcpExt_ListenDrops untyped
node_netstat_TcpExt_ListenDrops 0
  # HELP node_netstat_TcpExt_ListenOverflows Statistic TcpExtListenOverflows.
  # TYPE node_netstat_TcpExt_ListenOverflows untyped
node_netstat_TcpExt_ListenOverflows 0
  # HELP node_netstat_TcpExt_SyncookiesFailed Statistic TcpExtSyncookiesFailed.
  # TYPE node_netstat_TcpExt_SyncookiesFailed untyped
node_netstat_TcpExt_SyncookiesFailed 0
  # HELP node_netstat_TcpExt_SyncookiesRecv Statistic TcpExtSyncookiesRecv.
  # TYPE node_netstat_TcpExt_SyncookiesRecv untyped
node_netstat_TcpExt_SyncookiesRecv 0
  # HELP node_netstat_TcpExt_SyncookiesSent Statistic TcpExtSyncookiesSent.
  # TYPE node_netstat_TcpExt_SyncookiesSent untyped
node_netstat_TcpExt_SyncookiesSent 0
  # HELP node_netstat_Tcp_ActiveOpens Statistic TcpActiveOpens.
  # TYPE node_netstat_Tcp_ActiveOpens untyped
node_netstat_Tcp_ActiveOpens 2.163677e+06
  # HELP node_netstat_Tcp_CurrEstab Statistic TcpCurrEstab.
  # TYPE node_netstat_Tcp_CurrEstab untyped
node_netstat_Tcp_CurrEstab 16
  # HELP node_netstat_Tcp_InErrs Statistic TcpInErrs.
  # TYPE node_netstat_Tcp_InErrs untyped
node_netstat_Tcp_InErrs 0
  # HELP node_netstat_Tcp_PassiveOpens Statistic TcpPassiveOpens.
  # TYPE node_netstat_Tcp_PassiveOpens untyped
node_netstat_Tcp_PassiveOpens 247106
  # HELP node_netstat_Tcp_RetransSegs Statistic TcpRetransSegs.
  # TYPE node_netstat_Tcp_RetransSegs untyped
node_netstat_Tcp_RetransSegs 510
  # HELP node_netstat_Udp6_InDatagrams Statistic Udp6InDatagrams.
  # TYPE node_netstat_Udp6_InDatagrams untyped
node_netstat_Udp6_InDatagrams 0
  # HELP node_netstat_Udp6_InErrors Statistic Udp6InErrors.
  # TYPE node_netstat_Udp6_InErrors untyped
node_netstat_Udp6_InErrors 0
  # HELP node_netstat_Udp6_NoPorts Statistic Udp6NoPorts.
  # TYPE node_netstat_Udp6_NoPorts untyped
node_netstat_Udp6_NoPorts 0
  # HELP node_netstat_Udp6_OutDatagrams Statistic Udp6OutDatagrams.
  # TYPE node_netstat_Udp6_OutDatagrams untyped
node_netstat_Udp6_OutDatagrams 10268
  # HELP node_netstat_UdpLite6_InErrors Statistic UdpLite6InErrors.
  # TYPE node_netstat_UdpLite6_InErrors untyped
node_netstat_UdpLite6_InErrors 0
  # HELP node_netstat_UdpLite_InErrors Statistic UdpLiteInErrors.
  # TYPE node_netstat_UdpLite_InErrors untyped
node_netstat_UdpLite_InErrors 0
  # HELP node_netstat_Udp_InDatagrams Statistic UdpInDatagrams.
  # TYPE node_netstat_Udp_InDatagrams untyped
node_netstat_Udp_InDatagrams 94413
  # HELP node_netstat_Udp_InErrors Statistic UdpInErrors.
  # TYPE node_netstat_Udp_InErrors untyped
node_netstat_Udp_InErrors 0
  # HELP node_netstat_Udp_NoPorts Statistic UdpNoPorts.
  # TYPE node_netstat_Udp_NoPorts untyped
node_netstat_Udp_NoPorts 0
  # HELP node_netstat_Udp_OutDatagrams Statistic UdpOutDatagrams.
  # TYPE node_netstat_Udp_OutDatagrams untyped
node_netstat_Udp_OutDatagrams 106454
  # HELP node_network_address_assign_type address_assign_type value of /sys/class/net/<iface>.
  # TYPE node_network_address_assign_type gauge
node_network_address_assign_type{interface="eth0"} 0
node_network_address_assign_type{interface="lo"} 0
  # HELP node_network_carrier carrier value of /sys/class/net/<iface>.
  # TYPE node_network_carrier gauge
node_network_carrier{interface="eth0"} 1
node_network_carrier{interface="lo"} 1
  # HELP node_network_carrier_changes_total carrier_changes_total value of /sys/class/net/<iface>.
  # TYPE node_network_carrier_changes_total counter
node_network_carrier_changes_total{interface="eth0"} 1
node_network_carrier_changes_total{interface="lo"} 0
  # HELP node_network_carrier_down_changes_total carrier_down_changes_total value of /sys/class/net/<iface>.
  # TYPE node_network_carrier_down_changes_total counter
node_network_carrier_down_changes_total{interface="eth0"} 0
node_network_carrier_down_changes_total{interface="lo"} 0
  # HELP node_network_carrier_up_changes_total carrier_up_changes_total value of /sys/class/net/<iface>.
  # TYPE node_network_carrier_up_changes_total counter
node_network_carrier_up_changes_total{interface="eth0"} 1
node_network_carrier_up_changes_total{interface="lo"} 0
  # HELP node_network_device_id device_id value of /sys/class/net/<iface>.
  # TYPE node_network_device_id gauge
node_network_device_id{interface="eth0"} 0
node_network_device_id{interface="lo"} 0
  # HELP node_network_dormant dormant value of /sys/class/net/<iface>.
  # TYPE node_network_dormant gauge
node_network_dormant{interface="eth0"} 0
node_network_dormant{interface="lo"} 0
  # HELP node_network_flags flags value of /sys/class/net/<iface>.
  # TYPE node_network_flags gauge
node_network_flags{interface="eth0"} 4099
node_network_flags{interface="lo"} 9
  # HELP node_network_iface_id iface_id value of /sys/class/net/<iface>.
  # TYPE node_network_iface_id gauge
node_network_iface_id{interface="eth0"} 2
node_network_iface_id{interface="lo"} 1
  # HELP node_network_iface_link iface_link value of /sys/class/net/<iface>.
  # TYPE node_network_iface_link gauge
node_network_iface_link{interface="eth0"} 2
node_network_iface_link{interface="lo"} 1
  # HELP node_network_iface_link_mode iface_link_mode value of /sys/class/net/<iface>.
  # TYPE node_network_iface_link_mode gauge
node_network_iface_link_mode{interface="eth0"} 0
node_network_iface_link_mode{interface="lo"} 0
  # HELP node_network_mtu_bytes mtu_bytes value of /sys/class/net/<iface>.
  # TYPE node_network_mtu_bytes gauge
node_network_mtu_bytes{interface="eth0"} 9001
node_network_mtu_bytes{interface="lo"} 65536
  # HELP node_network_net_dev_group net_dev_group value of /sys/class/net/<iface>.
  # TYPE node_network_net_dev_group gauge
node_network_net_dev_group{interface="eth0"} 0
node_network_net_dev_group{interface="lo"} 0
  # HELP node_network_protocol_type protocol_type value of /sys/class/net/<iface>.
  # TYPE node_network_protocol_type gauge
node_network_protocol_type{interface="eth0"} 1
node_network_protocol_type{interface="lo"} 772
  # HELP node_network_receive_bytes_total Network device statistic receive_bytes.
  # TYPE node_network_receive_bytes_total counter
node_network_receive_bytes_total{device="eth0"} 1.6764087985e+10
node_network_receive_bytes_total{device="lo"} 4.02931318e+08
  # HELP node_network_receive_compressed_total Network device statistic receive_compressed.
  # TYPE node_network_receive_compressed_total counter
node_network_receive_compressed_total{device="eth0"} 0
node_network_receive_compressed_total{device="lo"} 0
  # HELP node_network_receive_drop_total Network device statistic receive_drop.
  # TYPE node_network_receive_drop_total counter
node_network_receive_drop_total{device="eth0"} 0
node_network_receive_drop_total{device="lo"} 0
  # HELP node_network_receive_errs_total Network device statistic receive_errs.
  # TYPE node_network_receive_errs_total counter
node_network_receive_errs_total{device="eth0"} 0
node_network_receive_errs_total{device="lo"} 0
  # HELP node_network_receive_fifo_total Network device statistic receive_fifo.
  # TYPE node_network_receive_fifo_total counter
node_network_receive_fifo_total{device="eth0"} 0
node_network_receive_fifo_total{device="lo"} 0
  # HELP node_network_receive_frame_total Network device statistic receive_frame.
  # TYPE node_network_receive_frame_total counter
node_network_receive_frame_total{device="eth0"} 0
node_network_receive_frame_total{device="lo"} 0
  # HELP node_network_receive_multicast_total Network device statistic receive_multicast.
  # TYPE node_network_receive_multicast_total counter
node_network_receive_multicast_total{device="eth0"} 0
node_network_receive_multicast_total{device="lo"} 0
  # HELP node_network_receive_packets_total Network device statistic receive_packets.
  # TYPE node_network_receive_packets_total counter
node_network_receive_packets_total{device="eth0"} 2.9701479e+07
node_network_receive_packets_total{device="lo"} 5.692478e+06
  # HELP node_network_transmit_bytes_total Network device statistic transmit_bytes.
  # TYPE node_network_transmit_bytes_total counter
node_network_transmit_bytes_total{device="eth0"} 6.336345517e+09
node_network_transmit_bytes_total{device="lo"} 4.02931318e+08
  # HELP node_network_transmit_carrier_total Network device statistic transmit_carrier.
  # TYPE node_network_transmit_carrier_total counter
node_network_transmit_carrier_total{device="eth0"} 0
node_network_transmit_carrier_total{device="lo"} 0
  # HELP node_network_transmit_colls_total Network device statistic transmit_colls.
  # TYPE node_network_transmit_colls_total counter
node_network_transmit_colls_total{device="eth0"} 0
node_network_transmit_colls_total{device="lo"} 0
  # HELP node_network_transmit_compressed_total Network device statistic transmit_compressed.
  # TYPE node_network_transmit_compressed_total counter
node_network_transmit_compressed_total{device="eth0"} 0
node_network_transmit_compressed_total{device="lo"} 0
  # HELP node_network_transmit_drop_total Network device statistic transmit_drop.
  # TYPE node_network_transmit_drop_total counter
node_network_transmit_drop_total{device="eth0"} 0
node_network_transmit_drop_total{device="lo"} 0
  # HELP node_network_transmit_errs_total Network device statistic transmit_errs.
  # TYPE node_network_transmit_errs_total counter
node_network_transmit_errs_total{device="eth0"} 0
node_network_transmit_errs_total{device="lo"} 0
  # HELP node_network_transmit_fifo_total Network device statistic transmit_fifo.
  # TYPE node_network_transmit_fifo_total counter
node_network_transmit_fifo_total{device="eth0"} 0
node_network_transmit_fifo_total{device="lo"} 0
  # HELP node_network_transmit_packets_total Network device statistic transmit_packets.
  # TYPE node_network_transmit_packets_total counter
node_network_transmit_packets_total{device="eth0"} 2.4779248e+07
node_network_transmit_packets_total{device="lo"} 5.692478e+06
  # HELP node_network_transmit_queue_length transmit_queue_length value of /sys/class/net/<iface>.
  # TYPE node_network_transmit_queue_length gauge
node_network_transmit_queue_length{interface="eth0"} 1000
node_network_transmit_queue_length{interface="lo"} 1000
  # HELP node_network_up Valid operstate for interface.
  # TYPE node_network_up gauge
node_network_up{address="00:00:00:00:00:00",broadcast="00:00:00:00:00:00",duplex="",ifalias="",interface="lo",operstate="unknown"} 0
node_network_up{address="02:83:7b:69:a3:c9",broadcast="ff:ff:ff:ff:ff:ff",duplex="",ifalias="",interface="eth0",operstate="up"} 1
  # HELP node_nf_conntrack_entries Number of currently allocated flow entries for connection tracking.
  # TYPE node_nf_conntrack_entries gauge
node_nf_conntrack_entries 237
  # HELP node_nf_conntrack_entries_limit Maximum size of connection tracking table.
  # TYPE node_nf_conntrack_entries_limit gauge
node_nf_conntrack_entries_limit 131072
  # HELP node_procs_blocked Number of processes blocked waiting for I/O to complete.
  # TYPE node_procs_blocked gauge
node_procs_blocked 0
  # HELP node_procs_running Number of processes in runnable state.
  # TYPE node_procs_running gauge
node_procs_running 3
  # HELP node_scrape_collector_duration_seconds node_exporter: Duration of a collector scrape.
  # TYPE node_scrape_collector_duration_seconds gauge
node_scrape_collector_duration_seconds{collector="arp"} 3.8368e-05
node_scrape_collector_duration_seconds{collector="bcache"} 1.2866e-05
node_scrape_collector_duration_seconds{collector="bonding"} 1.4266e-05
node_scrape_collector_duration_seconds{collector="conntrack"} 3.1129e-05
node_scrape_collector_duration_seconds{collector="cpu"} 0.000228079
node_scrape_collector_duration_seconds{collector="diskstats"} 4.7186e-05
node_scrape_collector_duration_seconds{collector="edac"} 3.1967e-05
node_scrape_collector_duration_seconds{collector="entropy"} 2.14e-05
node_scrape_collector_duration_seconds{collector="filefd"} 6.2985e-05
node_scrape_collector_duration_seconds{collector="filesystem"} 0.000569189
node_scrape_collector_duration_seconds{collector="hwmon"} 2.836e-05
node_scrape_collector_duration_seconds{collector="infiniband"} 1.0381e-05
node_scrape_collector_duration_seconds{collector="ipvs"} 7.3589e-05
node_scrape_collector_duration_seconds{collector="loadavg"} 2.4636e-05
node_scrape_collector_duration_seconds{collector="mdadm"} 3.6338e-05
node_scrape_collector_duration_seconds{collector="meminfo"} 0.000153914
node_scrape_collector_duration_seconds{collector="netclass"} 0.000836527
node_scrape_collector_duration_seconds{collector="netdev"} 0.000124198
node_scrape_collector_duration_seconds{collector="netstat"} 0.000621747
node_scrape_collector_duration_seconds{collector="nfs"} 1.1047e-05
node_scrape_collector_duration_seconds{collector="nfsd"} 1.3053e-05
node_scrape_collector_duration_seconds{collector="sockstat"} 6.1352e-05
node_scrape_collector_duration_seconds{collector="stat"} 9.654e-05
node_scrape_collector_duration_seconds{collector="textfile"} 5.092e-06
node_scrape_collector_duration_seconds{collector="time"} 1.7277e-05
node_scrape_collector_duration_seconds{collector="timex"} 1.022e-05
node_scrape_collector_duration_seconds{collector="uname"} 9.492e-06
node_scrape_collector_duration_seconds{collector="vmstat"} 0.00012841
node_scrape_collector_duration_seconds{collector="xfs"} 0.000147079
node_scrape_collector_duration_seconds{collector="zfs"} 8.2959e-05
  # HELP node_scrape_collector_success node_exporter: Whether a collector succeeded.
  # TYPE node_scrape_collector_success gauge
node_scrape_collector_success{collector="arp"} 1
node_scrape_collector_success{collector="bcache"} 1
node_scrape_collector_success{collector="bonding"} 1
node_scrape_collector_success{collector="conntrack"} 1
node_scrape_collector_success{collector="cpu"} 1
node_scrape_collector_success{collector="diskstats"} 1
node_scrape_collector_success{collector="edac"} 1
node_scrape_collector_success{collector="entropy"} 1
node_scrape_collector_success{collector="filefd"} 1
node_scrape_collector_success{collector="filesystem"} 1
node_scrape_collector_success{collector="hwmon"} 1
node_scrape_collector_success{collector="infiniband"} 1
node_scrape_collector_success{collector="ipvs"} 1
node_scrape_collector_success{collector="loadavg"} 1
node_scrape_collector_success{collector="mdadm"} 1
node_scrape_collector_success{collector="meminfo"} 1
node_scrape_collector_success{collector="netclass"} 1
node_scrape_collector_success{collector="netdev"} 1
node_scrape_collector_success{collector="netstat"} 1
node_scrape_collector_success{collector="nfs"} 1
node_scrape_collector_success{collector="nfsd"} 1
node_scrape_collector_success{collector="sockstat"} 1
node_scrape_collector_success{collector="stat"} 1
node_scrape_collector_success{collector="textfile"} 1
node_scrape_collector_success{collector="time"} 1
node_scrape_collector_success{collector="timex"} 1
node_scrape_collector_success{collector="uname"} 1
node_scrape_collector_success{collector="vmstat"} 1
node_scrape_collector_success{collector="xfs"} 1
node_scrape_collector_success{collector="zfs"} 1
  # HELP node_sockstat_FRAG_inuse Number of FRAG sockets in state inuse.
  # TYPE node_sockstat_FRAG_inuse gauge
node_sockstat_FRAG_inuse 0
  # HELP node_sockstat_FRAG_memory Number of FRAG sockets in state memory.
  # TYPE node_sockstat_FRAG_memory gauge
node_sockstat_FRAG_memory 0
  # HELP node_sockstat_RAW_inuse Number of RAW sockets in state inuse.
  # TYPE node_sockstat_RAW_inuse gauge
node_sockstat_RAW_inuse 0
  # HELP node_sockstat_TCP_alloc Number of TCP sockets in state alloc.
  # TYPE node_sockstat_TCP_alloc gauge
node_sockstat_TCP_alloc 33
  # HELP node_sockstat_TCP_inuse Number of TCP sockets in state inuse.
  # TYPE node_sockstat_TCP_inuse gauge
node_sockstat_TCP_inuse 24
  # HELP node_sockstat_TCP_mem Number of TCP sockets in state mem.
  # TYPE node_sockstat_TCP_mem gauge
node_sockstat_TCP_mem 9
  # HELP node_sockstat_TCP_mem_bytes Number of TCP sockets in state mem_bytes.
  # TYPE node_sockstat_TCP_mem_bytes gauge
node_sockstat_TCP_mem_bytes 36864
  # HELP node_sockstat_TCP_orphan Number of TCP sockets in state orphan.
  # TYPE node_sockstat_TCP_orphan gauge
node_sockstat_TCP_orphan 0
  # HELP node_sockstat_TCP_tw Number of TCP sockets in state tw.
  # TYPE node_sockstat_TCP_tw gauge
node_sockstat_TCP_tw 41
  # HELP node_sockstat_UDPLITE_inuse Number of UDPLITE sockets in state inuse.
  # TYPE node_sockstat_UDPLITE_inuse gauge
node_sockstat_UDPLITE_inuse 0
  # HELP node_sockstat_UDP_inuse Number of UDP sockets in state inuse.
  # TYPE node_sockstat_UDP_inuse gauge
node_sockstat_UDP_inuse 4
  # HELP node_sockstat_UDP_mem Number of UDP sockets in state mem.
  # TYPE node_sockstat_UDP_mem gauge
node_sockstat_UDP_mem 1
  # HELP node_sockstat_UDP_mem_bytes Number of UDP sockets in state mem_bytes.
  # TYPE node_sockstat_UDP_mem_bytes gauge
node_sockstat_UDP_mem_bytes 4096
  # HELP node_sockstat_sockets_used Number of sockets sockets in state used.
  # TYPE node_sockstat_sockets_used gauge
node_sockstat_sockets_used 256
  # HELP node_textfile_scrape_error 1 if there was an error opening or reading a file, 0 otherwise
  # TYPE node_textfile_scrape_error gauge
node_textfile_scrape_error 0
  # HELP node_time_seconds System time in seconds since epoch (1970).
  # TYPE node_time_seconds gauge
node_time_seconds 1.630607166013319e+09
  # HELP node_timex_estimated_error_seconds Estimated error in seconds.
  # TYPE node_timex_estimated_error_seconds gauge
node_timex_estimated_error_seconds 1e-06
  # HELP node_timex_frequency_adjustment_ratio Local clock frequency adjustment.
  # TYPE node_timex_frequency_adjustment_ratio gauge
node_timex_frequency_adjustment_ratio 1.0000078163604735
  # HELP node_timex_loop_time_constant Phase-locked loop time constant.
  # TYPE node_timex_loop_time_constant gauge
node_timex_loop_time_constant 2
  # HELP node_timex_maxerror_seconds Maximum error in seconds.
  # TYPE node_timex_maxerror_seconds gauge
node_timex_maxerror_seconds 0.002893
  # HELP node_timex_offset_seconds Time offset in between local system and reference clock.
  # TYPE node_timex_offset_seconds gauge
node_timex_offset_seconds 0
  # HELP node_timex_pps_calibration_total Pulse per second count of calibration intervals.
  # TYPE node_timex_pps_calibration_total counter
node_timex_pps_calibration_total 0
  # HELP node_timex_pps_error_total Pulse per second count of calibration errors.
  # TYPE node_timex_pps_error_total counter
node_timex_pps_error_total 0
  # HELP node_timex_pps_frequency_hertz Pulse per second frequency.
  # TYPE node_timex_pps_frequency_hertz gauge
node_timex_pps_frequency_hertz 0
  # HELP node_timex_pps_jitter_seconds Pulse per second jitter.
  # TYPE node_timex_pps_jitter_seconds gauge
node_timex_pps_jitter_seconds 0
  # HELP node_timex_pps_jitter_total Pulse per second count of jitter limit exceeded events.
  # TYPE node_timex_pps_jitter_total counter
node_timex_pps_jitter_total 0
  # HELP node_timex_pps_shift_seconds Pulse per second interval duration.
  # TYPE node_timex_pps_shift_seconds gauge
node_timex_pps_shift_seconds 0
  # HELP node_timex_pps_stability_exceeded_total Pulse per second count of stability limit exceeded events.
  # TYPE node_timex_pps_stability_exceeded_total counter
node_timex_pps_stability_exceeded_total 0
  # HELP node_timex_pps_stability_hertz Pulse per second stability, average of recent frequency changes.
  # TYPE node_timex_pps_stability_hertz gauge
node_timex_pps_stability_hertz 0
  # HELP node_timex_status Value of the status array bits.
  # TYPE node_timex_status gauge
node_timex_status 0
  # HELP node_timex_sync_status Is clock synchronized to a reliable server (1 = yes, 0 = no).
  # TYPE node_timex_sync_status gauge
node_timex_sync_status 1
  # HELP node_timex_tai_offset_seconds International Atomic Time (TAI) offset.
  # TYPE node_timex_tai_offset_seconds gauge
node_timex_tai_offset_seconds 0
  # HELP node_timex_tick_seconds Seconds between clock ticks.
  # TYPE node_timex_tick_seconds gauge
node_timex_tick_seconds 0.01
  # HELP node_uname_info Labeled system information as provided by the uname system call.
  # TYPE node_uname_info gauge
node_uname_info{domainname="(none)",machine="x86_64",nodename="10-105-205-74-node-k8s-eks-devops-v2",release="5.4.117-58.216.amzn2.x86_64",sysname="Linux",version="#1 SMP Tue May 11 20:50:07 UTC 2021"} 1
  # HELP node_vmstat_oom_kill /proc/vmstat information field oom_kill.
  # TYPE node_vmstat_oom_kill untyped
node_vmstat_oom_kill 0
  # HELP node_vmstat_pgfault /proc/vmstat information field pgfault.
  # TYPE node_vmstat_pgfault untyped
node_vmstat_pgfault 5.336255315e+09
  # HELP node_vmstat_pgmajfault /proc/vmstat information field pgmajfault.
  # TYPE node_vmstat_pgmajfault untyped
node_vmstat_pgmajfault 4167
  # HELP node_vmstat_pgpgin /proc/vmstat information field pgpgin.
  # TYPE node_vmstat_pgpgin untyped
node_vmstat_pgpgin 850760
  # HELP node_vmstat_pgpgout /proc/vmstat information field pgpgout.
  # TYPE node_vmstat_pgpgout untyped
node_vmstat_pgpgout 8.0416516e+07
  # HELP node_vmstat_pswpin /proc/vmstat information field pswpin.
  # TYPE node_vmstat_pswpin untyped
node_vmstat_pswpin 0
  # HELP node_vmstat_pswpout /proc/vmstat information field pswpout.
  # TYPE node_vmstat_pswpout untyped
node_vmstat_pswpout 0
  # HELP node_xfs_allocation_btree_compares_total Number of allocation B-tree compares for a filesystem.
  # TYPE node_xfs_allocation_btree_compares_total counter
node_xfs_allocation_btree_compares_total{device="nvme0n1p1"} 0
  # HELP node_xfs_allocation_btree_lookups_total Number of allocation B-tree lookups for a filesystem.
  # TYPE node_xfs_allocation_btree_lookups_total counter
node_xfs_allocation_btree_lookups_total{device="nvme0n1p1"} 0
  # HELP node_xfs_allocation_btree_records_deleted_total Number of allocation B-tree records deleted for a filesystem.
  # TYPE node_xfs_allocation_btree_records_deleted_total counter
node_xfs_allocation_btree_records_deleted_total{device="nvme0n1p1"} 0
  # HELP node_xfs_allocation_btree_records_inserted_total Number of allocation B-tree records inserted for a filesystem.
  # TYPE node_xfs_allocation_btree_records_inserted_total counter
node_xfs_allocation_btree_records_inserted_total{device="nvme0n1p1"} 0
  # HELP node_xfs_block_map_btree_compares_total Number of block map B-tree compares for a filesystem.
  # TYPE node_xfs_block_map_btree_compares_total counter
node_xfs_block_map_btree_compares_total{device="nvme0n1p1"} 0
  # HELP node_xfs_block_map_btree_lookups_total Number of block map B-tree lookups for a filesystem.
  # TYPE node_xfs_block_map_btree_lookups_total counter
node_xfs_block_map_btree_lookups_total{device="nvme0n1p1"} 0
  # HELP node_xfs_block_map_btree_records_deleted_total Number of block map B-tree records deleted for a filesystem.
  # TYPE node_xfs_block_map_btree_records_deleted_total counter
node_xfs_block_map_btree_records_deleted_total{device="nvme0n1p1"} 0
  # HELP node_xfs_block_map_btree_records_inserted_total Number of block map B-tree records inserted for a filesystem.
  # TYPE node_xfs_block_map_btree_records_inserted_total counter
node_xfs_block_map_btree_records_inserted_total{device="nvme0n1p1"} 0
  # HELP node_xfs_block_mapping_extent_list_compares_total Number of extent list compares for a filesystem.
  # TYPE node_xfs_block_mapping_extent_list_compares_total counter
node_xfs_block_mapping_extent_list_compares_total{device="nvme0n1p1"} 0
  # HELP node_xfs_block_mapping_extent_list_deletions_total Number of extent list deletions for a filesystem.
  # TYPE node_xfs_block_mapping_extent_list_deletions_total counter
node_xfs_block_mapping_extent_list_deletions_total{device="nvme0n1p1"} 949749
  # HELP node_xfs_block_mapping_extent_list_insertions_total Number of extent list insertions for a filesystem.
  # TYPE node_xfs_block_mapping_extent_list_insertions_total counter
node_xfs_block_mapping_extent_list_insertions_total{device="nvme0n1p1"} 750758
  # HELP node_xfs_block_mapping_extent_list_lookups_total Number of extent list lookups for a filesystem.
  # TYPE node_xfs_block_mapping_extent_list_lookups_total counter
node_xfs_block_mapping_extent_list_lookups_total{device="nvme0n1p1"} 1.05579761e+08
  # HELP node_xfs_block_mapping_reads_total Number of block map for read operations for a filesystem.
  # TYPE node_xfs_block_mapping_reads_total counter
node_xfs_block_mapping_reads_total{device="nvme0n1p1"} 8.182991e+07
  # HELP node_xfs_block_mapping_unmaps_total Number of block unmaps (deletes) for a filesystem.
  # TYPE node_xfs_block_mapping_unmaps_total counter
node_xfs_block_mapping_unmaps_total{device="nvme0n1p1"} 2.254346e+06
  # HELP node_xfs_block_mapping_writes_total Number of block map for write operations for a filesystem.
  # TYPE node_xfs_block_mapping_writes_total counter
node_xfs_block_mapping_writes_total{device="nvme0n1p1"} 1.714898e+07
  # HELP node_xfs_extent_allocation_blocks_allocated_total Number of blocks allocated for a filesystem.
  # TYPE node_xfs_extent_allocation_blocks_allocated_total counter
node_xfs_extent_allocation_blocks_allocated_total{device="nvme0n1p1"} 1.0562893e+07
  # HELP node_xfs_extent_allocation_blocks_freed_total Number of blocks freed for a filesystem.
  # TYPE node_xfs_extent_allocation_blocks_freed_total counter
node_xfs_extent_allocation_blocks_freed_total{device="nvme0n1p1"} 8.790356e+06
  # HELP node_xfs_extent_allocation_extents_allocated_total Number of extents allocated for a filesystem.
  # TYPE node_xfs_extent_allocation_extents_allocated_total counter
node_xfs_extent_allocation_extents_allocated_total{device="nvme0n1p1"} 679488
  # HELP node_xfs_extent_allocation_extents_freed_total Number of extents freed for a filesystem.
  # TYPE node_xfs_extent_allocation_extents_freed_total counter
node_xfs_extent_allocation_extents_freed_total{device="nvme0n1p1"} 561246
  # HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
  # TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 359.81
  # HELP process_max_fds Maximum number of open file descriptors.
  # TYPE process_max_fds gauge
process_max_fds 65535
  # HELP process_open_fds Number of open file descriptors.
  # TYPE process_open_fds gauge
process_open_fds 8
  # HELP process_resident_memory_bytes Resident memory size in bytes.
  # TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 1.3869056e+07
  # HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
  # TYPE process_start_time_seconds gauge
process_start_time_seconds 1.62937521402e+09
  # HELP process_virtual_memory_bytes Virtual memory size in bytes.
  # TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 1.17334016e+08
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
