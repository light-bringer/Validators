var validation=require("./validation.js")
console.log(validation.aadhar("1234 1223 1234"));
console.log(validation.pan("BPRPB4462A"));
console.log(validation.passport("A1234567"));
console.log(validation.aadhar("123A 1223 1234"));
console.log(validation.pan("BPRPB44627"));
console.log(validation.passport("A1234567A"));
