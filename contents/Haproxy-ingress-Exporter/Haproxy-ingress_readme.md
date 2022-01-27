# Haproxy 

HAProxy is a free and open source software that provides a high availability 
load balancer and proxy server for TCP and HTTP-based applications that spreads 
requests across multiple servers.

Haproxy can be monitored using prometheus,HAProxy currently provides exceptional visibility through its Stats page, which displays more than 100 metrics. It can be consumed as a CSV-formatted feed—although you can also use the Runtime API to export the data as JSON. CSV is perhaps one of the easiest formats to parse and, as an effect, many monitoring tools utilize the Stats page to get near real-time statistics from HAProxy.

Starting in Haproxy 2.0 , their is prometheus support in built for monitoring.

Having Prometheus support built in means that you don’t need to run an extra exporter process. Enable the service in your HAProxy configuration file and you’ll be all set.


# Enable Metrics in Haproxy and deploy

For Deploying Haproxy Ingress Controller using helm chart

 $ helm repo add haproxy-ingress https://haproxy-ingress.github.io/charts

Metrics is not enabled by default in haproxy ingress controller, to enable it export the values and then 
modify it.

 $ helm show values haproxy-ingress/haproxy-ingress > values.yaml

To enable metrics, modify these values.

metrics.enabled: true
metrics.service.annotations:
        prometheus.io/path: "/metrics"
        prometheus.io/scrape: "true"
        prometheus.io/port: "9101" 

After changing these values use this command to apply and deploy 
 
 $ helm install [Release-name] haproxy-ingress/haproxy-ingress -f values.yaml

### Default values file for the helm chart

# Enable RBAC
rbac:
  create: true
  secret:
    write: false
  security:
    enable: false

# Create ServiceAccount
serviceAccount:
  # Specifies whether a ServiceAccount should be created
  create: true
  # The name of the ServiceAccount to use.
  # If not set and create is true, a name is generated using the fullname template
  name:

nameOverride: ""
fullnameOverride: ""

