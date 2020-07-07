(function offline() {
	//Check to see if localStorage is supported
	if (window.localStorage) console.log('Local Storage Supported');
	else console.log('No support for Local Storage');

	//prompt user for username and age
	let Transaction = prompt('Enter name for transaction:', '');
	let amount = prompt('Enter Amount:', '');

	//add username and age to localstorage
	window.localStorage.setItem('transaction', Transaction);
	window.localStorage.setItem('amount', amount);

	//show number of objects stored
	console.log(window.localStorage.length);

	console.log(window.localStorage.getItem('transaction'));
	console.log(window.localStorage.getItem('amount'));
})();
