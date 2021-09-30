## update here for Alert & Dashboard contents

## Naming & directory convention
* Host (1) exporter and (2) helm, (3) alert file, (4) Grafana dashboard and (5) Review & key metrics introduction (compliant with NexClipper) in ExporterHub for NexClipper to use for exporter, rule and dashboard installation.
* ExporterHub shall show a verbiage `“Compliant with NexClipper”` on the user interface for a specific exporter, helm chart, alert.yaml and dashboard.json while ExporterHub is able to show multiple options for the communities to review & test. Links to github issues for exporters and our internal files (helm, alert etc)
* The official request shall be saved under the following folder structure

```plaintext
1. Main exporter folder - exporterhub.io/contents/<exporter_name>/nc

2. Helm chart - exporterhub.io/contents/<exporter_name>/nc/helm-chart/v<version number>

3. Alert Rule - exporterhub.io/contents/<exporter_name>/nc/v<version number>/<exporter_name>_alert.yaml

4. Grafana dashboard - exporterhub.io/contents/<exporter_name>/nc/v<version number>/<exporter_name>_dashboard.json

5. Review & key metrics introduction - exporterhub.io/contents/<exporter_name>nc/v<version number>/<exporter_name>_review.md
```

```plaintext
For helm-chart, use chart.yaml and values.yaml in the folder and here is a reference folder structure or use <exporter_name>_helm.yaml when you have a single file of helm chart.
chart.yaml - chart information
value.yaml - configuration values for the chart
/charts - a directory containing any charts upon which this chart depends
/crds - a directory containing any custom resource definitions
/templates - a directory of templates that, when combined with values, will generate valid Kubernetes manifest files
```
