export class FizzBuzz {
	getResult(val : number) : any {
		if ((val % 5 ==0) && (val %3 == 0)) {
			return "FizzBuzz";
		} else if (val % 3 == 0) {
			return "Fizz";
		} else if (val % 5 == 0) {
			return "Buzz";
		}
		return val;
	}
}