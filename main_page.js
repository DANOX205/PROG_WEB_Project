window.onload = function() {

	const scores = JSON.parse(localStorage.getItem('scores')) || [];
    const tbody = document.getElementById('scoreTableBody');
	tbody.innerHTML = '';

	scores.forEach((score, index) => {
		const row = `
		  <tr>
			<th scope="row">${index + 1}</th>
			<td>${score.pseudoj1}</td>
			<td>${score.pseudoj2}</td>
			<td>${score.time}</td>
		  </tr>
		`;
		tbody.innerHTML += row;
	});

};
//faire en sorte qu'à partir d'un certain nombre d'élément stocker, que cela se reset
//localStorage.removeItem('scores');
//localStorage.removeItem('scoreTableBody');

function Pseudo_ok(pseudo){
	if (pseudo){
		return true; //fonction à codé
	} else {
		return false;
	}
}

function StartGame(){ //fonction de redirection vers la page du jeux
	const Jpseudo1 = document.getElementById("idpseudo1").value;
	const Jpseudo2 = document.getElementById("idpseudo2").value;
	if (Pseudo_ok(Jpseudo1 && Jpseudo2)){
		localStorage.setItem('pseudo_perso1', Jpseudo1); //stockage du pseudo
		localStorage.setItem('pseudo_perso2', Jpseudo2); //stockage du pseudo
		window.location.href = "main_game.html" //redirection sur la page du jeux
	} else {
		alert("Veuillez entrer un pseudo correct pour continuer !");
	}
}
