# openaf-templates

**October 2023: Most of these examples have now moved either to [oJob.io](https://github.com/OpenAF/oJob.io) or to [OpenAF docs](https://docs.openaf.io).**

---

## oJobs

### Automated Tests

  * [Automated tests](ojobs/tests/autoTest.yaml)

### HTTP Simple server

  * [Simple HTTP server](ojobs/httpd/httpd.yaml)
  * [Easy HTTP server](ojobs/httpd/easyHTTPd.yaml) 

### GIT

  * [Just copy files from a GIT repository without the corresponding git data](ojobs/git/copy4GIT.yaml)

### REST Services

  * [Simple REST services server](ojobs/restServices/restServices.yaml)
  * [Simple current time REST service](ojobs/restServices/timeService.yaml) 
  * [REST services server logging to ElasticSearch](ojobs/restServices/restServicesLoggingToES.yaml)
  * [REST services server logging to filesystem](ojobs/restServices/restServicesWithLogs.yaml)

### WatchDog

  * [Quick watchdog to ensure processes are running](ojobs/watchdog/watchdog.yaml)
  * [Watchdog to ensure processes are running and bark me back on Slack](ojobs/watchdog/watchDogBarkOnSlack.yaml)
  * [Watchdog to ensure processes are running and log and bark me on Slack and log in ElasticSearch](ojobs/watchdog/watchDogBarkAndLogToES.yaml)

## [Docker](docker)

  * [Generate dockerfiles to quickly build a oJob (+ ojob-common) docker container](docker/genDockerFiles4OJobC.yaml)
  * [Generate a nAttrmon docker container](docker/nAttrMon)
  
  You can check more on OpenAF docker containers in https://github.com/OpenAF/openaf-dockers.
