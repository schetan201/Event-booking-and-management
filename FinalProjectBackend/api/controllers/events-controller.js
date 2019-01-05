const eventsService = require('../services/events-service');
//@author Naqiyah
/**
 * Creates a new event with the request JSON and
 * returns event JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    let newEvent = Object.assign({}, request.body),
        callback = function (event) {
        response.status(200);
        response.json(event);
    };
    console.log('In save controller');
    eventsService.save(newEvent, callback);
};

/**
 * Returns a event object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    let callback = function (event) {
        response.status(200);
        response.json(event);
    };
    eventsService.get(request.params.eventId, callback);
};

//Dhairyasheel
/**
 * Returns a list of events in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    let callback = function (events) {
        response.status(200);
        response.json(events);
    };
    eventsService.search({}, callback);
};

//Sarthak
/**
 * Deletes a event object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    let callback = function (event) {
        response.status(200);
        response.json({
            message: 'Event Successfully deleted'
        });
    };
    console.log(request.params.eventId);
    eventsService.delete(request.params.eventId, callback);
};

exports.getList = function (request, response) {
    let callback = function (event) {
        response.status(200);
        response.json(event);
    };
    eventsService.getList(request.params.userId, callback);
};

/**
 * Updates and returns an object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    let event = Object.assign({}, request.body),
        callback = function (event) {
        response.status(200);
        response.json({
            message: 'Event Successfully edited'
        });
    };
    eventsService.update(event, callback);
};