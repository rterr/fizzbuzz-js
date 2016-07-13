 for (var n=1; n<100; n++){
 	if (n % 15 == 0){
 		document.write('FizzBuzz');
 		document.write('<br>');
 	}

 	if (n % 3 == 0){
 		document.write('Fizz');
 		document.write('<br>');
 	}
 	else if (n % 5 == 0){
 		document.write('Buzz');
 		document.write('<br>');
 	}
 	else{
 		document.write(n);
 		document.write('<br>');
 	}
 }