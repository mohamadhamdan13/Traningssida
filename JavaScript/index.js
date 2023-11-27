
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


//Lägg till övning

$(".add-exercise").on("click", function () {
  const $form = $(this).prev(".exercise-form");
  const exerciseCount = $form.find("input[type='text']").length + 1;
  const dayId = $form.parent().attr("id"); // Hämta dagen för övningen

  const newExercise = '<div class="exercise-container" id="exercise-' + dayId + '-' + exerciseCount + '" data-exercise="' + exerciseCount + '">' +
      '<label for="exercise' + exerciseCount + '">Övning ' + exerciseCount + ':</label>' +
      '<input type="text" name="exercise' + exerciseCount + '">' +
      '<label for="sets' + exerciseCount + '">Set:</label>' +
      '<input type="number" name="sets' + exerciseCount + '">' +
      '<label for="reps' + exerciseCount + '">Reps:</label>' +
      '<input type="number" name="reps' + exerciseCount + '">' +
      '<label for="rest' + exerciseCount + '">Vila (sekunder):</label>' +
      '<input type="number" name="rest' + exerciseCount + '">' +
      '<button class="remove-icon" data-day="' + dayId + '" data-exercise="' + exerciseCount + '">' +
      '<i class="fa-solid fa-eraser"></i>' +
      '</button>' +
      '</div>';

  $form.append(newExercise);
});





// Skapa en funktion för att spara data för en viss dag


function saveDataForDay(dayId) {
  var exercise1 = document.getElementById("exercise1-" + dayId).value;
  var sets1 = document.getElementById("sets1-" + dayId).value;
  var reps1 = document.getElementById("reps1-" + dayId).value;
  var rest1 = document.getElementById("rest1-" + dayId).value;

  var exerciseData = {
    exercise1: exercise1,
    sets1: sets1,
    reps1: reps1,
    rest1: rest1
  };

  var exerciseDataJSON = JSON.stringify(exerciseData);
  localStorage.setItem("exerciseData-" + dayId, exerciseDataJSON);

  alert("Dina övningsdata för " + dayId + " har sparats.");
}


document.getElementById("save-button-dag1").addEventListener("click", function() {
  saveDataForDay("dag1");
});;


document.getElementById("save-button-dag2").addEventListener("click", function() {
  saveDataForDay("dag2");
});

document.getElementById("save-button-dag3").addEventListener("click", function() {
  saveDataForDay("dag3");
});

document.getElementById("save-button-dag4").addEventListener("click", function() {
  saveDataForDay("dag4");
});

document.getElementById("save-button-dag5").addEventListener("click", function() {
  saveDataForDay("dag5");
});

document.getElementById("save-button-dag6").addEventListener("click", function() {
  saveDataForDay("dag6");
});

document.getElementById("save-button-dag7").addEventListener("click", function() {
  saveDataForDay("dag7");
});


// Lägg till lyssnare för "Ta bort övning"-ikonen för varje dag
$(document).on("click", ".remove-icon", function () {
  var dayId = $(this).attr("data-day");
  var exerciseNumber = $(this).attr("data-exercise");
  removeExercise(dayId, exerciseNumber);
});

function removeExercise(dayId, exerciseNumber) {
  var $container = $("#exercise-" + dayId + '-' + exerciseNumber);
  $container.remove();
}

