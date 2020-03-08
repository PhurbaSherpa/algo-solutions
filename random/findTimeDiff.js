//TODO: REFACTOR

// find diff in time for time format of [hh,mm,secs]
// returns difference in time if second arg is smaller than first arg
// else it returns null

//finddifference([1, 29, 21], [0, 29, 21]); returns  [1,0,0]
// finddifference([1, 29, 21], [2, 29, 21]); return  null
module.exports = finddifference;

function finddifference(smallesttime, timeobj) {
  let diff = [];
  //if hours same
  if (timeobj[0] === smallesttime[0]) {
    diff[0] = 0;
    // if mins same
    if (timeobj[1] === smallesttime[1]) {
      diff[1] = 0;
      // if seconds smaller
      if (timeobj[2] < smallesttime[2]) {
        diff[2] = smallesttime[2] - timeobj[2];
      } else if (timeobj[2] === smallesttime[2]) {
        diff[2] = 0;
      }
    }
    // if mins smaller
    else if (timeobj[1] < smallesttime[1]) {
      diff[1] = smallesttime[1] - timeobj[1];
      //if seconds smaller
      if (timeobj[2] < smallesttime[2]) {
        diff[2] = smallesttime[2] - timeobj[2];
      } else if (timeobj[2] > smallesttime[2]) {
        // if seconds bigger
        diff[1]--;
        diff[2] = 60 - (timeobj[2] - smallesttime[2]);
      } else {
        diff[2] = 0;
      }
    }
  }
  // if hours smaller
  else if (timeobj[0] < smallesttime[0]) {
    diff[0] = smallesttime[0] - timeobj[0];
    //mins same
    if (timeobj[1] === smallesttime[1]) {
      diff[1] = 0;
      // if seconds smaller
      if (timeobj[2] < smallesttime[2]) {
        diff[2] = smallesttime[2] - timeobj[2];
      } else if (timeobj[2] === smallesttime[2]) {
        //if seconds the same
        diff[2] = 0;
      } else {
        diff[2] = 60 - (timeobj[2] - smallesttime[2]);
        if (diff[1] === 0) {
          diff[1] = 59;
          diff[0]--;
        } else {
          diff[1]--;
        }
      }
    }
    // if mins smaller
    else if (timeobj[1] < smallesttime[1]) {
      diff[1] = smallesttime[1] - timeobj[1];
      //if seconds smaller
      if (timeobj[2] < smallesttime[2]) {
        diff[2] = smallesttime[2] - timeobj[2];
      } else if (timeobj[2] > smallesttime[2]) {
        // if seconds bigger
        diff[2] = 60 - (timeobj[2] - smallesttime[2]);
        if (diff[1] === 0) {
          diff[1] = 59;
          diff[0]--;
        } else {
          diff[1]--;
        }
      } else {
        diff[2] = 0;
      }
    } else {
      diff[0]--;
      diff[1] = 60 - (timeobj[1] - smallesttime[1]);
      if (timeobj[2] < smallesttime[2]) {
        diff[2] = smallesttime[2] - timeobj[2];
      } else if (timeobj[2] > smallesttime[2]) {
        // if seconds bigger
        diff[2] = 60 - (timeobj[2] - smallesttime[2]);
        if (diff[1] === 0) {
          diff[1] = 59;
          diff[0]--;
        } else {
          diff[1]--;
        }
      } else {
        diff[2] = 0;
      }
    }
  }
  return diff.length === 3 ? diff : null;
}

// ***Tests***

// finddifference([1, 29, 21], [1, 29, 21]); /// [0,0,0]
// finddifference([1, 29, 21], [1, 29, 20]); /// [0,0,1]
// finddifference([1, 29, 21], [1, 29, 22]); /// null
// finddifference([1, 29, 21], [1, 30, 21]); /// null
// finddifference([1, 29, 21], [1, 30, 22]); /// null
// finddifference([1, 29, 21], [1, 30, 20]); /// null
// finddifference([1, 29, 21], [1, 28, 21]); /// [0,1,0]
// finddifference([1, 29, 21], [1, 28, 22]); /// [0,0,59]
// finddifference([1, 29, 21], [1, 28, 20]); /// [0,1,1]

// console.log("-------------------------");

// finddifference([1, 29, 21], [2, 29, 21]); /// null
// finddifference([1, 29, 21], [2, 29, 20]); /// null
// finddifference([1, 29, 21], [2, 29, 22]); /// null
// finddifference([1, 29, 21], [2, 30, 21]); /// null
// finddifference([1, 29, 21], [2, 30, 22]); /// null
// finddifference([1, 29, 21], [2, 30, 20]); /// null
// finddifference([1, 29, 21], [2, 28, 21]); /// null
// finddifference([1, 29, 21], [2, 28, 22]); /// null
// finddifference([1, 29, 21], [2, 28, 20]); /// null

// console.log("-------------------------");

// finddifference([1, 29, 21], [0, 29, 21]); /// [1,0,0]
// finddifference([1, 29, 21], [0, 29, 20]); /// [1,0,1]
// finddifference([1, 29, 21], [0, 29, 22]); /// [0,59,59]
// finddifference([1, 29, 21], [0, 30, 21]); /// [0,59,0]
// finddifference([1, 29, 21], [0, 30, 20]); /// [0,59,1]
// finddifference([1, 29, 21], [0, 30, 22]); /// [0,58,59]
// finddifference([1, 29, 21], [0, 28, 21]); /// [1,1,0]
// finddifference([1, 29, 21], [0, 28, 22]); /// [1,0,59]
// finddifference([1, 29, 21], [0, 28, 20]); /// [1,1,1]