controller:
  image:
    repository: quay.io/jcmoraisjr/haproxy-ingress
    tag: v0.13.4
    pullPolicy: IfNotPresent

  imagePullSecrets: []
  # - name: secret-name

  ## Additional command line arguments to pass to haproxy-ingress-controller
  ## E.g. to specify the default SSL certificate you can use
  ## extraArgs:
  ##   default-ssl-certificate: "<namespace>/<secret_name>"
  ##   reload-strategy: "reusesocket"
  extraArgs: {}

  ## Additional environment variables to set
  extraEnvs: []
  # extraEnvs:
  #   - name: FOO
  #     valueFrom:
  #       secretKeyRef:
  #         key: FOO
  #         name: secret-resource

  ## Additional volumes and volume mounts
  extraVolumes: []
  extraVolumeMounts: []

  ## Additional containers to the pod.
  extraContainers: []

  ## Additional containers that can initialize the pod.
  initContainers: []

  # custom haproxy template
  template: ""

  ## A manually deployed default backend service
  ## Ignored if defaultBackend.enabled = true
  ## Must be <namespace>/<service_name>
  ##
  defaultBackendService: ""

  ## Name of the ingress class to route through this controller
  ##
  ingressClass: haproxy

  healthzPort: 10253

  ## Liveness and readiness probe values
  ## Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes
  ##
  livenessProbe:
    path: /healthz
    port: 10253
    failureThreshold: 3
    initialDelaySeconds: 10
    periodSeconds: 10
    successThreshold: 1
    timeoutSeconds: 1
  readinessProbe:
    path: /healthz
    port: 10253
    failureThreshold: 3
    initialDelaySeconds: 10
    periodSeconds: 10
    successThreshold: 1
    timeoutSeconds: 1

  ## Annotations to be added to controller pods
  ##
  podAnnotations: {}

  ## Labels to be added to the controller pods
  ##
  podLabels: {}

  ## Affinity to be added to controller pods
  ##
  podAffinity: {}

  ## Priority Class to be used
  ##
  priorityClassName: ""

  ## Security context settings to be added to the controller pods
  ##
  securityContext: {}
  #  sysctls:
  #  - name: net.ipv4.ip_local_port_range
  #    value: "1024 65535"

  # ConfigMap to configure haproxy ingress
  config: {}

  # Required for use with CNI based kubernetes installations (such as ones set up by kubeadm),
  # since CNI and hostport don't mix yet. Can be deprecated once https://github.com/kubernetes/kubernetes/issues/23920
  # is merged
  hostNetwork: false

  # Optionally change this to ClusterFirstWithHostNet in case you have 'hostNetwork: true'.
  # By default, while using host network, name resolution uses the host's DNS. If you wish nginx-controller
  # to keep resolving names inside the k8s network, use ClusterFirstWithHostNet.
  dnsPolicy: ClusterFirst

  # How many seconds to wait before terminating a pod.
  terminationGracePeriodSeconds: 60

  # Configure container lifecycle. When scaling replicas down this can be
  # used to prevent controller container from terminating quickly and drop in-flight requests.
  # For example, when the controller runs behind Network Load Balancer this can be used
  # to configure preStop hook to sleep along with deregistration_delay.
  lifecycle: {}

  ## DaemonSet or Deployment
  ##
  kind: Deployment

  # TCP service key:value pairs
  # <port>: <namespace>/<servicename>:<portnumber>[:[<in-proxy>][:<out-proxy>]]
  # https://haproxy-ingress.github.io/docs/configuration/command-line/#tcp-services-configmap
  tcp: {}
  #  8080: "default/example-tcp-svc:9000"

  # optionally disable static ports, including the default 80 and 443
  enableStaticPorts: true

  ## Use host ports 80 and 443
  daemonset:
    useHostPort: false

    hostPorts:
      http: 80
      https: 443
      # List of ports from controller.tcp map
      tcp: []

  # The update strategy to apply to the Deployment or DaemonSet
  ##
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1

  # minReadySeconds to avoid killing pods before we are ready
  ##
  minReadySeconds: 0

  # Deployment
  replicaCount: 1

  # PodDisruptionBudget
  minAvailable: 1

  resources: {}
  #  limits:
  #    cpu: 100m
  #    memory: 64Mi
  #  requests:
  #    cpu: 100m
  #    memory: 64Mi

  autoscaling:
    enabled: false
    #  minReplicas: 1
    #  maxReplicas: 11
    #  targetCPUUtilizationPercentage: 50
    #  targetMemoryUtilizationPercentage: 50
    customMetrics: []

  ## Node tolerations for server scheduling to nodes with taints
  ## Ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
  ##
  tolerations: []
  #  - key: "key"
  #    operator: "Equal|Exists"
  #    value: "value"
  #    effect: "NoSchedule|PreferNoSchedule|NoExecute(1.6 only)"

  affinity: {}

  ## Node labels for controller pod assignment
  ## Ref: https://kubernetes.io/docs/user-guide/node-selection/
  ##
  nodeSelector: {}

  service:
    annotations: {}
    labels: {}
    clusterIP: ""
    clusterIPs: []

    ## List of IP addresses at which the controller services are available
    ## Ref: https://kubernetes.io/docs/user-guide/services/#external-ips
    ##
    externalIPs: []

    ## Dual-stack service configuration
    ## Please see the README for other required settings to make dual-stack mode work.
    ## Ref: https://kubernetes.io/docs/concepts/services-networking/dual-stack/#services
    ##
    # ipFamilies: [IPv4]
    # ipFamilyPolicy: PreferDualStack

    loadBalancerIP: ""
    loadBalancerSourceRanges: []

    httpPorts:
      - port: 80
        targetPort: http
      # nodePort:
    httpsPorts:
      - port: 443
        targetPort: https
      # nodePort:

    ## Add extra ports to the service
    ## Useful when adding the 'tcp-service-port' configuration key
    ## Ref: https://haproxy-ingress.github.io/v0.13/docs/configuration/keys/#tcp-services
    extraPorts: []
    # - port: 8080
    #   targetPort: 8080
    #   nodePort: 30012

    ## Set external traffic policy to: "Local" to preserve source IP on
    ## providers supporting it
    ## Ref: https://kubernetes.io/docs/tutorials/services/source-ip/#source-ip-for-services-with-typeloadbalancer
    externalTrafficPolicy: Local

    healthCheckNodePort: 0

    type: LoadBalancer

  ## If controller.haproxy.enabled = true, an external haproxy instance
  ## is configured and managed as a sidecar container
  haproxy:
    enabled: false

    image:
      repository: haproxy
      tag: "2.3.14-alpine"
      pullPolicy: IfNotPresent

    ## Additional command line arguments to pass to haproxy
    extraArgs: {}

    resources: {}
    #  limits:
    #    cpu: 500m
    #    memory: 768Mi
    #  requests:
    #    cpu: 500m
    #    memory: 768Mi

  stats:
    enabled: false
    port: 1936

    service:
      annotations: {}
      clusterIP: ""

      ## List of IP addresses at which the stats service is available
      ## Ref: https://kubernetes.io/docs/user-guide/services/#external-ips
      ##
      externalIPs: []

      loadBalancerIP: ""
      loadBalancerSourceRanges: []
      servicePort: 1936
      type: ClusterIP

  ## If controller.stats.enabled = true and controller.metrics.enabled = true, Prometheus metrics will be exported
  ## Metrics will also be exposed if the embedded haproxy's exporter is used
  ##
  metrics:
    enabled: false

    # Defines if the haproxy's embedded prometheus exporter should be used
    # If false, haproxy_exporter sidecar container is used instead and stats need to be enabled
    embedded: true

    # Port number the exporter is listening to
    port: 9101

    # The port the controller exports metrics on.
    # If you change it here, you must also change it using the controller.extraArgs.
    controllerPort: 10254

    # prometheus exporter for haproxy
    # https://github.com/prometheus/haproxy_exporter
    # (scrapes the stats port and exports metrics to prometheus)
    # Only used if embedded == false
    image:
      repository: quay.io/prometheus/haproxy-exporter
      tag: "v0.11.0"
      pullPolicy: IfNotPresent

    ## Additional command line arguments to pass to haproxy_exporter
    ## E.g. to specify the client timeout you can use
    ## extraArgs:
    ##   haproxy.timeout: 15s
    extraArgs: {}

    resources: {}
    #  limits:
    #    cpu: 500m
    #    memory: 600Mi
    #  requests:
    #    cpu: 200m
    #    memory: 400Mi

    service:
      annotations: {}
      # prometheus.io/scrape: "true"
      # prometheus.io/port: "10254"

      clusterIP: ""

      ## List of IP addresses at which the stats-exporter service is available
      ## Ref: https://kubernetes.io/docs/user-guide/services/#external-ips
      ##
      externalIPs: []

      loadBalancerIP: ""
      loadBalancerSourceRanges: []
      servicePort: 9101
      serviceControllerPort: 10254
      type: ClusterIP

  ## If controller.stats.enabled = true and controller.metrics.enabled = true and controller.serviceMonitor.enabled = true, Prometheus ServiceMonitor will be created
  ## Ref: https://coreos.com/operators/prometheus/docs/latest/api.html#servicemonitor
  ## Ref: https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md
  ##
  serviceMonitor:
    enabled: false

    # Additional labels for ServiceMonitor object
    labels: {}

    # Annotations for ServiceMonitor object
    annotations: {}

    # Prometheus honorLabels
    honorLabels: true

    # Prometheus scrape interval
    interval: 10s

  ## access-logs side-car container for collecting haproxy logs
  ## Enabling this will configure haproxy to emit logs to syslog localhost:514 UDP port.
  ## The access-logs container starts a syslog process that listens on UDP 514 and outputs to stdout.
  logs:
    enabled: false

    # syslog for haproxy
    # https://github.com/whereisaaron/kube-syslog-sidecar
    # (listens on UDP port 514 and outputs to stdout)
    image:
      repository: whereisaaron/kube-syslog-sidecar
      tag: latest
      pullPolicy: IfNotPresent

    ## Additional volume mounts
    extraVolumeMounts: []

    resources: {}
    #  limits:
    #    cpu: 200m
    #    memory: 128Mi
    #  requests:
    #    cpu: 100m
    #    memory: 32Mi

