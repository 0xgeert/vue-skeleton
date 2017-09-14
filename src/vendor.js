import jquery from "jquery";
window.$ = window.jQuery = jquery; //needed for bootstrap-sass

import "lodash";
import "bluebird";

// NOTE: uses require instead of import, because imports are hoisted to top and therefore loaded before
// window.$ = window.jQuery = jquery assign
require("bootstrap-sass");
