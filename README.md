# openaf-templates

## oJobs

### REST Services

  * [Simple REST services server](ojobs/restServices/restServices.yaml)
  * [REST services server logging to ElasticSearch](ojobs/restServices/restServicesLoggingToES.yaml)
  * [REST services server logging to filesystem](ojobs/restServices/restServicesWithLogs.yaml)

### HTTP Simple server

  * [Simple HTTP server](ojobs/httpd/httpd.yaml)

### WatchDog

  * [Quick watchdog to ensure processes are running](ojobs/watchdog/watchdog.yaml)
  * [Watchdog to ensure processes are running and bark me back on Slack](ojobs/watchdog/watchDogBarkOnSlack.yaml)
  * [Watchdog to ensure processes are running and log and bark me on Slack and log in ElasticSearch](ojobs/watchdog/watchDogBarkAndLogToES.yaml)

### Docker

  * [Generate dockerfiles to quickly build a oJob (+ ojob-common) docker container](docker/genDockerFiles4OJobC.yaml)
  * [Generate the main openaf docker container](docker/openaf)
  * [Generate an openaf-console docker container](docker/openaf-console)
  * [Generate an oJob docker container](docker/oJob)
  * [Generate a oJob + ojob-common docker container](docker/oJobC) 
