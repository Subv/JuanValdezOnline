var Users = require("./models/users");

module.exports = function(app) {
	app.post("/api/authenticate", function(req, res) {
		console.log("Auth request: ");
		console.log(req.body.username);
		console.log(req.body.password);

		var query = Users.where({ Username: req.body.username, Password: req.body.password });
		query.findOne(function(err, user) {
			if (err)
				res.send(err);
			
			if (user)
				res.json({ result: 1, user: user });
			else
				res.json({ result: 0, user: null });
		});
	});

	app.post("/api/register", function(req, res) {
		console.log("Register request: ");
		console.log(req.body);

		// Verificar que el usuario no exista
		var count = Users.where({ Username: req.body.username }).count(function(err, count) {
			if (err)
				res.send(err);

			if (count !== 0) {
				res.json({ result: 0, error: 'User already exists' });
				return;
			}

			var new_user = new Users({
				Username: req.body.username,
				Name: req.body.name,
				LastName: req.body.lastName,
				Password: req.body.password,
				Card: req.body.card
			});

			new_user.save(function(err) {
				if (err)
					res.send(err);
				res.json({ result: 1 });
			});
		});
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};