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
				displayAllowance(allowance, 'newestAllowance');
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
				displayAllowance(allowance, 'singleAllowance');
			} else {
				console.log('Error making request ' + xhr.status);
				alert("This entry does not exist, please enter a valid id.");
			}
		}
	};
	xhr.send();
}

function displayAllowance(allowance, div) {
	// let allowanceDiv = document.getElementById('singleAllowance');
	let allowanceDiv = document.getElementById(div);
	allowanceDiv.textContent = '';

	let p = document.createElement('p');
	p.textContent = 'Result: ' + allowance.entry;
	allowanceDiv.appendChild(p);
	loadAllowances();
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
	let idDiv = document.getElementById('idDiv');
	let entryDiv = document.getElementById('entryDiv');
	entryDiv.textContent = '';
	idDiv.textContent = '';

	for (let allowance of allowances) {
		let pId = document.createElement('p');
		let pEntry = document.createElement('p');

		pId.textContent = allowance.id;
		pEntry.textContent = allowance.entry;

		idDiv.appendChild(pId);
		entryDiv.appendChild(pEntry);

		pEntry.addEventListener('click', function() {
			let singleIdDivLocation = document.getElementById('singleIdDiv');
			let singleEntryDivLocation = document.getElementById('singleEntryDiv');

			singleIdDivLocation.textContent = '';;
			singleEntryDivLocation.textContent = '';

			let pSingleId = document.createElement('p');
			let pSingleEntry = document.createElement('p');

			singleIdDivLocation.textContent = allowance.id;
			singleEntryDivLocation.textContent = allowance.entry;

			singleIdDivLocation.appendChild(pSingleId);
			singleEntryDivLocation.appendChild(pSingleEntry);

			// dynamically create update, delete buttons for single entry 

			let br = document.getElementById('br');
			let singleIdDivFormLocation = document.getElementById('singleIdFormDiv');
			let singleEntryDivFormLocation = document.getElementById('singleEntryFormDiv');

			// create the form, give it a name
			let form = document.createElement('form');
			form.name = 'updateForm';

			// create an input field
			let updateField = document.createElement('input');
			updateField.name = 'updateField'; // assign a name attribute
			updateField.type = 'number'; // assign a type attribute
			updateField.placeholder = 'Update current entry'; // assign a placeholder attribute

			// create a submit input
			let submit = document.createElement('input');
			submit.name = 'submit'; // assign a name attribute
			submit.type = 'submit'; // assign a type attribute
			submit.value = 'Update'; // assign a value attribute

			submit.addEventListener('click', function(e) { // Assign an event listener to the submit button variable
				e.preventDefault();
				// let form = e.target.parentElement.updateField; 

				let updatedAllowance = {
					id: allowance.id,
					entry: updateField.value
				};

				updateAllowance(updatedAllowance); 
			});

			// form.reset();
			
			// append the input to the form
			form.appendChild(updateField);

			// add the input to the form
			form.appendChild(submit);

			// add the form to the body
			singleEntryDivFormLocation.appendChild(form);
			// singleEntryDivFormLocation.appendChild(br);
		});
	}
}


function updateAllowance(allowance) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', `api/allowances/${allowance.id}`);
	console.log('ALLOWANCE ID: ' + allowance.id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let allowance = JSON.parse(xhr.responseText);
				console.log('UPDATED ALLOWANCE: ' + allowance.entry.value);
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(allowance));
}






















// 