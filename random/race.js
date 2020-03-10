// the race functions takes in an array of objects with each having a name and time property,
// if racer didnt finish they have a time of "dnf",

// if no one finshed the race return no winner
// if only one winner return  === > (name of winner) won with no contest
// if multiple finishers return the winner and how much time difference they have with second place

function race(arr) {
  arr = arr.sort((a, b) => {
    if (a.time < b.time) return -1;
    if (a.time > b.time) return 1;
    return 0;
  });
  if (arr[0].time === "dnf") {
    return "No winners";
  }
  if (arr[1].time === "dnf") {
    return `${arr[1].name} won with no contest`;
  } else {
    first = arr[0].time.split(":");
    second = arr[1].time.split(":");
    let diff = findDiff(first, second);
    return `${arr[0].name} won by ${diff[0]} hours, ${diff[1]} mins, ${diff[2]} secs`;
  }
}
function findDiff(first, second) {
  let diff = [];
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      diff[i] = second[i] - first[i];
    } else if (first[i] < second[i]) {
      diff[i] = second[i] - first[i];
    } else {
      diff[i - 1]--;
      diff[i] = 60 - (first[i] - second[i]);
    }
  }
  return diff;
}

race([
  { name: "Samuel", time: "05:42:14" },
  { name: "Fred", time: "05:12:53" },
  { name: "Cynthia", time: "dnf" }
]);
