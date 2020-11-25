var cityInput = document.getElementById('city');
var submitButton = document.getElementById('submit-button');
var cityUL = document.getElementById('city-list');
var clearCitiesButton = document.getElementById('clear-cities');
//get high scores in local storage or empty array if high scores doesn't exists in local storage
var cityList = JSON.parse(localStorage.getItem('citiesArr')) || [];

if (cityList.length > 0) {
	// loop through high score array and populate HTML
	cityList.forEach(function (item) {
		var li = `<li class="list-group-item text-center">
	                <b>${item}</b>
                </li>`;
		cityUL.insertAdjacentHTML('beforeend', li);
	});
}

function addToLocalStorage(item) {
	// add city to the array
	cityList.push(item);
	// stringify the array
	var cityArrToString = JSON.stringify(cityList);
	localStorage.setItem('citiesArr', cityArrToString);
}

function clearScores() {
	localStorage.removeItem('citiesArr');
}
// adds new scores
submitButton.addEventListener('click', function (e) {
	var newCity = cityInput.value;
	addToLocalStorage(newCity);
});
// clears all the scores
clearCitiesButton.addEventListener('click', clearScores);

// if(cityList.indexOf(newCity) === -1) {
//     addCity(newCity)
// }
