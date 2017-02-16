
module.exports.pan=function(input) {
var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/

if(regpan.test(input)){
   if((typeof(input)==typeof("abc"))||(input!==""))
     console.log("Valid PAN no")
}
else {
    console.log("Enter valid PAN number")
        }
}

module.exports.passport=function(input) {
var regpan = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/

if(regpan.test(input)){
   if((typeof(input)==typeof("abc"))||(input!==""))
     console.log("Valid Passport no")
}
else {
    console.log("Enter valid Passport number")
        }
}

module.exports.aadhar=function(input) {
var regpan = /^\d{4}\s\d{4}\s\d{4}$/

if(regpan.test(input)){
   if((typeof(input)==typeof("abc"))||(input!==""))
     console.log("Valid Aadhar no")
}
else {
    console.log("Enter valid Aadhar number")
        }
}




