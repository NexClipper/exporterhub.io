# Memcached Exporter Github
https://github.com/prometheus/memcached_exporter

# Resource

## Docker

```sh
docker run -p 9150:9150 quay.io/prometheus/memcached-exporter:v0.7.0
```

## Kubernetes

[https://github.com/helm/charts/tree/master/stable/memcached](https://github.com/helm/charts/tree/master/stable/memcached)

# Collectors

The exporter collects a number of statistics from the server:

```
# HELP memcached_commands_total Total number of all requests broken down by command (get, set, etc.) and status.
# TYPE memcached_commands_total counter
# HELP memcached_connections_listener_disabled_total Number of times that memcached has hit its connections limit and disabled its listener.
# TYPE memcached_connections_listener_disabled_total counter
# HELP memcached_connections_total Total number of connections opened since the server started running.
# TYPE memcached_connections_total counter
# HELP memcached_connections_yielded_total Total number of connections yielded running due to hitting the memcached's -R limit.
# TYPE memcached_connections_yielded_total counter
# HELP memcached_current_bytes Current number of bytes used to store items.
# TYPE memcached_current_bytes gauge
# HELP memcached_current_connections Current number of open connections.
# TYPE memcached_current_connections gauge
# HELP memcached_current_items Current number of items stored by this instance.
# TYPE memcached_current_items gauge
# HELP memcached_items_evicted_total Total number of valid items removed from cache to free memory for new items.
# TYPE memcached_items_evicted_total counter
# HELP memcached_items_reclaimed_total Total number of times an entry was stored using memory from an expired entry.
# TYPE memcached_items_reclaimed_total counter
# HELP memcached_items_total Total number of items stored during the life of this instance.
# TYPE memcached_items_total counter
# HELP memcached_limit_bytes Number of bytes this server is allowed to use for storage.
# TYPE memcached_limit_bytes gauge
# HELP memcached_lru_crawler_enabled Whether the LRU crawler is enabled.
# TYPE memcached_lru_crawler_enabled gauge
# HELP memcached_lru_crawler_hot_max_factor Set idle age of HOT LRU to COLD age * this
# TYPE memcached_lru_crawler_hot_max_factor gauge
# HELP memcached_lru_crawler_hot_percent Percent of slab memory reserved for HOT LRU.
# TYPE memcached_lru_crawler_hot_percent gauge
# HELP memcached_lru_crawler_items_checked_total Total items examined by LRU Crawler.
# TYPE memcached_lru_crawler_items_checked_total counter
# HELP memcached_lru_crawler_maintainer_thread Split LRU mode and background threads.
# TYPE memcached_lru_crawler_maintainer_thread gauge
# HELP memcached_lru_crawler_moves_to_cold_total Total number of items moved from HOT/WARM to COLD LRU's.
# TYPE memcached_lru_crawler_moves_to_cold_total counter
# HELP memcached_lru_crawler_moves_to_warm_total Total number of items moved from COLD to WARM LRU.
# TYPE memcached_lru_crawler_moves_to_warm_total counter
# HELP memcached_lru_crawler_moves_within_lru_total Total number of items reshuffled within HOT or WARM LRU's.
# TYPE memcached_lru_crawler_moves_within_lru_total counter
# HELP memcached_lru_crawler_reclaimed_total Total items freed by LRU Crawler.
# TYPE memcached_lru_crawler_reclaimed_total counter
# HELP memcached_lru_crawler_sleep Microseconds to sleep between LRU crawls.
# TYPE memcached_lru_crawler_sleep gauge
# HELP memcached_lru_crawler_starts_total Times an LRU crawler was started.
# TYPE memcached_lru_crawler_starts_total counter
# HELP memcached_lru_crawler_to_crawl Max items to crawl per slab per run.
# TYPE memcached_lru_crawler_to_crawl gauge
# HELP memcached_lru_crawler_warm_max_factor Set idle age of WARM LRU to COLD age * this
# TYPE memcached_lru_crawler_warm_max_factor gauge
# HELP memcached_lru_crawler_warm_percent Percent of slab memory reserved for WARM LRU.
# TYPE memcached_lru_crawler_warm_percent gauge
# HELP memcached_malloced_bytes Number of bytes of memory allocated to slab pages.
# TYPE memcached_malloced_bytes gauge
# HELP memcached_max_connections Maximum number of clients allowed.
# TYPE memcached_max_connections gauge
# HELP memcached_read_bytes_total Total number of bytes read by this server from network.
# TYPE memcached_read_bytes_total counter
# HELP memcached_slab_chunk_size_bytes Number of bytes allocated to each chunk within this slab class.
# TYPE memcached_slab_chunk_size_bytes gauge
# HELP memcached_slab_chunks_free Number of chunks not yet allocated items.
# TYPE memcached_slab_chunks_free gauge
# HELP memcached_slab_chunks_free_end Number of free chunks at the end of the last allocated page.
# TYPE memcached_slab_chunks_free_end gauge
# HELP memcached_slab_chunks_per_page Number of chunks within a single page for this slab class.
# TYPE memcached_slab_chunks_per_page gauge
# HELP memcached_slab_chunks_used Number of chunks allocated to an item.
# TYPE memcached_slab_chunks_used gauge
# HELP memcached_slab_cold_items Number of items presently stored in the COLD LRU.
# TYPE memcached_slab_cold_items gauge
# HELP memcached_slab_commands_total Total number of all requests broken down by command (get, set, etc.) and status per slab.
# TYPE memcached_slab_commands_total counter
# HELP memcached_slab_current_chunks Number of chunks allocated to this slab class.
# TYPE memcached_slab_current_chunks gauge
# HELP memcached_slab_current_items Number of items currently stored in this slab class.
# TYPE memcached_slab_current_items gauge
# HELP memcached_slab_current_pages Number of pages allocated to this slab class.
# TYPE memcached_slab_current_pages gauge
# HELP memcached_slab_hot_age_seconds Age of the oldest item in HOT LRU.
# TYPE memcached_slab_hot_age_seconds gauge
# HELP memcached_slab_hot_items Number of items presently stored in the HOT LRU.
# TYPE memcached_slab_hot_items gauge
# HELP memcached_slab_items_age_seconds Number of seconds the oldest item has been in the slab class.
# TYPE memcached_slab_items_age_seconds gauge
# HELP memcached_slab_items_crawler_reclaimed_total Number of items freed by the LRU Crawler.
# TYPE memcached_slab_items_crawler_reclaimed_total counter
# HELP memcached_slab_items_evicted_nonzero_total Total number of times an item which had an explicit expire time set had to be evicted from the LRU before it expired.
# TYPE memcached_slab_items_evicted_nonzero_total counter
# HELP memcached_slab_items_evicted_time_seconds Seconds since the last access for the most recent item evicted from this class.
# TYPE memcached_slab_items_evicted_time_seconds counter
# HELP memcached_slab_items_evicted_total Total number of times an item had to be evicted from the LRU before it expired.
# TYPE memcached_slab_items_evicted_total counter
# HELP memcached_slab_items_evicted_unfetched_total Total nmber of items evicted and never fetched.
# TYPE memcached_slab_items_evicted_unfetched_total counter
# HELP memcached_slab_items_expired_unfetched_total Total number of valid items evicted from the LRU which were never touched after being set.
# TYPE memcached_slab_items_expired_unfetched_total counter
# HELP memcached_slab_items_moves_to_cold Number of items moved from HOT or WARM into COLD.
# TYPE memcached_slab_items_moves_to_cold counter
# HELP memcached_slab_items_moves_to_warm Number of items moves from COLD into WARM.
# TYPE memcached_slab_items_moves_to_warm counter
# HELP memcached_slab_items_moves_within_lru Number of times active items were bumped within HOT or WARM.
# TYPE memcached_slab_items_moves_within_lru counter
# HELP memcached_slab_items_outofmemory_total Total number of items for this slab class that have triggered an out of memory error.
# TYPE memcached_slab_items_outofmemory_total counter
# HELP memcached_slab_items_reclaimed_total Total number of items reclaimed.
# TYPE memcached_slab_items_reclaimed_total counter
# HELP memcached_slab_items_tailrepairs_total Total number of times the entries for a particular ID need repairing.
# TYPE memcached_slab_items_tailrepairs_total counter
# HELP memcached_slab_lru_hits_total Number of get_hits to the LRU.
# TYPE memcached_slab_lru_hits_total counter
# HELP memcached_slab_mem_requested_bytes Number of bytes of memory actual items take up within a slab.
# TYPE memcached_slab_mem_requested_bytes counter
# HELP memcached_slab_warm_age_seconds Age of the oldest item in HOT LRU.
# TYPE memcached_slab_warm_age_seconds gauge
# HELP memcached_slab_warm_items Number of items presently stored in the WARM LRU.
# TYPE memcached_slab_warm_items gauge
# HELP memcached_time_seconds current UNIX time according to the server.
# TYPE memcached_time_seconds gauge
# HELP memcached_up Could the memcached server be reached.
# TYPE memcached_up gauge
# HELP memcached_uptime_seconds Number of seconds since the server started.
# TYPE memcached_uptime_seconds counter
# HELP memcached_version The version of this memcached server.
# TYPE memcached_version gauge
# HELP memcached_written_bytes_total Total number of bytes sent by this server to network.
# TYPE memcached_written_bytes_total counter
```

There is also optional support to export metrics about the memcached process
itself by setting the `--memcached.pid-file <path>` flag. If the
memcached_exporter process has the rights to read /proc information of the
memcached process, then the following metrics will be exported additionally.

```
# HELP memcached_process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE memcached_process_cpu_seconds_total counter
# HELP memcached_process_max_fds Maximum number of open file descriptors.
# TYPE memcached_process_max_fds gauge
# HELP memcached_process_open_fds Number of open file descriptors.
# TYPE memcached_process_open_fds gauge
# HELP memcached_process_resident_memory_bytes Resident memory size in bytes.
# TYPE memcached_process_resident_memory_bytes gauge
# HELP memcached_process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE memcached_process_start_time_seconds gauge
# HELP memcached_process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE memcached_process_virtual_memory_bytes gauge
```

# Recommend Alert-Rule

TBD

# Dashboard

![memcached](https://grafana.com/api/dashboards/37/images/25/image)

[https://grafana.com/grafana/dashboards/37](https://grafana.com/grafana/dashboards/37)