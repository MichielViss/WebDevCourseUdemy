var age = prompt("Please enter you age and I will reveal several secrets about it!");


if (age<0) {
	alert("Welcome time traveller!! You can't have a negative age you buffoon");
} 
else{
 if (age == 21) {
	console.log("Happy 21st Birthday, hope it is a good one, you get a free shot!");
}
if (age%2 != 0 ){
	console.log("Your age is an odd number you odd fool you!");
}
if ((Math.sqrt(age)%1) == 0 ) {
	console.log("Congrats your age is a perfect square");
}

}

