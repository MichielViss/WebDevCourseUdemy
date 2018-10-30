var secretNumber 	= 4;
var sucess			= 0;
var count			= 0;

// you can convert your guess to a number value using Number(var) and then use === condtion function to really test if the guess is the same.

while(count <= 4 && sucess != 1){
	var guess = prompt("Guess a Number between 1 and 10?");
if(secretNumber == guess){
	alert("Well Done you guessed correctly");
	count = count + 1;
	sucess = 1;
}
else if(guess<secretNumber){
	alert("Oops that number is too small");
	count = count + 1;
}
else if(guess>secretNumber){
	alert("Oops that number is to big");
	count = count + 1;
}
}

// if you want to find the typeof an element you can use the function typeof (var) to determine how javascript sees the variable