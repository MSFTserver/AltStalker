///////////////////////////////////////////////
// CONFIG
///////////////////////////////////////////////
var categories = {
    "Website": {
        "sensors": ["779735063"],
        "status": "2"
    },
    "Exchanges": {
        "sensors": ["779738523", "779738522", "779738557", "779738457"],
        "status": "2"
    },
    "Wallets": {
        "sensors": ["779738467", "779738483", "779738480"],
        "status": "2"
    },
    "APIs": {
      "sensors": ["779738440", "779738451", "779738430", "779738461", "779738422"],
      "status": "2"
    }
}
var apiKey = "api-key-goes-here"
///////////////////////////////////////////////
// END CONFIG
///////////////////////////////////////////////

//init variables
var monitorsData = []
var operational = true;
var operationalText = '';
var html = '';
var element = '';
var eventsToday = false;
var todayLogs = [];
var oldLogs = [];
var workingDate = new Date();
//run on API return
function jsonUptimeRobotApi(data) {
   //sort monitors into catergories and determine if all operational or not
   data.monitors.monitor.forEach(function(monitor) {
       if (categories.Website.sensors.indexOf(monitor.id) >= 0) {
           monitor.category = "Website";
           if (monitor.status == "8" || monitor.status == "9") {
             operational = false;
             categories.Website.status = 1;
         }
       }
       if (categories.Exchanges.sensors.indexOf(monitor.id) >= 0) {
           monitor.category = "Exchanges";
           if (monitor.status == "8" || monitor.status == "9") {
             operational = false;
             categories.Exchanges.status = 1;
         }
       }
       if (categories.Wallets.sensors.indexOf(monitor.id) >= 0) {
           monitor.category = "Wallets";
           if (monitor.status == "8" || monitor.status == "9") {
             operational = false;
             categories.Wallets.status = 1;
         }
       }
       if (categories.APIs.sensors.indexOf(monitor.id) >= 0) {
           monitor.category = "APIs";
           if (monitor.status == "8" || monitor.status == "9") {
             operational = false;
             categories.APIs.status = 1;
         }
       }
       monitorsData.push(monitor);
   });

   //set operational header
   if (operational) {
       operationalText = '<div class="alert alert-success">All systems are operational.</div>';
   } else {
       operationalText = '<div class="alert alert-danger">Not all systems are operational.</div>';
   }
   $(".section-status").replaceWith(operationalText);

   switch (categories.Website.status) {
     case "1":
       $("websiteStatus").replaceWith('<i class="ion ion-ios-circle-filled text-component-1 reds"></i>');
       break;
     case "2":
       $("websiteStatus").replaceWith('<i class="ion ion-ios-circle-filled text-component-1 greens"></i>');
       break;
     }

   switch (categories.Exchanges.status) {
     case "1":
       $("ExchangesStatus").replaceWith('<i class="ion ion-ios-circle-filled text-component-1 reds"></i>');
       break;
     case "2":
       $("ExchangesStatus").replaceWith('<i class="ion ion-ios-circle-filled text-component-1 greens"></i>');
       break;
     }

   switch (categories.Wallets.status) {
     case "1":
       $("WalletsStatus").replaceWith('<i class="ion ion-ios-circle-filled text-component-1 reds"></i>');
       break;
     case "2":
       $("WalletsStatus").replaceWith('<i class="ion ion-ios-circle-filled text-component-1 greens"></i>');
       break;
     }

     switch (categories.APIs.status) {
       case "1":
         $("APIsStatus").replaceWith('<i class="ion ion-ios-circle-filled text-component-1 reds"></i>');
         break;
       case "2":
         $("APIsStatus").replaceWith('<i class="ion ion-ios-circle-filled text-component-1 greens"></i>');
         break;
       }


   //determine status of each monitor
   monitorsData.forEach(function(monitor) {
       var statusText = '';
       switch (monitor.status) {
           case "0":
               statusText = '<small class="text-component-1 blues">Paused</small>';
               break;
           case "1":
               statusText = '<small class="text-component-1 yellows">Checking...</small>';
               break;
           case "2":
               statusText = '<small class="text-component-1 greens">Operational</small>';
               break;
           case "8":
               statusText = '<small class="text-component-1 reds">Not Operational</small>';
               operational = false;
               break;
           case "9":

               statusText = '<small class="text-component-1 reds">Not Operational</small>';
               operational = false;
               break;
           default:
               statusText = '<small class="text-component-1 reds">Not Operational</small>';
               operational = false;
               break;
       }
       //add monitor status to page
       html = '<li class="list-group-item sub-component"><a href="' + monitor.url + '" target="_blank" class="links">' + monitor.friendlyname + '</a><div class="pull-right">' + statusText + '</div></li>';
       switch (monitor.category) {
           case "Website":
               element = 'websiteCat';
               break;
           case "Exchanges":
               element = 'ExchangesCat';
               break;
           case "Wallets":
               element = 'WalletsCat';
               break;
           case "APIs":
               element = 'APIsCat';
               break;
       }
       $(element).append(html);
   });


   //build logs
   var today = new Date(),
       date = today.getDate(),
       month = "January,February,March,April,May,June,July,August,September,October,November,December"
       .split(",")[today.getMonth()];

   function nth(d) {
       if (d > 3 && d < 21) return 'th'; // thanks kennebec
       switch (d % 10) {
           case 1:
               return "st";
           case 2:
               return "nd";
           case 3:
               return "rd";
           default:
               return "th";
       }
   }
   var todaysDate = '<h4>' + date + nth(date) + " " + month + " " + today.getFullYear() + '</h4>';
   element = 'timeline';
   $(element).append(todaysDate);

   monitorsData.forEach(function(monitor) {
       monitor.todayLogs = [];
       monitor.oldLogs = [];
       monitor.log.forEach(function(log) {
           log.datetime = new Date(Date.parse(log.datetime));
           log.monitor = monitor.friendlyname;
           if (today.toDateString() === log.datetime.toDateString()) {
               eventsToday = true;
               todayLogs.push(log);
           } else {
               oldLogs.push(log);
           }
       });

   });

   todayLogs.sort(function(a, b) {
       return (b.datetime - a.datetime);
   });
   oldLogs.sort(function(a, b) {
       return (b.datetime - a.datetime);
   });



   element = 'timeline';
   var logHTML = '';
   if (todayLogs.length == 0) {
       //No logs today!
       logHTML = '<div class="timeline"> <div class="content-wrapper"> <div class="panel panel-message incident"> <div class="panel-body"> <p>No incidents reported</p> </div> </div> </div> </div>';
       $(element).append(logHTML);

   } else {

       //Logs today!
       todayLogs.forEach(function(log) {

           var logType = '';
           var iconType = '';
           var serviceText = '';
           switch (log.type) {
               case "1":
                   logType = 'Unavailable';
                   iconType = '<i class="icon ion-alert reds"></i>';
                   serviceText = '<div class="panel-body"> ' + getResult() + ' </div>';
                   break;
               case "2":
                   logType = 'Available';
                   iconType = '<i class="icon ion-checkmark greens"></i>';
                   break;
               case "99":
                   logType = 'Paused';
                   iconType = '<i class="icon ion-help blues"></i>';
                   break;
               case "98":
                   logType = 'Monitor Created';
                   iconType = '<i class="icon ion-plus-round greens"></i>';
                   break;
           }
           logHTML = '<div class="col-sm-1"> <div class="status-icon status-4" data-toggle="tooltip" title="Fixed" data-placement="left"> ' + ' </div> </div> <div class="col-xs-10 col-xs-offset-2 col-sm-11 col-sm-offset-0"> <div class="panel panel-message incident"> <div class="panel-heading"> <strong>' + iconType + "     " + log.monitor + ' ' + logType + '</strong> <br> <small class="date"> ' + formatTime(log.datetime) + ' </small> </div>  ' + serviceText + ' </div> </div>';
           $('timeline').append(logHTML);
       });
   }
   if (oldLogs.length == 0) {
       //No old logs!
   } else {
       var lastDate = new Date();
       oldLogs.forEach(function(log) {
           currentDate = new Date(log.datetime);
           if (lastDate.getDay() != currentDate.getDay()) {
               lastDate = new Date(log.datetime);
               var today = new Date(log.datetime),
                   date = today.getDate(),
                   month = "January,February,March,April,May,June,July,August,September,October,November,December"
                   .split(",")[today.getMonth()];

               function nth(d) {
                   if (d > 3 && d < 21) return 'th'; // thanks kennebec
                   switch (d % 10) {
                       case 1:
                           return "st";
                       case 2:
                           return "nd";
                       case 3:
                           return "rd";
                       default:
                           return "th";
                   }
               }
               var logDateHTML = '<h4>' + date + nth(date) + " " + month + " " + today.getFullYear() + '</h4>';
               $('timeline').append(logDateHTML);
           }
           var logType = '';
           var iconType = '';
           var serviceText = '';
           switch (log.type) {
               case "1":
                   logType = 'Unavailable';
                   iconType = '<i class="icon ion-alert reds"></i>';
                   serviceText = '<div class="panel-body"> ' + getResult() + ' </div>';
                   break;
               case "2":
                   logType = 'Available';
                   iconType = '<i class="icon ion-checkmark greens"></i>';
                   break;
               case "99":
                   logType = 'Paused';
                   iconType = '<i class="icon ion-help blues"></i>';
                   break;
               case "98":
                   logType = 'Monitor Created';
                   iconType = '<i class="icon ion-plus-round greens"></i>';
                   break;
           }
           logHTML = '<div class="col-sm-1"> <div class="status-icon status-4" data-toggle="tooltip" title="Fixed" data-placement="left"> ' + ' </div> </div> <div class="col-xs-10 col-xs-offset-2 col-sm-11 col-sm-offset-0"> <div class="panel panel-message incident"> <div class="panel-heading"> <strong>' + iconType + "     " + log.monitor + ' ' + logType + '</strong> <br> <small class="date"> ' + formatTime(log.datetime) + ' </small> </div>  ' + serviceText + ' </div> </div>';
           $('timeline').append(logHTML);

       });
   }
}