# Custom default 404 backend
defaultBackend:
  enabled: false

  name: default-backend
  image:
    repository: k8s.gcr.io/defaultbackend-amd64
    tag: "1.5"
    pullPolicy: IfNotPresent

  ## Node tolerations for server scheduling to nodes with taints
  ## Ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
  ##
  tolerations: []
  #  - key: "key"
  #    operator: "Equal|Exists"
  #    value: "value"
  #    effect: "NoSchedule|PreferNoSchedule|NoExecute(1.6 only)"

  affinity: {}

  ## Node labels for default backend pod assignment
  ## Ref: https://kubernetes.io/docs/user-guide/node-selection/
  ##
  nodeSelector: {}

  ## Annotations to be added to default backend pods
  ##
  podAnnotations: {}

  # labels to add to the pod container metadata
  podLabels: {}
  #  key: value

  # Deployment
  replicaCount: 1

  # PodDisruptionBudget
  minAvailable: 1

  resources:
    limits:
      cpu: 10m
      memory: 20Mi
  # requests:
  #   cpu: 10m
  #   memory: 20Mi

  service:
    name: ingress-default-backend
    annotations: {}
    clusterIP: ""

    ## List of IP addresses at which the default backend service is available
    ## Ref: https://kubernetes.io/docs/user-guide/services/#external-ips
    ##
    externalIPs: []

    loadBalancerIP: ""
    loadBalancerSourceRanges: []
    servicePort: 8080
    type: ClusterIP

  ## Pod Security Context for the default backend POD
  ## Ref: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
  ##
  securityContext: {}


### Metrics and  Prometheus

Once, helm chart is deployed prometheus will be able to scrape the target.

Metrics will be exposed on /metrics
To get exported metrics, port forward the service on 9101 port.

 $ kubectl port-forward service/haproxy-ingress-metrics 9101:9101 -n haproxy-ingress

 or refer ./Haproxy_sample_metrics to get sample metrics.


For futher assitance refer https://www.haproxy.com/blog/haproxy-exposes-a-prometheus-metrics-endpoint/.

