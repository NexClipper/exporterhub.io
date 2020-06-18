---
title: "Configuration"
date: 2018-12-29T11:02:05+06:00
lastmod: 2020-01-05T10:42:26+06:00
weight: 3
draft: false
# search related keywords
keywords: [""]
---

### Global site parameters

On top of [Hugo global configuration](https://gohugo.io/overview/configuration/), **Dot** lets you define the following parameters in your `config.toml` (here, values are default).

Note that some of these parameters are explained in details in other sections of this documentation.

```toml
[params]
  # Prefix URL to edit current page. 
  # Useful to give opportunity to people to create merge request for your doc.
  # See the config.toml file from this documentation site to have an example.
  # Javascript and CSS cache are automatically busted when new version of site is generated. 
  # Order sections in menu by "weight"
  # Call to action is default enabled, if you want to disable it. just change the 
  enable = false
  # You can change banner title and other text from the config file.
```