<!--lint disable awesome-heading--> <!--lint disable awesome-git-repo-age-->
<!--lint disable awesome-license--> 
<!--lint disable double-link-->

# [Exporterhub.io](https://exporterhub.io/) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) 
<!--lint disable awesome-badge-->
<!--lint disable awesome-heading-->
 > ### A Curated List of Prometheus Exporters
 > #### Powered by <a href="https://nexclipper.io"><img src="https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/NexCloud_en.png" width= 120></a>
 


<!--lint disable awesome-github-->
<!--lint disable awesome-toc-->
## Contents
* [Definition of ExporterHub.io](https://github.com/NexClipper/exporterhub.io#Definition-of-exporterhubio)
* [Demo Video](https://github.com/NexClipper/exporterhub.io#Demo)
* [Diagram Overview](https://github.com/NexClipper/exporterhub.io#diagram-overview)
* [Kick-start](https://github.com/NexClipper/exporterhub.io#kickstart)
* [Contribute](https://github.com/NexClipper/exporterhub.io#contribute)
* [References](https://github.com/NexClipper/exporterhub.io#references)
* [License](https://github.com/NexClipper/exporterhub.io#license)



## Definition of [ExporterHub.io](https://exporterhub.io/)


### ExporterHub.io는 Prometheus Exporters 커뮤니티를 위한 응용 프로그램입니다.
ExporterHub.io는 단순히 선별된 목록이 아니라 내보내기 설치 가이드, 경고 규칙 구성 및 대시보드 구성을 제공합니다. 
각 Exporter의 페이지에는 다음이 포함됩니다.:
* Official GitHub (Origin Repository)
* Resource (Install, Exported Metrics)
* Alert-rule (Recommended)
* Dashboard (Grafana)
* Star (linked to Github Origin Repository)
* Fork to bucket (linked to personal Github Repository)
* Edit Dashboard and Alert-rule by Admin

ExporterHub.io는 복잡하고 폐쇄적인 네트워크 보안 설정이 있는 엔터프라이즈 환경에서 Prometheus 모니터링 요구 사항을 지원하는 데 가장 적합한 exporter(s)를 권장합니다.

Prometheus를 지원하고 용이하게 하기 위해, ExporterHub.io는 모니터링 중인 특정 시스템 및 서비스의 메트릭 데이터를 노출하는 데 사용할 수 있는 가장 적합한 exporter(s)를 검색하고 권장합니다.
### 다른 애플리케이션에 비해 차별화된 Exporterhub.io 의 특징:



<!--lint disable no-undefined-references-->
* [x] 설치 안내서, 메트릭 수집 플래그, 권장 경고 규칙
* [x] 카드 스타일 GitHub 페이지
* [x] 관리자 권한(Github의 조직에 연결)
* [x] exporters 등록, 대시보드 편집 및 관리자에 의한 알림(Github organization 저장소에 연결)
* [x] 간단한 exporters 검색
* [x] 개인화(Github 개인 저장소에 연결된 exporter fork/delete)
* [ ] NexClipper 클라우드 통합(coming soon)
  * [ ] 자동으로 exporters 설치
  * [ ] 경고 규칙 생성 
  * [ ] 최적의 exporters 추천
* [ ] Dev's Choice(coming soon)
  * [ ] 내 버킷 공유
  * [ ] 검색 창

## Demo Video
* 전체 예제 및 가이드를 보려면 이미지를 클릭하세요.:  
  [![Demo](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/demo_01.png)](https://youtu.be/wa4dknZk7Kk)

## 개인 환경용 Exporterhub 설치 방법
* [Install guide](./install_guide.md)

## References
* [Official Exporters AND Integrations](https://prometheus.io/docs/instrumenting/exporters/)
* [Awesome Prometheus alerts](https://awesome-prometheus-alerts.grep.to/)
* [SLOs with Prometheus](https://promtools.dev/)
* [Awesome Prometheus](https://github.com/roaldnefs/awesome-prometheus)
* [Promcat](https://promcat.io/)
* [Github Documentation](https://docs.github.com/en)

## Contribute
기여를 환영합니다!
[ExporterHub.io](https://exporterhub.io/) 에 기여할 특정 exporter가 있는 경우,
자유롭게 [send issues](https://github.com/NexClipper/exporterhub.io/issues)를 보내거나
[pull requests](https://github.com/NexClipper/exporterhub.io/pulls)를 보내주세요. 
<br> Please join us!: https://app.slack.com/client/TC3DP3HPG/C01RTA59G66

## Service Map
![servicemap](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/exporterhub_v3.png)



## License
Exporterhub.io is licensed under the MIT License. See [LICENSE](https://github.com/NexClipper/exporterhub.io/blob/master/LICENSE) for the full license text.


## logging
* Main branch has been changed from master



<p align="right"> Supported by <a href="https://wecode.co.kr/"><img src="https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/wecode_logo.jpg" width= 120></a></p>
