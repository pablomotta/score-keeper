var userName = document.getElementById('user-name');
var score = document.getElementById('score');
var submitButton = document.getElementById('submit-button');
var highScoreUl = document.getElementById('high-score-list');
var clearScoreButton = document.getElementById('clear-scores');
//get high scores in local storage or empty array if high scores doesn't exists in local storage
var highScoreList = JSON.parse(localStorage.getItem('highScoreArr')) || [];

if (highScoreList.length > 0) {
	// store sorted and limited high score array in variable for looping
	var sortedHighScores = sortAndLimit(highScoreList);

	// loop through high score array and populate HTML
	// sortedHighScores.map(function (user) {
	// 	var li = `<li class="list-group-item d-flex justify-content-between align-items-center">
	//                 <b>${user.name}</b>
	//                 <span class="badge badge-primary badge-pill">
	//                     ${user.score}
	//                 </span>
	//                 </li>`;
	// 	highScoreUl.insertAdjacentHTML('beforeend', li);
	// });
	//[0,1,2,3,...]
	// for (let i = 0; i < sortedHighScores.length; i++) {
	// 	console.log(i);
	// 	var li = `<li class="list-group-item d-flex justify-content-between align-items-center">
	//                 <b>${sortedHighScores[i].name}</b>
	//                 <span class="badge badge-primary badge-pill">
	//                     ${sortedHighScores[i].score}
	//                 </span>
	//                 </li>`;
	// 	highScoreUl.insertAdjacentHTML('beforeend', li);
	// }
	sortedHighScores.forEach(function (user) {
		var li = `<li class="list-group-item d-flex justify-content-between align-items-center">
	                <b>${user.name}</b>
	                <span class="badge badge-primary badge-pill">
	                    ${user.score}
	                </span>
	                </li>`;
		highScoreUl.insertAdjacentHTML('beforeend', li);
	});
}

function addToLocalStorage(userName, userScore) {
	//construct user/score object.
	var userObj = {
		name: userName,
		score: userScore,
	};
	// add new score to array
	highScoreList.push(userObj);
	// stringify the <array></array>
	var highScoreListToString = JSON.stringify(highScoreList);
	localStorage.setItem('highScoreArr', highScoreListToString);
}

function sortAndLimit(array) {
	// sort array
	var sortedArray = array.sort(function (a, b) {
		return b.score - a.score;
	});
	// limit to 5 and return
	return sortedArray.slice(0, 5);
}

function clearScores() {
	localStorage.removeItem('highScoreArr');
}
// adds new scores
submitButton.addEventListener('click', function () {
	var name = userName.value;
	var newScore = score.value;
	addToLocalStorage(name, newScore);
});
// clears all the scores
clearScoreButton.addEventListener('click', clearScores);
