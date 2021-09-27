```access transformers
{
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
  "description": "kafka_export dashboard",
  "editable": true,
  "gnetId": 12460,
  "graphTooltip": 0,
  "id": 12,
  "iteration": 1631562573873,
  "links": [],
  "panels": [
    {
      "cacheTimeout": null,
      "datasource": "Prometheus",
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
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 8,
        "x": 0,
        "y": 0
      },
      "id": 28,
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
            "mean"
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
          "expr": "topk(1,kafka_topic_partition_current_offset{job=\"$instance\", topic=~\"$topic\"})",
          "format": "time_series",
          "instant": true,
          "intervalFactor": 1,
          "refId": "A"
        }
      ],
      "title": "Topic Partition Oldest Offset",
      "type": "stat"
    },
    {
      "cacheTimeout": null,
      "datasource": "Prometheus",
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
          "unit": "none"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 8,
        "x": 8,
        "y": 0
      },
      "id": 30,
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
            "mean"
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
          "expr": "sum(kafka_topic_partition_current_offset{job=\"$instance\", topic=~\"$topic\"})",
          "format": "time_series",
          "instant": true,
          "intervalFactor": 1,
          "refId": "A"
        }
      ],
      "title": "Topic Partition Current Offset",
      "type": "stat"
    },
    {
      "cacheTimeout": null,
      "datasource": "Prometheus",
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
                "color": "#299c46",
                "value": null
              },
              {
                "color": "rgba(237, 129, 40, 0.89)",
                "value": 100
              },
              {
                "color": "#d44a3a",
                "value": 20
              }
            ]
          },
          "unit": "short"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 7,
        "x": 16,
        "y": 0
      },
      "id": 20,
      "interval": null,
      "links": [],
      "maxDataPoints": 100,
      "options": {
        "colorMode": "value",
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
          "expr": "kafka_brokers{job=\"$instance\"}",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "",
          "refId": "A"
        }
      ],
      "title": "Brokers",
      "type": "stat"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 9,
        "w": 12,
        "x": 0,
        "y": 8
      },
      "hiddenSeries": false,
      "id": 32,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "max": false,
        "min": false,
        "show": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
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
          "expr": "sum(kafka_consumergroup_members{job=\"$instance\"}) by (consumergroup)",
          "format": "time_series",
          "intervalFactor": 1,
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "kafka_consumergroup_members",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
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
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 9,
        "w": 12,
        "x": 12,
        "y": 8
      },
      "hiddenSeries": false,
      "id": 22,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
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
          "expr": "sum(kafka_topic_partition_leader{job=\"$instance\", topic=~\"$topic\"}) by (topic, partition)",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "{topic=\"{{ topic }}\", partition=\"{{ partition}}\"}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Leader Broker ID",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
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
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 9,
        "w": 12,
        "x": 0,
        "y": 17
      },
      "hiddenSeries": false,
      "id": 26,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "max": false,
        "min": false,
        "show": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
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
          "expr": "sum(kafka_topic_partition_in_sync_replica{job=\"$instance\", topic=~\"$topic\"}) by (topic, partition)",
          "format": "time_series",
          "intervalFactor": 2,
          "legendFormat": "{topic=\"{{ topic }}\", partition=\"{{ partition}}\"}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "In Sync Replica",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
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
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 9,
        "w": 12,
        "x": 12,
        "y": 17
      },
      "hiddenSeries": false,
      "id": 12,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "sideWidth": 480,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 1,
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
          "exemplar": true,
          "expr": "sum(kafka_consumergroup_lag{job=\"$instance\",topic=~\"$topic\"} ) by (consumergroup, topic) ",
          "format": "time_series",
          "instant": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{consumergroup}} (topic: {{topic}})",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Lag by  Consumer Group",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
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
          "label": "",
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
          "show": true
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
      "datasource": "Prometheus",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 10,
        "w": 12,
        "x": 0,
        "y": 26
      },
      "hiddenSeries": false,
      "id": 24,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "max": false,
        "min": false,
        "show": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
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
          "expr": "sum (kafka_topic_partition_replicas{job=\"$instance\", topic=~\"$topic\"}) by (topic, partition)",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{topic=\"{{ topic }}\", partition=\"{{ partition}}\"}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Replicas",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
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
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 10,
        "w": 12,
        "x": 12,
        "y": 26
      },
      "hiddenSeries": false,
      "id": 18,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "sideWidth": 480,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 1,
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
          "expr": "sum(delta(kafka_consumergroup_current_offset{job=~'$instance',topic=~\"$topic\"}[5m])/5) by (consumergroup, topic)",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{consumergroup}} (topic: {{topic}})",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Message consume per minute",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
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
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 10,
        "w": 12,
        "x": 0,
        "y": 36
      },
      "hiddenSeries": false,
      "id": 14,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "sideWidth": 480,
        "sort": "max",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 1,
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
          "expr": "sum(rate(kafka_topic_partition_current_offset{job=\"$instance\",topic=~\"$topic\"}[1m])) by (topic)",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{topic}}",
          "refId": "B",
          "target": "",
          "type": "timeserie"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Message in per second",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
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
          "show": true
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
      "datasource": "Prometheus",
      "fill": 0,
      "fillGradient": 0,
      "gridPos": {
        "h": 10,
        "w": 12,
        "x": 12,
        "y": 36
      },
      "hiddenSeries": false,
      "id": 16,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "sideWidth": 480,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 1,
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
          "expr": "sum(delta(kafka_topic_partition_current_offset{job=~'$instance', topic=~\"$topic\"}[5m])/5) by (topic)",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{topic}}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Message in per minute",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
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
      "columns": [],
      "datasource": "Prometheus",
      "fontSize": "100%",
      "gridPos": {
        "h": 13,
        "w": 24,
        "x": 0,
        "y": 46
      },
      "id": 34,
      "interval": "",
      "links": [],
      "pageSize": 80,
      "pluginVersion": "6.2.2",
      "scroll": true,
      "showHeader": true,
      "sort": {
        "col": 1,
        "desc": true
      },
      "styles": [
        {
          "alias": "Partition",
          "align": "auto",
          "colorMode": "cell",
          "colors": [
            "rgba(50, 172, 45, 0.97)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(245, 54, 54, 0.9)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 0,
          "link": false,
          "mappingType": 1,
          "pattern": "partition",
          "thresholds": [],
          "type": "number",
          "unit": "none"
        },
        {
          "alias": "Start_Offset",
          "align": "auto",
          "colorMode": "value",
          "colors": [
            "#5794F2",
            "#5794F2",
            "rgba(245, 54, 54, 0.9)"
          ],
          "decimals": 0,
          "pattern": "Value #A",
          "thresholds": [
            ""
          ],
          "type": "number",
          "unit": "none"
        },
        {
          "alias": "End_Offset",
          "align": "auto",
          "colorMode": "value",
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 0,
          "mappingType": 1,
          "pattern": "Value #B",
          "thresholds": [],
          "type": "number",
          "unit": "none"
        },
        {
          "alias": "",
          "align": "auto",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "Time",
          "thresholds": [],
          "type": "hidden",
          "unit": "short"
        },
        {
          "alias": "",
          "align": "auto",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "__name__",
          "thresholds": [],
          "type": "hidden",
          "unit": "short"
        },
        {
          "alias": "",
          "align": "auto",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "endpoint",
          "thresholds": [],
          "type": "hidden",
          "unit": "short"
        },
        {
          "alias": "",
          "align": "auto",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "instance",
          "thresholds": [],
          "type": "hidden",
          "unit": "short"
        },
        {
          "alias": "",
          "align": "auto",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "job",
          "thresholds": [],
          "type": "hidden",
          "unit": "short"
        },
        {
          "alias": "",
          "align": "auto",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "namespace",
          "thresholds": [],
          "type": "hidden",
          "unit": "short"
        },
        {
          "alias": "",
          "align": "auto",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "pod",
          "thresholds": [],
          "type": "hidden",
          "unit": "short"
        },
        {
          "alias": "",
          "align": "auto",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "service",
          "thresholds": [],
          "type": "hidden",
          "unit": "short"
        },
        {
          "alias": "topic",
          "align": "auto",
          "colorMode": "value",
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "topic",
          "thresholds": [],
          "type": "string",
          "unit": "short"
        }
      ],
      "targets": [
        {
          "expr": "sum(kafka_topic_partition_oldest_offset{job=\"$instance\", topic=~\"$topic\"}) by (partition,topic)",
          "format": "table",
          "instant": true,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "",
          "refId": "A"
        },
        {
          "expr": "sum(kafka_topic_partition_current_offset{job=\"$instance\", topic=~\"$topic\"}) by (partition,topic)",
          "format": "table",
          "hide": false,
          "instant": true,
          "intervalFactor": 1,
          "legendFormat": "",
          "refId": "B"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "Partition status",
      "transform": "table",
      "type": "table-old"
    },
    {
      "aliasColors": {},
      "bars": true,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 9,
        "w": 24,
        "x": 0,
        "y": 59
      },
      "hiddenSeries": false,
      "id": 8,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "max": false,
        "min": false,
        "rightSide": true,
        "show": true,
        "sideWidth": 420,
        "total": false,
        "values": true
      },
      "lines": false,
      "linewidth": 1,
      "links": [],
      "nullPointMode": "null",
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
          "expr": "sum by(topic) (kafka_topic_partitions{job=\"$instance\",topic=~\"$topic\"})",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{topic}}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Partitions per Topic",
      "tooltip": {
        "shared": false,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "series",
        "name": null,
        "show": false,
        "values": [
          "current"
        ]
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
    }
  ],
  "refresh": "1m",
  "schemaVersion": 30,
  "style": "dark",
  "tags": [
    "Kafka"
  ],
  "templating": {
    "list": [
      {
        "allValue": null,
        "current": {
          "selected": false,
          "text": "kubernetes-pods",
          "value": "kubernetes-pods"
        },
        "datasource": "Prometheus",
        "definition": "",
        "description": null,
        "error": null,
        "hide": 0,
        "includeAll": false,
        "label": "Job",
        "multi": false,
        "name": "job",
        "options": [],
        "query": {
          "query": "label_values(kafka_brokers, job)",
          "refId": "Prometheus-job-Variable-Query"
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
        "current": {
          "selected": false,
          "text": "kubernetes-pods",
          "value": "kubernetes-pods"
        },
        "datasource": "Prometheus",
        "definition": "",
        "description": null,
        "error": null,
        "hide": 0,
        "includeAll": false,
        "label": "Instance",
        "multi": false,
        "name": "instance",
        "options": [],
        "query": {
          "query": "label_values(kafka_brokers{job=~\"$job\"}, job)",
          "refId": "Prometheus-instance-Variable-Query"
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
        "allValue": "",
        "current": {
          "selected": false,
          "text": [
            "songs"
          ],
          "value": [
            "songs"
          ]
        },
        "datasource": "Prometheus",
        "definition": "",
        "description": null,
        "error": null,
        "hide": 0,
        "includeAll": true,
        "label": "Topic",
        "multi": true,
        "name": "topic",
        "options": [],
        "query": {
          "query": "label_values(kafka_topic_partition_current_offset{job='$instance',topic!='__consumer_offsets',topic!='--kafka'}, topic)",
          "refId": "Prometheus-topic-Variable-Query"
        },
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 1,
        "tagValuesQuery": "",
        "type": "query",
        "useTags": false
      },
      {
        "datasource": "Prometheus",
        "description": null,
        "error": null,
        "filters": [],
        "hide": 0,
        "label": "",
        "name": "Filters",
        "skipUrlSync": false,
        "type": "adhoc"
      }
    ]
  },
  "time": {
    "from": "now-5m",
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
  "title": "Kafka Dashboard",
  "uid": "KLdGZ-Snk",
  "version": 2
}
```
