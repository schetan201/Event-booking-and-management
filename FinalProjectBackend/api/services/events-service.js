/**
 * Service for Event operations.
 */

const mongoose = require('mongoose'),
    Event = mongoose.model('Events'); 
    //@author Naqiyah 
    //error utility function
    let throwError = function (error) {
        if (error) {
            throw Error(error);
        }
    };
 
    /**
 * Saves and returns the new event object.
 *
 * @param {Object} sticky {Event object}
 * @param {function} callback {Sucess callback function}
 */
    exports.save = function (event, callback) {
        let newEvent = new Event();
        console.log(),
        newEvent._id = event.eventId;
        newEvent.title = event.eventName;
        newEvent.details = event.eventDetails;
        newEvent.contact = event.eventContact;
        newEvent.address = event.eventVenue;
        newEvent.date = event.eventDate;
        newEvent.userId = event.userId;
          let  resultCallback = function (err, event) {
                throwError(err);
                callback(event);
        };
        newEvent.save(resultCallback);
    }; 
    
    //dhairyasheel
    /**
 * Returns an array of event object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 * @param {function} callback {Sucess callback function}
 */
    exports.search = function (params, callback) {
        let resultCallback = function (err, events) {
            throwError(err);
            callback(events);
        };
        Event.find(params, resultCallback);
    };

    //Sarthak
   /**
 * Deletes the event object matching the id.
 *
 * @param {string} eventId {Id of the event object}
 * @param {function} callback {Sucess callback function}
 */
    exports.delete = function (eventId, callback) {
        let resultCallback = function (err, event) {
            throwError(err);
            callback();
        };
        Event.deleteOne({
            _id: eventId
        }, resultCallback);
    };


    exports.getList = function (userId, callback) {
        let resultCallback = function (err, events) {
            throwError(err);
            callback(events);
        };
        
        Event.find({
            userId: userId
        }, resultCallback);
    };
    /**
 * Updates and returns the event object.
 *
 * @param {Object} sticky {event object}
 * @param {function} callback {Sucess callback function}
 */
exports.update = function (event, callback) {
    
    let newEvent = new Event();
    newEvent._id = event.eventId;
    newEvent.title = event.eventName;
        newEvent.details = event.eventDetails;
        newEvent.contact = event.eventContact;
        newEvent.address = event.eventVenue;
        newEvent.date = event.eventDate;
       // newEvent.eventId = event.eventId;
    let resultCallback = function (err, event) {
        throwError(err);
        callback(event);
    };
    //event.modified_date = new Date();
    Event.findOneAndUpdate({
        _id: event.eventId
    }, newEvent, {
        new: true
    }, resultCallback);
};
