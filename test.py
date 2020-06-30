from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request
import requests, json
import os
import parsecontent
import base64
import markdown


def write_repo():

    exporterContent = parsecontent.getContent('https://github.com/ralfyang/klevr')
    exporterReadme = parsecontent.getReadme('https://github.com/ralfyang/klevr')

    print(exporterContent.get('fork'))
    print(exporterReadme.get('type'))

    # print(exporterReadme.get('download_url'))

    URL = exporterReadme.get('download_url')

    urlTxt = requests.get(URL)
    # print(response.status_code)
    # print(response.text)
    urlTxt.text

    decoded_text = base64.b64decode(exporterReadme.get('content'))
    # print(decoded_text)
    readmeURL = 'https://api.github.com/markdown'

    data = {
        "text": "![klevr_logo.png](klevr_logo.png)\n# Klevr: K(C)loud-native everywhere cleverly\n * Asynchronous distributed infrastructure management console and agent for separated networks.\n * Supports for:\n   * Baremetal server in the On-premise datacenter\n   * PC/Workstation in the Office/intranet\n   * Laptop at everywhere\n   * Public-cloud\n\n## Kickstart for webconsole & KVstore\n* docker-compose command\n```\ngit clone https://github.com/ralfyang/klevr.git\ndocker-compose up -d\n```\n\n## Diagram Overview\n * Image click to Youtube:\n * [![Diagram Overview](/Klevr_diagram_overview.png)](https://youtu.be/o_Ua3WhAPaU)\n\n## Features\n * **Agent([./agent/klevr_agent](agent/))**\n   * Provisioning: Docker, Micro K8s, Vagrant, VirtualBox\n   * Get & Run: Hypervisor(via libvirt container), Terraform, Prometheus, Beacon\n   * Metric data aggregate & delivery\n  * **Web console([./webconsole/klevr_webconsole](./webconsole/))**\n   * Host pool management\n   * Resource management\n   * Master node management \n   * Task management \n   * Service catalog management\n   * Service delivery to Dev./Stg./Prod.\n * **Docker images**\n   * Klever_console(Webserver)\n   * Beacon(master health checker)\n   * Libvirt(Hypervisor)\n   * Prometheus(Container monitoring)\n   * Metric crawler\n   * Task manager\n * **KV store([Consul](https://github.com/hashicorp/consul))**\n   \n\n## Requirement for use\n * [ ] Docker/Docker-compose/Docker-registry\n   * [x] Beacon: https://hub.docker.com/repository/docker/klevry/beacon\n   * [x] Libvirt: https://hub.docker.com/repository/docker/klevry/libvirt\n   * [ ] Task manager to terraform\n * [ ] Terraform of container\n * [x] KVM(libvirt)\n * [ ] Micro K8s\n * [x] Consul\n * [ ] Prometheus \n * [ ] Vagrant\n * [ ] Halm\n * [ ] Vault(maybe)\n * [ ] Packer(maybe)\n\n\n",
        "mode": "gfm"
    }
    res = requests.post(readmeURL, data=json.dumps(data))
    print(res.text)


write_repo()
