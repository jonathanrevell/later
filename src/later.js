/**
* Later.js
* (c) 2015 Bill, Levelstory, Inc.
* ES6 Update 2018; Jonathan Oaklyn
* Later is freely distributable under the MIT license.
* For all details and documentation:
*     http://bunkat.github.com/later
*/
import later from "./later-core.js";
import laterParse from "./parse/index.js";

later.parse     = laterParse;

export {later};
export default later;