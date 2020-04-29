// for(let i = 0; i < 20; i++) {
//   let i = 0;
//   console.log(i);
// }

var x  = 0;

function foo(params) {
  x = 2;

  // var o = {x: 1}

  // with(o) {
  //   var x = 3;
  // }

  // if (false) {
  //   var x = 1;
  // }

  console.log('inner', x);

}

foo();


console.log('outer', x)