/**
* Later.js
* (c) 2015 Bill, Levelstory, Inc.
* ES6 Update 2018; Jonathan Oaklyn
* Later is freely distributable under the MIT license.
* For all details and documentation:
*     http://bunkat.github.com/later
*/
import later from "./base.js";

import "./compat/index.js";
import "./core/index.js";
import "./constraint/index.js";

import laterArray from "./array/index.js";
import laterModifier from "./modifier/index.js";
import laterDate from "./date/index.js";

later.array     = laterArray;
later.modifier  = laterModifier;
later.date      = laterDate;

export {later};
export default later;