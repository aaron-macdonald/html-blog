//
// var count = 0;
//
// function cc(card) {
//   if (card < 7) {
//     count++;
//     if (count >0) {
//       console.log (count + " Bet");
//     } else {
//         console.log (count, " Hold");
//     }
//   }
//   else if (card <10) {
//     count = count;
//     if (count >0) {
//         console.log (count, " Bet");
//     } else {
//         console.log (count, " Hold");
//     }
//   }
//   else {
//     count--;
//     if (count >0) {
//         console.log (count, " Bet");
//     } else {
//         console.log (count, " Hold");
//     }
//   }
// }
//
// // Add/remove calls to test your function.
// // Note: Only the last will display
// cc(2); cc(3); cc(4); cc(5); cc(6);

function addOne (n) {
  return n + 1
}

var n = 0

for (var i = 0; i < 10; i++) {
  n = addOne(n)
  console.log('The value of `n` is', n)
  document.write('The value of `n` is ', n, '<br>')
}
