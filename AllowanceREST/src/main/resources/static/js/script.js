window.addEventListener('load', function(evt) {
	console.log('script.js loaded');
	init();
});

function init() {
	loadAllowances();

	document.allowanceFinderForm.lookupButton.addEventListener('click', function(event) {
		event.preventDefault();
		let allowanceId = document.allowanceFinderForm.allowanceId.value;
		if (!isNaN(allowanceId) && allowanceId > 0) {
			getAllowance(allowanceId);
		}
	});

	document.addAllowanceForm.submit.addEventListener('click', function(e) {
		e.preventDefault();

		let newEntry = addAllowanceForm.entry.value;

		let newAllowance = { entry: newEntry };
		console.log(newAllowance);
		sendNewAllowance(newAllowance);
	});
}

function sendNewAllowance(newAllowance) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/allowances');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let allowance = JSON.parse(xhr.responseText);
				console.log(allowance);
				displayAllowance(allowance);
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newAllowance));
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
	let allowanceDiv = document.getElementById('singleAllowance');
	allowanceDiv.textContent = '';

	let p = document.createElement('p');
	p.textContent = 'Result: ' + allowance.entry;
	allowanceDiv.appendChild(p);
}

function loadAllowances() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/allowances");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let allowances = JSON.parse(xhr.responseText);
				console.log(allowances);
				displayAllowances(allowances);
			} else {
				console.log('Error making request ' + xhr.status);
			}
		}
	};
	xhr.send();
}

function displayAllowances(allowances) {
	let allowancesDiv = document.getElementById('allowancesDiv');
	let idDiv = document.getElementById('idDiv');
	allowancesDiv.textContent = '';
	idDiv.textContent = '';

	for (let allowance of allowances) {
		let pId = document.createElement('p');
		let pEntry = document.createElement('p');

		pId.textContent = allowance.id;
		pEntry.textContent = allowance.entry;

		idDiv.appendChild(pId);
		allowancesDiv.appendChild(pEntry);

		pEntry.addEventListener('click', function(id) {
			
			window.location = 'details.html';
			
			let pId = document.createElement('p');
			let pEntry = document.createElement('p');

			pId.textContent = allowance.id;
			pEntry.textContent = allowance.entry;

			idDiv.appendChild(pId);
			allowancesDiv.appendChild(pEntry);

		});
	}
}

























// 