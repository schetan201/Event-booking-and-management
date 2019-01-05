module.exports = function (app) {
    const userController = require('../controllers/user.controller');
    const jwtHelper = require('../config/jwtHelper');
    require('../config/passportConfig');
    
    app.route('/users/register/')
        .post(userController.register);
    app.route('/users/authenticate')
        .post(userController.authenticate);
    app.route('/userProfile')
        .get(jwtHelper.verifyJwtToken, userController.userProfile);
};