function formatTime(date_obj) {
   // formats a javascript Date object into a 12h AM/PM time string
   var hour = date_obj.getHours();
   var minute = date_obj.getMinutes();
   var amPM = (hour > 11) ? "PM" : "AM";
   if (hour > 12) {
       hour -= 12;
   } else if (hour == 0) {
       hour = "12";
   }
   if (minute < 10) {
       minute = "0" + minute;
   }
   return hour + ":" + minute + " " + amPM;
}

array1 = new Array("Temporary", "Intermittant", "Partial", "Redundant", "Total", "Multiplexed", "Inherent", "Duplicated",
   "Dual-homed", "Synchronous", "Bidirectional", "Serial", "Asynchronous", "Multiple", "Replicated",
   "Non-replicated", "Unregistered", "Non-specific", "Generic", "Migrated", "Localised", "Resignalled",
   "Dereferenced", "Nullified", "Aborted", "Serious", "Minor", "Major", "Extraneous", "Illegal",
   "Insufficient", "Viral", "Unsupported", "Outmoded", "Legacy", "Permanent", "Invalid", "Deprecated",
   "Virtual", "Unreportable", "Undetermined", "Undiagnosable", "Unfiltered", "Static", "Dynamic",
   "Delayed", "Immediate", "Nonfatal", "Fatal", "Non-valid", "Unvalidated", "Non-static",
   "Unreplicatable", "Non-serious", "Hot", "Cold", "Internal", "External", "Hidden");

