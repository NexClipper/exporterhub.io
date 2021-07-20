### Deployment
```

apiVersion: apps/v1beta2
kind: Deployment
metadata:
  name: {{ template "ceph-exporter.fullname" . }}
  labels:
    app: {{ template "ceph-exporter.name" . }}
    chart: {{ template "ceph-exporter.chart" . }}
    release: {{ .Release.Name }}
    heritage: {{ .Release.Service }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      app: {{ template "ceph-exporter.name" . }}
      release: {{ .Release.Name }}
  template:
    metadata:
      labels:
        app: {{ template "ceph-exporter.name" . }}
        release: {{ .Release.Name }}
    spec:
      {{- if .Values.imagePullSecrets }}
      imagePullSecrets:
        {{- toYaml .Values.imagePullSecrets | indent 8 }}
      {{- end }}
      containers:
        - name: {{ .Chart.Name }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - name: http-metrics
              containerPort: {{ .Values.service.port }}
              protocol: {{ .Values.service.protocol }}
          livenessProbe:
            httpGet:
              path: /
              port: http-metrics
          readinessProbe:
            httpGet:
              path: /
              port: http-metrics
          {{- with .Values.resources }}
          resources:
            {{- toYaml .Values.resources| indent 10 }}
          {{- end }}
          volumeMounts:
          - name: ceph-conf
            mountPath: /etc/ceph
      {{- with .Values.nodeSelector }}
      nodeSelector: 
{{ toYaml . | indent 8 }}
      {{- end }}
     {{- with .Values.affinity }}
      affinity:
{{ toYaml . | indent 8 }}
      {{- end }}
      {{- with .Values.tolerations }}
      tolerations:
{{ toYaml . | indent 8 }}
      {{- end }}
      volumes:
      - name: ceph-conf
        hostPath:
          path: /etc/ceph
          readOnly: true

```