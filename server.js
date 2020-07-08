const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');

const PORT = ${PORT};

const app = express();

app.use(logger('dev'));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/budget', {
	useNewUrlParser: true,
	useFindAndModify: false,
});

// app.use(function indexDB(req, res) {
// 	get('transaction.name', 'transaction.value');
// });

// app.use('/public/serviceWorkers.js');

app.use('localStorage', function localStorageSet(key, val) {
	try {
		window.localStorage[key] = val;
	} catch (e) {}
});

// routes
app.use(require('./routes/api.js'));

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
