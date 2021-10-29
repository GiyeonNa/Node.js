//변수 부분까지 정리
console.log('Hello World!');

console.log('4 + 2 = %d',4+2);// +
console.log('4 - 2 = %d',4-2);// -
console.log('4 / 2 = %d',4/2);// / 몫만 나옴
console.log('4 * 2 = %d',4*2);// * 곱하기
console.log('4 & 2 = %d',4%2);// 나머지 출력

console.log();
console.log('This is "String"');
console.log("This is 'String'");

console.log();
console.log('This is using \"escpae word\"');
console.log('use \\t \t word');
console.log('use \\n \n word');

console.log();
console.log("String" + "Merge");

console.log();
console.log("String Select");
console.log("Stinrg Select"[0]);
console.log("Stinrg Select"[7]);

console.log();
console.log('52 > 85',52>85);
console.log('52 < 85',58<85);
console.log('바나나 == 키위','바나나' == '키위');

console.log();
console.log(!false);
console.log(!true);
console.log('!(52 > 73)',!(52>73));

// var (변수 재선언 가능) , 변수 선언을 여러 번해도 에러없이 각기 다른 값이 출력될 수 있습니다.

// let (변수 재선언 불가능, 변수 재할당 가능)
//let a = 'test'
//let a = 'test2'  Uncaught SyntaxError: Identifier 'a' has already been declared
//a = 'test3'      가능

// const (변수 재선언 불가능, 변수 재할당 불가능)
//const b = 'test'
//const b = 'test2'  Uncaught SyntaxError: Identifier 'a' has already been declared
//b = 'test3'        Uncaught TypeError:Assignment to constant variable.

console.log();
let pi = 3.14159265;
let radius = 10;
console.log('둘레 : %d',(2 * pi * radius));
console.log('넓이 : %d',(pi * radius *radius));