array2 = new Array("temporary", "intermittant", "partial", "redundant", "total", "multiplexed", "inherent", "duplicated",
   "dual-homed", "synchronous", "bidirectional", "serial", "asynchronous", "multiple", "replicated",
   "non-replicated", "unregistered", "non-specific", "generic", "migrated", "localised", "resignalled",
   "dereferenced", "nullified", "aborted", "serious", "minor", "major", "extraneous", "illegal",
   "insufficient", "viral", "unsupported", "outmoded", "legacy", "permanent", "invalid", "deprecated",
   "virtual", "unreportable", "undetermined", "undiagnosable", "unfiltered", "static", "dynamic",
   "delayed", "immediate", "nonfatal", "fatal", "non-valid", "unvalidated", "non-static",
   "unreplicatable", "non-serious", "hot", "cold", "internal", "external", "hidden");

array3 = new Array("array", "systems", "hardware", "software", "firmware", "backplane", "logic-subsystem",
   "integrity", "subsystem", "memory", "comms", "integrity", "checksum", "protocol", "parity", "bus",
   "timing", "synchronisation", "topology", "transmission", "reception", "stack", "framing", "code", "backup",
   "programming", "peripheral", "environmental", "loading", "operation", "parameter", "syntax", "context",
   "initialisation", "execution", "resource", "encryption", "decryption", "file", "precondition", "raid",
   "authentication", "paging", "swapfile", "service", "gateway", "request", "proxy", "media", "CRC",
   "registry", "configuration", "codec", "metadata", "streaming", "retrieval", "installation", "library",
   "handler");

