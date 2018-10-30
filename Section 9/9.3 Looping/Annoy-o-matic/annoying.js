var response = prompt("Are we there yet");
var count = 0;
// becareful here with OR operator, it doesnt work because no matter the answer provided, one of the conditions will fail and therefore the loop never becomes true and you are infinitely prompe for a response
// using the AND operator makes sense specifically when the negative results  
// console.log(response);
// while(response.indexOf("yes")){
// 	response = prompt("Are we there yet");
// }
// alert("Yay we finally made it");



// NBNBNB
// string.indexOf("X") = -1 -> when the "X" is not found in the string parsed. If "X" is in the string parsed, the result will return the position of "X" within the string
while(response.indexOf("yes") == -1 && response.indexOf("yeah") == -1){
	response = prompt("Are we there yet");
}
alert("Yay we finally made it");