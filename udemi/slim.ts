/** @format */

// const slim = 22;
// const Name = "ekow";
// const dname = "nana";
// const mah = "ygfu";
// let gname = `hbv`;
// let age = 15;

// let jj: number = 5;

// let namel: "completed" | "uncom" | "uty" = "uty";
// let git = null;
// console.log(null);

// let score;
// score = 92;
// if (score >= 90) {
// 	console.log(`wow u had ${score} well done`);
// } else {
// 	console.log(`you can do better`);
// }

// const stat: `pending` | `delivered` | `shipped` | `cannot be found` = `pending`;

// if (stat === `pending`) {
//   console.log('order pending');
// } else if (stat=== `delivered`) {
//   console.log(`order collected`);
// } else {
//   console.log(`lost at sea`);
// }

// const x: null | number = 5
// if (!x) {
//   console.log(`false`);
// } else {
//   console.log(`true`);
// }

// OR

const hasMoney = false;
const hasSkills = true;
const brightFuture = hasMoney || hasSkills;
console.log(brightFuture);

// &&

const hasCold = true;
const hasNoMoney = true;
const healthInsuranceGOPay = hasCold && hasNoMoney;
console.log(healthInsuranceGOPay);

const score = 100;
const hasPassed = score >= 60;
const hasFailed = score <= 59;
const hasBonus = (score >= 90 && hasPassed) || score === 100;
console.log(hasBonus);

function areaOfASquare(side: number): number {
	const area = side ** 2;
	return area;
}

const result = areaOfASquare(5);
console.log(result);

function circleArea(radius: number): number{
  const pi = 22 / 7
  const area = pi * (radius ** 2)
 return area 
}
const result2 = circleArea(22)
console.log(result2);