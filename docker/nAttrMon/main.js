// deal with envs parameters
var envs = getEnvs();
io.writeFileYAML("/openaf/nAttrMon/nattrmon.yaml", envs);

// deal with missing folders
if (!(io.fileExists("/config/inputs"))) sh("cp -R /openaf/nAttrMon/config/inputs /config/inputs");
if (!(io.fileExists("/config/inputs.disabled"))) sh("cp -R /openaf/nAttrMon/config/inputs.disabled /config/inputs.disabled");
if (!(io.fileExists("/config/validations"))) sh("cp -R /openaf/nAttrMon/config/validations /config/validations");
if (!(io.fileExists("/config/validations.disabled"))) sh("cp -R /openaf/nAttrMon/config/validations.disabled /config/validations.disabled");
if (!(io.fileExists("/config/objects.assets"))) sh("cp -R /openaf/nAttrMon/config/objects.assets /config/objects.assets");
if (!(io.fileExists("/config/objects"))) io.mkdir("/config/objects");
if (!(io.fileExists("/config/outputs"))) sh("cp -R /openaf/nAttrMon/config/outputs /config/outputs");
if (!(io.fileExists("/config/outputs.disabled"))) sh("cp -R /openaf/nAttrMon/config/outputs.disabled /config/outputs.disabled");

load("nattrmon.js");
