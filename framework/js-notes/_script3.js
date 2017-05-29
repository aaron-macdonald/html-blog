
var count = 0;

function cc(card) {
  if (card < 7) {
    count++;
    if (count >0) {
      console.log (count + " Bet");
    } else {
        console.log (count, " Hold");
    }
  }
  else if (card <10) {
    count = count;
    if (count >0) {
        console.log (count, " Bet");
    } else {
        console.log (count, " Hold");
    }
  }
  else {
    count--;
    if (count >0) {
        console.log (count, " Bet");
    } else {
        console.log (count, " Hold");
    }
  }
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(4); cc(5); cc(6);
