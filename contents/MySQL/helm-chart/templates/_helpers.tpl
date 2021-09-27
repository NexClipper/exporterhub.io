{{/*
Expand the name of the chart.
*/}}
{{- define "mysql-exporter.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "mysql-exporter.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "mysql-exporter.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "mysql-exporter.labels" -}}
helm.sh/chart: {{ include "mysql-exporter.chart" . }}
{{ include "mysql-exporter.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "mysql-exporter.selectorLabels" -}}
app.kubernetes.io/name: {{ include "mysql-exporter.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Secret name for cloudsql credentials
*/}}
{{- define "mysql-exporter.cloudsqlsecret" -}}
{{ template "mysql-exporter.fullname" . }}-cloudsqlsecret
{{- end -}}

{{/*
Secret name for DATA_SOURCE_NAME
*/}}
{{- define "mysql-exporter.secret" -}}
    {{- if .Values.mysql.existingSecret -}}
        {{- printf "%s" .Values.mysql.existingSecret -}}
    {{- else -}}
        {{ template "mysql-exporter.fullname" . }}
    {{- end -}}
{{- end -}}
