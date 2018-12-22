FROM openaf/openaf:latest

RUN /openaf/opack install ojob-common

COPY main.yaml /openaf/main.yaml
CMD ["/openaf/ojob", "/openaf/main.yaml"]
