//1부터 50의 자연수 중 짝수를 구하는 함수

function number() {
  let evenNum = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      evenNum.push(i);
    }
  }
  return evenNum;
}
number();
