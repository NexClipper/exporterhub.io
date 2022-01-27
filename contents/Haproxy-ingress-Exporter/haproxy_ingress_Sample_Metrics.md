# HELP haproxy_process_build_info HAProxy build info.
# TYPE haproxy_process_build_info gauge
haproxy_process_build_info{version="2.3.14-83c5b44"} 1
# HELP haproxy_process_nbthread Configured number of threads.
# TYPE haproxy_process_nbthread gauge
haproxy_process_nbthread 4
# HELP haproxy_process_nbproc Configured number of processes.
# TYPE haproxy_process_nbproc gauge
haproxy_process_nbproc 1
# HELP haproxy_process_relative_process_id Relative process id, starting at 1.
# TYPE haproxy_process_relative_process_id gauge
haproxy_process_relative_process_id 1
# HELP haproxy_process_start_time_seconds Start time in seconds.
# TYPE haproxy_process_start_time_seconds gauge
haproxy_process_start_time_seconds 1636061079
# HELP haproxy_process_max_memory_bytes Per-process memory limit (in bytes); 0=unset.
# TYPE haproxy_process_max_memory_bytes gauge
haproxy_process_max_memory_bytes 0
# HELP haproxy_process_pool_allocated_bytes Total amount of memory allocated in pools (in bytes).
# TYPE haproxy_process_pool_allocated_bytes gauge
haproxy_process_pool_allocated_bytes 1897856
# HELP haproxy_process_pool_used_bytes Total amount of memory used in pools (in bytes).
# TYPE haproxy_process_pool_used_bytes gauge
haproxy_process_pool_used_bytes 1794176
# HELP haproxy_process_pool_failures_total Total number of failed pool allocations.
# TYPE haproxy_process_pool_failures_total counter
haproxy_process_pool_failures_total 0
# HELP haproxy_process_max_fds Maximum number of open file descriptors; 0=unset.
# TYPE haproxy_process_max_fds gauge
haproxy_process_max_fds 4057
# HELP haproxy_process_max_sockets Maximum number of open sockets.
# TYPE haproxy_process_max_sockets gauge
haproxy_process_max_sockets 4057
# HELP haproxy_process_max_connections Maximum number of concurrent connections.
# TYPE haproxy_process_max_connections gauge
haproxy_process_max_connections 2000
# HELP haproxy_process_hard_max_connections Initial Maximum number of concurrent connections.
# TYPE haproxy_process_hard_max_connections gauge
haproxy_process_hard_max_connections 2000
# HELP haproxy_process_current_connections Number of active sessions.
# TYPE haproxy_process_current_connections gauge
haproxy_process_current_connections 2
# HELP haproxy_process_connections_total Total number of created sessions.
# TYPE haproxy_process_connections_total counter
haproxy_process_connections_total 1706501
# HELP haproxy_process_requests_total Total number of requests (TCP or HTTP).
# TYPE haproxy_process_requests_total counter
haproxy_process_requests_total 1396371
# HELP haproxy_process_max_ssl_connections Configured maximum number of concurrent SSL connections.
# TYPE haproxy_process_max_ssl_connections gauge
haproxy_process_max_ssl_connections 0
# HELP haproxy_process_current_ssl_connections Number of opened SSL connections.
# TYPE haproxy_process_current_ssl_connections gauge
haproxy_process_current_ssl_connections 0
# HELP haproxy_process_ssl_connections_total Total number of opened SSL connections.
# TYPE haproxy_process_ssl_connections_total counter
haproxy_process_ssl_connections_total 2170
# HELP haproxy_process_max_pipes Configured maximum number of pipes.
# TYPE haproxy_process_max_pipes gauge
haproxy_process_max_pipes 0
# HELP haproxy_process_pipes_used_total Number of pipes in used.
# TYPE haproxy_process_pipes_used_total counter
haproxy_process_pipes_used_total 0
# HELP haproxy_process_pipes_free_total Number of pipes unused.
# TYPE haproxy_process_pipes_free_total counter
haproxy_process_pipes_free_total 0
# HELP haproxy_process_current_connection_rate Current number of connections per second over last elapsed second.
# TYPE haproxy_process_current_connection_rate gauge
haproxy_process_current_connection_rate 1
# HELP haproxy_process_limit_connection_rate Configured maximum number of connections per second.
# TYPE haproxy_process_limit_connection_rate gauge
haproxy_process_limit_connection_rate 0
# HELP haproxy_process_max_connection_rate Maximum observed number of connections per second.
# TYPE haproxy_process_max_connection_rate gauge
haproxy_process_max_connection_rate 66
# HELP haproxy_process_current_session_rate Current number of sessions per second over last elapsed second.
# TYPE haproxy_process_current_session_rate gauge
haproxy_process_current_session_rate 1
# HELP haproxy_process_limit_session_rate Configured maximum number of sessions per second.
# TYPE haproxy_process_limit_session_rate gauge
haproxy_process_limit_session_rate 0
# HELP haproxy_process_max_session_rate Maximum observed number of sessions per second.
# TYPE haproxy_process_max_session_rate gauge
haproxy_process_max_session_rate 66
# HELP haproxy_process_current_ssl_rate Current number of SSL sessions per second over last elapsed second.
# TYPE haproxy_process_current_ssl_rate gauge
haproxy_process_current_ssl_rate 0
# HELP haproxy_process_limit_ssl_rate Configured maximum number of SSL sessions per second.
# TYPE haproxy_process_limit_ssl_rate gauge
haproxy_process_limit_ssl_rate 0
# HELP haproxy_process_max_ssl_rate Maximum observed number of SSL sessions per second.
# TYPE haproxy_process_max_ssl_rate gauge
haproxy_process_max_ssl_rate 66
# HELP haproxy_process_current_frontend_ssl_key_rate Current frontend SSL Key computation per second over last elapsed second.
# TYPE haproxy_process_current_frontend_ssl_key_rate gauge
haproxy_process_current_frontend_ssl_key_rate 0
# HELP haproxy_process_max_frontend_ssl_key_rate Maximum observed frontend SSL Key computation per second.
# TYPE haproxy_process_max_frontend_ssl_key_rate gauge
haproxy_process_max_frontend_ssl_key_rate 16
# HELP haproxy_process_frontend_ssl_reuse SSL session reuse ratio (percent).
# TYPE haproxy_process_frontend_ssl_reuse gauge
haproxy_process_frontend_ssl_reuse 0
# HELP haproxy_process_current_backend_ssl_key_rate Current backend SSL Key computation per second over last elapsed second.
# TYPE haproxy_process_current_backend_ssl_key_rate gauge
haproxy_process_current_backend_ssl_key_rate 0
# HELP haproxy_process_max_backend_ssl_key_rate Maximum observed backend SSL Key computation per second.
# TYPE haproxy_process_max_backend_ssl_key_rate gauge
haproxy_process_max_backend_ssl_key_rate 0
# HELP haproxy_process_ssl_cache_lookups_total Total number of SSL session cache lookups.
# TYPE haproxy_process_ssl_cache_lookups_total counter
haproxy_process_ssl_cache_lookups_total 385
# HELP haproxy_process_ssl_cache_misses_total Total number of SSL session cache misses.
# TYPE haproxy_process_ssl_cache_misses_total counter
haproxy_process_ssl_cache_misses_total 380
# HELP haproxy_process_http_comp_bytes_in_total Number of bytes per second over last elapsed second, before http compression.
# TYPE haproxy_process_http_comp_bytes_in_total counter
haproxy_process_http_comp_bytes_in_total 0
# HELP haproxy_process_http_comp_bytes_out_total Number of bytes per second over last elapsed second, after http compression.
# TYPE haproxy_process_http_comp_bytes_out_total counter
haproxy_process_http_comp_bytes_out_total 0
# HELP haproxy_process_limit_http_comp Configured maximum input compression rate in bytes.
# TYPE haproxy_process_limit_http_comp gauge
haproxy_process_limit_http_comp 0
# HELP haproxy_process_current_zlib_memory Current memory used for zlib in bytes.
# TYPE haproxy_process_current_zlib_memory gauge
haproxy_process_current_zlib_memory 0
# HELP haproxy_process_max_zlib_memory Configured maximum amount of memory for zlib in bytes.
# TYPE haproxy_process_max_zlib_memory gauge
haproxy_process_max_zlib_memory 0
# HELP haproxy_process_current_tasks Current number of tasks.
# TYPE haproxy_process_current_tasks gauge
haproxy_process_current_tasks 24
# HELP haproxy_process_current_run_queue Current number of tasks in the run-queue.
# TYPE haproxy_process_current_run_queue gauge
haproxy_process_current_run_queue 0
# HELP haproxy_process_idle_time_percent Idle to total ratio over last sample (percent).
# TYPE haproxy_process_idle_time_percent gauge
haproxy_process_idle_time_percent 100
# HELP haproxy_process_stopping Non zero means stopping in progress.
# TYPE haproxy_process_stopping gauge
haproxy_process_stopping 0
# HELP haproxy_process_jobs Current number of active jobs (listeners, sessions, open devices).
# TYPE haproxy_process_jobs gauge
haproxy_process_jobs 9
# HELP haproxy_process_unstoppable_jobs Current number of active jobs that can't be stopped during a soft stop.
# TYPE haproxy_process_unstoppable_jobs gauge
haproxy_process_unstoppable_jobs 1
# HELP haproxy_process_listeners Current number of active listeners.
# TYPE haproxy_process_listeners gauge
haproxy_process_listeners 7
# HELP haproxy_process_active_peers Current number of active peers.
# TYPE haproxy_process_active_peers gauge
haproxy_process_active_peers 0
# HELP haproxy_process_connected_peers Current number of connected peers.
# TYPE haproxy_process_connected_peers gauge
haproxy_process_connected_peers 0
# HELP haproxy_process_dropped_logs_total Total number of dropped logs.
# TYPE haproxy_process_dropped_logs_total counter
haproxy_process_dropped_logs_total 19
# HELP haproxy_process_busy_polling_enabled Non zero if the busy polling is enabled.
# TYPE haproxy_process_busy_polling_enabled gauge
haproxy_process_busy_polling_enabled 0
# HELP haproxy_process_failed_resolutions Total number of failed DNS resolutions.
# TYPE haproxy_process_failed_resolutions counter
haproxy_process_failed_resolutions 0
# HELP haproxy_process_bytes_out_total Total number of bytes emitted.
# TYPE haproxy_process_bytes_out_total counter
haproxy_process_bytes_out_total 2368781460
# HELP haproxy_process_spliced_bytes_out_total Total number of bytes emitted through a kernel pipe.
# TYPE haproxy_process_spliced_bytes_out_total counter
haproxy_process_spliced_bytes_out_total 0
# HELP haproxy_process_bytes_out_rate Number of bytes emitted over the last elapsed second.
# TYPE haproxy_process_bytes_out_rate gauge
haproxy_process_bytes_out_rate 90272
# HELP haproxy_frontend_status Current status of the service (frontend: 0=STOP, 1=UP - backend: 0=DOWN, 1=UP - server: 0=DOWN, 1=UP, 2=MAINT, 3=DRAIN, 4=NOLB).
# TYPE haproxy_frontend_status gauge
haproxy_frontend_status{proxy="_front_http"} 1
haproxy_frontend_status{proxy="_front_https"} 1
haproxy_frontend_status{proxy="stats"} 1
haproxy_frontend_status{proxy="prometheus"} 1
haproxy_frontend_status{proxy="healthz"} 1
# HELP haproxy_frontend_current_sessions Current number of active sessions.
# TYPE haproxy_frontend_current_sessions gauge
haproxy_frontend_current_sessions{proxy="_front_http"} 0
haproxy_frontend_current_sessions{proxy="_front_https"} 0
haproxy_frontend_current_sessions{proxy="stats"} 0
haproxy_frontend_current_sessions{proxy="prometheus"} 2
haproxy_frontend_current_sessions{proxy="healthz"} 0
# HELP haproxy_frontend_max_sessions Maximum observed number of active sessions.
# TYPE haproxy_frontend_max_sessions gauge
haproxy_frontend_max_sessions{proxy="_front_http"} 7
haproxy_frontend_max_sessions{proxy="_front_https"} 18
haproxy_frontend_max_sessions{proxy="stats"} 0
haproxy_frontend_max_sessions{proxy="prometheus"} 4
haproxy_frontend_max_sessions{proxy="healthz"} 5
# HELP haproxy_frontend_limit_sessions Configured session limit.
# TYPE haproxy_frontend_limit_sessions gauge
haproxy_frontend_limit_sessions{proxy="_front_http"} 2000
haproxy_frontend_limit_sessions{proxy="_front_https"} 2000
haproxy_frontend_limit_sessions{proxy="stats"} 2000
haproxy_frontend_limit_sessions{proxy="prometheus"} 2000
haproxy_frontend_limit_sessions{proxy="healthz"} 2000
# HELP haproxy_frontend_sessions_total Total number of sessions.
# TYPE haproxy_frontend_sessions_total counter
haproxy_frontend_sessions_total{proxy="_front_http"} 806
haproxy_frontend_sessions_total{proxy="_front_https"} 513
haproxy_frontend_sessions_total{proxy="stats"} 0
haproxy_frontend_sessions_total{proxy="prometheus"} 10463
haproxy_frontend_sessions_total{proxy="healthz"} 125524
# HELP haproxy_frontend_limit_session_rate Configured limit on new sessions per second.
# TYPE haproxy_frontend_limit_session_rate gauge
haproxy_frontend_limit_session_rate{proxy="_front_http"} 0
haproxy_frontend_limit_session_rate{proxy="_front_https"} 0
haproxy_frontend_limit_session_rate{proxy="stats"} 0
haproxy_frontend_limit_session_rate{proxy="prometheus"} 0
haproxy_frontend_limit_session_rate{proxy="healthz"} 0
# HELP haproxy_frontend_max_session_rate Maximum observed number of sessions per second.
# TYPE haproxy_frontend_max_session_rate gauge
haproxy_frontend_max_session_rate{proxy="_front_http"} 18
haproxy_frontend_max_session_rate{proxy="_front_https"} 16
haproxy_frontend_max_session_rate{proxy="stats"} 0
haproxy_frontend_max_session_rate{proxy="prometheus"} 1
haproxy_frontend_max_session_rate{proxy="healthz"} 2
# HELP haproxy_frontend_connections_rate_max Maximum observed number of connections per second.
# TYPE haproxy_frontend_connections_rate_max gauge
haproxy_frontend_connections_rate_max{proxy="_front_http"} 18
haproxy_frontend_connections_rate_max{proxy="_front_https"} 66
haproxy_frontend_connections_rate_max{proxy="stats"} 0
haproxy_frontend_connections_rate_max{proxy="prometheus"} 1
haproxy_frontend_connections_rate_max{proxy="healthz"} 2
# HELP haproxy_frontend_connections_total Total number of connections.
# TYPE haproxy_frontend_connections_total counter
haproxy_frontend_connections_total{proxy="_front_http"} 806
haproxy_frontend_connections_total{proxy="_front_https"} 2170
haproxy_frontend_connections_total{proxy="stats"} 0
haproxy_frontend_connections_total{proxy="prometheus"} 10463
haproxy_frontend_connections_total{proxy="healthz"} 125524
# HELP haproxy_frontend_bytes_in_total Current total of incoming bytes.
# TYPE haproxy_frontend_bytes_in_total counter
haproxy_frontend_bytes_in_total{proxy="_front_http"} 146543
haproxy_frontend_bytes_in_total{proxy="_front_https"} 81344
haproxy_frontend_bytes_in_total{proxy="stats"} 0
haproxy_frontend_bytes_in_total{proxy="prometheus"} 2575498
haproxy_frontend_bytes_in_total{proxy="healthz"} 12677924
# HELP haproxy_frontend_bytes_out_total Current total of outgoing bytes.
# TYPE haproxy_frontend_bytes_out_total counter
haproxy_frontend_bytes_out_total{proxy="_front_http"} 128284
haproxy_frontend_bytes_out_total{proxy="_front_https"} 84826
haproxy_frontend_bytes_out_total{proxy="stats"} 0
haproxy_frontend_bytes_out_total{proxy="prometheus"} 919054995
haproxy_frontend_bytes_out_total{proxy="healthz"} 19456220
# HELP haproxy_frontend_requests_denied_total Total number of denied requests.
# TYPE haproxy_frontend_requests_denied_total counter
haproxy_frontend_requests_denied_total{proxy="_front_http"} 0
haproxy_frontend_requests_denied_total{proxy="_front_https"} 0
haproxy_frontend_requests_denied_total{proxy="stats"} 0
haproxy_frontend_requests_denied_total{proxy="prometheus"} 0
haproxy_frontend_requests_denied_total{proxy="healthz"} 0
# HELP haproxy_frontend_responses_denied_total Total number of denied responses.
# TYPE haproxy_frontend_responses_denied_total counter
haproxy_frontend_responses_denied_total{proxy="_front_http"} 0
haproxy_frontend_responses_denied_total{proxy="_front_https"} 0
haproxy_frontend_responses_denied_total{proxy="stats"} 0
haproxy_frontend_responses_denied_total{proxy="prometheus"} 0
haproxy_frontend_responses_denied_total{proxy="healthz"} 0
# HELP haproxy_frontend_request_errors_total Total number of request errors.
# TYPE haproxy_frontend_request_errors_total counter
haproxy_frontend_request_errors_total{proxy="_front_http"} 114
haproxy_frontend_request_errors_total{proxy="_front_https"} 108
haproxy_frontend_request_errors_total{proxy="stats"} 0
haproxy_frontend_request_errors_total{proxy="prometheus"} 0
haproxy_frontend_request_errors_total{proxy="healthz"} 0
# HELP haproxy_frontend_denied_connections_total Total number of requests denied by "tcp-request connection" rules.
# TYPE haproxy_frontend_denied_connections_total counter
haproxy_frontend_denied_connections_total{proxy="_front_http"} 0
haproxy_frontend_denied_connections_total{proxy="_front_https"} 0
haproxy_frontend_denied_connections_total{proxy="stats"} 0
haproxy_frontend_denied_connections_total{proxy="prometheus"} 0
haproxy_frontend_denied_connections_total{proxy="healthz"} 0
# HELP haproxy_frontend_denied_sessions_total Total number of requests denied by "tcp-request session" rules.
# TYPE haproxy_frontend_denied_sessions_total counter
haproxy_frontend_denied_sessions_total{proxy="_front_http"} 0
haproxy_frontend_denied_sessions_total{proxy="_front_https"} 0
haproxy_frontend_denied_sessions_total{proxy="stats"} 0
haproxy_frontend_denied_sessions_total{proxy="prometheus"} 0
haproxy_frontend_denied_sessions_total{proxy="healthz"} 0
# HELP haproxy_frontend_failed_header_rewriting_total Total number of failed header rewriting warnings.
# TYPE haproxy_frontend_failed_header_rewriting_total counter
haproxy_frontend_failed_header_rewriting_total{proxy="_front_http"} 0
haproxy_frontend_failed_header_rewriting_total{proxy="_front_https"} 0
haproxy_frontend_failed_header_rewriting_total{proxy="stats"} 0
haproxy_frontend_failed_header_rewriting_total{proxy="prometheus"} 0
haproxy_frontend_failed_header_rewriting_total{proxy="healthz"} 0
# HELP haproxy_frontend_internal_errors_total Total number of internal errors.
# TYPE haproxy_frontend_internal_errors_total counter
haproxy_frontend_internal_errors_total{proxy="_front_http"} 0
haproxy_frontend_internal_errors_total{proxy="_front_https"} 0
haproxy_frontend_internal_errors_total{proxy="stats"} 0
haproxy_frontend_internal_errors_total{proxy="prometheus"} 0
haproxy_frontend_internal_errors_total{proxy="healthz"} 0
# HELP haproxy_frontend_http_requests_rate_max Maximum observed number of HTTP requests per second.
# TYPE haproxy_frontend_http_requests_rate_max gauge
haproxy_frontend_http_requests_rate_max{proxy="_front_http"} 18
haproxy_frontend_http_requests_rate_max{proxy="_front_https"} 16
haproxy_frontend_http_requests_rate_max{proxy="stats"} 0
haproxy_frontend_http_requests_rate_max{proxy="prometheus"} 2
haproxy_frontend_http_requests_rate_max{proxy="healthz"} 2
# HELP haproxy_frontend_http_requests_total Total number of HTTP requests received.
# TYPE haproxy_frontend_http_requests_total counter
haproxy_frontend_http_requests_total{proxy="_front_http"} 808
haproxy_frontend_http_requests_total{proxy="_front_https"} 516
haproxy_frontend_http_requests_total{proxy="stats"} 0
haproxy_frontend_http_requests_total{proxy="prometheus"} 10465
haproxy_frontend_http_requests_total{proxy="healthz"} 125524
# HELP haproxy_frontend_http_responses_total Total number of HTTP responses.
# TYPE haproxy_frontend_http_responses_total counter
haproxy_frontend_http_responses_total{proxy="_front_http",code="1xx"} 0
haproxy_frontend_http_responses_total{proxy="_front_https",code="1xx"} 0
haproxy_frontend_http_responses_total{proxy="stats",code="1xx"} 0
haproxy_frontend_http_responses_total{proxy="prometheus",code="1xx"} 0
haproxy_frontend_http_responses_total{proxy="healthz",code="1xx"} 0
haproxy_frontend_http_responses_total{proxy="_front_http",code="2xx"} 0
haproxy_frontend_http_responses_total{proxy="_front_https",code="2xx"} 0
haproxy_frontend_http_responses_total{proxy="stats",code="2xx"} 0
haproxy_frontend_http_responses_total{proxy="prometheus",code="2xx"} 10464
haproxy_frontend_http_responses_total{proxy="healthz",code="2xx"} 125524
haproxy_frontend_http_responses_total{proxy="_front_http",code="3xx"} 9
haproxy_frontend_http_responses_total{proxy="_front_https",code="3xx"} 11
haproxy_frontend_http_responses_total{proxy="stats",code="3xx"} 0
haproxy_frontend_http_responses_total{proxy="prometheus",code="3xx"} 0
haproxy_frontend_http_responses_total{proxy="healthz",code="3xx"} 0
haproxy_frontend_http_responses_total{proxy="_front_http",code="4xx"} 797
haproxy_frontend_http_responses_total{proxy="_front_https",code="4xx"} 505
haproxy_frontend_http_responses_total{proxy="stats",code="4xx"} 0
haproxy_frontend_http_responses_total{proxy="prometheus",code="4xx"} 0
haproxy_frontend_http_responses_total{proxy="healthz",code="4xx"} 0
haproxy_frontend_http_responses_total{proxy="_front_http",code="5xx"} 1
haproxy_frontend_http_responses_total{proxy="_front_https",code="5xx"} 0
haproxy_frontend_http_responses_total{proxy="stats",code="5xx"} 0
haproxy_frontend_http_responses_total{proxy="prometheus",code="5xx"} 0
haproxy_frontend_http_responses_total{proxy="healthz",code="5xx"} 0
haproxy_frontend_http_responses_total{proxy="_front_http",code="other"} 1
haproxy_frontend_http_responses_total{proxy="_front_https",code="other"} 0
haproxy_frontend_http_responses_total{proxy="stats",code="other"} 0
haproxy_frontend_http_responses_total{proxy="prometheus",code="other"} 0
haproxy_frontend_http_responses_total{proxy="healthz",code="other"} 0
# HELP haproxy_frontend_intercepted_requests_total Total number of intercepted HTTP requests.
# TYPE haproxy_frontend_intercepted_requests_total counter
haproxy_frontend_intercepted_requests_total{proxy="_front_http"} 0
haproxy_frontend_intercepted_requests_total{proxy="_front_https"} 0
haproxy_frontend_intercepted_requests_total{proxy="stats"} 0
haproxy_frontend_intercepted_requests_total{proxy="prometheus"} 10465
haproxy_frontend_intercepted_requests_total{proxy="healthz"} 125524
# HELP haproxy_frontend_http_cache_lookups_total Total number of HTTP cache lookups.
# TYPE haproxy_frontend_http_cache_lookups_total counter
haproxy_frontend_http_cache_lookups_total{proxy="_front_http"} 0
haproxy_frontend_http_cache_lookups_total{proxy="_front_https"} 0
haproxy_frontend_http_cache_lookups_total{proxy="stats"} 0
haproxy_frontend_http_cache_lookups_total{proxy="prometheus"} 0
haproxy_frontend_http_cache_lookups_total{proxy="healthz"} 0
# HELP haproxy_frontend_http_cache_hits_total Total number of HTTP cache hits.
# TYPE haproxy_frontend_http_cache_hits_total counter
haproxy_frontend_http_cache_hits_total{proxy="_front_http"} 0
haproxy_frontend_http_cache_hits_total{proxy="_front_https"} 0
haproxy_frontend_http_cache_hits_total{proxy="stats"} 0
haproxy_frontend_http_cache_hits_total{proxy="prometheus"} 0
haproxy_frontend_http_cache_hits_total{proxy="healthz"} 0
# HELP haproxy_frontend_http_comp_bytes_in_total Total number of HTTP response bytes fed to the compressor.
# TYPE haproxy_frontend_http_comp_bytes_in_total counter
haproxy_frontend_http_comp_bytes_in_total{proxy="_front_http"} 0
haproxy_frontend_http_comp_bytes_in_total{proxy="_front_https"} 0
haproxy_frontend_http_comp_bytes_in_total{proxy="stats"} 0
haproxy_frontend_http_comp_bytes_in_total{proxy="prometheus"} 0
haproxy_frontend_http_comp_bytes_in_total{proxy="healthz"} 0
# HELP haproxy_frontend_http_comp_bytes_out_total Total number of HTTP response bytes emitted by the compressor.
# TYPE haproxy_frontend_http_comp_bytes_out_total counter
haproxy_frontend_http_comp_bytes_out_total{proxy="_front_http"} 0
haproxy_frontend_http_comp_bytes_out_total{proxy="_front_https"} 0
haproxy_frontend_http_comp_bytes_out_total{proxy="stats"} 0
haproxy_frontend_http_comp_bytes_out_total{proxy="prometheus"} 0
haproxy_frontend_http_comp_bytes_out_total{proxy="healthz"} 0
# HELP haproxy_frontend_http_comp_bytes_bypassed_total Total number of bytes that bypassed the HTTP compressor (CPU/BW limit).
# TYPE haproxy_frontend_http_comp_bytes_bypassed_total counter
haproxy_frontend_http_comp_bytes_bypassed_total{proxy="_front_http"} 0
haproxy_frontend_http_comp_bytes_bypassed_total{proxy="_front_https"} 0
haproxy_frontend_http_comp_bytes_bypassed_total{proxy="stats"} 0
haproxy_frontend_http_comp_bytes_bypassed_total{proxy="prometheus"} 0
haproxy_frontend_http_comp_bytes_bypassed_total{proxy="healthz"} 0
# HELP haproxy_frontend_http_comp_responses_total Total number of HTTP responses that were compressed.
# TYPE haproxy_frontend_http_comp_responses_total counter
haproxy_frontend_http_comp_responses_total{proxy="_front_http"} 0
haproxy_frontend_http_comp_responses_total{proxy="_front_https"} 0
haproxy_frontend_http_comp_responses_total{proxy="stats"} 0
haproxy_frontend_http_comp_responses_total{proxy="prometheus"} 0
haproxy_frontend_http_comp_responses_total{proxy="healthz"} 0
# HELP haproxy_backend_status Current status of the service (frontend: 0=STOP, 1=UP - backend: 0=DOWN, 1=UP - server: 0=DOWN, 1=UP, 2=MAINT, 3=DRAIN, 4=NOLB).
# TYPE haproxy_backend_status gauge
haproxy_backend_status{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 1
haproxy_backend_status{proxy="stats"} 1
# HELP haproxy_backend_current_sessions Current number of active sessions.
# TYPE haproxy_backend_current_sessions gauge
haproxy_backend_current_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_current_sessions{proxy="stats"} 0
# HELP haproxy_backend_max_sessions Maximum observed number of active sessions.
# TYPE haproxy_backend_max_sessions gauge
haproxy_backend_max_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 9
haproxy_backend_max_sessions{proxy="stats"} 0
# HELP haproxy_backend_limit_sessions Configured session limit.
# TYPE haproxy_backend_limit_sessions gauge
haproxy_backend_limit_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 400
haproxy_backend_limit_sessions{proxy="stats"} 200
# HELP haproxy_backend_sessions_total Total number of sessions.
# TYPE haproxy_backend_sessions_total counter
haproxy_backend_sessions_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 1102
haproxy_backend_sessions_total{proxy="stats"} 0
# HELP haproxy_backend_max_session_rate Maximum observed number of sessions per second.
# TYPE haproxy_backend_max_session_rate gauge
haproxy_backend_max_session_rate{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 28
haproxy_backend_max_session_rate{proxy="stats"} 0
# HELP haproxy_backend_last_session_seconds Number of seconds since last session assigned to server/backend.
# TYPE haproxy_backend_last_session_seconds gauge
haproxy_backend_last_session_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 15
haproxy_backend_last_session_seconds{proxy="stats"} -1
# HELP haproxy_backend_current_queue Current number of queued requests.
# TYPE haproxy_backend_current_queue gauge
haproxy_backend_current_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_current_queue{proxy="stats"} 0
# HELP haproxy_backend_max_queue Maximum observed number of queued requests.
# TYPE haproxy_backend_max_queue gauge
haproxy_backend_max_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_max_queue{proxy="stats"} 0
# HELP haproxy_backend_connection_attempts_total Total number of connection establishment attempts.
# TYPE haproxy_backend_connection_attempts_total counter
haproxy_backend_connection_attempts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 1097
haproxy_backend_connection_attempts_total{proxy="stats"} 0
# HELP haproxy_backend_connection_reuses_total Total number of connection reuses.
# TYPE haproxy_backend_connection_reuses_total counter
haproxy_backend_connection_reuses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 5
haproxy_backend_connection_reuses_total{proxy="stats"} 0
# HELP haproxy_backend_bytes_in_total Current total of incoming bytes.
# TYPE haproxy_backend_bytes_in_total counter
haproxy_backend_bytes_in_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 227887
haproxy_backend_bytes_in_total{proxy="stats"} 0
# HELP haproxy_backend_bytes_out_total Current total of outgoing bytes.
# TYPE haproxy_backend_bytes_out_total counter
haproxy_backend_bytes_out_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 167803
haproxy_backend_bytes_out_total{proxy="stats"} 0
# HELP haproxy_backend_queue_time_average_seconds Avg. queue time for last 1024 successful connections.
# TYPE haproxy_backend_queue_time_average_seconds gauge
haproxy_backend_queue_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0.000000
haproxy_backend_queue_time_average_seconds{proxy="stats"} 0.000000
# HELP haproxy_backend_connect_time_average_seconds Avg. connect time for last 1024 successful connections.
# TYPE haproxy_backend_connect_time_average_seconds gauge
haproxy_backend_connect_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0.001000
haproxy_backend_connect_time_average_seconds{proxy="stats"} 0.000000
# HELP haproxy_backend_response_time_average_seconds Avg. response time for last 1024 successful connections.
# TYPE haproxy_backend_response_time_average_seconds gauge
haproxy_backend_response_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0.044000
haproxy_backend_response_time_average_seconds{proxy="stats"} 0.000000
# HELP haproxy_backend_total_time_average_seconds Avg. total time for last 1024 successful connections.
# TYPE haproxy_backend_total_time_average_seconds gauge
haproxy_backend_total_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0.384000
haproxy_backend_total_time_average_seconds{proxy="stats"} 0.000000
# HELP haproxy_backend_max_queue_time_seconds Maximum observed time spent in the queue
# TYPE haproxy_backend_max_queue_time_seconds gauge
haproxy_backend_max_queue_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0.000000
haproxy_backend_max_queue_time_seconds{proxy="stats"} 0.000000
# HELP haproxy_backend_max_connect_time_seconds Maximum observed time spent waiting for a connection to complete
# TYPE haproxy_backend_max_connect_time_seconds gauge
haproxy_backend_max_connect_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0.028000
haproxy_backend_max_connect_time_seconds{proxy="stats"} 0.000000
# HELP haproxy_backend_max_response_time_seconds Maximum observed time spent waiting for a server response
# TYPE haproxy_backend_max_response_time_seconds gauge
haproxy_backend_max_response_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 10.001000
haproxy_backend_max_response_time_seconds{proxy="stats"} 0.000000
# HELP haproxy_backend_max_total_time_seconds Maximum observed total request+response time (request+queue+connect+response+processing)
# TYPE haproxy_backend_max_total_time_seconds gauge
haproxy_backend_max_total_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 15.816000
haproxy_backend_max_total_time_seconds{proxy="stats"} 0.000000
# HELP haproxy_backend_requests_denied_total Total number of denied requests.
# TYPE haproxy_backend_requests_denied_total counter
haproxy_backend_requests_denied_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_requests_denied_total{proxy="stats"} 0
# HELP haproxy_backend_responses_denied_total Total number of denied responses.
# TYPE haproxy_backend_responses_denied_total counter
haproxy_backend_responses_denied_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_responses_denied_total{proxy="stats"} 0
# HELP haproxy_backend_connection_errors_total Total number of connection errors.
# TYPE haproxy_backend_connection_errors_total counter
haproxy_backend_connection_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_connection_errors_total{proxy="stats"} 0
# HELP haproxy_backend_response_errors_total Total number of response errors.
# TYPE haproxy_backend_response_errors_total counter
haproxy_backend_response_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 1
haproxy_backend_response_errors_total{proxy="stats"} 0
# HELP haproxy_backend_retry_warnings_total Total number of retry warnings.
# TYPE haproxy_backend_retry_warnings_total counter
haproxy_backend_retry_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_retry_warnings_total{proxy="stats"} 0
# HELP haproxy_backend_redispatch_warnings_total Total number of redispatch warnings.
# TYPE haproxy_backend_redispatch_warnings_total counter
haproxy_backend_redispatch_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_redispatch_warnings_total{proxy="stats"} 0
# HELP haproxy_backend_failed_header_rewriting_total Total number of failed header rewriting warnings.
# TYPE haproxy_backend_failed_header_rewriting_total counter
haproxy_backend_failed_header_rewriting_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_failed_header_rewriting_total{proxy="stats"} 0
# HELP haproxy_backend_internal_errors_total Total number of internal errors.
# TYPE haproxy_backend_internal_errors_total counter
haproxy_backend_internal_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_internal_errors_total{proxy="stats"} 0
# HELP haproxy_backend_client_aborts_total Total number of data transfers aborted by the client.
# TYPE haproxy_backend_client_aborts_total counter
haproxy_backend_client_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 8
haproxy_backend_client_aborts_total{proxy="stats"} 0
# HELP haproxy_backend_server_aborts_total Total number of data transfers aborted by the server.
# TYPE haproxy_backend_server_aborts_total counter
haproxy_backend_server_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_server_aborts_total{proxy="stats"} 0
# HELP haproxy_backend_weight Service weight.
# TYPE haproxy_backend_weight gauge
haproxy_backend_weight{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 1
haproxy_backend_weight{proxy="stats"} 0
# HELP haproxy_backend_active_servers Current number of active servers.
# TYPE haproxy_backend_active_servers gauge
haproxy_backend_active_servers{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 1
haproxy_backend_active_servers{proxy="stats"} 0
# HELP haproxy_backend_backup_servers Current number of backup servers.
# TYPE haproxy_backend_backup_servers gauge
haproxy_backend_backup_servers{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_backup_servers{proxy="stats"} 0
# HELP haproxy_backend_check_up_down_total Total number of UP->DOWN transitions.
# TYPE haproxy_backend_check_up_down_total counter
haproxy_backend_check_up_down_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_check_up_down_total{proxy="stats"} 0
# HELP haproxy_backend_check_last_change_seconds Number of seconds since the last UP<->DOWN transition.
# TYPE haproxy_backend_check_last_change_seconds gauge
haproxy_backend_check_last_change_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 627626
haproxy_backend_check_last_change_seconds{proxy="stats"} 627626
# HELP haproxy_backend_downtime_seconds_total Total downtime (in seconds) for the service.
# TYPE haproxy_backend_downtime_seconds_total counter
haproxy_backend_downtime_seconds_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_downtime_seconds_total{proxy="stats"} 627626
# HELP haproxy_backend_loadbalanced_total Total number of times a service was selected, either for new sessions, or when redispatching.
# TYPE haproxy_backend_loadbalanced_total counter
haproxy_backend_loadbalanced_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 1102
haproxy_backend_loadbalanced_total{proxy="stats"} 0
# HELP haproxy_backend_http_requests_total Total number of HTTP requests received.
# TYPE haproxy_backend_http_requests_total counter
haproxy_backend_http_requests_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 1102
haproxy_backend_http_requests_total{proxy="stats"} 0
# HELP haproxy_backend_http_responses_total Total number of HTTP responses.
# TYPE haproxy_backend_http_responses_total counter
haproxy_backend_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",code="1xx"} 0
haproxy_backend_http_responses_total{proxy="stats",code="1xx"} 0
haproxy_backend_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",code="2xx"} 0
haproxy_backend_http_responses_total{proxy="stats",code="2xx"} 0
haproxy_backend_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",code="3xx"} 20
haproxy_backend_http_responses_total{proxy="stats",code="3xx"} 0
haproxy_backend_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",code="4xx"} 1080
haproxy_backend_http_responses_total{proxy="stats",code="4xx"} 0
haproxy_backend_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",code="5xx"} 1
haproxy_backend_http_responses_total{proxy="stats",code="5xx"} 0
haproxy_backend_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",code="other"} 1
haproxy_backend_http_responses_total{proxy="stats",code="other"} 0
# HELP haproxy_backend_http_cache_lookups_total Total number of HTTP cache lookups.
# TYPE haproxy_backend_http_cache_lookups_total counter
haproxy_backend_http_cache_lookups_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_http_cache_lookups_total{proxy="stats"} 0
# HELP haproxy_backend_http_cache_hits_total Total number of HTTP cache hits.
# TYPE haproxy_backend_http_cache_hits_total counter
haproxy_backend_http_cache_hits_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_http_cache_hits_total{proxy="stats"} 0
# HELP haproxy_backend_http_comp_bytes_in_total Total number of HTTP response bytes fed to the compressor.
# TYPE haproxy_backend_http_comp_bytes_in_total counter
haproxy_backend_http_comp_bytes_in_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_http_comp_bytes_in_total{proxy="stats"} 0
# HELP haproxy_backend_http_comp_bytes_out_total Total number of HTTP response bytes emitted by the compressor.
# TYPE haproxy_backend_http_comp_bytes_out_total counter
haproxy_backend_http_comp_bytes_out_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_http_comp_bytes_out_total{proxy="stats"} 0
# HELP haproxy_backend_http_comp_bytes_bypassed_total Total number of bytes that bypassed the HTTP compressor (CPU/BW limit).
# TYPE haproxy_backend_http_comp_bytes_bypassed_total counter
haproxy_backend_http_comp_bytes_bypassed_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_http_comp_bytes_bypassed_total{proxy="stats"} 0
# HELP haproxy_backend_http_comp_responses_total Total number of HTTP responses that were compressed.
# TYPE haproxy_backend_http_comp_responses_total counter
haproxy_backend_http_comp_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http"} 0
haproxy_backend_http_comp_responses_total{proxy="stats"} 0
# HELP haproxy_server_status Current status of the service (frontend: 0=STOP, 1=UP - backend: 0=DOWN, 1=UP - server: 0=DOWN, 1=UP, 2=MAINT, 3=DRAIN, 4=NOLB).
# TYPE haproxy_server_status gauge
haproxy_server_status{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 1
haproxy_server_status{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 2
haproxy_server_status{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 2
haproxy_server_status{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 2
haproxy_server_status{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 2
haproxy_server_status{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 2
haproxy_server_status{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 2
# HELP haproxy_server_current_sessions Current number of active sessions.
# TYPE haproxy_server_current_sessions gauge
haproxy_server_current_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_current_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_current_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_current_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_current_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_current_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_current_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_max_sessions Maximum observed number of active sessions.
# TYPE haproxy_server_max_sessions gauge
haproxy_server_max_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 9
haproxy_server_max_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_max_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_max_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_max_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_max_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_max_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_limit_sessions Configured session limit.
# TYPE haproxy_server_limit_sessions gauge
haproxy_server_limit_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_limit_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_limit_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_limit_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_limit_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_limit_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_limit_sessions{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_sessions_total Total number of sessions.
# TYPE haproxy_server_sessions_total counter
haproxy_server_sessions_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 1102
haproxy_server_sessions_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_sessions_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_sessions_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_sessions_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_sessions_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_sessions_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_max_session_rate Maximum observed number of sessions per second.
# TYPE haproxy_server_max_session_rate gauge
haproxy_server_max_session_rate{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 28
haproxy_server_max_session_rate{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_max_session_rate{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_max_session_rate{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_max_session_rate{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_max_session_rate{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_max_session_rate{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_last_session_seconds Number of seconds since last session assigned to server/backend.
# TYPE haproxy_server_last_session_seconds gauge
haproxy_server_last_session_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 15
haproxy_server_last_session_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} -1
haproxy_server_last_session_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} -1
haproxy_server_last_session_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} -1
haproxy_server_last_session_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} -1
haproxy_server_last_session_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} -1
haproxy_server_last_session_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} -1
# HELP haproxy_server_current_queue Current number of queued requests.
# TYPE haproxy_server_current_queue gauge
haproxy_server_current_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_current_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_current_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_current_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_current_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_current_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_current_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_max_queue Maximum observed number of queued requests.
# TYPE haproxy_server_max_queue gauge
haproxy_server_max_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_max_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_max_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_max_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_max_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_max_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_max_queue{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_queue_limit Configured maxqueue for the server (0 meaning no limit).
# TYPE haproxy_server_queue_limit gauge
haproxy_server_queue_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_queue_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_queue_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_queue_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_queue_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_queue_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_queue_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_bytes_in_total Current total of incoming bytes.
# TYPE haproxy_server_bytes_in_total counter
haproxy_server_bytes_in_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 227887
haproxy_server_bytes_in_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_bytes_in_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_bytes_in_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_bytes_in_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_bytes_in_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_bytes_in_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_bytes_out_total Current total of outgoing bytes.
# TYPE haproxy_server_bytes_out_total counter
haproxy_server_bytes_out_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 167803
haproxy_server_bytes_out_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_bytes_out_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_bytes_out_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_bytes_out_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_bytes_out_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_bytes_out_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_queue_time_average_seconds Avg. queue time for last 1024 successful connections.
# TYPE haproxy_server_queue_time_average_seconds gauge
haproxy_server_queue_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0.000000
haproxy_server_queue_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0.000000
haproxy_server_queue_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0.000000
haproxy_server_queue_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0.000000
haproxy_server_queue_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0.000000
haproxy_server_queue_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0.000000
haproxy_server_queue_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0.000000
# HELP haproxy_server_connect_time_average_seconds Avg. connect time for last 1024 successful connections.
# TYPE haproxy_server_connect_time_average_seconds gauge
haproxy_server_connect_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0.001000
haproxy_server_connect_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0.000000
haproxy_server_connect_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0.000000
haproxy_server_connect_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0.000000
haproxy_server_connect_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0.000000
haproxy_server_connect_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0.000000
haproxy_server_connect_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0.000000
# HELP haproxy_server_response_time_average_seconds Avg. response time for last 1024 successful connections.
# TYPE haproxy_server_response_time_average_seconds gauge
haproxy_server_response_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0.044000
haproxy_server_response_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0.000000
haproxy_server_response_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0.000000
haproxy_server_response_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0.000000
haproxy_server_response_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0.000000
haproxy_server_response_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0.000000
haproxy_server_response_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0.000000
# HELP haproxy_server_total_time_average_seconds Avg. total time for last 1024 successful connections.
# TYPE haproxy_server_total_time_average_seconds gauge
haproxy_server_total_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0.384000
haproxy_server_total_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0.000000
haproxy_server_total_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0.000000
haproxy_server_total_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0.000000
haproxy_server_total_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0.000000
haproxy_server_total_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0.000000
haproxy_server_total_time_average_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0.000000
# HELP haproxy_server_max_queue_time_seconds Maximum observed time spent in the queue
# TYPE haproxy_server_max_queue_time_seconds gauge
haproxy_server_max_queue_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0.000000
haproxy_server_max_queue_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0.000000
haproxy_server_max_queue_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0.000000
haproxy_server_max_queue_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0.000000
haproxy_server_max_queue_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0.000000
haproxy_server_max_queue_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0.000000
haproxy_server_max_queue_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0.000000
# HELP haproxy_server_max_connect_time_seconds Maximum observed time spent waiting for a connection to complete
# TYPE haproxy_server_max_connect_time_seconds gauge
haproxy_server_max_connect_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0.028000
haproxy_server_max_connect_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0.000000
haproxy_server_max_connect_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0.000000
haproxy_server_max_connect_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0.000000
haproxy_server_max_connect_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0.000000
haproxy_server_max_connect_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0.000000
haproxy_server_max_connect_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0.000000
# HELP haproxy_server_max_response_time_seconds Maximum observed time spent waiting for a server response
# TYPE haproxy_server_max_response_time_seconds gauge
haproxy_server_max_response_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 10.001000
haproxy_server_max_response_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0.000000
haproxy_server_max_response_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0.000000
haproxy_server_max_response_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0.000000
haproxy_server_max_response_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0.000000
haproxy_server_max_response_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0.000000
haproxy_server_max_response_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0.000000
# HELP haproxy_server_max_total_time_seconds Maximum observed total request+response time (request+queue+connect+response+processing)
# TYPE haproxy_server_max_total_time_seconds gauge
haproxy_server_max_total_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 15.816000
haproxy_server_max_total_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0.000000
haproxy_server_max_total_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0.000000
haproxy_server_max_total_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0.000000
haproxy_server_max_total_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0.000000
haproxy_server_max_total_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0.000000
haproxy_server_max_total_time_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0.000000
# HELP haproxy_server_connection_attempts_total Total number of connection establishment attempts.
# TYPE haproxy_server_connection_attempts_total counter
haproxy_server_connection_attempts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 1097
haproxy_server_connection_attempts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_connection_attempts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_connection_attempts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_connection_attempts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_connection_attempts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_connection_attempts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_connection_reuses_total Total number of connection reuses.
# TYPE haproxy_server_connection_reuses_total counter
haproxy_server_connection_reuses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 5
haproxy_server_connection_reuses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_connection_reuses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_connection_reuses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_connection_reuses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_connection_reuses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_connection_reuses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_responses_denied_total Total number of denied responses.
# TYPE haproxy_server_responses_denied_total counter
haproxy_server_responses_denied_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_responses_denied_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_responses_denied_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_responses_denied_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_responses_denied_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_responses_denied_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_responses_denied_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_connection_errors_total Total number of connection errors.
# TYPE haproxy_server_connection_errors_total counter
haproxy_server_connection_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_connection_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_connection_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_connection_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_connection_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_connection_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_connection_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_response_errors_total Total number of response errors.
# TYPE haproxy_server_response_errors_total counter
haproxy_server_response_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 1
haproxy_server_response_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_response_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_response_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_response_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_response_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_response_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_retry_warnings_total Total number of retry warnings.
# TYPE haproxy_server_retry_warnings_total counter
haproxy_server_retry_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_retry_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_retry_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_retry_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_retry_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_retry_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_retry_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_redispatch_warnings_total Total number of redispatch warnings.
# TYPE haproxy_server_redispatch_warnings_total counter
haproxy_server_redispatch_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_redispatch_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_redispatch_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_redispatch_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_redispatch_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_redispatch_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_redispatch_warnings_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_failed_header_rewriting_total Total number of failed header rewriting warnings.
# TYPE haproxy_server_failed_header_rewriting_total counter
haproxy_server_failed_header_rewriting_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_failed_header_rewriting_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_failed_header_rewriting_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_failed_header_rewriting_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_failed_header_rewriting_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_failed_header_rewriting_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_failed_header_rewriting_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_internal_errors_total Total number of internal errors.
# TYPE haproxy_server_internal_errors_total counter
haproxy_server_internal_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_internal_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_internal_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_internal_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_internal_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_internal_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_internal_errors_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_client_aborts_total Total number of data transfers aborted by the client.
# TYPE haproxy_server_client_aborts_total counter
haproxy_server_client_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 8
haproxy_server_client_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_client_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_client_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_client_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_client_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_client_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_server_aborts_total Total number of data transfers aborted by the server.
# TYPE haproxy_server_server_aborts_total counter
haproxy_server_server_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_server_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_server_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_server_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_server_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_server_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_server_aborts_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_weight Service weight.
# TYPE haproxy_server_weight gauge
haproxy_server_weight{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 1
haproxy_server_weight{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 1
haproxy_server_weight{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 1
haproxy_server_weight{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 1
haproxy_server_weight{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 1
haproxy_server_weight{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 1
haproxy_server_weight{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 1
# HELP haproxy_server_check_status Status of last health check (HCHK_STATUS_* values).
# TYPE haproxy_server_check_status gauge
haproxy_server_check_status{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 6
# HELP haproxy_server_check_code layer5-7 code, if available of the last health check.
# TYPE haproxy_server_check_code gauge
haproxy_server_check_code{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
# HELP haproxy_server_check_duration_seconds Total duration of the latest server health check, in seconds.
# TYPE haproxy_server_check_duration_seconds gauge
haproxy_server_check_duration_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0.000000
# HELP haproxy_server_check_failures_total Total number of failed check (Only counts checks failed when the server is up).
# TYPE haproxy_server_check_failures_total counter
haproxy_server_check_failures_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_check_failures_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_check_failures_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_check_failures_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_check_failures_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_check_failures_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_check_failures_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_check_up_down_total Total number of UP->DOWN transitions.
# TYPE haproxy_server_check_up_down_total counter
haproxy_server_check_up_down_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_check_up_down_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_check_up_down_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_check_up_down_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_check_up_down_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_check_up_down_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_check_up_down_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_downtime_seconds_total Total downtime (in seconds) for the service.
# TYPE haproxy_server_downtime_seconds_total counter
haproxy_server_downtime_seconds_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_downtime_seconds_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 627626
haproxy_server_downtime_seconds_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 627626
haproxy_server_downtime_seconds_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 627626
haproxy_server_downtime_seconds_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 627626
haproxy_server_downtime_seconds_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 627626
haproxy_server_downtime_seconds_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 627626
# HELP haproxy_server_check_last_change_seconds Number of seconds since the last UP<->DOWN transition.
# TYPE haproxy_server_check_last_change_seconds gauge
haproxy_server_check_last_change_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 627626
haproxy_server_check_last_change_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 627626
haproxy_server_check_last_change_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 627626
haproxy_server_check_last_change_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 627626
haproxy_server_check_last_change_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 627626
haproxy_server_check_last_change_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 627626
haproxy_server_check_last_change_seconds{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 627626
# HELP haproxy_server_current_throttle Current throttle percentage for the server, when slowstart is active, or no value if not in slowstart.
# TYPE haproxy_server_current_throttle gauge
haproxy_server_current_throttle{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 100
haproxy_server_current_throttle{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 100
haproxy_server_current_throttle{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 100
haproxy_server_current_throttle{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 100
haproxy_server_current_throttle{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 100
haproxy_server_current_throttle{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 100
haproxy_server_current_throttle{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 100
# HELP haproxy_server_loadbalanced_total Total number of times a service was selected, either for new sessions, or when redispatching.
# TYPE haproxy_server_loadbalanced_total counter
haproxy_server_loadbalanced_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 1102
haproxy_server_loadbalanced_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_loadbalanced_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_loadbalanced_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_loadbalanced_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_loadbalanced_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_loadbalanced_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_http_responses_total Total number of HTTP responses.
# TYPE haproxy_server_http_responses_total counter
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001",code="1xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002",code="1xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003",code="1xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004",code="1xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005",code="1xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006",code="1xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007",code="1xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001",code="2xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002",code="2xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003",code="2xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004",code="2xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005",code="2xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006",code="2xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007",code="2xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001",code="3xx"} 20
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002",code="3xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003",code="3xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004",code="3xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005",code="3xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006",code="3xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007",code="3xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001",code="4xx"} 1080
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002",code="4xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003",code="4xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004",code="4xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005",code="4xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006",code="4xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007",code="4xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001",code="5xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002",code="5xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003",code="5xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004",code="5xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005",code="5xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006",code="5xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007",code="5xx"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001",code="other"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002",code="other"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003",code="other"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004",code="other"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005",code="other"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006",code="other"} 0
haproxy_server_http_responses_total{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007",code="other"} 0
# HELP haproxy_server_idle_connections_current Current number of idle connections available for reuse
# TYPE haproxy_server_idle_connections_current gauge
haproxy_server_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_idle_connections_limit Limit on the number of available idle connections
# TYPE haproxy_server_idle_connections_limit gauge
haproxy_server_idle_connections_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_idle_connections_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_idle_connections_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_idle_connections_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_idle_connections_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_idle_connections_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_idle_connections_limit{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_unsafe_idle_connections_current Current number of unsafe idle connections.
# TYPE haproxy_server_unsafe_idle_connections_current gauge
haproxy_server_unsafe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_unsafe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_unsafe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_unsafe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_unsafe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_unsafe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_unsafe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_safe_idle_connections_current Current number of safe idle connections.
# TYPE haproxy_server_safe_idle_connections_current gauge
haproxy_server_safe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_safe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_safe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_safe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_safe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_safe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_safe_idle_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_used_connections_current Current number of connections in use.
# TYPE haproxy_server_used_connections_current gauge
haproxy_server_used_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 0
haproxy_server_used_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_used_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_used_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_used_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_used_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_used_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0
# HELP haproxy_server_need_connections_current Estimated needed number of connections.
# TYPE haproxy_server_need_connections_current gauge
haproxy_server_need_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv001"} 1
haproxy_server_need_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv002"} 0
haproxy_server_need_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv003"} 0
haproxy_server_need_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv004"} 0
haproxy_server_need_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv005"} 0
haproxy_server_need_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv006"} 0
haproxy_server_need_connections_current{proxy="haproxy-ingress_haproxy-ingress-default-backend_http",server="srv007"} 0