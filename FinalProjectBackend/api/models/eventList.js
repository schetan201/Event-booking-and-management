'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for event object.
 */
let Event = new Schema({

    /**
     * Title of the event.
     */

    title: {
        type: String,
        required: 'title can\'t be empty'
    },
     /**
     * Event details.
     */
    details: {
        type: String,
        required: 'details can\'t be empty'
    },
     /**
     * Event contact.
     */
    contact: {
        type: Number,
        required: 'contact can\'t be empty'
    },
     /**
     * Event Address.
     */
    address: {
        type: String,
        required: 'address can\'t be empty'
    },
    /**
     * event created date.
     */
    date: {
        type: Date,
        required: 'date can\'t be empty'
    },
     /**
     * User Id creating the event.
     */
    userId: {
        type: String
    }
},
    {
        versionKey: false
    });

module.exports = mongoose.model('Events', Event);
//export default mongoose.model('Events',Event);