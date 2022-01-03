const { User } = require("../database/connectDB");

async function adminMiddleware(req, res, next) {

	if (req.session.userLogged) {
		let email = req.session.userLogged.email;

		try {
			const user = await User.findOne({
				where: {
					email: email
				}
			});
			if (user.access === 0) {
				return res.render('admin');
			}
		}
		catch (err) {
			throw new Error('Find user admmin: failed =>' + err.message);
		}
	}

	next(res.redirect('/404-not-found'));

}

module.exports = adminMiddleware;