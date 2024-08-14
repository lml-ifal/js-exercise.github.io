function maiorMenor() {
  let a = document.getElementsByName("e1n1")[0].value;
  let b = document.getElementsByName("e1n2")[0].value;
  let c = document.getElementsByName("e1n3")[0].value;
  let d = document.getElementsByName("e1n4")[0].value;
  let e = document.getElementsByName("e1n5")[0].value;

  let maior = Math.max(a, b, c, d, e);
  let menor = Math.min(a, b, c, d, e);

  document.getElementById(
    "res1"
  ).innerHTML = `O maior número é ${maior}, e o menor: ${menor}`;
}

function vogal(c) {
  c = document.getElementsByName("e2n1")[0].value;
  if (
    c == "a" ||
    c == "A" ||
    c == "e" ||
    c == "E" ||
    c == "i" ||
    c == "I" ||
    c == "o" ||
    c == "O" ||
    c == "u" ||
    c == "U"
  ) {
    document.getElementById("res2").innerHTML = 1;
    return;
  } else {
    document.getElementById("res2").innerHTML = 0;
    return;
  }
}

function limites() {
  let li = Number(document.getElementsByName("e3n1")[0].value);
  let ls = Number(document.getElementsByName("e3n2")[0].value);
  let sum = 0;
  let arr = [];
  for (let i = li + 1; i < ls; i++) {
    if (i % 2 === 0) {
      arr.push(i);
      sum += i;
    }
  }
  document.getElementById("res3").innerHTML = `Números: ${JSON.stringify(
    arr
  )}, somatório: ${sum}`;
}

function ordem() {
  let a = Number(document.getElementsByName("e4n1")[0].value);
  let b = Number(document.getElementsByName("e4n2")[0].value);
  let c = Number(document.getElementsByName("e4n3")[0].value);

  let orderArr = [a, b, c];
  orderArr.sort();

  document.getElementById(
    "res4"
  ).innerHTML = `Números em ordem: ${JSON.stringify(orderArr)}`;
}

function positivoNegativo() {
  let x = Number(document.getElementsByName("e5n1")[0].value);
  let test = x >= 0;
  document.getElementById("res5").innerHTML = test;
}

function parImpar() {
  let x = Number(document.getElementsByName("e6n1")[0].value);
  let test = x % 2 == 0;
  document.getElementById("res6").innerHTML = test;
}
