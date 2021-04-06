let score = 0;
do {
	++score;
	if (score % 3 === 0 && score % 5 === 0) {
		console.log("FizzBuzz")
		continue;
	}
	if (score % 3 === 0) {
		console.log('Fizz')
		continue;
	}
	if (score % 5 === 0) {
		console.log('Buzz')
		continue;
	}


	console.log(score)
}
while (score < 100);

