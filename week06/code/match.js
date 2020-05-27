function match(str) {
  let state = start;
  for (let c of str) {
    state = state(c);
  }

  return state === end;
}

function start(c) {
  if (c === 'a') {
    return foundA;
  }
  return start;
}

function end(c) {
  return end;
}

function foundA(c) {
  if (c === 'b') {
    return foundB;
  }
  return start;
}

function foundB(c) {
  if (c === 'c') {
    return foundC;
  }
  return start;
}

function foundC(c) {
  if (c === 'd') {
    return foundD;
  }
  return start;
}

function foundD(c) {
  if (c === 'e') {
    return foundE;
  }
  return start;
}

function foundE(c) {
  if (c === 'f') {
    return end;
  }
  return start;
}

console.log(match('abcdefg'));
