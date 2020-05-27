/// <reference path="utility-functions.ts" />

let result = Utility.maxBooksAllowed(13);
console.log(result);

import util = Utility.Fees;
// Utility.Fees.calculateLateFee(2);
result = util.calculateLateFee(30);
console.log(result);
