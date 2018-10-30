function printReverse(array){
	for(i=array.length-1; i >= 0; i=i-1){
		console.log(array[i]);		
	}
}

function isUniform(array){
	var text;
		for(i=0; i<array.length-1;i=i+1){
			if (array[i]==array[i+1]) {
				text = "TRUE";
			}else{
				text = "FALSE";
				i=array.length+1;
			}
		}
		console.log(text);
	}


function sumArray(array){
		var sum=0;
		for(i=0; i<array.length;i=i+1){
			sum =  sum + array[i];
	}
	console.log(sum);
}

function max(array){
	var max=array[0];
	for(i=0; i<=array.length;i++){
		if(array[i]>max){
			max = array[i];
		}
	}
	console.log(max);
}