
function convertToDate(timestamp) {
  var today = new Date(timestamp);
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  if (day < 10) {
      day = "0" + day
  }

  if (month < 10) {
      month = '0' + month;
  }

  today = month + "/" + day + "/" + year;
  return today;
}

export default convertToDate;