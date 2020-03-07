function URLify(str) {
  let url = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") url += "%20";
    else url += str[i];
  }
  return url;
}

function URLify(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str = str.splice(0, i) + "%20" + str.splice(i + 1, str.length);
    }
  }
  return str;
}
