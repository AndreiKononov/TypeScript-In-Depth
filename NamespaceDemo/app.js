/// <reference path="utility-functions.ts" />
var result = Utility.maxBooksAllowed(13);
console.log(result);
var util = Utility.Fees;
// Utility.Fees.calculateLateFee(2);
result = util.calculateLateFee(30);
console.log(result);
