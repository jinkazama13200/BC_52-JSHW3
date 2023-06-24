let numArr = [];
let numArr9 = [];
function DomId(n) {
  return document.getElementById(n);
}

function callNum() {
  let n = +DomId("input-num").value;
  numArr.push(n);
  DomId("input-num").value = "";
  DomId("output-1").innerHTML = numArr;
}

function findTotal() {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  DomId("output-2").innerHTML = `Tổng số dương: ${sum}`;
}

function countPos() {
  let count = 0;
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] > 0 && count++;
  }
  console.log(numArr, count);
  DomId("output-3").innerHTML = `Số dương: ${count}`;
}

function findMin() {
  //số nhỏ nhất ban đầu
  let min = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < min) {
      min = numArr[i];
    }
  }
  DomId("output-4").innerHTML = `Số nhỏ nhất: ${min}`;
}

function findMinPos() {
  let min = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < min && numArr[i] >= 0) {
      min = numArr[i];
    }
  }
  DomId("output-5").innerHTML = `Số dương nhỏ nhất: ${min}`;
}
function lastEven() {
  // let last = numArr[0]

  // for (let i = 0; i < numArr.length; i++) {
  //  if (numArr[i] % 2 === 0) {
  //   last = numArr[i]
  //  }
  // }

  let last = numArr[numArr.length - 1];

  for (let i = numArr.length - 1; i >= 0; i--) {
    if (numArr[i] % 2 === 0) {
      last = numArr[i];
      break;
    }
  }

  DomId("output-6").innerHTML = `Số chắn cuối cùng: ${last}`;
}

function swapNum() {
  let tmp = 0;
  let output = "";
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      tmp = numArr[i];
      numArr[i] = numArr[j];
      numArr[j] = tmp;
    }

    output += numArr[i] + " ";
  }

  DomId("output-7").innerHTML = `đổi chỗ: ${output}`;
}

function fromMintoMax() {
  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr.length - 1 - i; j++) {
      if (numArr[j] > numArr[j + 1]) {
        [numArr[j], numArr[j + 1]] = [numArr[j + 1], numArr[j]];
      }
    }
  }

  // let output = "";
  // for (let i = 0; i < numArr.length; i++) {
  //   output += numArr[i] + ",";
  // }

  DomId("output-8").innerHTML = `sắp xếp tăng dần: ${numArr}`;
}

function firstPrimeNum() {
  let prime = numArr[0];
  let flag = false;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === 2 || (numArr[i] >= 2 && numArr[i] % 2 !== 0)) {
      prime = numArr[i];
      flag = true;
      break;
    }
  }
  if (flag) {
    DomId("output-9").innerHTML = `Số nguyên tố đầu tiên: ${prime}`;
  } else {
    DomId("output-9").innerHTML = `Không có số nguyên tố`;
  }
}

function callNum2() {
  let m = +DomId("input-num9").value;
  numArr9.push(m);
  DomId("input-num9").value = "";
  DomId("output-10").innerHTML = numArr9;
}

function countInteger() {
  let count = 0;
  for (let i = 0; i < numArr9.length; i++) {
    if (Number.isInteger(numArr9[i])) {
      count++;
    }
  }
  DomId("output-11").innerHTML = `Số nguyên: ${count}`;
}

function compareNum() {
  let countPositive = 0;
  let countNegative = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < 0) {
      countNegative++;
    } else {
      countPositive++;
    }
  }

  if (countPositive > countNegative) {
    DomId("output-12").innerHTML = "Số dương > Số âm";
  }

  if (countPositive < countNegative) {
    DomId("output-12").innerHTML = "Số dương < Số âm";
  }

  if (countPositive === countNegative) {
    DomId("output-12").innerHTML = "Số dương = Số âm";
  }
}
