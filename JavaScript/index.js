function getCurrentWeekNumber() {
  var today = new Date();
  var startOfWeek = new Date(today.getFullYear(), 0, 1);
  var days = Math.floor((today - startOfWeek) / (24 * 60 * 60 * 1000));
  var currentWeekNumber = Math.ceil((days + startOfWeek.getDay() + 1) / 7);
  return currentWeekNumber;
}

// Uppdatera veckonumret i sidhuvudet
document.addEventListener("DOMContentLoaded", function () {
  var weekTitle = document.getElementById("week-title");
  if (weekTitle) {
      var currentWeek = getCurrentWeekNumber();
      weekTitle.textContent = "Vecka " + currentWeek;
  }
});