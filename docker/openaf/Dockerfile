FROM openjdk:8-jre-alpine

RUN apk update\
 && apk add ca-certificates wget\
 && update-ca-certificates\
 && apk --no-cache add openssl wget

RUN mkdir /openaf\
 && cd /openaf\
 && wget https://openaf.io/openaf.jar -q\
 && java -jar openaf.jar --repack\
 && java -jar openaf.jar --install

WORKDIR /openaf
