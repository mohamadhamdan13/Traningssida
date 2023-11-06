
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


$(function () {
  // Hantera klick på "Lägg till övning" för varje dag separat
  $(".add-exercise").on("click", function () {
      const $form = $(this).prev(".exercise-form");
      const exerciseCount = $form.find("input[type='text']").length + 1;

      const newExercise = '<label for="exercise' + exerciseCount + '">Övning ' + exerciseCount + ':</label>' +
          '<input type="text" name="exercise' + exerciseCount + '">' +
          '<label for="sets' + exerciseCount + '">Set:</label>' +
          '<input type="number" name="sets' + exerciseCount + '">' +
          '<label for="reps' + exerciseCount + '">Reps:</label>' +
          '<input type="number" name="reps' + exerciseCount + '">' +
          '<label for="rest' + exerciseCount + '">Vila (sekunder):</label>' +
          '<input type="number" name="rest' + exerciseCount + '">';

      $form.append(newExercise);
  });
});









