// needs file ./findTimeDiff for the function findDifference

// the race functions takes in an array of objects with each having a name and time property,
// if racer didnt finish they have a time of "dnf",

// if no one finshed the race return no winner
// if only one winner return  === > (name of winner) won with no contest
// if multiple finishers return the winner and how much time difference they have with second place
// uses findDifference to calculate time difference between two runners time

const finddifference = require("./findTimeDiff");
function race(arr) {
  let winner;
  let smallesttime;
  let difference = [];
  let completed = 0;
  for (let i = 0; i < arr.length; i++) {
    let timeobj = arr[i].time;
    if (timeobj === "dnf") continue;
    completed++;
    timeobj = timeobj.split(":").map(t => {
      t = Number(t);
      return t;
    });
    if (!smallesttime) {
      smallesttime = timeobj;
      difference = [timeobj[0], timeobj[1], timeobj[2]];
    } else {
      if (finddifference(smallesttime, timeobj)) {
        difference = finddifference(smallesttime, timeobj);
      } else {
        continue;
      }
    }
    smallesttime = timeobj;
    winner = arr[i];
  }
  console.log(
    !winner
      ? "There is no winner"
      : completed === 1
      ? `${winner.name} won by no contest`
      : `${winner.name} won by ${difference[0]} hours, ${difference[1]} minutes, ${difference[2]} seconds`
  );
  return !winner
    ? "There is no winner"
    : completed === 1
    ? `${winner.name} won by no contest`
    : `${winner.name} won by ${difference[0]} hours, ${difference[1]} minutes, ${difference[2]} seconds`;
}
race([
  { name: "Samuel", time: "05:42:14" },
  { name: "Fred", time: "05:12:53" },
  { name: "Cynthia", time: "dnf" }
]);
