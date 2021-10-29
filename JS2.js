//왜 const는 안됨?
// i+=50 자체가 i를 재할당 하기 때문에 const는 사용 안됨
let i = 50;
console.log('i = 50');
console.log('i += 5 : ',i+=5);
console.log('i -= 5 : ',i-=5);
console.log('i *= 5 : ',i*=5);
console.log('i /= 5 : ',i/=5);

//변수++ (후위), ++변수(전위) : 후위는 지나간 이후 계산, 전위는 도착전 계산
console.log();
let num = 10;
console.log('num = 10');
num++;
console.log('num++ : %d',num);
num--;
num--;
console.log('num-- x2 : %d',num);

console.log();
let alpha;
console.log('typeof : 999 : ',typeof(10));
console.log('typeof : apple : ',typeof('apple'));
console.log('typeof : false : ',typeof(false));
console.log('typeof : function : ',typeof(function () {}));
console.log('typeof : {} : ',typeof({}));
console.log('typeof : alpha : ',typeof(alpha));
console.log('Undefined는 변수는 선언했으나 초기화하지 않음');

console.log();
console.log('Number()는 숫자로 자료형 변환');
console.log('false -> : ',Number(false));
console.log('true -> : ',Number(true));
console.log('A -> : ',Number("A"));

let nan = Number("HI");
console.log('Boolean()는 문자열로 자료형 변환');
console.log('0, NaN, " ", null, Undefined 5개는 false변환');
console.log('0 -> : ',Boolean(0));
console.log('nan -> : ',Boolean(nan));
console.log('" " -> : ',Boolean(""));
console.log('null -> : ',Boolean(null));

console.log();
console.log('52 + 300 = ',52 + 300);
console.log("'52' + 300 =",'52' + 300);
console.log("52 + '300' = ",52 + '300');
console.log("'52' + '300' = ",'52' + '300');

console.log();
console.log(!0);
console.log(!!0);

console.log();
console.log('==	왼쪽 피연산자와 오른쪽 피연산자의 값이 같으면 참을 반환함.');
console.log('===	왼쪽 피연산자와 오른쪽 피연산자의 값이 같고, 같은 타입이면 참을 반환함.');
console.log('52 === "52"', 52==="52");
console.log('52 == "52"', 52=="52");
console.log();
console.log('0 === ""',0==="");
console.log('0 == ""',0=="");
