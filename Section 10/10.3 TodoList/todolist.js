
window.setTimeout(function() {
var input=prompt("Please type what you would like to form the options listed on the webpage");
var todo=[];
var i=0;
    
    
   
while(input!="quit"){
		
	if(input === "new"){
		inputNew = prompt("Add the text for you new Todo item");
		todo[i] = inputNew;
		i=i+1;
	}
		

	if(input==="list"){
		console.log("**********");
		todo.forEach(function(el,li){

			// the function arguments are strange on this one:
			// the first argument is the element value and the second one is the index of the element. 
			console.log	((li+1)+": " + el); //This is how we print the index and then the element for each element in the array along with the index at which it is saved
		});
		console.log("**********");
	}
	input=prompt("Please type what you would like to form the options listed on the webpage");
}

 }, 500);