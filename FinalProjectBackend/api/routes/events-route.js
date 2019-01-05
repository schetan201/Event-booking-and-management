/**
 * Event endpoint route definitions.
 */

module.exports = function (app) {
    const eventsController = require('../controllers/events-controller');
    const jwtHelper = require('../config/jwtHelper');
    // Event Routes for search and create.
    app.route('/events')
        .get(jwtHelper.verifyJwtToken,eventsController.list)
        .post(eventsController.post);
// Event Routes for get, update and delete.
    app.route('/events/:eventId')
       .put(eventsController.put)
       .delete(eventsController.delete);

    app.route('/events/:userId')
    .get(eventsController.getList);   
};