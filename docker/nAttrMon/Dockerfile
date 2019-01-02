FROM openaf/openaf:nightly

RUN /openaf/opack install nattrmon\
 && mkdir /config

WORKDIR /openaf/nAttrMon
EXPOSE 8090

# Please change this to point to your nattrmon config
#VOLUME . /config

ENV LOGCONSOLE=true
ENV COREOBJECTS=/openaf/nAttrMon/config/objects

COPY main.js /openaf/main.js
CMD ["/openaf/openaf", "-f", "/openaf/main.js", "-e", "withDirectory=/config"]
