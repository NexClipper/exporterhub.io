```
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: {{ include "nvidia-gpu-exporter.fullname" . }}
  labels:
    {{- include "nvidia-gpu-exporter.labels" . | nindent 4 }}
spec:
  selector:
    matchLabels:
      {{- include "nvidia-gpu-exporter.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      {{- with .Values.podAnnotations }}
      annotations:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      labels:
        {{- include "nvidia-gpu-exporter.selectorLabels" . | nindent 8 }}
    spec:
      {{- with .Values.imagePullSecrets }}
      imagePullSecrets:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      serviceAccountName: {{ include "nvidia-gpu-exporter.serviceAccountName" . }}
      securityContext:
        {{- toYaml .Values.podSecurityContext | nindent 8 }}
      containers:
        - name: {{ .Chart.Name }}
          securityContext:
            {{- toYaml .Values.securityContext | nindent 12 }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          args:
            - --web.listen-address
            - :{{ .Values.port }}
            - --web.telemetry-path
            - {{ .Values.telemetryPath }}
            - --nvidia-smi-command
            - {{ .Values.nvidiaSmiCommand }}
            - --query-field-names
            - {{ join "," .Values.queryFieldNames }}
            - --log.level
            - {{ .Values.log.level }}
            - --log.format
            - {{ .Values.log.format }}
          ports:
            - name: http
              containerPort: {{ .Values.port }}
              protocol: TCP
          livenessProbe:
            httpGet:
              path: /
              port: http
          readinessProbe:
            httpGet:
              path: /
              port: http
          volumeMounts:
            {{- toYaml .Values.volumeMounts | nindent 12 }}
          resources:
            {{- toYaml .Values.resources | nindent 12 }}
      volumes:
        {{- toYaml .Values.volumes | nindent 8 }}
      {{- with .Values.nodeSelector }}
      nodeSelector:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      {{- with .Values.affinity }}
      affinity:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      {{- with .Values.tolerations }}
      tolerations:
        {{- toYaml . | nindent 8 }}
      {{- end }}

```