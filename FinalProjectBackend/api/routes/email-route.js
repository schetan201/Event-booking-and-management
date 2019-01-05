module.exports = function (app) {
    const emailController = require('../controllers/emailController');
    const jwtHelper = require('../config/jwtHelper');
app.route('/bookEvent')
        .post(jwtHelper.verifyJwtToken,emailController.post);
}