var
  svr = "http://rjb.soc.port.ac.uk",
  now = Date.now(),
  runid = "run" + id() + now,
  order = 0,
  tests = [],
  modules = {},

  runRecord = {
    "id": runid,
    "uid": id(),
    "topic": "topic"+window.topic,
    "time": now,
    "browser": {
      // record details about what kind of dev platform is being used
      // for a run of tests - super useful when bugs can't be reproduced.
      "platform": navigator.platform,
      "vendor": navigator.vendor,
      "product": navigator.product,
      "userAgent": navigator.userAgent,
    }

  };

/**
 * This gets called every time a unit test runs (pass or fail)
 */
QUnit.log(
  function( details ) {
    // ensure whatever this module is is recorded in the list of modules.
    var key = details.module.toLowerCase().replace(/[^a-zA-Z\d]/gi, "_");
    modules[key] = details.module;

    // record test instance details
    details.time = Date.now();
    details.order = order++;
    details.runid = runid;
    details.moduleid = key;

    // record the individual test
    tests.push(details);

  }
);

/**
 * This gets called after the last test has run.
 */
QUnit.done(function( details ) {
  runRecord.summary = details;
  addStudent();
  addModules();
  addRunRecord();
  addTests();
});

function sendData(what, url) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send( JSON.stringify(what) );
}

function addRunRecord() {
  sendData( runRecord, svr+"/runs/" );
}


function addTests() {
  var url = svr + "/records/";
  for (var t=0; t<tests.length; t++) {
    sendData(tests[t], url);
  }
}

function addStudent() {
    sendData(
      {
        "id": id(),
        "fn": fn(),
        "sn": sn()
      },
      svr + "/students/"
    );
}


function addModules() {
  var url = svr + "/modules/";
  for (var key in modules) {
    if (modules.hasOwnProperty(key)) {
      sendData(
        {
          "id": key,
          "name": modules[key]
        },
        url
      );
    }
  }

}
