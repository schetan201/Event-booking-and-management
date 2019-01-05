module.exports = function (app) {
    //Initialize models
    let eventsModel = require('./models/eventList');
    let userModel = require('./models/userModel');
  
    //Initialize routes
    let eventsRoutes = require('./routes/events-route');
    eventsRoutes(app);
    let userRoutes = require('./routes/user.router');
    userRoutes(app);
    let emailRoutes = require('./routes/email-route');
    emailRoutes(app);
};