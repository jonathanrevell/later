/**
* Timezone
* (c) 2013 Bill, BunKat LLC.
*
* Configures helper functions to switch between useing local time and UTC. Later
* uses UTC time by default.
*
* Later is freely distributable under the MIT license.
* For all details and documentation:
*     http://github.com/bunkat/later
*/
import later from "../base.js";
import laterDate from "./date.js";

laterDate.timezone = function(useLocalTime) {

  // configure the date builder used to create new dates in the right timezone
  laterDate.build = useLocalTime ?
    function(Y, M, D, h, m, s) { return new Date(Y, M, D, h, m, s); } :
    function(Y, M, D, h, m, s) { return new Date(Date.UTC(Y, M, D, h, m, s)); };

  // configure the accessor methods
  var get = useLocalTime ? 'get' : 'getUTC',
      d = Date.prototype;

  laterDate.getYear = d[get + 'FullYear'];
  laterDate.getMonth = d[get + 'Month'];
  laterDate.getDate = d[get + 'Date'];
  laterDate.getDay = d[get + 'Day'];
  laterDate.getHour = d[get + 'Hours'];
  laterDate.getMin = d[get + 'Minutes'];
  laterDate.getSec = d[get + 'Seconds'];

  // set the isUTC flag
  laterDate.isUTC = !useLocalTime;
};

// friendly names for available timezones
laterDate.UTC = function() { laterDate.timezone(false); };
laterDate.localTime = function() { laterDate.timezone(true); };

// use UTC by default
laterDate.UTC();