array4 = new Array("interruption", "destabilisation", "interlude", "destruction", "abnormality", "desynchronisation",
   "dereferencing", "overflow", "variance", "underflow", "nmi", "inconsistency", "interrupt", "corruption",
   "reclock", "rejection", "invalidation", "intrusion", "halt", "exhaustion", "infection", "incompatibility",
   "timeout", "obliteration", "expiry", "glitch", "unavailability", "bug", "condition", "crash", "dump", "crashdump",
   "problem", "lockout", "failure", "anomaly", "seizure", "override", "incongruity", "stackdump", "clash",
   "disturbance", "error", "feature", "problem", "warning", "signal", "flag", "irregularity", "abnormality");

var max1 = array1.length;
var max2 = array2.length;
var max3 = array3.length;
var max4 = array4.length;

function lukraak(l, h) {
   h -= 1
   var now = new Date()
   var rnd = 16520406 * (now.getTime() / ((now.getMinutes() + 1) * 1000))
   rnd = l + Math.floor(rnd % (h - l))
   return rnd
}

function getResult() {

   index1 = lukraak(0, max1);
   if (index1 < 0) {
       index1 = 0
   }
   if (index1 == array1.length) {
       index1 = array1.length - 1
   }

   index2 = index1
   do {
       index2 = lukraak(0, max2);
       if (index2 < 0) {
           index2 = 0
       }
       if (index2 == array2.length) {
           index2 = array2.length - 1
       }
   }
   while (index2 == index1)


   index3 = lukraak(0, max3);
   if (index3 < 0) {
       index3 = 0
   }
   if (index3 == array3.length) {
       index3 = array3.length - 1
   }

   index4 = lukraak(0, max4);
   if (index4 < 0) {
       index4 = 0
   }
   if (index4 == array4.length) {
       index4 = array4.length - 1
   }

   return (array1[index1] + ", " + array2[index2] + " " + array3[index3] + " " + array4[index4] + ".");
}

//get data from api and start
$(document).ready(function() {
   var url = "https://api.uptimerobot.com/getMonitors?apiKey=" + apiKey + "&customUptimeRatio=1-7-30-365&format=json&logs=1";
   $.ajax({
       url: url,
       context: document.body,
       dataType: 'jsonp'
   });
});
