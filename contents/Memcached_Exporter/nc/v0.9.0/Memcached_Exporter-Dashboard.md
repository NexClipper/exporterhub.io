{
  "__inputs": [
    {
      "name": "DS_PROMETHEUS",
      "label": "Prometheus",
      "description": "",
      "type": "datasource",
      "pluginId": "prometheus",
      "pluginName": "Prometheus"
    }
  ],
  "__requires": [
    {
      "type": "panel",
      "id": "gauge",
      "name": "Gauge",
      "version": ""
    },
    {
      "type": "grafana",
      "id": "grafana",
      "name": "Grafana",
      "version": "8.1.2"
    },
    {
      "type": "panel",
      "id": "graph",
      "name": "Graph (old)",
      "version": ""
    },
    {
      "type": "datasource",
      "id": "prometheus",
      "name": "Prometheus",
      "version": "1.0.0"
    },
    {
      "type": "panel",
      "id": "stat",
      "name": "Stat",
      "version": ""
    }
  ],
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "target": {
          "limit": 100,
          "matchAny": false,
          "tags": [],
          "type": "dashboard"
        },
        "type": "dashboard"
      }
    ]
  },
  "description": "Monitors Kubernetes Memcached Pods. Shows memory usage, hit rate, evicts and reclaims rate, items in cache, network stats, commands rate. Requires Memcached Exporter for Prometheus.",
  "editable": true,
  "gnetId": 3063,
  "graphTooltip": 0,
  "id": null,
  "iteration": 1634199122506,
  "links": [],
  "panels": [
    {
      "cacheTimeout": null,
      "datasource": "${DS_PROMETHEUS}",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [
            {
              "options": {
                "match": "null",
                "result": {
                  "text": "N/A"
                }
              },
              "type": "special"
            }
          ],
          "max": 1,
          "min": 0,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "rgba(50, 172, 45, 0.97)",
                "value": null
              },
              {
                "color": "rgba(237, 129, 40, 0.89)",
                "value": 0.7
              },
              {
                "color": "rgba(245, 54, 54, 0.9)",
                "value": 0.9
              }
            ]
          },
          "unit": "percentunit"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 8,
        "x": 0,
        "y": 0
      },
      "id": 11,
      "interval": null,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "showThresholdLabels": false,
        "showThresholdMarkers": true,
        "text": {}
      },
      "pluginVersion": "8.1.2",
      "targets": [
        {
          "expr": "sum(memcached_current_bytes{kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}) / sum(memcached_limit_bytes{kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A",
          "step": 20
        }
      ],
      "title": "Memory usage",
      "type": "gauge"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "${DS_PROMETHEUS}",
      "editable": true,
      "error": false,
      "fill": 1,
      "fillGradient": 0,
      "grid": {},
      "gridPos": {
        "h": 7,
        "w": 8,
        "x": 8,
        "y": 0
      },
      "height": "240px",
      "hiddenSeries": false,
      "id": 14,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": false,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "8.1.2",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "sum (irate (memcached_commands_total{status=\"hit\",command=\"get\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}[5m])) / sum (irate (memcached_commands_total{command=\"get\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}[5m]\n))",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "Hit",
          "refId": "A",
          "step": 5
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Hit rate",
      "tooltip": {
        "msResolution": true,
        "shared": false,
        "sort": 0,
        "value_type": "cumulative"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": [
          "total"
        ]
      },
      "yaxes": [
        {
          "format": "percentunit",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": 0,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {
        "evicts": "#890F02",
        "memcached_items_evicted_total{instance=\"172.17.0.1:9150\",job=\"prometheus\"}": "#890F02",
        "reclaims": "#3F6833"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "${DS_PROMETHEUS}",
      "editable": true,
      "error": false,
      "fill": 1,
      "fillGradient": 0,
      "grid": {},
      "gridPos": {
        "h": 7,
        "w": 8,
        "x": 16,
        "y": 0
      },
      "height": "240px",
      "hiddenSeries": false,
      "id": 8,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "8.1.2",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "reclaims",
          "yaxis": 2
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "sum (irate (memcached_items_evicted_total{kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}[5m]))",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "evicts",
          "refId": "A",
          "step": 5,
          "target": ""
        },
        {
          "expr": "sum (irate (memcached_items_reclaimed_total{kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}[5m]))",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "reclaims",
          "refId": "B",
          "step": 5
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Evicts & Reclaims rate",
      "tooltip": {
        "msResolution": false,
        "shared": true,
        "sort": 0,
        "value_type": "cumulative"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "cacheTimeout": null,
      "datasource": "${DS_PROMETHEUS}",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "decimals": 2,
          "mappings": [
            {
              "options": {
                "match": "null",
                "result": {
                  "text": "N/A"
                }
              },
              "type": "special"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "bytes"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 4,
        "w": 4,
        "x": 0,
        "y": 7
      },
      "id": 9,
      "interval": null,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "text": {},
        "textMode": "auto"
      },
      "pluginVersion": "8.1.2",
      "targets": [
        {
          "expr": "sum (memcached_current_bytes{kubernetes_pod_name=~\"$pod\", kubernetes_namespace=~\"$namespace\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A",
          "step": 20
        }
      ],
      "title": "Used",
      "type": "stat"
    },
    {
      "cacheTimeout": null,
      "datasource": "${DS_PROMETHEUS}",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "decimals": 2,
          "mappings": [
            {
              "options": {
                "match": "null",
                "result": {
                  "text": "N/A"
                }
              },
              "type": "special"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "bytes"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 4,
        "w": 4,
        "x": 4,
        "y": 7
      },
      "id": 10,
      "interval": null,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "text": {},
        "textMode": "auto"
      },
      "pluginVersion": "8.1.2",
      "targets": [
        {
          "expr": "sum (memcached_limit_bytes{kubernetes_pod_name=~\"$pod\", kubernetes_namespace=~\"$namespace\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A",
          "step": 20
        }
      ],
      "title": "Total",
      "type": "stat"
    },
    {
      "aliasColors": {},
      "bars": true,
      "dashLength": 10,
      "dashes": false,
      "datasource": "${DS_PROMETHEUS}",
      "editable": true,
      "error": false,
      "fill": 1,
      "fillGradient": 0,
      "grid": {},
      "gridPos": {
        "h": 4,
        "w": 8,
        "x": 8,
        "y": 7
      },
      "height": "120px",
      "hiddenSeries": false,
      "id": 12,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": false,
        "total": false,
        "values": false
      },
      "lines": false,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "8.1.2",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "miss",
          "color": "#E24D42"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "sum (memcached_commands_total{status=\"hit\",command=\"get\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}) / sum (memcached_commands_total{command=\"get\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"})",
          "format": "time_series",
          "hide": false,
          "intervalFactor": 1,
          "legendFormat": "hit",
          "refId": "C",
          "step": 5
        },
        {
          "expr": "sum (memcached_commands_total{status=\"miss\",command=\"get\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}) / sum (memcached_commands_total{command=\"get\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "miss",
          "refId": "A",
          "step": 5
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Hit & Miss ratio",
      "tooltip": {
        "msResolution": true,
        "shared": false,
        "sort": 0,
        "value_type": "cumulative"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "series",
        "name": null,
        "show": true,
        "values": [
          "current"
        ]
      },
      "yaxes": [
        {
          "format": "percentunit",
          "label": null,
          "logBase": 1,
          "max": "1",
          "min": 0,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "cacheTimeout": null,
      "datasource": "${DS_PROMETHEUS}",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [
            {
              "options": {
                "match": "null",
                "result": {
                  "text": "N/A"
                }
              },
              "type": "special"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "short"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 4,
        "w": 4,
        "x": 16,
        "y": 7
      },
      "id": 15,
      "interval": null,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "text": {},
        "textMode": "auto"
      },
      "pluginVersion": "8.1.2",
      "targets": [
        {
          "expr": "sum (memcached_items_evicted_total{kubernetes_pod_name=~\"$pod\", kubernetes_namespace=~\"$namespace\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A",
          "step": 20
        }
      ],
      "title": "Evicts (total)",
      "type": "stat"
    },
    {
      "cacheTimeout": null,
      "datasource": "${DS_PROMETHEUS}",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [
            {
              "options": {
                "match": "null",
                "result": {
                  "text": "N/A"
                }
              },
              "type": "special"
            }
          ],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "short"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 4,
        "w": 4,
        "x": 20,
        "y": 7
      },
      "id": 16,
      "interval": null,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "none",
        "graphMode": "none",
        "justifyMode": "auto",
        "orientation": "horizontal",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "text": {},
        "textMode": "auto"
      },
      "pluginVersion": "8.1.2",
      "targets": [
        {
          "expr": "sum (memcached_items_reclaimed_total{kubernetes_pod_name=~\"$pod\", kubernetes_namespace=~\"$namespace\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A",
          "step": 20
        }
      ],
      "title": "Reclaims (total)",
      "type": "stat"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "${DS_PROMETHEUS}",
      "editable": true,
      "error": false,
      "fill": 1,
      "fillGradient": 0,
      "grid": {},
      "gridPos": {
        "h": 7,
        "w": 24,
        "x": 0,
        "y": 11
      },
      "height": "",
      "hiddenSeries": false,
      "id": 5,
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": false,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "8.1.2",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "count",
          "color": "#5195CE"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "sum (memcached_current_items{kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "count",
          "refId": "A",
          "step": 2,
          "target": ""
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Items in cache",
      "tooltip": {
        "msResolution": false,
        "shared": true,
        "sort": 0,
        "value_type": "cumulative"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "none",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "${DS_PROMETHEUS}",
      "editable": true,
      "error": false,
      "fill": 1,
      "fillGradient": 0,
      "grid": {},
      "gridPos": {
        "h": 7,
        "w": 14,
        "x": 0,
        "y": 18
      },
      "hiddenSeries": false,
      "id": 6,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": true,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "8.1.2",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "written",
          "transform": "negative-Y"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "sum (irate (memcached_read_bytes_total{kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}[5m]))",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "read",
          "refId": "A",
          "step": 2,
          "target": ""
        },
        {
          "expr": "sum (irate (memcached_written_bytes_total{kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}[5m]))",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "written",
          "refId": "B",
          "step": 2,
          "target": ""
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Network",
      "tooltip": {
        "msResolution": false,
        "shared": true,
        "sort": 0,
        "value_type": "cumulative"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "bytes",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "bytes",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {
        "172.17.0.1:9150": "#0A437C"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "${DS_PROMETHEUS}",
      "editable": true,
      "error": false,
      "fill": 1,
      "fillGradient": 0,
      "grid": {},
      "gridPos": {
        "h": 7,
        "w": 10,
        "x": 14,
        "y": 18
      },
      "height": "",
      "hiddenSeries": false,
      "id": 4,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "max": true,
        "min": false,
        "show": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "8.1.2",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "count",
          "color": "#806EB7"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "sum (memcached_current_connections{kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "count",
          "refId": "A",
          "step": 5,
          "target": ""
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Connections",
      "tooltip": {
        "msResolution": false,
        "shared": true,
        "sort": 0,
        "value_type": "cumulative"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": "0",
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {
        "ratio": "#6ED0E0"
      },
      "bars": true,
      "dashLength": 10,
      "dashes": false,
      "datasource": "${DS_PROMETHEUS}",
      "editable": true,
      "error": false,
      "fill": 0,
      "fillGradient": 0,
      "grid": {},
      "gridPos": {
        "h": 7,
        "w": 8,
        "x": 0,
        "y": 25
      },
      "hiddenSeries": false,
      "id": 3,
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": false,
        "total": false,
        "values": false
      },
      "lines": false,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "8.1.2",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "sum (memcached_commands_total{command=\"get\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}) / (sum (memcached_commands_total{command=\"get\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}) + sum (memcached_commands_total{command=\"set\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}))",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "Get",
          "refId": "A",
          "step": 5,
          "target": ""
        },
        {
          "expr": "sum (memcached_commands_total{command=\"set\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"})  / (sum (memcached_commands_total{command=\"get\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}) + sum (memcached_commands_total{command=\"set\",kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}))",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "Set",
          "refId": "B",
          "step": 10
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Get & Set ratio",
      "tooltip": {
        "msResolution": false,
        "shared": false,
        "sort": 0,
        "value_type": "cumulative"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "series",
        "name": null,
        "show": true,
        "values": [
          "current"
        ]
      },
      "yaxes": [
        {
          "format": "percentunit",
          "label": null,
          "logBase": 1,
          "max": "1",
          "min": "0",
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "${DS_PROMETHEUS}",
      "editable": true,
      "error": false,
      "fill": 1,
      "fillGradient": 0,
      "grid": {},
      "gridPos": {
        "h": 7,
        "w": 16,
        "x": 8,
        "y": 25
      },
      "hiddenSeries": false,
      "id": 2,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "hideEmpty": false,
        "hideZero": false,
        "max": false,
        "min": false,
        "rightSide": true,
        "show": true,
        "sideWidth": 120,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "connected",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "8.1.2",
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "sum (irate (memcached_commands_total{kubernetes_pod_name=~\"$pod\",kubernetes_namespace=~\"$namespace\"}[5m])) by (command)",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "{{command}}",
          "refId": "A",
          "step": 4,
          "target": ""
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Commands",
      "tooltip": {
        "msResolution": false,
        "shared": true,
        "sort": 0,
        "value_type": "cumulative"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    }
  ],
  "refresh": "1m",
  "schemaVersion": 30,
  "style": "dark",
  "tags": [
    "prometheus",
    "memcached"
  ],
  "templating": {
    "list": [
      {
        "allValue": null,
        "current": {},
        "datasource": "${DS_PROMETHEUS}",
        "definition": "",
        "description": null,
        "error": null,
        "hide": 0,
        "includeAll": true,
        "label": null,
        "multi": true,
        "name": "pod",
        "options": [],
        "query": {
          "query": "label_values(memcached_up, kubernetes_pod_name)",
          "refId": "Prometheus-pod-Variable-Query"
        },
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "tagValuesQuery": "",
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      },
      {
        "allValue": null,
        "current": {},
        "datasource": "${DS_PROMETHEUS}",
        "definition": "",
        "description": null,
        "error": null,
        "hide": 0,
        "includeAll": true,
        "label": null,
        "multi": true,
        "name": "namespace",
        "options": [],
        "query": {
          "query": "label_values(memcached_up, kubernetes_namespace)",
          "refId": "Prometheus-namespace-Variable-Query"
        },
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "tagValuesQuery": "",
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      }
    ]
  },
  "time": {
    "from": "now-30m",
    "to": "now"
  },
  "timepicker": {
    "refresh_intervals": [
      "5s",
      "10s",
      "30s",
      "1m",
      "5m",
      "15m",
      "30m",
      "1h",
      "2h",
      "1d"
    ],
    "time_options": [
      "5m",
      "15m",
      "1h",
      "6h",
      "12h",
      "24h",
      "2d",
      "7d",
      "30d"
    ]
  },
  "timezone": "browser",
  "title": "Memcached Pods monitoring (via Prometheus)",
  "uid": "j6CVE6vnz",
  "version": 1
}