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



## [ExporterHub.io](https://exporterhub.io/)란 무엇입니까?


### Prometheus Exporters 커뮤니티를 위한 애플리케이션
ExporterHub.io는 Prometheus Exporters 커뮤니티를 위한 응용 프로그램입니다.

ExporterHub.io는 단순히 선별된 exporter의 나열하고 모아두는데 그치지 않습니다.

ExporterHub.io의 각 Exporter의 페이지에서 아래와 같은 내용을 제공합니다.
* Official GitHub (Origin Repository)
* Resource (Install, Exported Metrics)
* Alert-rule (Recommended)
* Dashboard (Grafana)
* Star (linked to Github Origin Repository)
* Fork to bucket (linked to personal Github Repository)
* Edit Dashboard and Alert-rule by Admin

복잡하고 폐쇄적인 네트워크 보안 설정이 갖춰진 엔터프라이즈 환경에서 Prometheus 모니터링 요구 사항을 지원하거나

사용자의 Prometheus 모범사례 적용을 용이하게 하기 위해서

ExporterHub.io는 모니터링 중인 시스템으로부터 메트릭 데이터를 노출하는 데 사용할 수 있는 가장 적합한 exporter를 탐색 및 추천합니다.

<br>

### 다른 애플리케이션과 차별화된 Exporterhub.io:

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

<br>

## 데모 영상
* 전체 예제 및 가이드를 보려면 이미지를 클릭하세요.
  [![Demo](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/demo_01.png)](https://youtu.be/wa4dknZk7Kk)

<br>

## 개인 환경용 Exporterhub 설치 방법
* [설치 가이드](./install_guide.md)

<br>

## References
* [Official Exporters AND Integrations](https://prometheus.io/docs/instrumenting/exporters/)
* [Awesome Prometheus alerts](https://awesome-prometheus-alerts.grep.to/)
* [SLOs with Prometheus](https://promtools.dev/)
* [Awesome Prometheus](https://github.com/roaldnefs/awesome-prometheus)
* [Promcat](https://promcat.io/)
* [Github Documentation](https://docs.github.com/en)

<br>

## 오픈소스에 기여하는 방법!
### 기여를 환영합니다!
[ExporterHub.io](https://exporterhub.io/) 에 기여할 특정 exporter가 있다면 자유롭게 [send issues](https://github.com/NexClipper/exporterhub.io/issues)를 보내거나
[pull requests](https://github.com/NexClipper/exporterhub.io/pulls)를 보내주세요. 
<br>

### 슬랙 채널에서 함께하세요!
[Slack](https://app.slack.com/client/TC3DP3HPG/C01RTA59G66)
<br>

### 아래 Pull Request를 통해 exporter의 리스트를 업데이트하세요.
* [Exporter list](https://github.com/NexClipper/exporterhub.io/blob/main/api/exporter_list.csv)
<br>

## Service Map
![servicemap](https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/exporterhub_v4.png)



## License
Exporterhub.io is licensed under the MIT License. See [LICENSE](https://github.com/NexClipper/exporterhub.io/blob/master/LICENSE) for the full license text.


## logging
* Main branch has been changed from master



<p align="right"> Supported by <a href="https://wecode.co.kr/"><img src="https://raw.githubusercontent.com/NexClipper/exporterhub.io/master/assets/wecode_logo.jpg" width= 120></a></p>
