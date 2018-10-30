var q1 = -10;
var q2 = 10;
var q3 = 300;
var q4 = 5;

console.log("Print all the numbers from -10 to 19");
for (var q1 = -10; q1<=19;q1++) {
	console.log(q1);
}

console.log("Print all even numbers from 10 to 40");
for (var q2 = 10; q2<=40;q2=q2+2) {
	console.log(q2);
}

console.log("Print all odd numbers from 300 to 333");
for(q3=300; q3<333; q3=q3+1){
	if(q3%2!=0){
		console.log(q3);
	}
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for(q4=5;q4<=50;q4=q4+1){
	if (q4%3==0 && q4%5==0) {
		console.log("Number "+ q4 + " is divisible by 3 and 5");
		q4=q4+1;
	}
}

// console.log("Print all odd numbers from 300 to 333");
// while(q3 <= 333){
// 	if (q3%2!= 0) {
// 	console.log(q3);
// 	q3 = q3 + 1;
// 	}
// 	q3 = q3 + 1;
// }

// while(q2 <= 40){
// 	console.log(q2);
// 	q2 = q2 + 2;
// }


// console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
// while(q4<50){
// 	if (q4%3==0 && q4%5!=0) {
// 		console.log("Number "+ q4 + " is divisible by 3");
// 		q4=q4+1;
// 	}
// 		if(q4%5==0){
// 			if(q4%3==0){
// 				console.log("Number "+ q4 + " is divisible by 3 and 5");
// 				q4=q4+1;
// 			}
// 		}		
// 		if(q4%5==0 && q4%5!=0){
// 			console.log("Number "+ q4 + " is divisible by 5");
// 			q4=q4+1;
// 		}
// 	q4=q4+1;
// }

