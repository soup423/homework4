let score = 0;
do {
	++score;
	if (score % 3 === 0 && score % 5 === 0) {
		console.log('FizzBuzz')
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


let stroka = 'Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была речка.'
console.log(stroka.replaceAll(',', '.'));


let strokaImena = 'Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже';
console.log('На день рождения пришли:', strokaImena.slice(0, 5), ',', strokaImena.slice(7, 11), ',', strokaImena.slice(14, 18), ',', strokaImena.slice(52, 56))

