window.addEventListener('load', function(e) {
	console.log('details.js loaded');
	init();
});


function init() {
	getAllowance();
}



function getAllowance(allowanceId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/allowances/' + allowanceId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 && xhr.responseText) {
				let textAllowance = xhr.responseText;
				let allowance = JSON.parse(textAllowance);
				console.log(allowance.entry);
				displayAllowance(allowance);
			} else {
				console.log('Error making request ' + xhr.status);
			}
		}
	};
	
	xhr.send();
}

function displayAllowance(allowance) {
	let allowanceDiv = document.getElementById('idDiv');
	allowanceDiv.textContent = '';

	let p = document.createElement('p');
	p.textContent = 'Result: ' + allowance.entry;
	allowanceDiv.appendChild(p);
}