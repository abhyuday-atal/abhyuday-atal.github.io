
console.log('hello world!');
var a = 10;
console.log(a);
console.log(new Date());
for (var i = 0; i < 10; i++) {
  console.log(i);
}

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
for (var i = 1; i <= 7; i += 2) {
  var diff = (7 - i) / 2;
  var output = "";
  for (var j = 0; j <= diff; j++) {
    process.stdout.write(" ");
  }
  for (var j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
for (var i = 5; i >= 1; i -= 2) {
  var diff = (7 - i) / 2;
  var output = "";
  for (var j = 0; j <= diff; j++) {
    process.stdout.write(" ");
  }
  for (var j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
