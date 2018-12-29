# Docker containers

## Build an openaf container

You can build it directly by executing:

````bash
docker build -t openaf/openaf https://github.com/OpenAF/openaf-templates.git#:docker/openaf
````

## Build an openaf-console container

You can build it directly by executing:

````bash
docker build -t openaf/openaf-console https://github.com/OpenAF/openaf-templates.git#:docker/openaf-console
````

## Build an ojob container

You can build it directly by executing:

````bash
docker build -t openaf/openaf-ojob https://github.com/OpenAF/openaf-templates.git#:docker/oJob
````

You should copy a new main.yaml file into /openaf/main.yaml to execute your ojob.

## Build an ojob + ojob-common container

You can build it directly by executing:

````bash
docker build -t openaf/openaf-ojobc https://github.com/OpenAF/openaf-templates.git#:docker/oJobC
````

You should copy a new main.yaml file into /openaf/main.yaml to execute your ojob.

## Generating my custom ojobc container

To generate the Dockerfile and main.yaml for your custom ojobc container you just need to execute:

````bash
ojob genDockerFiles4OJobC.yaml
````

and a Dockerfile and a main.yaml file will be generated on the current directory for you to customize.