//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
lightBulbStatus === "On"
? (lightBulbStatus = "On") 
: lightBulbStatus === "Off"
? (lightBulbStatus = "Off")
: (lightBulbStatus = "Please choose the correct input (On/Off)");

console.log(lightBulbStatus);
//Start coding here