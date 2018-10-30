function isEven(x){
	if (isNaN(x)==false) {
		if (x%2==0) {
		return alert("Yes that number is even");
		}
		return alert("Nope sorry try again!");
	}else{
	return alert("Do please enter a number you idiot")
	}
}

var testNumber = prompt("Please enter a number for me to test if it is even or not:");
isEven(testNumber);

var fact;
var temp;
function factorial(num){
	temp = 1;
	for(i=2; i <= num ;i++){
		temp = temp*i;
	}
	return alert(temp);
}

var factTest = prompt("Give me a number to calculate the factorial");
factorial(factTest);

var kebab2snake;
function kebabToSnake(x){
	kebab2snake = x.replace(/-/g, "_");
	return alert(kebab2snake);
}

var test = prompt("Give me a kebab-string to convert to a Snake_stringssss");
kebabToSnake(test);